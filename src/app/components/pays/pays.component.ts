import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {


  constructor(private service:SharedService) { }
  paysFilter: string="";
  PaysProductWithoutFilter: Array<any> = COUNTRIES;

  listPays: Array<any> = COUNTRIES;
  ngOnInit(): void { 

  }


  addToDetails(item : any){
    this.service.addToDetail(item);
  }
  
  FilterFn(){
    var PaysFilterVar = this.paysFilter;
  
    this.listPays= this.PaysProductWithoutFilter.filter(function (fl:any){
  return fl.name.common.toString().toLowerCase().includes(
    PaysFilterVar.toString().trim().toLowerCase())
    });
  }

}
