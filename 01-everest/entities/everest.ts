import { SceneEntity } from '../../common';
import {
  Mesh,
  MeshBasicMaterial,
  VideoTexture,
  Scene,
  BoxBufferGeometry,
  Color
} from 'three';

function sky(scene: Scene): SceneEntity {
  const video = document.getElementById('video') as HTMLVideoElement;
  const videoCube = new Mesh(
    new BoxBufferGeometry(2, 1, 1),
    new MeshBasicMaterial({
      color: '#1e90ff',
      map: new VideoTexture(video),
      transparent: true,
      opacity: 0.5
    })
  );

  document.body.addEventListener('mousemove', ({ screenX, screenY }) => {
    const multiplier = Math.min(screenY / screenX, screenX / screenY);
    const blue = (255 * multiplier).toFixed(0);
    (videoCube.material as any).setValues({
      color: new Color(`rgb(255, ${blue}, 0)`)
    });
  });

  scene.add(videoCube);

  return {
    update() {}
  };
}
