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
    
    gsap.to(camera.position, {
      z: 12,
      scrollTrigger: {
        trigger: '.game-development',
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
    
    gsap.to(camera.rotation, {
      y: 0.5,
      scrollTrigger: {
        trigger: '.game-development',
        start: "bottom center",
        end: "bottom top",
        scrub: true
      }
    });

    const gameDev = createCSS3DObject(<GameDevelopment/>);
    enterThree('.game-development', scene, gameDev);
    // exitThree('#robotics', scene, gameDev);

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
  }, []);

  return (
    <div className='work'>
      <WorkIntro/>
      <section className='first'>
        <div className='threeContainer'>
          <canvas id='webgl'></canvas>
          <div id='css3d'></div>
        </div>
        <GameDevelopment/>
        <div className='dummy'></div>
        <div id='second-dummy' className='dummy'></div>
        <div id='first-section-ending' className='dummy'></div>
      </section>
      <div id='robotics' className='dummy'></div>
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname === '/work' && document.documentElement.scrollTop - parseInt(sessionStorage.getItem('work-scrollPosition') ?? '0') < 100)
      sessionStorage.setItem('work-scrollPosition', document.documentElement.scrollTop.toString());
}

function enterThree(elementQuery: string, scene: THREE.Scene, object: CSS3DObject) {
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

function exitThree(endQuery: string, scene: THREE.Scene, object: CSS3DObject) {
  gsap.to('.threeContainer', 
  {
    position: 'absolute',
    top: '100%',
    onStart: () => {scene.remove(object)},
    onReverseComplete: () => {scene.add(object)},
    scrollTrigger: {
      trigger: endQuery,
      start: 'top top',
      end: 'top top'
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
