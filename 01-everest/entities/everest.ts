import { SceneEntity } from '../../common';
import {
  Mesh,
  MeshBasicMaterial,
  VideoTexture,
  Scene,
  BoxBufferGeometry,
  Color,
  TextureLoader,
  Texture,
  LinearFilter
} from 'three';
import mteverest from '../assets/mt-everest.png';
console.log(mteverest);
export default function everest(scene: Scene): SceneEntity {
  const mtTexture = new TextureLoader().load(mteverest);
  mtTexture.minFilter = LinearFilter;
  const everestObject = new Mesh(
    new BoxBufferGeometry(5, 1, 1),
    new MeshBasicMaterial({
      // color: '#1e90ff',
      map: mtTexture,
      transparent: true,
      opacity: 1
    })
  );

  scene.add(everestObject);

  return {
    update() {
      everestObject.position.x += 0.001;
      if (everestObject.position.x > 2.0) {
        everestObject.position.x = -2;
      }
    }
  };
}
