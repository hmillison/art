import { SceneEntity } from '../../common';
import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  VideoTexture,
  Scene
} from 'three';

export default function sky(scene: Scene): SceneEntity {
  const forestVideo = document.getElementById('forestVid') as HTMLVideoElement;
  const skyShape = new Mesh(
    new BoxGeometry(2, 1, 1),
    new MeshBasicMaterial({
      color: '#1e90ff',
      map: new VideoTexture(forestVideo)
    })
  );

  scene.add(skyShape);

  return {
    update() {}
  };
}
