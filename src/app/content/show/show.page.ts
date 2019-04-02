import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../coop/system/services.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  items:any;
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
  Category:any='photo';
  No:any='';
  Note:any='';
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

    this.storage.get('www_data_No').then((val) => {
      this.No = val.toString();
    console.log("this is get No"+this.No);
      
  // *----------------------HTTP ------------------------------------------------
this.part = service.www_data_detail

this.data = service.gethttp(this.part,this.No,this.service.apikey);
this.data.subscribe(result =>{
this.items = result;
// this.board = result;


console.log(this.items);

// ------------------------------------- MAp Spacet
this.Note = this.items.map(this.service.callfunction.getNote);
// this.Note = this.Note.toString();

});
});
    });


   }

  ngOnInit() {
  }

}
