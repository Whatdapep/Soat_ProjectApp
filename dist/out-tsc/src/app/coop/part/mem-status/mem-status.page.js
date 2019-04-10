import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
// use JWT() for decode. Not jwt-decode() !!
// import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';
var MemStatusPage = /** @class */ (function () {
    function MemStatusPage(router, navigate, storage, Http, loadingController, service) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.test = "First";
        this.items = null;
        this.tests = '';
        this.membership_no = '';
        this.mem_password = '';
        this.token = '';
        this.mainshow = false;
        this.loadshow = true;
        // ---------------------------------Storage ---------------------------------------
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.ws_mem_status;
            // this.part = 'sc_confirm_register/0000091/c52c90744ab65d13cd6732390a72c0bb';
            _this.data = service.gethttp(_this.part, _this.membership_no, _this.service.apikey);
            // this.data = service.https(this.part);
            _this.data.subscribe(function (results) {
                _this.items = results.toString(_this.service.callfunction.getnametoken);
                _this.mainshow = true;
                _this.loadshow = false;
                console.log(_this.items);
                // var tokentest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHRzIjpbeyJzZXEiOjAsIm1lbWJlcnNoaXBfbm8iOiIwMDAwMDkxIiwibWVtX2lkIjoiMzY0MDQwMDIwMzg0NiIsIm1lbWJlcl9uYW1lIjoi4Lit4Li04LiX4LiY4Li04Lie4LilIiwibWVtYmVyX3N1cm5hbWUiOiLguKfguLHguJnguYDguJ7guYfguI0iLCJtZW1fZW1haWwiOm51bGwsIm1lbV9wYXNzd29yZCI6IjZiZjhkNGRkOTM2ZjUxMTgxN2ZhOTZkYjk1N2I5YjM0IiwibWVtX2NvbmZpcm0iOiIxIiwiRGF0ZSI6bnVsbCwib3BlcmF0ZV9kYXRlIjoiMjAxOS0wMS0xNlQwNjo1MDoyMS4wMDBaIn1dLCJpYXQiOjE1NTQwMjIwMzYsImV4cCI6MTU1NDAyNTYzNn0.0nSbtX-z85lNkqWEJTZdsGaXNZFCwTMhK6Fu7YesEP4'
                // let t = JWT(tokentest);
                // let t = JWT(this.items.toString());
                // console.log(t);
                // ------------------------------------- MAp Space------------------------------------------------
                _this.token = results.map(_this.service.callfunction.gettoken);
                _this.token = _this.token.toString();
                console.log(_this.token);
                _this.member_name = results.map(_this.service.callfunction.getname);
                _this.member_name = _this.member_name.toString();
                // console.log("this is name"+this.member_name)
                _this.member_surname = results.map(_this.service.callfunction.getsurname);
                _this.member_surname = _this.member_surname.toString();
                _this.date_of_birth = results.map(_this.service.callfunction.getdateborn);
                _this.date_of_birth = _this.date_of_birth.toString();
                console.log(_this.date_of_birth);
                _this.approve_date = results.map(_this.service.callfunction.getapprove);
                _this.approve_date = _this.approve_date.toString();
                _this.id_card = results.map(_this.service.callfunction.getid_card);
                _this.id_card = _this.id_card.toString();
                _this.member_group_name = results.map(_this.service.callfunction.getgroupname);
                _this.member_group_name = _this.member_group_name.toString();
                _this.position_name = results.map(_this.service.callfunction.getposition);
                _this.position_name = _this.position_name.toString();
                _this.address_present = results.map(_this.service.callfunction.getaddress_present);
                _this.address_present = _this.address_present.toString();
            });
        });
    }
    MemStatusPage.prototype.gain = function () {
        this.router.navigate(['/mem-gain']);
    };
    MemStatusPage.prototype.coll = function () {
        this.router.navigate(['/mem-coll']);
    };
    MemStatusPage.prototype.mem_change = function () {
        console.log("i click mem_change()");
        this.router.navigate(['/mem-change-password']);
        // this.router.navigate(['/share-statement']);
    };
    MemStatusPage.prototype.logout = function () {
        console.log("i click logout()");
        this.storage.clear();
        this.router.navigate(['/logon']);
        // clear()
    };
    MemStatusPage.prototype.ngOnInit = function () {
    };
    MemStatusPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-status',
            templateUrl: './mem-status.page.html',
            styleUrls: ['./mem-status.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemStatusPage);
    return MemStatusPage;
}());
export { MemStatusPage };
//# sourceMappingURL=mem-status.page.js.map