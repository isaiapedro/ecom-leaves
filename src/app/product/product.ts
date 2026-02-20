import { Component, inject, OnInit, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PRODUCTS, Product } from '../products.data';

@Component({
  selector: 'app-product',
  imports: [RouterModule, CurrencyPipe],
  template: `
    <div class="detail-container">

      <a routerLink="/shop" class="back-link">&larr; Back to Shop</a>

      @if (product(); as p) {
        <div class="product-split">
          
          <div class="product-image-col">
            <div class="image-square">
              <img [src]="p.image" [alt]="p.name">
            </div>
          </div>

          <div class="product-text-col">
            <h1>{{ p.name }}</h1>
            <p class="price">{{ p.price | currency:'BRL' }}</p>
            <p class="description">{{ p.description }}</p>
            
            <button class="add-btn">Add to Cart</button>
          </div>

        </div>
      } @else {
        <div class="error-state">
          <h2>Product Not Found</h2>
          <p>Sorry, we couldn't find the product you're looking for in our database.</p>
        </div>
      }

    </div>
  `,
  styles: `
    .detail-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 4rem 2rem;
      font-family: var(--inter-font, sans-serif);
    }

    .back-link {
      display: inline-block;
      margin-bottom: 2rem;
      color: #666;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }

    .back-link:hover { color: #111; }

    /* Desktop: Side by Side */
    .product-split {
      display: flex;
      gap: 4rem;
      align-items: center;
    }

    .product-image-col { flex: 1; }
    .product-text-col { flex: 1; display: flex; flex-direction: column; align-items: flex-start; }

    .image-square {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .image-square img {
      width: 100%; height: 100%; object-fit: cover;
    }

    h1 { font-size: 3rem; margin: 0 0 1rem 0; color: #111; }
    .price { font-size: 1.5rem; font-weight: 600; color: #555; margin: 0 0 1.5rem 0; }
    .description { font-size: 1.1rem; line-height: 1.6; color: #666; margin: 0 0 2rem 0; }

    .add-btn {
      background: #111;
      color: white;
      border: none;
      padding: 1rem 3rem;
      font-size: 1.1rem;
      border-radius: 50px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .add-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }

    /* Mobile: Stack vertically */
    @media screen and (max-width: 768px) {
      .product-split { flex-direction: column; gap: 2rem; }
    }
  `,
})
export class ProductComponent implements OnInit {
  // Dependency Injection to read the URL
  private route = inject(ActivatedRoute);
  
  // State to hold the found product
  product = signal<Product | undefined>(undefined);

  ngOnInit() {
    // 1. Extract the ID from the URL (e.g., /shop/2 -> "2")
    const idParam = this.route.snapshot.paramMap.get('id');
    const productId = Number(idParam);

    // 2. Query the Dataset for the matching record
    const foundProduct = PRODUCTS.find(p => p.id === productId);
    this.product.set(foundProduct);
  }
}
