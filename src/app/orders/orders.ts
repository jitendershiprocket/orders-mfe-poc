import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class Orders {
  orders = [
    { id: 'ORD-001', customer: 'John Doe', amount: 299.99, status: 'Shipped' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: 149.50, status: 'Delivered' },
    { id: 'ORD-003', customer: 'Bob Johnson', amount: 599.00, status: 'Pending' }
  ];
}
