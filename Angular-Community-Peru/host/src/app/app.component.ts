import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AwesomeService} from 'awesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  #awesomeService = inject(AwesomeService);
  message = this.#awesomeService.sharedMessage;

  updateMessage():void{
    this.#awesomeService.sharedMessage.set('Nuevo valor 👌');
  }
}
