import { Clock } from "three";

export abstract class SceneManager {
    private clock = new Clock();
    private scene = this.createScene();
    private renderer = this.createRenderer();
    private camera = this.createCamera();
  //   private element: HTMLElement;
    private components: SceneComponent[] = [];
  
    constructor({ element, components }) {
      this.components = components.map((component) => {
        const componentInstance = new component(this.scene);
        componentInstance.create(this.scene);
        return componentInstance;
      });
      element.appendChild(this.renderer.domElement)
    }
    
    private abstract createRenderer(): Renderer;
    private abstract createCamera(): Camera; 
    private abstract createScene(): Scene;
    
    public onResize() {
      // resize scene to fit window
    }
    
    public render() {
      requestAnimationFrame(render);
      components.forEach((component) => {
        component.update(this.clock.getElapsedTime());
      });
      this.renderer.render(this.scene, this.camera);
    }