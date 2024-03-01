import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
 stdForm !: FormGroup;


  constructor(
  private _uuidService : UuidService,
  private _stdService : StudentService) { }

  ngOnInit(): void {
    this.createStdForm()
   }

   createStdForm(){
    this.stdForm = new FormGroup({
      fname : new FormControl(null, [Validators.required]),
      lname : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      contact : new FormControl(null, [Validators.required])
    })
   }

  onAddStudent(){
    if(this.stdForm.valid){
      console.log(this.stdForm.value)
      let obj = 
      {...this.stdForm.value,id: this._uuidService.create_UUID()}
      console.log(obj);
      this._stdService.addStudent(obj)
      this.stdForm.reset();

    }

  }

}
