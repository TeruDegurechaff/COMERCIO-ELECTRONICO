import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  template: `
    <!-- Top Global Bar -->
    <header class="header">
      <div class="top-bar">
        <div class="container top-bar-content">
          <div class="geo-selectors">
            <div class="selector-item">
              <i class="fa-solid fa-globe"></i>
              <select [(ngModel)]="currentCurrency" (change)="changeCurrency()">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="COP">COP ($)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
            <div class="selector-item">
              <i class="fa-solid fa-location-dot"></i>
              <select [(ngModel)]="currentCountry">
                <option value="US">Estados Unidos</option>
                <option value="ES">España</option>
                <option value="CO">Colombia</option>
                <option value="GB">Reino Unido</option>
                <option value="JP">Japón</option>
              </select>
            </div>
          </div>
          <div class="top-links">
            <a href="#"><i class="fa-solid fa-truck-fast"></i> Envíos Internacionales</a>
            <a href="#"><i class="fa-solid fa-headset"></i> Soporte 24/7</a>
            <a href="#"><i class="fa-solid fa-shield-halved"></i> Compra Segura</a>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <nav class="main-nav">
        <div class="container nav-content">
          <a routerLink="/" class="logo">
            <i class="fa-solid fa-earth-americas"></i> Global<span>Store</span>
          </a>

          <div class="search-bar">
            <input type="text" placeholder="Buscar millones de productos en todo el mundo..." />
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <div class="nav-actions">
            <a routerLink="/cart" class="action-btn cart-btn">
              <i class="fa-solid fa-cart-shopping"></i>
              <span class="badge">3</span>
            </a>
            <div class="user-profile">
              <i class="fa-regular fa-user"></i>
              <div class="user-info">
                <small>Hola, Invitado</small>
                <span>Mi Cuenta</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Sub Navigation Categories -->
      <div class="sub-nav">
        <div class="container">
          <ul>
            <li><a routerLink="/catalog"><i class="fa-solid fa-bars"></i> Todo el Catálogo</a></li>
            <li><a routerLink="/catalog">Tecnología Global</a></li>
            <li><a routerLink="/catalog">Moda & Estilo</a></li>
            <li><a routerLink="/catalog">Hogar Inteligente</a></li>
            <li><a routerLink="/catalog">Deportes & Aventura</a></li>
            <li><a routerLink="/catalog">Ofertas Flash Aduana Cero</a></li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Main Content Route Outlet -->
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>GlobalStore Internacional</h3>
          <p>Llevamos tus compras desde centros logísticos globales directamente a la puerta de tu hogar con gestión aduanera incluida.</p>
          <div class="social-icons">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Comercio Transfronterizo</h4>
          <ul>
            <li><a href="#">Gestión de Aranceles</a></li>
            <li><a href="#">Logística Internacional</a></li>
            <li><a href="#">Garantía de Devolución Global</a></li>
            <li><a href="#">Seguimiento Satelital</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Atención al Cliente</h4>
          <ul>
            <li><a href="#">Centro de Ayuda Multilingüe</a></li>
            <li><a href="#">Estado de Pedidos</a></li>
            <li><a href="#">Reclamaciones Aduaneras</a></li>
            <li><a href="#">Métodos de Pago Globales</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Seguridad y Pagos</h4>
          <p>Aceptamos tarjetas internacionales, PayPal, criptomonedas y transferencias locales seguras.</p>
          <div class="payment-badges">
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-cc-paypal"></i>
            <i class="fa-brands fa-cc-apple-pay"></i>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2026 GlobalStore Inc. Todos los derechos reservados. Plataforma de Comercio Electrónico Multidivisa y Multinacional.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .header { background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000; }
    .top-bar { background: #0f172a; color: #cbd5e1; font-size: 0.85rem; padding: 0.5rem 0; }
    .top-bar-content { display: flex; justify-content: space-between; align-items: center; }
    .geo-selectors { display: flex; gap: 1.5rem; }
    .selector-item { display: flex; align-items: center; gap: 0.5rem; }
    .selector-item select { background: transparent; color: #fff; border: 1px solid #334155; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.85rem; }
    .selector-item select option { background: #0f172a; color: #fff; }
    .top-links { display: flex; gap: 1.5rem; }
    .top-links a { color: #cbd5e1; text-decoration: none; transition: color 0.2s; }
    .top-links a:hover { color: #38bdf8; }

    .main-nav { padding: 1rem 0; border-bottom: 1px solid #e2e8f0; }
    .nav-content { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
    .logo { font-size: 1.75rem; font-weight: 700; color: #0f172a; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; }
    .logo span { color: #2563eb; }
    .search-bar { flex: 1; display: flex; max-width: 600px; border: 2px solid #2563eb; border-radius: 8px; overflow: hidden; }
    .search-bar input { flex: 1; padding: 0.75rem 1rem; border: none; font-size: 1rem; }
    .search-bar button { background: #2563eb; color: #fff; padding: 0 1.5rem; font-size: 1rem; transition: background 0.2s; }
    .search-bar button:hover { background: #1d4ed8; }

    .nav-actions { display: flex; align-items: center; gap: 1.5rem; }
    .cart-btn { position: relative; font-size: 1.5rem; color: #334155; text-decoration: none; }
    .cart-btn .badge { position: absolute; top: -8px; right: -10px; background: #ef4444; color: #fff; font-size: 0.75rem; font-weight: 600; padding: 2px 6px; border-radius: 9999px; }
    .user-profile { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; }
    .user-profile i { font-size: 1.75rem; color: #334155; }
    .user-info small { display: block; color: #64748b; font-size: 0.75rem; }
    .user-info span { font-weight: 600; color: #0f172a; font-size: 0.9rem; }

    .sub-nav { background: #1e293b; color: #fff; }
    .sub-nav ul { display: flex; list-style: none; gap: 2rem; padding: 0.75rem 0; overflow-x: auto; }
    .sub-nav a { color: #e2e8f0; text-decoration: none; font-size: 0.9rem; font-weight: 500; white-space: nowrap; transition: color 0.2s; }
    .sub-nav a:hover { color: #38bdf8; }

    .footer { background: #0f172a; color: #94a3b8; padding: 4rem 0 2rem 0; margin-top: 4rem; }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2.5rem; margin-bottom: 3rem; }
    .footer-col h3, .footer-col h4 { color: #fff; margin-bottom: 1.25rem; }
    .footer-col p { font-size: 0.9rem; margin-bottom: 1.25rem; }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 0.75rem; }
    .footer-col ul li a { color: #94a3b8; text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
    .footer-col ul li a:hover { color: #fff; }
    .social-icons { display: flex; gap: 1rem; }
    .social-icons a { background: #1e293b; color: #fff; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.2s; }
    .social-icons a:hover { background: #2563eb; }
    .payment-badges { display: flex; gap: 1rem; font-size: 2rem; color: #cbd5e1; }
    .footer-bottom { border-top: 1px solid #1e293b; padding-top: 1.5rem; text-align: center; font-size: 0.85rem; }
  `]
})
export class AppComponent {
  currentCurrency = 'USD';
  currentCountry = 'US';

  changeCurrency() {
    console.log('Moneda cambiada a:', this.currentCurrency);
  }
}
