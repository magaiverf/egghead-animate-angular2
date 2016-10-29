import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({'transform':'translateY(-100%)'})),
      state('go', style({'background-color':'green', 'height': '100px'})),
      state('stop', style({'background-color':'red', 'height': '50px'})),
      transition('void <=> *', animate(5000, keyframes([
        style([{'transform':'scale(0)'}]),
        style([{'transform':'scale(.9)'}]),
        style([{'transform':'scale(.1)'}]),
        style([{'transform':'scale(.9)'}]),
        style([{'transform':'scale(.5)'}]),
        style([{'transform':'scale(1)'}]),
      ]))),
      transition('* => *', animate(500))      
    ])
  ]
})
export class AppComponent {
  title = 'Animation with Angular 2!';
  signal; // it isn't undefined, it is void state.
  isHere = false;

  onGoClick() {
    this.signal = 'go';
  }

  onStopClick() {
    this.signal = 'stop';
  }

  onToogleClick() {
    this.isHere = !this.isHere;
  }
}
