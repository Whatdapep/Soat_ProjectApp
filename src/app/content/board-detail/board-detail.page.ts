import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../coop/system/services.service'

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.page.html',
  styleUrls: ['./board-detail.page.scss'],
})
export class BoardDetailPage implements OnInit {
  items:any;
  items2:any;
  membership_no:any='';
  membership_no_test:any='';
  memberno:any;
  data:Observable<any>;
  sharestatement:any;
  sharestock:any;
  part:any;
  part2:any;
  data2:any;
  memberdetail:any;
  No:any='';

  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService
  ) {

    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
    this.storage.get('No').then((val) => {
      this.No = val.toString();
    console.log("this is get Storage"+this.No);


      
  // *----------------------HTTP ------------------------------------------------
  this.part = service.www_board
  this.data = service.gethttp(this.part,this.No,this.service.apikey);
  this.data.subscribe(result =>{
  this.items = result;
  // this.board = result;
  
  
  console.log(this.items);

this.part2 = service.www_board_ans
this.data2 = service.gethttp(this.part2,this.No,this.service.apikey);
this.data2.subscribe(result =>{
this.items2 = result;
// this.board = result;


console.log(this.items2);

// ------------------------------------- MAp Space



});
});
});
});
   }

  ngOnInit() {
  }

}
