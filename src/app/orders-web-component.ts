import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { OrdersBootstrapComponent } from './orders-bootstrap.component';

(async () => {
  const app = await createApplication({
    providers: []
  });

  const ordersElement = createCustomElement(OrdersBootstrapComponent, {
    injector: app.injector
  });

  customElements.define('orders-mfe-root', ordersElement);
})();
