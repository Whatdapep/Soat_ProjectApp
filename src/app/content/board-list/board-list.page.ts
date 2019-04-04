import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router,RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import {ServicesService} from '../../coop/system/services.service'

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.page.html',
  styleUrls: ['./board-list.page.scss'],
})
export class BoardListPage implements OnInit {
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

  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService,
    public alertController : AlertController,
  ) {

    
     
    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
      
  // *----------------------HTTP ------------------------------------------------
this.part = service.www_board
this.data = service.gethttpall(this.part,this.service.apikey);
this.data.subscribe(result =>{
this.items = result;
// this.board = result;


console.log(this.items);

// ------------------------------------- MAp Space


});
});

   }

  ngOnInit() {
  }

  async board_post_alert() {
    const alert = await this.alertController.create({
      header: 'กระดานสนทนาใหม่',
      inputs: [
        {
          name: 'Question',
          type: 'text',
          id:'Question',
          placeholder: 'หัวข้อ.. .'
        },
        {
          name: 'Note',
          type: 'text',
          id: 'Note',
          placeholder: 'รายละเอียด'
        }
      ],
      // message:[
      //   {
      //     name:'test',
      //     placeholder:'iายละเอียด'
      //   }
      // ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ตกลง',
          handler: () => {
            console.log('Confirm Ok');
            var body = {
              Category:"this"
             ,Question:this.No
             ,Msg:this.ans
             ,Name:this.member_name
             ,IP:''
             ,Date:''
            };
            this.part3= this.service.www_board_ans
            this.data3 = this.service.posthttps(this.part3,this.service.apikey,body);
            this.data3.subscribe(result =>{
            console.log(result)

            });



          //   Category:req.body.Category,
					// Question:req.body.Question,
					// QNote:req.body.QNote,
					// QName:req.body.QName,
					// IP:req.body.IP,
					// Date:req.body.Date,
          }
        }
      ]
    });

    await alert.present();
  }
  board_detail(item:string){
    this.storage.set('No',item);
    console.log('set No is '+item);

    this.router.navigate(['/board-detail']);

  }
  board_post(){
  this.board_post();
    // this.router.navigate(['/board-post']);
  }
}
