import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container cart-page">
      <h2><i class="fa-solid fa-cart-shopping"></i> Carrito de Compras Internacional</h2>

      <div class="cart-layout">
        <div class="cart-items-list">
          <div class="cart-item" *ngFor="let item of cartItems">
            <div class="item-img"><img [src]="item.image" [alt]="item.name"></div>
            <div class="item-details">
              <h4>{{item.name}}</h4>
              <span class="origin"><i class="fa-solid fa-globe"></i> Origen: {{item.origin}}</span>
              <span class="shipping-status">Gestión de aduanas incluida</span>
            </div>
            <div class="item-qty">
              <button>-</button>
              <span>{{item.qty}}</span>
              <button>+</button>
            </div>
            <div class="item-price">
              <strong>\${{item.price * item.qty}} USD</strong>
            </div>
            <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <div class="cart-summary">
          <h3>Resumen del Pedido Global</h3>
          <div class="summary-row">
            <span>Subtotal Productos</span>
            <span>$1,648.00 USD</span>
          </div>
          <div class="summary-row">
            <span>Envío Internacional Express</span>
            <span>$45.00 USD</span>
          </div>
          <div class="summary-row">
            <span>Estimado de Aranceles e Impuestos</span>
            <span>$165.00 USD</span>
          </div>
          <div class="summary-total">
            <span>Total Final</span>
            <span>$1,858.00 USD</span>
          </div>
          <a routerLink="/checkout" class="btn btn-primary btn-block">Proceder al Checkout Seguro <i class="fa-solid fa-lock"></i></a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cart-page { margin: 2rem auto 5rem auto; }
    .cart-page h2 { font-size: 1.75rem; color: #0f172a; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem; }
    .cart-layout { display: grid; grid-template-columns: 1fr 380px; gap: 2rem; }
    .cart-items-list { display: flex; flex-direction: column; gap: 1rem; }
    .cart-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.25rem; display: flex; align-items: center; gap: 1.5rem; }
    .item-img { width: 80px; height: 80px; background: #f1f5f9; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
    .item-img img { width: 100%; height: 100%; object-fit: cover; }
    .item-details { flex: 1; }
    .item-details h4 { font-size: 1rem; color: #0f172a; margin-bottom: 0.25rem; }
    .origin { font-size: 0.8rem; color: #64748b; display: block; margin-bottom: 0.2rem; }
    .shipping-status { font-size: 0.75rem; color: #16a34a; font-weight: 500; }
    .item-qty { display: flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 6px; overflow: hidden; }
    .item-qty button { padding: 0.25rem 0.75rem; background: #f8fafc; font-weight: 600; }
    .item-qty span { padding: 0 0.75rem; font-size: 0.9rem; font-weight: 600; }
    .item-price { font-size: 1.1rem; color: #0f172a; min-width: 100px; text-align: right; }
    .remove-btn { color: #94a3b8; font-size: 1.1rem; transition: color 0.2s; padding: 0.5rem; }
    .remove-btn:hover { color: #ef4444; }

    .cart-summary { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; height: fit-content; }
    .cart-summary h3 { font-size: 1.2rem; color: #0f172a; margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; }
    .summary-row { display: flex; justify-content: space-between; font-size: 0.95rem; color: #475569; margin-bottom: 1rem; }
    .summary-total { display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 700; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 1rem; margin-bottom: 1.5rem; }
    .btn { background: #2563eb; color: #fff; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.85rem; }
    .btn-block { width: 100%; }
  `]
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'Ultrabook Pro 16" Global Edition', price: 1299.00, qty: 1, origin: 'Japón', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Auriculares Inalámbricos Cancelación Activa', price: 199.00, qty: 2, origin: 'Corea del Sur', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' }
  ];
}
