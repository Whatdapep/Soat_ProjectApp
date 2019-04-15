import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
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
  info:any=''
member_name:any;
  constructor(
    private router:Router,
    private navigate:NavController,
    private storage: Storage,
    private Http:HttpClient,
    public loadingController: LoadingController,
    private service:ServicesService,
    public alertController : AlertController,
    private modal:ModalController
  ) {

    this.Maintain();
     
   
   }

  ngOnInit() {
  }
//   async presentModal() {
//     const modal = await this.modal.create({
//       component: ModalPage,
//       componentProps: { value: 123 }
//     });
//     return await modal.present();
//   }
// }

Maintain(){
  this.storage.get('membership_no').then((val) => {
    this.membership_no = val.toString();
    this.storage.get('info').then((val) => {
      this.info = val;
  console.log("this is get Storage"+this.membership_no);
  this.storage.get('member_name').then((val) => {
    this.member_name = val;
// *----------------------HTTP ------------------------------------------------
this.part = this.service.www_board
var body={
  type:this.part,
}
this.data = this.service.postphp(body);
this.data.subscribe(result =>{
this.items = result;
// this.board = result;


console.log(this.items);

// ------------------------------------- MAp Space


});
});
});
  });
}
  async board_post_alert() {
    const alert = await this.alertController.create({
      header: 'กระดานสนทนาใหม่',
      inputs: [
        {
          name: 'Question',
          type: 'text',
          id:'Questions',
          placeholder: 'หัวข้อ.. .'
        },
        {
          name: 'Note',
          type: 'text',
          id: 'Notes',
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
          handler: data => {
            console.log('Confirm Ok');
            var test= "ทดสอบ"
            var test2="ทดสอบ123"
            this.part2= this.service.post_board

            // INSERT INTO www_board (Category,Question,Note,Name,IP,Date) 

            var body = {
              type:this.part2,
              Category:this.service.board_Category
             ,Question:data.Question
             ,Note:data.Note
             ,Name:this.member_name
             ,IP:this.info.ip_address
             ,Date:new Date()
            };
            
            this.data2 = this.service.postphp(body);
            this.data2.subscribe(result =>{
            console.log(result)
              this.Refresh(event);
            });

            // Category:req.body.Category,
            // Question:req.body.Question,
            // QNote:req.body.QNote,
            // QName:req.body.QName,
            // IP:req.body.IP,
            // Date:req.body.Date,
            

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
  Refresh(event) {
    // console.log('Begin async operation');

    setTimeout(() => {
     this.Maintain();
      // console.log('Async operation has ended');
      event.target.complete();

    }, 1000);
  }
  board_detail(item:string){
    this.storage.set('No',item);
    console.log('set No is '+item);

    this.router.navigate(['/board-detail']);

  }
  board_post(){
  this.board_post_alert();
    // this.router.navigate(['/board-post']);
  }
}
