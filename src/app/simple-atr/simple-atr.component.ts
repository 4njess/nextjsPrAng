import { Component } from '@angular/core';
import { abc} from '../configuration/configuration';
import { config } from 'process';

@Component({
  selector: 'app-simple-atr',
  standalone: true,
  imports: [],
  templateUrl: './simple-atr.component.html',
  styleUrl: './simple-atr.component.css'
})

export class SimpleAtrComponent {
    conf:any
    a = abc().then(config => this.conf = config)
}

abc().then(r => console.log(r))
