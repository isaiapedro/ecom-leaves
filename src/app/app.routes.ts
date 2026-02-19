import { Routes } from '@angular/router';
import { AboutPage } from './about-page/about-page';
import { CollectionPage } from './collection-page/collection-page';
import { FaqPage } from './faq-page/faq-page';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
    { path: "", redirectTo: "home-page", pathMatch: "full" },
    {
        path: 'home-page',
        component: HomePage,
    },
    {
        path: 'about-page',
        component: AboutPage,
    },
    {
        path: 'collection-page',
        component: CollectionPage,
    },
    {
        path: 'faq-page',
        component: FaqPage,
    },
];