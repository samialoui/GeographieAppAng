
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COUNTRIES } from 'src/data/countries';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public detailsItem : any=[];
  public detailsList = new BehaviorSubject<any>([]);

  constructor() { }

  getDetails(){
    return this.detailsList.asObservable();
  }
  
  addToDetail(product: any){
    this.detailsItem.push(product);
    this.detailsList.next(this.detailsItem);
   
  }
  
  viderDetails(){
    this.detailsItem = [];
    this.detailsList.next(this.detailsItem);
    this.detailsList.next(this.detailsItem);
  
  }

 
}
