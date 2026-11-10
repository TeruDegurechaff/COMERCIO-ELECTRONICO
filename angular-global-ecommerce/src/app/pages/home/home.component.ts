import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Banner Internacional -->
    <section class="hero">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="tag"><i class="fa-solid fa-plane"></i> Envío Global Express</span>
          <h1>Comercio Sin Fronteras: Del Mundo a Tu Hogar</h1>
          <p>Accede a millones de productos internacionales con aranceles calculados en el checkout, garantía de devolución global y seguimiento en tiempo real.</p>
          <div class="hero-btns">
            <a routerLink="/catalog" class="btn btn-primary">Explorar Catálogo <i class="fa-solid fa-arrow-right"></i></a>
            <a routerLink="/catalog" class="btn btn-outline">Ver Ofertas Flash</a>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-card">
            <i class="fa-solid fa-earth-americas"></i>
            <div>
              <h3>180+</h3>
              <p>Países con cobertura</p>
            </div>
          </div>
          <div class="stat-card">
            <i class="fa-solid fa-box-open"></i>
            <div>
              <h3>5M+</h3>
              <p>Productos globales</p>
            </div>
          </div>
          <div class="stat-card">
            <i class="fa-solid fa-shield-check"></i>
            <div>
              <h3>100%</h3>
              <p>Aduanas Gestionadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Categories Grid -->
    <section class="container section">
      <h2 class="section-title">Categorías Destacadas Globales</h2>
      <div class="categories-grid">
        <a routerLink="/catalog" class="cat-card">
          <div class="cat-icon"><i class="fa-solid fa-laptop-code"></i></div>
          <h3>Tecnología Global</h3>
          <p>Smartphones, Laptops y Gadgets</p>
        </a>
        <a routerLink="/catalog" class="cat-card">
          <div class="cat-icon"><i class="fa-solid fa-shirt"></i></div>
          <h3>Moda Internacional</h3>
          <p>Tendencias de Milán, París y NY</p>
        </a>
        <a routerLink="/catalog" class="cat-card">
          <div class="cat-icon"><i class="fa-solid fa-house-chimney"></i></div>
          <h3>Hogar Inteligente</h3>
          <p>Innovación y Confort</p>
        </a>
        <a routerLink="/catalog" class="cat-card">
          <div class="cat-icon"><i class="fa-solid fa-person-hiking"></i></div>
          <h3>Deportes & Aventura</h3>
          <p>Equipamiento Pro</p>
        </a>
      </div>
    </section>

    <!-- Trending Products -->
    <section class="container section">
      <div class="section-header">
        <h2 class="section-title">Tendencias Internacionales Más Vendidas</h2>
        <a routerLink="/catalog" class="view-all">Ver todos <i class="fa-solid fa-chevron-right"></i></a>
      </div>

      <div class="products-grid">
        <div class="product-card" *ngFor="let p of trendingProducts">
          <div class="product-badge" *ngIf="p.badge">{{p.badge}}</div>
          <div class="product-image" [routerLink]="['/product', p.id]">
            <img [src]="p.image" [alt]="p.name">
            <div class="origin-flag" [title]="'Origen: ' + p.origin">
              <i class="fa-solid fa-globe"></i> {{p.origin}}
            </div>
          </div>
          <div class="product-body">
            <div class="rating">
              <i class="fa-solid fa-star" *ngFor="let s of [1,2,3,4,5]"></i>
              <span>({{p.reviews}})</span>
            </div>
            <h4 [routerLink]="['/product', p.id]">{{p.name}}</h4>
            <div class="price-container">
              <span class="price">\${{p.price}} USD</span>
              <span class="shipping-info"><i class="fa-solid fa-truck"></i> Envío Aduanas Incluidas</span>
            </div>
            <button class="btn-cart" routerLink="/cart"><i class="fa-solid fa-cart-plus"></i> Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Trade Features -->
    <section class="features-section">
      <div class="container features-grid">
        <div class="feature-box">
          <i class="fa-solid fa-calculator"></i>
          <h3>Calculadora de Impuestos</h3>
          <p>Sin sorpresas en la frontera. Calculamos aranceles e impuestos de importación antes de pagar.</p>
        </div>
        <div class="feature-box">
          <i class="fa-solid fa-satellite-dish"></i>
          <h3>Rastreo Satelital Global</h3>
          <p>Sigue tu paquete desde el almacén de origen en Asia o Europa hasta la puerta de tu casa.</p>
        </div>
        <div class="feature-box">
          <i class="fa-solid fa-handshake-angle"></i>
          <h3>Protección al Comprador</h3>
          <p>Tu dinero está seguro en custodia hasta que recibas el producto en perfectas condiciones.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #fff; padding: 5rem 0; }
    .hero-content { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center; }
    .hero-text .tag { display: inline-block; background: rgba(56, 189, 248, 0.15); color: #38bdf8; padding: 0.4rem 1rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .hero-text h1 { font-size: 3rem; font-weight: 700; line-height: 1.2; margin-bottom: 1.25rem; }
    .hero-text p { color: #94a3b8; font-size: 1.1rem; margin-bottom: 2rem; }
    .hero-btns { display: flex; gap: 1rem; }
    .btn { padding: 0.85rem 1.75rem; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; transition: all 0.2s; }
    .btn-primary { background: #2563eb; color: #fff; }
    .btn-primary:hover { background: #1d4ed8; }
    .btn-outline { border: 2px solid #334155; color: #fff; }
    .btn-outline:hover { border-color: #38bdf8; color: #38bdf8; }

    .hero-stats { display: flex; flex-direction: column; gap: 1rem; }
    .stat-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 1.25rem; border-radius: 12px; display: flex; align-items: center; gap: 1.25rem; }
    .stat-card i { font-size: 2.5rem; color: #38bdf8; }
    .stat-card h3 { font-size: 1.75rem; font-weight: 700; color: #fff; }
    .stat-card p { color: #94a3b8; font-size: 0.9rem; }

    .section { margin: 4rem auto; }
    .section-title { font-size: 2rem; font-weight: 700; color: #0f172a; margin-bottom: 2rem; }
    .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .view-all { color: #2563eb; text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 0.5rem; }

    .categories-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; }
    .cat-card { background: #fff; border: 1px solid #e2e8f0; padding: 2rem; border-radius: 12px; text-decoration: none; color: inherit; transition: transform 0.2s, box-shadow 0.2s; text-align: center; }
    .cat-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); border-color: #2563eb; }
    .cat-icon { width: 70px; height: 70px; background: #eff6ff; color: #2563eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin: 0 auto 1.25rem auto; }
    .cat-card h3 { font-size: 1.2rem; margin-bottom: 0.5rem; color: #0f172a; }
    .cat-card p { color: #64748b; font-size: 0.9rem; }

    .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
    .product-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; position: relative; transition: box-shadow 0.2s; }
    .product-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
    .product-badge { position: absolute; top: 1rem; left: 1rem; background: #ef4444; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; z-index: 10; }
    .product-image { height: 220px; background: #f1f5f9; position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden; }
    .product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
    .product-card:hover .product-image img { transform: scale(1.05); }
    .origin-flag { position: absolute; bottom: 10px; right: 10px; background: rgba(15, 23, 42, 0.8); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; display: flex; align-items: center; gap: 4px; }
    .product-body { padding: 1.5rem; }
    .rating { color: #f59e0b; font-size: 0.85rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 4px; }
    .rating span { color: #64748b; margin-left: 4px; }
    .product-body h4 { font-size: 1.1rem; color: #0f172a; margin-bottom: 1rem; cursor: pointer; height: 2.8rem; overflow: hidden; }
    .product-body h4:hover { color: #2563eb; }
    .price-container { margin-bottom: 1.25rem; }
    .price { font-size: 1.5rem; font-weight: 700; color: #0f172a; display: block; }
    .shipping-info { font-size: 0.8rem; color: #16a34a; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
    .btn-cart { width: 100%; background: #eff6ff; color: #2563eb; font-weight: 600; padding: 0.75rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: background 0.2s, color 0.2s; }
    .btn-cart:hover { background: #2563eb; color: #fff; }

    .features-section { background: #fff; padding: 4rem 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; margin-top: 4rem; }
    .features-grid { display: grid; grid-text-align: center; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; }
    .feature-box { text-align: center; padding: 1.5rem; }
    .feature-box i { font-size: 3rem; color: #2563eb; margin-bottom: 1.25rem; }
    .feature-box h3 { font-size: 1.25rem; color: #0f172a; margin-bottom: 0.75rem; }
    .feature-box p { color: #64748b; font-size: 0.95rem; }
  `]
})
export class HomeComponent {
  trendingProducts = [
    { id: 1, name: 'Ultrabook Pro 16" Global Edition', price: 1299.00, reviews: 342, origin: 'Japón', badge: 'Más Vendido', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Cámara Mirrorless 4K Cinema Pro', price: 850.00, reviews: 189, origin: 'Alemania', badge: 'Oferta Aduanas', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Smartwatch Satelital Deportivo Ultra', price: 349.00, reviews: 512, origin: 'Estados Unidos', badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Auriculares Inalámbricos Cancelación Activa', price: 199.00, reviews: 1024, origin: 'Corea del Sur', badge: '-20%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' }
  ];
}
