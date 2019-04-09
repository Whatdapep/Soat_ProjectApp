import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { FunctionService } from './function.service';
var ServicesService = /** @class */ (function () {
    function ServicesService(storage, http, callfunction) {
        this.storage = storage;
        this.http = http;
        this.callfunction = callfunction;
        // md5 = require('md5');
        this.membership_no_str = '0000091';
        // url:string=``;
        // url:string = `http://192.168.1.107:4000/`;
        // url:string = `http://192.168.100.103:4000/`;
        this.url = "http://192.168.43.50:4000/";
        // url:string = `http://192.168.100.144:4000/`;
        this.apikey = 'c52c90744ab65d13cd6732390a72c0bb';
        this.board_Category = 'BOARD_TOPIC';
        this.board_Category_ans = 'BOARD_ANS';
        // ------------------------ all link ------------------------------
        this.ws_mem_status = 'ws_mem_status';
        this.ws_mem_share_statement = 'ws_mem_share_statement';
        this.ws_mem_share_statement_head = 'ws_mem_share_statement_head';
        this.sc_confirm_register = 'sc_confirm_register';
        this.ws_mem_coll = 'ws_mem_coll';
        this.ws_mem_recrieve_gain = 'ws_mem_recrieve_gain';
        this.ws_mem_loan = 'ws_mem_loan';
        this.ws_mem_loan_coll = 'ws_mem_loan_coll';
        this.ws_mem_keep_det = 'ws_mem_keep_det';
        this.ws_mem_loan_statement = 'ws_mem_loan_statement';
        this.ws_mem_disposit = 'ws_mem_disposit';
        this.ws_mem_disposit_statement_head = 'ws_mem_disposit_statement_head';
        this.ws_mem_disposit_statement = 'ws_mem_disposit_statement';
        this.ws_mem_dividend = 'ws_mem_dividend';
        this.login_post = 'login_post';
        this.ws_mem_loan_item = 'ws_mem_loan_item';
        this.ws_mem_change_password = 'ws_mem_change_password';
        this.www_board = 'www_board';
        this.www_board_ans = 'www_board_ans';
        this.www_data_limit = 'www_data_limit';
        this.www_data = 'www_data';
        this.www_data_detail = 'www_data_detail';
        this.ws_mem_keep_det_distinct = 'ws_mem_keep_det_distinct';
        this.ws_mem_keep_det_statement = 'ws_mem_keep_det_statement';
        this.post_board_ans = 'post_board_ans';
        this.post_board = 'post_board';
    }
    ServicesService.prototype.Set_Storage_membership_no = function (membership_no) {
        this.storage.set('membership_no', membership_no.toString());
    };
    ServicesService.prototype.Set_Storage_member_key = function (mem_password) {
        this.storage.set('mem_password', mem_password.toString());
    };
    ServicesService.prototype.Storage_membership_no = function () {
        var _this = this;
        // this.membership_no ="0000091"
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
        });
        return this.membership_no;
    };
    ServicesService.prototype.gethttp = function (part, parametor, apikey) {
        return this.http.get("" + this.url + part + "/" + parametor + "/" + apikey);
    };
    ServicesService.prototype.gethttpall = function (part, apikey) {
        return this.http.get("" + this.url + part + "/" + apikey);
    };
    ServicesService.prototype.posthttps = function (part, body, apikey) {
        return this.http.post("" + this.url + part + "/" + apikey, body);
    };
    ServicesService.prototype.posthttp = function (part, body) {
        return this.http.post("" + this.url + part, body);
    };
    ServicesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage,
            HttpClient,
            FunctionService])
    ], ServicesService);
    return ServicesService;
}());
export { ServicesService };
//# sourceMappingURL=services.service.js.map