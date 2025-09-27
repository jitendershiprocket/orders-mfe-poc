import { Component } from '@angular/core';
import { Orders } from './orders/orders';

@Component({
  selector: 'orders-bootstrap',
  standalone: true,
  imports: [Orders],
  template: `
    <div class="orders-bootstrap">
      <h2>📦 Orders Management</h2>
      <p>Simple Orders Micro Frontend POC</p>
      <app-orders></app-orders>
    </div>
  `,
  styles: [`
    .orders-bootstrap {
      padding: 20px;
      
      h2 {
        color: #2c3e50;
        margin-bottom: 10px;
      }
      
      p {
        color: #7f8c8d;
        margin-bottom: 20px;
      }
    }
  `]
})
export class OrdersBootstrapComponent {}
