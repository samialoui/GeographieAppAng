import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Details : any=[];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.service.getDetails().subscribe(data=>{
      this.Details = data;
    });

  }


  returnVide(){
    this.service.viderDetails();
  }

}
