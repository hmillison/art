import {
  Scene,
  PerspectiveCamera,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  VideoTexture,
  BoxBufferGeometry,
  Color
} from 'three';

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

scene.add(videoCube).add(bgCube);

render(scene, camera, () => {
  videoCube.rotation.z += 0.01;
});
