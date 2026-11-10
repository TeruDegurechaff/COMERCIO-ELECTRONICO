import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container product-detail-page">
      <div class="product-gallery">
        <div class="main-img">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60" alt="Producto">
        </div>
      </div>

      <div class="product-info-col">
        <span class="origin-tag"><i class="fa-solid fa-globe"></i> Origen: Japón | Almacén Central Tokio</span>
        <h1>Ultrabook Pro 16" Global Edition (32GB RAM, 1TB SSD)</h1>
        
        <div class="rating-row">
          <div class="stars">
            <i class="fa-solid fa-star" *ngFor="let s of [1,2,3,4,5]"></i>
          </div>
          <span>4.9 (342 reseñas internacionales)</span>
        </div>

        <div class="price-box">
          <span class="current-price">$1,299.00 USD</span>
          <span class="tax-note">Impuestos aduaneros e importación calculados en el checkout. Sin cargos ocultos.</span>
        </div>

        <div class="shipping-estimate-box">
          <i class="fa-solid fa-truck-fast"></i>
          <div>
            <strong>Envío Internacional Express</strong>
            <p>Entrega estimada entre 3 y 5 días hábiles vía DHL Express Global Logistics.</p>
          </div>
        </div>

        <div class="quantity-cart">
          <div class="qty-selector">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button class="btn btn-primary btn-lg" routerLink="/cart">
            <i class="fa-solid fa-cart-shopping"></i> Añadir al Carrito
          </button>
        </div>

        <div class="global-guarantees">
          <div class="g-item">
            <i class="fa-solid fa-shield-halved"></i>
            <div>
              <strong>Garantía Global 2 Años</strong>
              <p>Soporte técnico internacional y reparaciones oficiales.</p>
            </div>
          </div>
          <div class="g-item">
            <i class="fa-solid fa-rotate-left"></i>
            <div>
              <strong>Devolución Gratuita en 30 días</strong>
              <p>Proceso aduanero de retorno cubierto por GlobalStore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-detail-page { display: grid; grid-template-columns: 1fr 1.2fr; gap: 3rem; margin: 3rem auto 5rem auto; background: #fff; padding: 2.5rem; border-radius: 16px; border: 1px solid #e2e8f0; }
    .product-gallery .main-img { width: 100%; height: 450px; background: #f1f5f9; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: center; }
    .product-gallery .main-img img { width: 100%; height: 100%; object-fit: cover; }

    .origin-tag { display: inline-block; background: #eff6ff; color: #2563eb; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .product-info-col h1 { font-size: 2rem; color: #0f172a; margin-bottom: 1rem; line-height: 1.3; }
    .rating-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
    .stars { color: #f59e0b; font-size: 0.9rem; }
    .rating-row span { color: #64748b; font-size: 0.9rem; font-weight: 500; }

    .price-box { background: #f8fafc; padding: 1.25rem; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 1.5rem; }
    .current-price { font-size: 2rem; font-weight: 700; color: #0f172a; display: block; margin-bottom: 0.25rem; }
    .tax-note { font-size: 0.85rem; color: #64748b; }

    .shipping-estimate-box { display: flex; gap: 1rem; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; color: #166534; }
    .shipping-estimate-box i { font-size: 1.5rem; }
    .shipping-estimate-box strong { display: block; margin-bottom: 0.2rem; }
    .shipping-estimate-box p { font-size: 0.85rem; color: #15803d; }

    .quantity-cart { display: flex; gap: 1rem; margin-bottom: 2rem; }
    .qty-selector { display: flex; align-items: center; border: 1px solid #cbd5e1; border-radius: 8px; overflow: hidden; background: #fff; }
    .qty-selector button { padding: 0 1rem; font-size: 1.2rem; background: #f8fafc; color: #0f172a; transition: background 0.2s; }
    .qty-selector button:hover { background: #e2e8f0; }
    .qty-selector span { padding: 0 1rem; font-weight: 600; }
    .btn-lg { padding: 0.85rem 2rem; font-size: 1rem; flex: 1; justify-content: center; }
    .btn { background: #2563eb; color: #fff; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; }

    .global-guarantees { display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid #e2e8f0; padding-top: 1.5rem; }
    .g-item { display: flex; gap: 1rem; align-items: flex-start; }
    .g-item i { font-size: 1.25rem; color: #2563eb; margin-top: 2px; }
    .g-item strong { display: block; font-size: 0.95rem; color: #0f172a; }
    .g-item p { font-size: 0.85rem; color: #64748b; }
  `]
})
export class ProductDetailComponent {}
