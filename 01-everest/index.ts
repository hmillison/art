import { SceneManager } from '../common';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import sky from './entities/sky';
import everest from './entities/everest';
import foregroundMountains from './entities/foregroundMountains';

class EverestManager extends SceneManager {
  createCamera() {
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1;

    return camera;
  }

  createScene() {
    const scene = new Scene();
    return scene;
  }

  createRenderer() {
    const renderer = new WebGLRenderer({ alpha: true });
    return renderer;
  }
}

const manager = new EverestManager({
  element: document.getElementById('canvas'),
  entities: [sky, everest, foregroundMountains]
});

window.addEventListener('resize', () => manager.onResize());

manager.render();
