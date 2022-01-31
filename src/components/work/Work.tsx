import gsap from 'gsap';
import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import './Work.css'
import { useEffect } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { renderToStaticMarkup } from 'react-dom/server'

export default function Work() {
  sessionStorage.getItem('work-scrollPosition') ?? sessionStorage.setItem('work-scrollPosition', '0');

  useEffect(() => {
    document.documentElement.scrollTop = parseInt(sessionStorage.getItem('work-scrollPosition') ?? '0');
    
    return () =>{
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  window.addEventListener('scroll', onScroll);

  useEffect(() => {
    const three = initThree();
    const camera = three.camera;
    const scene = three.scene;

    
    const gameDev = createCSS3DObject(<GameDevelopment/>);
    setThreeEnter('.game-development', scene, gameDev);
    zoomOutAnimation(camera, '.game-development');
    zoomBackInAnimation(camera);

    
  }, []);

  return (
    <div className='work'>
      <WorkIntro/>
      <GameDevelopment/>
      <section className='three'>
        <div className='threeContainer'>
          <canvas id='webgl'></canvas>
          <div id='css3d'></div>
        </div>
        <div className='dummy'></div>
        <div id='second-dummy' className='dummy'></div>
        <div id='first-section-ending' className='dummy'></div>
      </section>
      <div id='robotics' className='dummy'></div>
    </div>
  );
}

function initThree() {
  const css3DRenderer = new CSS3DRenderer({
    element: document.querySelector('#css3d') as HTMLElement
  });
  css3DRenderer.setSize(window.innerWidth, window.innerHeight);

  const webglRenderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#webgl') as HTMLElement,
    alpha: true,
  });
  webglRenderer.setSize(window.innerWidth, window.innerHeight);
  webglRenderer.setPixelRatio(window.devicePixelRatio);

  const camera = new THREE.PerspectiveCamera(50, 2, 1, 5000);
  camera.position.set(0, 0, 8.5);

  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial( { color: 0x0D1117 } );
  const cube = new THREE.Mesh( geometry, material );
  cube.scale.set(15, 8, 1)
  scene.add( cube );
  
  function animate() {
    webglRenderer.render(scene, camera);
    css3DRenderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  return {
    scene: scene,
    camera: camera
  };
}

function zoomOutAnimation(camera: THREE.Camera, trigger: string) {
  gsap.to(camera.position, {
    z: 12,
    scrollTrigger: {
      trigger: trigger,
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.to(camera.rotation, {
    y: 0.5,
    scrollTrigger: {
      trigger: trigger,
      start: "bottom center",
      end: "bottom top",
      scrub: true
    }
  });
  gsap.to(camera.position, {
    immediateRender: false,
    z: 15,
    scrollTrigger: {
      trigger: '#second-dummy',
      start: "top bottom",
      end: "bottom bottom",
      scrub: true
    }
  });
}

function zoomBackInAnimation(camera: THREE.Camera) {
  gsap.to(camera.position, {
    immediateRender: false,
    z: 8.5,
    scrollTrigger: {
      trigger: '#first-section-ending',
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    }
  });

  gsap.to(camera.rotation, {
    immediateRender: false,
    y: 0,
    scrollTrigger: {
      trigger: '#first-section-ending',
      start: "top bottom",
      end: "bottom bottom",
      scrub: true
    }
  });

  gsap.fromTo('.threeContainer', 
  {
    immediateRender: false,
    top: 0
  },
  {
    position: 'absolute',
    top: 'calc(100% - 100vh)',
    scrollTrigger: {
      trigger: '#first-section-ending',
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: true
    }
  });
}

function onScroll(e: Event) {
  if (window.location.pathname === '/work' && document.documentElement.scrollTop - parseInt(sessionStorage.getItem('work-scrollPosition') ?? '0') < 100)
      sessionStorage.setItem('work-scrollPosition', document.documentElement.scrollTop.toString());
}

function setThreeEnter(elementQuery: string, scene: THREE.Scene, object: CSS3DObject) {
  gsap.fromTo('.threeContainer', 
  {
    position: 'absolute',
    top: 0
  },
  {
    position: 'fixed',
    visibility: 'visible',
    top: 0,
    onStart: () => {scene.add(object)},
    onReverseComplete: () => {scene.remove(object)},
    scrollTrigger: {
      trigger: elementQuery,
      start: 'top top',
      end: 'top top',
      scrub: true
    }
  })
}

function createCSS3DObject(element: JSX.Element) {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderToStaticMarkup(element);;

  const html = wrapper.firstChild as HTMLElement;

  html.style.color = 'white';
  
  const object = new CSS3DObject(html);
  object.scale.set(0.01, 0.01, 0.01);

  return object;
}
