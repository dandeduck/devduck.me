import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three';
import  {animateScroll as scroll, scroller} from 'react-scroll';
import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import FullstackWeb from './pages/FullstackWeb';
import Robotics from './pages/Robotics';
import { useEffect } from 'react';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { renderToStaticMarkup } from 'react-dom/server';
import './Work.css';

const ids = ['start', 'game', 'web', 'robotics'];

export default function Work() {
  useEffect(() => {
    scroll.scrollToTop();

    return () => {document.documentElement.scrollTop = 0}
  }, []);
  
  useEffect(() => {
    const three = initThree();
    const camera = three.camera;
    const scene = three.scene;

    const gameDev = createCSS3DObject(<GameDevelopment/>);
    makeAnchorLinksWork(gameDev);
    
    enterThree('#game', scene, gameDev);
    firstSectionAnimation(camera);
    
    const webDev = createCSS3DObject(<FullstackWeb/>);
    makeAnchorLinksWork(webDev);
    enterThree('#web', scene, webDev, gameDev);
    secondSectionAnimation(camera);

    const robotics = createCSS3DObject(<Robotics/>);
    makeAnchorLinksWork(robotics);
    enterThree('#robotics', scene, robotics, webDev);
    thirdSectionAnimation(camera);
  }, []);

  return (
    <div className='work'>
      <WorkIntro/>
      <GameDevelopment/>
      <section>
        <div className='threeContainer'>
          <canvas id='webgl'></canvas>
          <div id='css3d'></div>
        </div>
        <div className='dummy'></div>
        <div id='second-dummy' className='dummy'></div>
        <div id='first-section-ending' className='dummy'></div>
      </section>
      <FullstackWeb/>
      <section>
        <div className='dummy'></div>
        <div id='second-section-ending' className='dummy'></div>
      </section>
      <Robotics/>
      <section>
        <div className='dummy'></div>
        <div id='third-section-ending' className='dummy'></div>
      </section>
    </div>
  );
}

function makeAnchorLinksWork(object: CSS3DObject) {
  const links = object.element.querySelectorAll('.location-teller a');

  for (let i = 0; i < links.length; i++) {
    const element = links[i] as HTMLElement;
    element.addEventListener('click', event => onClick(event, ids[i]));
  }
}

function initThree() {
  const css3DRenderer = new CSS3DRenderer({
    element: document.querySelector('#css3d') as HTMLElement
  });
  css3DRenderer.setSize(window.innerWidth, window.innerHeight);

  const webglRenderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#webgl') as HTMLElement,
    alpha: true
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

function firstSectionAnimation(camera: THREE.Camera) {
  firstZoomOutAnimation(camera);
  firstZoomBackInAnimation(camera);
}

function secondSectionAnimation(camera: THREE.Camera) {
  secondZoomOutAnimation(camera);
  secondZoomBackInAnimation(camera);
}

function thirdSectionAnimation(camera: THREE.Camera) {
  thirdZoomOutAnimation(camera);
  thirdZoomBackInAnimation(camera);
}

function thirdZoomOutAnimation(camera: THREE.Camera) {
  gsap.to(camera.position, {
    z: 12,
    scrollTrigger: {
      trigger: '#robotics',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.to(camera.rotation, {
    y: -0.25,
    scrollTrigger: {
      trigger: '#robotics',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
}

function thirdZoomBackInAnimation(camera: THREE.Camera) {
  gsap.to(camera.position, {
    immediateRender: false,
    z: 8.5,
    scrollTrigger: {
      trigger: '#third-section-ending',
      start: "top bottom",
      end: "top top",
      scrub: true
    }
    });
  
  gsap.to(camera.rotation, {
    immediateRender: false,
    y: 0,
    scrollTrigger: {
      trigger: '#third-section-ending',
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  });

  gsap.fromTo('.threeContainer',
  {
    position: 'fixed',
    top: 0
  },
  {
    position: 'absolute',
    top: 'calc(100% + 200vh)',
    scrollTrigger: {
      trigger: '#third-section-ending',
      start: "top top",
      end: "top top",
      scrub: true
    }
  });
}

function secondZoomOutAnimation(camera: THREE.Camera) {
  gsap.to(camera.position, {
    z: 12,
    scrollTrigger: {
      trigger: '#web',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.to(camera.rotation, {
    y: -0.25,
    scrollTrigger: {
      trigger: '#web',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
}

function secondZoomBackInAnimation(camera: THREE.Camera) {
  gsap.to(camera.position, {
    immediateRender: false,
    z: 8.5,
    scrollTrigger: {
      trigger: '#second-section-ending',
      start: "top bottom",
      end: "top top",
      scrub: true
    }
    });
  
  gsap.to(camera.rotation, {
    immediateRender: false,
    y: 0,
    scrollTrigger: {
      trigger: '#second-section-ending',
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  });

  gsap.fromTo('.threeContainer',
  {
    position: 'fixed',
    top: 0
  },
  {
    position: 'absolute',
    top: 'calc(100% + 200vh)',
    scrollTrigger: {
      trigger: '#second-section-ending',
      start: "top top",
      end: "top top",
      scrub: true
    }
  });
}

function firstZoomOutAnimation(camera: THREE.Camera) {
  gsap.to(camera.position, {
    z: 12,
    scrollTrigger: {
      trigger: '#game',
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.to(camera.rotation, {
    y: 0.5,
    scrollTrigger: {
      trigger: '#game',
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

function firstZoomBackInAnimation(camera: THREE.Camera) {
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
    position: 'fixed',
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

function enterThree(elementQuery: string, scene: THREE.Scene, object: CSS3DObject, prevObject?: CSS3DObject) {
  gsap.fromTo('.threeContainer',
  {
    position: 'absolute',
  },
  {
    visibility: 'visible',
    position: 'fixed',
    top: 0,
    onStart: () => {
      if (prevObject)
        scene.remove(prevObject);
      scene.add(object);
    },
    onReverseComplete: () => {
      scene.remove(object)
      if (prevObject)
        scene.add(prevObject);
    },
    scrollTrigger: {
      trigger: elementQuery,
      start: 'top top',
      end: 'top top',
      scrub: true
    }
  })
}

function onClick(e: Event, id: string) {
  e.preventDefault();
  scroller.scrollTo(id, {smooth: true});
}

function createCSS3DObject(element: JSX.Element) {
  const defaultHeight = 796;
  const currentHeight = window.innerHeight;
  const scale = 0.01 * (defaultHeight/currentHeight);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderToStaticMarkup(element);;

  const html = wrapper.firstChild as HTMLElement;

  html.style.color = 'white';
  
  const object = new CSS3DObject(html);
  object.scale.set(scale, scale, 1);

  return object;
}
