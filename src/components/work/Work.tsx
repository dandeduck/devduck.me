import WorkIntro from './pages/WorkIntro';
import GameDevelopment from './pages/GameDevelopment';
import './Work.css'
import { useEffect } from 'react';
import * as THREE from 'three';

export default function Work() {
  localStorage.getItem('work-scrollPosition') ?? localStorage.setItem('work-scrollPosition', '0');

  useEffect(() => {
    document.documentElement.scrollTop = parseInt(localStorage.getItem('work-scrollPosition') ?? '0');
    
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
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    animate();
  }, []);

  return (
    <div className='work'>
      <canvas className='three'></canvas>
      <WorkIntro/>
      <GameDevelopment/>
    </div>
  );
}

function onScroll(e: Event) {
  if (window.location.pathname === '/work' && document.documentElement.scrollTop - parseInt(localStorage.getItem('work-scrollPosition') ?? '0') < 100)
      localStorage.setItem('work-scrollPosition', document.documentElement.scrollTop.toString());
}
