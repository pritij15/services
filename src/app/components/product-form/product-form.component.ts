import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproduct, ProductsStatus } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private _uuidService : UuidService,
    private _productService : ProductsService
    ) { }

  ngOnInit(): void {
    this.createProductForm()
  }
    createProductForm(){
      this.productForm = new FormGroup({
        pname : new FormControl(null, [Validators.required]),
        pdetails : new FormControl(null,[Validators.required])
      })
    }

    onProductAdd(){
      if(this.productForm.valid){
        // console.log(this.productForm.value);
        let product :Iproduct = {...this.productForm.value, 
          id: this._uuidService.create_UUID(),
          pstatus : ProductsStatus.InProgress
        }
        this.productForm.reset()
        console.log(product)
        this._productService.addProduct(product)
      }
    }
  

}
