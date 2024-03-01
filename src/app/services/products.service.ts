import { Injectable } from '@angular/core';
import { Iproduct, ProductsStatus } from '../model/product';
import { SnackbarService } from './snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productArray : Array<Iproduct> = [
    {
      pname : 'Samsung 31',
      pdetails : 'Mobile 128 6',
      pstatus : ProductsStatus.InProgress,
      id : '1',
    },
    {
      pname : 'iPhone',
      pdetails : 'Mobile 128 6',
      pstatus : ProductsStatus.Dispatched,
      id : '2'    
    }

  ];

  constructor(private _SnackBarService : SnackbarService) { }

  fetchAllProducts() : Array<Iproduct>{
      //API call to get todo data from db
      return this.productArray;
    }

    addProduct(product : Iproduct){
      //API call to add new product
      this.productArray.push(product);
      this._SnackBarService.openSnackBar(`The product ${product.pname} is added !`);

    }
    updateStatus(id : string, updatedStatus : ProductsStatus){
      for(const obj of this.productArray){
        if(obj.id === id){
          let oldStatus = obj.pstatus;
          obj.pstatus = updatedStatus;
          this._SnackBarService.openSnackBar(`The Status of product ${obj.pname} is changed from ${oldStatus} to ${updatedStatus}`)
          break;

        }
      }
    }
  
}
