import { Component,ViewChild,ViewChildren, AfterViewInit,ElementRef, QueryList  } from '@angular/core';
import { HelloComponent } from './hello.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

@ViewChild(HelloComponent,{static : false})
hello : HelloComponent;

@ViewChild('pTag', {static:false})
pTagElement : ElementRef;

@ViewChildren(HelloComponent)
helloElements : QueryList<HelloComponent>

  ngAfterViewInit() {
    console.log('Hello ', this.hello.name); 
    console.log(this.pTagElement.nativeElement.innerHTML = "Changed in ngAfterViewInit");

    this.helloElements.forEach(hello => {
      console.log(hello.name);
    })
  }
}
