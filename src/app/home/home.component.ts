import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[]
})
export class HomeComponent {
  homeMessage=signal('Hello,world! from home')

  keyUpHandler(event:KeyboardEvent){
    console.log(`user pressed the ${event.key} key`)
  }

}
