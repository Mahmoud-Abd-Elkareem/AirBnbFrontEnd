import { Component ,  OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AirBnbProject';
  faCoffee = faCoffee;


  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
