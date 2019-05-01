import { SceneEntity } from '../../common';
import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  VideoTexture,
  Scene
} from 'three';

export default function sky(scene: Scene): SceneEntity {
  const forestVideo = document.getElementById(
    'backgroundVideo'
  ) as HTMLVideoElement;
  const skyShape = new Mesh(
    new BoxGeometry(3, 1, 1),
    new MeshBasicMaterial({
      map: new VideoTexture(forestVideo),
      transparent: true,
      opacity: 0.2
    })
  );

  scene.add(skyShape);

  return {
    update() {}
  };
}
