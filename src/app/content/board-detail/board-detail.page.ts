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
  member_name:any='';
  ans:any='';

  part3:any='';
  data3:any='';
  


  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService,
    public alertController : AlertController,
  ) {

   this.Maintain();
   }
   Refresh(event) {


    setTimeout(() => {
      this.Maintain();
      event.target.complete();

    }, 1000);
  }

  Maintain(){
    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
    this.storage.get('No').then((val) => {
      this.No = val.toString();
    console.log("this is get No"+this.No);

    this.storage.get('member_name').then((val) => {
      this.member_name = val.toString();
      console.log("this is get member_name"+this.member_name);
      
  // *----------------------HTTP ------------------------------------------------
  this.part = this.service.www_board
  this.data = this.service.gethttp(this.part,this.No,this.service.apikey);
  this.data.subscribe(result =>{
  this.items = result;
  // this.board = result;
  
  
  console.log(this.items);

this.part2 = this.service.www_board_ans
this.data2 = this.service.gethttp(this.part2,this.No,this.service.apikey);
this.data2.subscribe(result =>{
this.items2 = result;
// this.board = result;


console.log(this.items2);

// ------------------------------------- MAp Space



});
});
});
});
    });
  }
  
   async Confirm_board_ans() {
    const alert = await this.alertController.create({
      header: 'กรุณาตรวจสอบความถูกต้องให้เรียบร้อย!',
      message: 'คุณแน่ใจหรือไม่ ? ',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.ans = '';
            this.ans.focus();
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Okay');
            var body = {
              Category:this.service.board_Category_ans
             ,QuestionNo:this.No
             ,Msg:this.ans
             ,Name:this.member_name
             ,IP:''
             ,Date:new Date()
            };
            this.part3= this.service.post_board_ans
            this.data3 = this.service.posthttps(this.part3,body,this.service.apikey);
            this.data3.subscribe(result =>{
            console.log(result)
            this.ans='';
            });
            this.Refresh(event);





            
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }
  confirm_ans(){
    this.Confirm_board_ans();
    
  }

}
