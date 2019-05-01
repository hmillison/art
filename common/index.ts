import { Clock, Renderer, Camera, Scene } from 'three';

export interface SceneEntity {
  update(t: number): void;
}

export abstract class SceneManager {
  private clock = new Clock();
  private scene = this.createScene();
  private renderer = this.createRenderer();
  private camera = this.createCamera();
  private entities: SceneEntity[] = [];

  constructor({
    element,
    entities
  }: {
    element: HTMLElement;
    entities: any[];
  }) {
    this.entities = entities.map(entity => entity(this.scene));
    element.appendChild(this.renderer.domElement);
    this.onResize();
    this.render();
  }

  public abstract createRenderer(): Renderer;
  public abstract createCamera(): Camera;
  public abstract createScene(): Scene;

  public onResize() {
    // resize scene to fit window
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public render() {
    requestAnimationFrame(() => this.render());
    this.entities.forEach(entity => {
      entity.update(this.clock.getElapsedTime());
    });
    this.renderer.render(this.scene, this.camera);
  }
}
