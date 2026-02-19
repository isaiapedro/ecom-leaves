import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    RouterLinkActive
    ],
  template: `
    <main style="display: block; width: 100%; min-height: 100%;">
      <mat-toolbar color="primary" class="navbar">
        <a mat-button routerLink="/home-page" routerLinkActive="active-link">Leaves Shop</a>
        <span class="spacer"></span>
        <a mat-button routerLink="/about-page" routerLinkActive="active-link">sobre</a>
        <a mat-button routerLink="/collection-page" routerLinkActive="active-link">coleção</a>
        <a mat-button routerLink="/faq-page" routerLinkActive="active-link">dúvidas</a>
        <span class="spacer"></span>
        <button mat-button>Login</button>
        <button mat-button>Cart</button>
      </mat-toolbar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>  
    </main>
    
  `,
  styles: [
    `
      /* Preenche o conteúdo inteiro da viewport */
      .mat-toolbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000; /* Garante que a barra de navegação fique acima do conteúdo */
        background-color: #93916B; /* Cor de fundo personalizada */

        /* Muda a fonte do toolbar para uma fonte personalizada */
        font-family: 'Helvetica', sans-serif;
        font-weight: 400;
        font-size: 20px;
      }

      /* Aumentar o espaçamento entre botões na barra de navegação */
      .mat-toolbar a {
        margin-right: 50px; /* Ajuste o valor conforme necessário */
      }

      /* Estilo para o link ativo */
      .active-link {
        font-weight: bold;
      }
      
      .spacer {
        flex-grow: 1;
      }
    `,
  ],
})

export class App {
}