import { SceneManager } from '../common';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

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
    const renderer = new WebGLRenderer();
    return renderer;
  }
}

const manager = new EverestManager({
  element: document.body,
  entities: []
});
