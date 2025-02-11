import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone:true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  
  counterValue=signal(5);
  increment(){
    this.counterValue.set(this.counterValue()+1); //remember signal is a function so countervalue should also be used like a function and not a variable(method)
  }

  decrement(){
    this.counterValue.set(this.counterValue()-1);
  }

  reset(){
    this.counterValue.set(0);
  }
}
