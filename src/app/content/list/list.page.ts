import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../coop/system/services.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
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
  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService

  ) {



   }

  ngOnInit() {
  }

  show(item:string){
 this.storage.set('www_data_No',item);
    console.log('set No is '+item);

    this.router.navigate(['/show']);
  }
  Maintain(){
    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
  // *----------------------HTTP ------------------------------------------------
this.part = this.service.www_data

this.data = this.service.gethttpall(this.part,this.service.apikey);
this.data.subscribe(result =>{
this.items = result;
console.log(this.items);
// ------------------------------------- MAp Space
});
});

  }
}
