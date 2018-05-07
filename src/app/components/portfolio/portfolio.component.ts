import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {

  constructor( private _ps: ProductosService)
  {

  }
}
