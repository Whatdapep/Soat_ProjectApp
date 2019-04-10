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

    
     
    this.storage.get('membership_no').then((val) => {
      this.membership_no = val.toString();
    console.log("this is get Storage"+this.membership_no);
    this.storage.get('member_name').then((val) => {
      this.member_name = val;



   
      
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
});
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
            var body = {
              Category:this.service.board_Category
             ,Question:data.Question
             ,QNote:data.Note
             ,QName:this.member_name
             ,IP:""
             ,Date:new Date()
            };
            this.part2= this.service.post_board
            this.data2 = this.service.posthttps(this.part2,body,this.service.apikey);
            this.data2.subscribe(result =>{
            console.log(result)

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
