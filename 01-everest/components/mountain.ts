import {
  TextureLoader,
  LinearFilter,
  Mesh,
  BoxBufferGeometry,
  MeshBasicMaterial
} from 'three';
import mteverest from '../assets/mt-everest.png';

export default function mountain({ height = 1 } = {}) {
  const mtTexture = new TextureLoader().load(mteverest);
  mtTexture.minFilter = LinearFilter;
  return new Mesh(
    new BoxBufferGeometry(5, height, 1),
    new MeshBasicMaterial({
      map: mtTexture,
      transparent: true,
      opacity: 1
    })
  );
}
