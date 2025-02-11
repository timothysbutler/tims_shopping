import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tims_shopping';
}
