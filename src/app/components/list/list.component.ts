import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { COUNTRIES } from 'src/data/countries';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() Africa = 'Africa';
  @Input() Americas = 'Americas';
  @Input() Asia = 'Asia';
  @Input() Europe = 'Europe';
  @Input() Oceania = 'Oceania';

  constructor( public service: SharedService) { }

  countriesWithoutFilter: Array<any> = COUNTRIES;

  countries: Array<any> = COUNTRIES;
ListWithFilter: boolean = false;

  ngOnInit(): void {
  }

  addToDetails(item : any){
    this.service.addToDetail(item);
  }
  

  FilterFn(nomRegion: string){
    var countryFilterVar = nomRegion ;
  
    this.countries= this.countriesWithoutFilter.filter(function (fl:any){
  return fl.region.toString().toLowerCase().includes(
    countryFilterVar.toString().trim().toLowerCase())
    });

    this.ListWithFilter = true;
  }

}
