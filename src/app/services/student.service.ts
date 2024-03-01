import { Injectable } from '@angular/core';
import { Istd } from '../model/student';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
stdArray : Array<Istd> = [
  {
    fname : "Jhon",
    lname : "Doe",
    email : "jd@gmail.com",
    contact : 1234567890,
    id : '11'
  },
  {
    fname : "Jerry",
    lname : "Doe",
    email : "jd@gmail.com",
    contact : 1234567890,
    id : '22'
  },
  {
    fname : "May",
    lname : "Doe",
    email : "may@gmail.com",
    contact : 1234567890,
    id : '33'
  },
  {
    fname : "James",
    lname : "Doe",
    email : "jd@gmail.com",
    contact : 1234567890,
    id : '44'
  },
]
  constructor(private _snackBarService : SnackbarService) { }

  fetchStdData() : Array<Istd>{
    return this.stdArray
  }
  addStudent(stdObj : Istd){
    this.stdArray.push(stdObj)
    this._snackBarService.openSnackBar(`Student ${stdObj.fname} ${stdObj.lname}is added Successfully !!`)

  }
  removeStd(id : string){
    // Api call to remove students from db
    let getIndex = this.stdArray.findIndex(std => std.id === id)
    this.stdArray.splice(getIndex, 1)
    this._snackBarService.openSnackBar
    (`Student with id ${id} is Removed.`)
  }
}
