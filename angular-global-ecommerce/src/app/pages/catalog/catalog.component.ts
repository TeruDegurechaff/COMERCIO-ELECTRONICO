import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="container catalog-page">
      <!-- Sidebar Filters -->
      <aside class="filters-sidebar">
        <h3><i class="fa-solid fa-filter"></i> Filtros Globales</h3>
        
        <div class="filter-group">
          <h4>País de Origen</h4>
          <label><input type="checkbox" checked> Todos los países</label>
          <label><input type="checkbox"> Estados Unidos</label>
          <label><input type="checkbox"> Japón</label>
          <label><input type="checkbox"> Alemania</label>
          <label><input type="checkbox"> Corea del Sur</label>
        </div>

        <div class="filter-group">
          <h4>Categorías</h4>
          <label><input type="checkbox" checked> Tecnología</label>
          <label><input type="checkbox"> Moda & Estilo</label>
          <label><input type="checkbox"> Hogar Inteligente</label>
          <label><input type="checkbox"> Deportes</label>
        </div>

        <div class="filter-group">
          <h4>Rango de Precio (USD)</h4>
          <div class="price-inputs">
            <input type="number" placeholder="Min" value="0">
            <span>-</span>
            <input type="number" placeholder="Max" value="5000">
          </div>
        </div>

        <div class="filter-group">
          <h4>Gestión Aduanera</h4>
          <label><input type="checkbox" checked> Impuestos incluidos en checkout</label>
          <label><input type="checkbox" checked> Envío internacional directo</label>
        </div>
      </aside>

      <!-- Catalog Content -->
      <div class="catalog-content">
        <div class="catalog-header">
          <h2>Catálogo Internacional (<span class="count">245 productos encontrados</span>)</h2>
          <div class="sort-box">
            <label>Ordenar por:</label>
            <select>
              <option>Relevancia Global</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Mejor Valorados</option>
            </select>
          </div>
        </div>

        <div class="products-grid">
          <div class="product-card" *ngFor="let p of products">
            <div class="product-badge" *ngIf="p.badge">{{p.badge}}</div>
            <div class="product-image" [routerLink]="['/product', p.id]">
              <img [src]="p.image" [alt]="p.name">
              <div class="origin-flag">
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
                <span class="shipping-info"><i class="fa-solid fa-plane-circle-check"></i> Impuestos Aduaneros Incluidos</span>
              </div>
              <button class="btn-cart" routerLink="/cart"><i class="fa-solid fa-cart-plus"></i> Añadir al Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .catalog-page { display: grid; grid-template-columns: 280px 1fr; gap: 2rem; margin: 2rem auto 4rem auto; }
    .filters-sidebar { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; height: fit-content; }
    .filters-sidebar h3 { font-size: 1.2rem; color: #0f172a; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem; }
    .filter-group { margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1.25rem; }
    .filter-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .filter-group h4 { font-size: 0.95rem; color: #0f172a; margin-bottom: 0.75rem; }
    .filter-group label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #475569; margin-bottom: 0.5rem; cursor: pointer; }
    .price-inputs { display: flex; align-items: center; gap: 0.5rem; }
    .price-inputs input { width: 100%; padding: 0.5rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; }

    .catalog-content { flex: 1; }
    .catalog-header { display: flex; justify-content: space-between; align-items: center; background: #fff; padding: 1.25rem 1.5rem; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 1.5rem; }
    .catalog-header h2 { font-size: 1.3rem; color: #0f172a; }
    .catalog-header .count { font-size: 0.9rem; color: #64748b; font-weight: normal; }
    .sort-box { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9rem; color: #475569; }
    .sort-box select { padding: 0.5rem; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; }

    .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
    .product-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; position: relative; transition: box-shadow 0.2s; }
    .product-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
    .product-badge { position: absolute; top: 1rem; left: 1rem; background: #ef4444; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: 4px; z-index: 10; }
    .product-image { height: 200px; background: #f1f5f9; position: relative; display: flex; align-items: center; justify-content: center; cursor: pointer; overflow: hidden; }
    .product-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
    .product-card:hover .product-image img { transform: scale(1.05); }
    .origin-flag { position: absolute; bottom: 10px; right: 10px; background: rgba(15, 23, 42, 0.8); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; display: flex; align-items: center; gap: 4px; }
    .product-body { padding: 1.25rem; }
    .rating { color: #f59e0b; font-size: 0.8rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 4px; }
    .rating span { color: #64748b; margin-left: 4px; }
    .product-body h4 { font-size: 1rem; color: #0f172a; margin-bottom: 0.75rem; cursor: pointer; height: 2.5rem; overflow: hidden; }
    .product-body h4:hover { color: #2563eb; }
    .price-container { margin-bottom: 1rem; }
    .price { font-size: 1.35rem; font-weight: 700; color: #0f172a; display: block; }
    .shipping-info { font-size: 0.75rem; color: #16a34a; display: flex; align-items: center; gap: 4px; margin-top: 2px; }
    .btn-cart { width: 100%; background: #eff6ff; color: #2563eb; font-weight: 600; padding: 0.65rem; border-radius: 8px; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: background 0.2s, color 0.2s; }
    .btn-cart:hover { background: #2563eb; color: #fff; }
  `]
})
export class CatalogComponent {
  products = [
    { id: 1, name: 'Ultrabook Pro 16" Global Edition', price: 1299.00, reviews: 342, origin: 'Japón', badge: 'Más Vendido', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Cámara Mirrorless 4K Cinema Pro', price: 850.00, reviews: 189, origin: 'Alemania', badge: 'Oferta Aduanas', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Smartwatch Satelital Deportivo Ultra', price: 349.00, reviews: 512, origin: 'Estados Unidos', badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Auriculares Inalámbricos Cancelación Activa', price: 199.00, reviews: 1024, origin: 'Corea del Sur', badge: '-20%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Drone Profesional 8K Obstacle Avoidance', price: 1100.00, reviews: 88, origin: 'China', badge: 'Exclusivo', image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Zapatillas Running Edición Limitada', price: 180.00, reviews: 430, origin: 'Italia', badge: 'Tendencia', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60' }
  ];
}
