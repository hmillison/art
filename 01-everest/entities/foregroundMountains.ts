import { SceneEntity } from '../../common';
import { Scene } from 'three';
import mountain from '../components/mountain';

export default function foregroundMountains(scene: Scene): SceneEntity {
  const everestObject = mountain({ height: 1.4 });
  everestObject.material.setValues({ color: '#eeeeee' });
  scene.add(everestObject);
  everestObject.position.x = 3;

  return {
    update() {
      everestObject.position.x += 0.0011;
      if (everestObject.position.x > 4) {
        everestObject.position.x = 0;
      }
    }
  };
}
