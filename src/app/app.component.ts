import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Iproduct } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'services';

  prodArr !: Array<Iproduct>
  
  constructor(private _productsService : ProductsService)
  {

  }
  ngOnInit() : void{
    this.prodArr = this._productsService.fetchAllProducts()
  }
  
}


