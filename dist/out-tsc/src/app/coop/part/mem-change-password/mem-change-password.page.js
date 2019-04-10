import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemChangePasswordPage = /** @class */ (function () {
    function MemChangePasswordPage(router, navigate, storage, Http, loadingController, service) {
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
        // ----
        this.member_key = '';
        this.old_password = '';
        this.new_password = '';
        this.confirm_password = '';
    }
    MemChangePasswordPage.prototype.chk = function () {
        var _this = this;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            _this.storage.get('mem_password').then(function (val2) {
                _this.mem_password = val2.toString();
                _this.member_key = val2;
                console.log("this is get mem_password is " + _this.mem_password);
                if (_this.service.callfunction.validate_change_password(_this.old_password, _this.new_password, _this.confirm_password)) {
                    console.log("Confirm Passwords Correct");
                    if (_this.new_password != _this.mem_password) {
                        alert("old passsword not correct");
                        // });
                    }
                    else {
                        console.log("old Passwords Correct");
                        var body = {
                            membership_no: _this.membership_no,
                            mem_password: _this.new_password
                        };
                        // this.part = this.service.ws_mem_change_password;
                        // this.data = this.service.posthttp(this.part,body);
                        // this.data.subscribe(result =>{
                        // this.items = result;
                        // console.log(this.items);
                        // if(this.items != ''){
                        //   this.service.callfunction.Change_password_Complete(this.new_password);
                        // }
                    }
                }
                else {
                    console.log("False");
                }
                console.log("old_password is " + _this.old_password);
                console.log("new_password is " + _this.new_password);
                console.log("confirm_password is " + _this.confirm_password);
            });
        });
    };
    MemChangePasswordPage.prototype.ngOnInit = function () {
    };
    MemChangePasswordPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-change-password',
            templateUrl: './mem-change-password.page.html',
            styleUrls: ['./mem-change-password.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemChangePasswordPage);
    return MemChangePasswordPage;
}());
export { MemChangePasswordPage };
//# sourceMappingURL=mem-change-password.page.js.map