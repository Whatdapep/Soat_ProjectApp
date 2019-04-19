import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {FunctionService} from './function.service'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // md5 = require('md5');
  membership_no_str:any='0000091'
  membership_no:any;
  membership_no_post:any='membership_no';
tests:any;
defalut_url:string='test.cooparmy3.com'
url:string='';
url_pom:any='';
// url:string=``;
// url:string = `http://192.168.1.107:4000/`;
// url:string = `http://192.168.100.103:4000/`;
// url:string=`https://whatdadev.herokuapp.com/`;
// url:string = `http://192.168.43.50:4000/`;
// url:string = `http://test.cooparmy3.com/coop/api_mobile/app.php`;
// url:string = `http://192.168.43.50/coop/api_mobile/app.php`;
// url:string = `http://test.coopmoj.org/coop/api_mobile/app.php`;

// url:string = `http://192.168.100.110:4500/`;
// url:string = `http://192.168.100.144:4000/`;


 apikey:any='c52c90744ab65d13cd6732390a72c0bb';
board_Category:any='BOARD_TOPIC';
board_Category_ans:any='BOARD_ANS';
// membership_no:any=''

// ------------------------ all link ------------------------------
ws_mem_status:any='ws_mem_status';
ws_mem_share_statement:any='ws_mem_share_statement';
ws_mem_share_statement_head:any='ws_mem_share_statement_head';
// sc_confirm_register:any='sc_confirm_register';
ws_mem_coll:any='ws_mem_coll';
ws_mem_recrieve_gain:any='ws_mem_recrieve_gain';
ws_mem_loan:any='ws_mem_loan';
ws_mem_loan_coll:any='ws_mem_loan_coll';
ws_mem_keep_det:any='ws_mem_keep_det';
ws_mem_loan_statement:any='ws_mem_loan_statement';
ws_mem_disposit:any='ws_mem_disposit';
ws_mem_disposit_statement_head:any='ws_mem_disposit_statement_head';
ws_mem_disposit_statement:any='ws_mem_disposit_statement';
ws_mem_dividend:any='ws_mem_dividend';
login:any='login';
ws_mem_loan_item='ws_mem_loan_item';
ws_mem_change_password='ws_mem_change_password';
www_board='www_board';
www_board_ans='www_board_ans';
www_board_ans_direct='www_board_ans_direct';
www_data_limit='www_data_limit';
www_data='www_data';
www_data_detail='www_data_detail';
ws_mem_keep_det_distinct='ws_mem_keep_det_distinct';
ws_mem_keep_det_statement='ws_mem_keep_det_statement';
post_board_ans='post_board_ans';
post_board='post_board';
print_pdf_det='http://test.cooparmy3.com/coop/print_pdf_kep_mobile.php?'
www_board_distrinct='www_board_distrinct';

  constructor(
    
    private storage:Storage,
    private http:HttpClient,
    public callfunction:FunctionService
        ) { 


          this.storage.get('url').then((val) => {
          this.url_pom = val
          console.log(this.url_pom);
          if(this.url_pom == null){
            
          this.url=`http://${this.defalut_url}/coop/api_mobile/app.php`;
        }else{

          this.url=`http://${this.url_pom}/coop/api_mobile/app.php`;
        }
          });

  }
  
  Set_Storage_membership_no(membership_no){
    this.storage.set('membership_no',membership_no.toString());
  }
  Set_Storage_member_key(mem_password){
    this.storage.set('mem_password',mem_password.toString());
  }
  Storage_membership_no(){
    
    // this.membership_no ="0000091"
    this.storage.get('membership_no').then((val) => {
    this.membership_no = val.toString();
});
return this.membership_no;
  }

  postphp(body){
    return this.http.post(`${this.url}`,body);
  }

  gethttp(part,parametor,apikey) {
    return this.http.get(`${this.url}${part}/${parametor}/${apikey}`);
  }
  gethttpall(part,apikey) {
    return this.http.get(`${this.url}${part}/${apikey}`);
  }
  posthttps(part,body,apikey){
    return this.http.post(`${this.url}${part}/${apikey}`,body);

  }
  posthttp(part,body){
    return this.http.post(`${this.url}${part}`,body);

  }
  print_pdf(membership_no,month,year){
    return `${this.print_pdf_det}membership_no=${membership_no}&month=${month}&year=${year}`


// tests ='0000091';
//  let body = {
//     // membership_no:'0000091'
//     membership_no:this.tests
    
//              };
// this.data = this.Http.post(`http://192.168.100.133:4000/ws_mem_share_statement_head_post`,body);
// this.data = this.Http.post(`http://192.168.100.130:4000/ws_mem_share_statement_head_post`,body);
// data = this.Http.post(`http://192.168.100.104:4000/ws_mem_share_statement_head_post`,body);
// this.data = this.Http.post(`http://192.168.43.50:4000/ws_mem_share_statement_head_post`,body);


// this.data.subscribe(result =>{
// this.items = result;
// // console.log(this.items);
// this.sharestatement = result;
// this.mainshow = true;
// this.loadshow = false;

// console.log(this.sharestatement);
// this.sharestock = result.share_stock;
// });
  }
}
