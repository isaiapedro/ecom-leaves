import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUCTS } from '../products.data';

@Component({
  selector: 'app-collection-page',
  imports: [RouterModule, CurrencyPipe],
  template: `
    <div class="shop-container">
      
      <div class="product-grid">
        @for (product of products; track product.id) {
          
          <a [routerLink]="['/collection-page', product.id]" class="product-card">
            
            <div class="image-square">
              <img [src]="product.image" [alt]="product.name" loading="lazy">
            </div>
            
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-price">{{ product.price | currency:'BRL' }}</p>
            </div>
            
          </a>
          
        }
      </div>
    </div>
  `,
  styles:
  `
    .shop-container {
      background: linear-gradient(to bottom,  #fafaeb 0%, #B8BAAD 80%);
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 140vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      padding: 10rem;
    }

    .product-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 7rem;
      justify-content: center;
      align-items: center;
      margin-left: -4rem;
      margin-right: 17rem;
    }

    .product-card {
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
    }

    .image-square {
      width: 100%;
      aspect-ratio: 1 / 1;
      background-color: #f5f5f5;
      margin-bottom: 1rem;
    }

    .image-square img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .product-name {
      font-size: 1.3rem;
      font-weight: 300;
      margin: 0 0 0.5rem 0;
      color: #5f5f52;
      font-family: 'IBM Plex Mono', monospace;
      text-transform: lowercase;
    }

    .product-price {
      font-size: 1.3rem;
      font-weight: 500;
      font-family: 'Bebas Neue', sans-serif;
      color: #3c3c30;
      margin: 0;
    }
  `,
})
export class CollectionPage {
  products = PRODUCTS;
}
