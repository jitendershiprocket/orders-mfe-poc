import { Component, signal } from '@angular/core';
import { Orders } from './orders/orders';

@Component({
  selector: 'app-root',
  imports: [Orders],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Orders Micro Frontend');
}
