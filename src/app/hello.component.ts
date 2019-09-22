import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <input type="button" value="Child to Prent Event" (click)="childMethod()"/>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  /**
   * Parent component (App) to child component(HelloComponent)
   */
  @Input() name: string;

  @Output()
  outputEvent  = new EventEmitter();

  childMethod(){
    this.outputEvent.emit(this.name);
  }

}
