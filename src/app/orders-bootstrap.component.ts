import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'orders-bootstrap',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dash">
      <div class="topbar">
        <div class="left-block">
          <div class="left">
            <h1>Dashboard</h1>
            <div class="scope">
              <span>{{ selectedScope }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
          <nav class="tabs">
            <a *ngFor="let t of tabs" [class.active]="t==='Overview'">{{ t }}</a>
          </nav>
        </div>
      </div>

      <div class="banner">
        <div class="content">
          <div class="logo">Checkout</div>
          <div class="headline">Increase Conversion By 60% With An Easy, Fast & Secure Checkout</div>
        </div>
        <button class="cta">Get Started</button>
      </div>

      <div class="grid">
        <div class="card soft-purple">
          <div class="card-header">
            <div class="icon">🧾</div>
            <div class="title">Today's Orders</div>
          </div>
          <div class="metric">{{ stats.todaysOrders }}</div>
          <div class="sub">Yesterday {{ stats.yesterdayOrders }}</div>
        </div>

        <div class="card soft-purple wide">
          <div class="title">Shipments Details</div>
          <div class="pill-grid">
            <div class="pill"><div class="num">{{ stats.totalShipments }}</div><div class="cap">Total Shipments</div></div>
            <div class="pill"><div class="num">{{ stats.pickupPending }}</div><div class="cap">Pickup Pending</div></div>
            <div class="pill"><div class="num">{{ stats.inTransit }}</div><div class="cap">In-Transit</div></div>
            <div class="pill"><div class="num">{{ stats.delivered }}</div><div class="cap">Delivered</div></div>
            <div class="pill"><div class="num">{{ stats.ndrPending }}</div><div class="cap">NDR Pending</div></div>
            <div class="pill"><div class="num">{{ stats.rto }}</div><div class="cap">RTO</div></div>
          </div>
        </div>

        <div class="card soft-green">
          <div class="card-header">
            <div class="icon">💰</div>
            <div class="title">Today's Revenue</div>
          </div>
          <div class="metric">₹{{ stats.todaysRevenue }}</div>
          <div class="sub">Yesterday ₹{{ stats.yesterdayRevenue }}</div>
        </div>

        <div class="card soft-white wide">
          <div class="title">NDR Details</div>
          <div class="pill-grid">
            <div class="pill"><div class="num">{{ stats.totalNdr }}</div><div class="cap">Total NDR</div></div>
            <div class="pill"><div class="num">{{ stats.yourReattempt }}</div><div class="cap">Your Reattempt Request</div></div>
            <div class="pill"><div class="num">{{ stats.buyerReattempt }}</div><div class="cap">Buyer Reattempt Request</div></div>
            <div class="pill"><div class="num">{{ stats.ndrDelivered }}</div><div class="cap">NDR Delivered</div></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; margin-left: 80px; }
    .dash { padding: 0; background: #ffffff; color: #111827; width: 100%; }

    .topbar { border-bottom: 1px solid #e5e7eb; padding: 16px 24px; }
    .left-block { display: flex; flex-direction: column; gap: 8px; }
    .left { display: flex; align-items: center; gap: 16px; }
    h1 { font-size: 24px; margin: 0; font-weight: 700; }
    .scope { display: flex; align-items: center; gap: 6px; border: 1px solid #e5e7eb; padding: 6px 10px; border-radius: 8px; color: #374151; background: #fff; }

    .tabs { display: flex; gap: 24px; }
    .tabs a { display: inline-block; padding: 12px 8px; color: #6b7280; text-decoration: none; border-bottom: 2px solid transparent; font-weight: 600; }
    .tabs a.active { color: #6d28d9; border-color: #6d28d9; }

    .banner { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 16px 0; padding: 16px 24px; border: 1px solid #e9d5ff; border-radius: 12px; background: linear-gradient(90deg,#faf5ff,#eef2ff); }
    .banner .content { display: flex; align-items: center; gap: 16px; }
    .banner .logo { background: #eef2ff; color: #6d28d9; font-weight: 700; padding: 8px 12px; border-radius: 8px; }
    .banner .headline { color: #4c1d95; font-weight: 600; }
    .banner .cta { background: #7c3aed; color: #fff; border: none; padding: 10px 16px; border-radius: 10px; cursor: pointer; }

    .grid { display: grid; grid-template-columns: 1fr 2fr; gap: 16px; padding: 0 24px 24px; }
    .grid .wide { grid-column: span 1; }
    @media (min-width: 900px) { .grid .wide { grid-column: span 1; } }

    .card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; background: #fff; }
    .soft-purple { background: #ede9fe; border-color: #ddd6fe; }
    .soft-green { background: #e8f5e9; border-color: #c8e6c9; }
    .soft-white { background: #ffffff; }

    .card-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .card .title { font-weight: 700; color: #374151; }
    .metric { font-size: 28px; font-weight: 800; margin: 4px 0; }
    .sub { color: #6b7280; font-size: 12px; }

    .pill-grid { display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap: 12px; margin-top: 12px; }
    .pill { background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 14px; text-align: center; }
    .soft-purple .pill { background: #f5f3ff; border-color: #e9d5ff; }
    .num { font-weight: 800; font-size: 20px; color: #111827; }
    .cap { color: #6b7280; font-size: 12px; margin-top: 4px; }

    @media (max-width: 900px) {
      .grid { grid-template-columns: 1fr; }
      .pill-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
    }
  `]
})
export class OrdersBootstrapComponent {
  selectedScope = 'Domestic';
  tabs = ['Overview','Orders','Shipments','NDR','WhatsApp Comm','RTO','Courier','Delays'];

  stats = {
    todaysOrders: 0,
    yesterdayOrders: 0,
    totalShipments: 3,
    pickupPending: 0,
    inTransit: 0,
    delivered: 0,
    ndrPending: 0,
    rto: 0,
    todaysRevenue: 0,
    yesterdayRevenue: 0,
    totalNdr: 0,
    yourReattempt: 0,
    buyerReattempt: 0,
    ndrDelivered: 0
  };
}
