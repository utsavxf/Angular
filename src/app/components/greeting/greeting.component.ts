import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone:true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  //this input tells angular that this component can receive something from the outside
  @Input()
  message=Input('Default:Hello hello!'); 
}
