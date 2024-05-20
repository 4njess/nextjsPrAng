import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleAtrComponent } from './simple-atr/simple-atr.component';
import { ObjectAtrComponent } from './object-atr/object-atr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleAtrComponent, ObjectAtrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
  title = 'ДОМАШНИЙ';
}
