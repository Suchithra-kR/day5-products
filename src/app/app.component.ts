import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { CardsComponent } from './units/cards/cards.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './units/footer/footer.component';
// import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CarouselComponent,CardsComponent,ProductsComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce';
}
