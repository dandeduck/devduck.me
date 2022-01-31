import gsap from 'gsap';
import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import GameDevelopmentContainer from './pages/GameDevelopmentContainer';
import './Work.css'
import { useEffect } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { renderToStaticMarkup } from 'react-dom/server'
import animateElement from '../general/Animation';

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
    const content = renderToStaticMarkup(<GameDevelopment/>);

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
    // camera.position.set(250, 100, 100);
    camera.position.set(0, 0, 8.5);

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 'grey' } );
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
        start: "bottom bottom",
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
    
    const object = createCSS3DObject(content);
    // scene.add(object);
    
    animateElement('.threeContainer', '.game-development', 
    {
      position: 'absolute',
      top: '100%'
    },
    {
      position: 'fixed',
      top: 0,
      onStart: () => {scene.add(object)},
      onReverseComplete: () => {scene.remove(object)}
    }, "bottom bottom", "bottom bottom");
  }, []);

  return (
    <div className='work'>
      <WorkIntro/>
      <div className='threeContainer'>
        <canvas id='webgl'></canvas>
        <div id='css3d'></div>
      </div>
      {/* <div className='dummy'></div> */}
      {/* <canvas id='webgl'></canvas> */}
      <GameDevelopmentContainer/>
      <div className='dummy'></div>
      <div className='dummy'></div>
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname === '/work' && document.documentElement.scrollTop - parseInt(sessionStorage.getItem('work-scrollPosition') ?? '0') < 100)
      sessionStorage.setItem('work-scrollPosition', document.documentElement.scrollTop.toString());
}

function createCSS3DObject(content: string) 
{
  const wrapper = document.createElement('div');
  wrapper.innerHTML = content;
  const div = wrapper.firstChild as HTMLElement;

  div.style.color = 'white';
  
  const object = new CSS3DObject(div);

  object.position.set(0, 0, 0);
  object.scale.set(0.01, 0.01, 0.01);

  return object;
}
