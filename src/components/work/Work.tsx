import gsap from 'gsap';
import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import './Work.css'
import { useEffect } from 'react';
import * as THREE from 'three';

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
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({
      canvas:  document.querySelector(".three") as HTMLCanvasElement
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio(window.devicePixelRatio)
    const geometry = new THREE.BoxGeometry( 13, 7, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x0D1117 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    };

    animate();

    gsap.to(camera.position, {
      z: 8,
      scrollTrigger: {
        trigger: document.querySelector('#gamedev'),
        start: "top bottom",
        end: "bottom bottom",
        scrub: true
      }
    });

  }, []);

  return (
    <div className='work'>
      <canvas className='three'></canvas>
      <WorkIntro/>
      <GameDevelopment/>
      <div id='gamedev' className='dummy'></div>
      <div className='dummy'></div>
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname === '/work' && document.documentElement.scrollTop - parseInt(sessionStorage.getItem('work-scrollPosition') ?? '0') < 100)
      sessionStorage.setItem('work-scrollPosition', document.documentElement.scrollTop.toString());
}
