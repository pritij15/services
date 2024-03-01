import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductsStatus } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
 
@Input() product !: Iproduct
  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
    
  }
  onProgressUpdate(){
    this._productService.updateStatus(this.product.id, ProductsStatus.InProgress)
  }
  onDispatchUpdate(){
    this._productService.updateStatus(this.product.id, ProductsStatus.Dispatched)

  }
  onDeliverUpdate(){
    this._productService.updateStatus(this.product.id, ProductsStatus.Delivered)

  }

}
