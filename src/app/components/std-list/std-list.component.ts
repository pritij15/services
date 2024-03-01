import { Component, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
  stdArray !: Array<Istd>
  constructor(private _stdService : StudentService) { }

  ngOnInit(): void {
     this.stdArray = this._stdService.fetchStdData()
      console.log(this._stdService.fetchStdData())
  }
  onRemoveStd(stdId : string){
    this._stdService.removeStd(stdId)
  }

}
