import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container checkout-page">
      <h2><i class="fa-solid fa-lock"></i> Checkout Internacional Seguro con Gestión Aduanera</h2>

      <div class="checkout-layout">
        <div class="checkout-form-col">
          <div class="form-section">
            <h3>1. Dirección de Destino Internacional</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Nombre Completo</label>
                <input type="text" placeholder="Ej. Carlos Mendoza">
              </div>
              <div class="form-group">
                <label>País de Destino</label>
                <select>
                  <option value="CO">Colombia</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                </select>
              </div>
              <div class="form-group full">
                <label>Dirección de Envío (Calle, Número, Apto)</label>
                <input type="text" placeholder="Ej. Carrera 45 # 100-20">
              </div>
              <div class="form-group">
                <label>Ciudad</label>
                <input type="text" placeholder="Bogotá">
              </div>
              <div class="form-group">
                <label>Código Postal / ZIP</label>
                <input type="text" placeholder="110111">
              </div>
              <div class="form-group">
                <label>Número de Identificación (Para Aduana)</label>
                <input type="text" placeholder="Cédula / Pasaporte / NIT">
              </div>
              <div class="form-group">
                <label>Teléfono Celular con Código de País</label>
                <input type="text" placeholder="+57 300 1234567">
              </div>
            </div>
          </div>

          <div class="form-section">
            <h3>2. Método de Pago Global</h3>
            <div class="payment-methods">
              <label class="pay-option">
                <input type="radio" name="payment" checked>
                <i class="fa-solid fa-credit-card"></i> Tarjeta Internacional (Crédito / Débito)
              </label>
              <label class="pay-option">
                <input type="radio" name="payment">
                <i class="fa-brands fa-paypal"></i> PayPal Global Secure
              </label>
              <label class="pay-option">
                <input type="radio" name="payment">
                <i class="fa-solid fa-building-columns"></i> Transferencia Bancaria Local / PSE
              </label>
            </div>
            
            <div class="card-details">
              <div class="form-group full">
                <label>Número de Tarjeta</label>
                <input type="text" placeholder="4532 •••• •••• 8920">
              </div>
              <div class="form-group">
                <label>Expiración</label>
                <input type="text" placeholder="MM/AA">
              </div>
              <div class="form-group">
                <label>CVV / CVC</label>
                <input type="text" placeholder="123">
              </div>
            </div>
          </div>
        </div>

        <div class="checkout-summary-col">
          <div class="summary-box">
            <h3>Resumen de la Orden Transfronteriza</h3>
            <div class="summary-row">
              <span>Subtotal Productos (3)</span>
              <span>$1,648.00 USD</span>
            </div>
            <div class="summary-row">
              <span>Envío Internacional DHL</span>
              <span>$45.00 USD</span>
            </div>
            <div class="summary-row">
              <span>Aranceles e IVA de Importación</span>
              <span>$165.00 USD</span>
            </div>
            <div class="duty-badge">
              <i class="fa-solid fa-circle-check"></i> Garantía de despacho aduanero sin pagos adicionales en destino.
            </div>
            <div class="summary-total">
              <span>Total a Pagar</span>
              <span>$1,858.00 USD</span>
            </div>
            <button class="btn btn-primary btn-block" (click)="completeOrder()">Confirmar y Pagar Pedido <i class="fa-solid fa-shield-halved"></i></button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .checkout-page { margin: 2rem auto 5rem auto; }
    .checkout-page h2 { font-size: 1.75rem; color: #0f172a; margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem; }
    .checkout-layout { display: grid; grid-template-columns: 1fr 380px; gap: 2rem; }
    .form-section { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem; }
    .form-section h3 { font-size: 1.2rem; color: #0f172a; margin-bottom: 1.25rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 0.75rem; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1rem; }
    .form-group.full { grid-column: span 2; }
    .form-group label { display: block; font-size: 0.85rem; font-weight: 600; color: #334155; margin-bottom: 0.4rem; }
    .form-group input, .form-group select { width: 100%; padding: 0.75rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 0.95rem; }

    .payment-methods { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; }
    .pay-option { display: flex; align-items: center; gap: 0.75rem; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.95rem; background: #f8fafc; }
    .pay-option i { font-size: 1.25rem; color: #2563eb; }
    .card-details { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; background: #f8fafc; padding: 1.25rem; border-radius: 8px; border: 1px solid #e2e8f0; }

    .summary-box { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1.5rem; height: fit-content; }
    .summary-box h3 { font-size: 1.2rem; color: #0f172a; margin-bottom: 1.5rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; }
    .summary-row { display: flex; justify-content: space-between; font-size: 0.95rem; color: #475569; margin-bottom: 1rem; }
    .duty-badge { background: #eff6ff; color: #1e40af; font-size: 0.8rem; padding: 0.75rem; border-radius: 6px; display: flex; gap: 0.5rem; align-items: flex-start; margin-bottom: 1rem; line-height: 1.4; }
    .summary-total { display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 700; color: #0f172a; border-top: 1px solid #e2e8f0; padding-top: 1rem; margin-bottom: 1.5rem; }
    .btn { background: #2563eb; color: #fff; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.85rem; }
    .btn-block { width: 100%; }
  `]
})
export class CheckoutComponent {
  completeOrder() {
    alert('¡Pedido internacional procesado con éxito! Se ha generado la guía aduanera y el seguimiento satelital.');
  }
}
