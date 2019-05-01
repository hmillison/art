import { SceneEntity } from '../../common';
import { Scene } from 'three';
import mountain from '../components/mountain';

export default function everest(scene: Scene): SceneEntity {
  const everestObject = mountain();
  scene.add(everestObject);

  return {
    update() {
      everestObject.position.x += 0.001;
      // TODO: refine infinite loop
      if (everestObject.position.x > 1.9) {
        everestObject.position.x = 0;
      }
    }
  };
}
