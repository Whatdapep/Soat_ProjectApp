import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../system/services.service';
var MenuPage = /** @class */ (function () {
    function MenuPage(router, navigate, storage, Http, loadingController, service) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.test = "First";
        this.tests = '';
        this.membership_no = '';
        this.membership_no_test = '';
        this.passcode = '';
        this.mainshow = false;
        this.loadshow = true;
        this.storage.get('passcode').then(function (val) {
            _this.passcode = val;
            if (_this.passcode != null) {
            }
            else {
                _this.router.navigate(['/authcode']);
            }
            console.log("the passcode is" + _this.passcode);
            function getsharestock(item, index) {
                var fullname = [item.index];
                return fullname;
            }
            _this.storage.get('membership_no').then(function (val) {
                _this.membership_no = val.toString();
                console.log("this is get Storage" + _this.membership_no);
                // *----------------------HTTP ------------------------------------------------
                _this.part = service.ws_mem_share_statement_head;
                _this.data = service.gethttp(_this.part, _this.membership_no, _this.service.apikey);
                _this.data.subscribe(function (result) {
                    _this.items = result;
                    _this.sharestatement = result;
                    _this.mainshow = true;
                    _this.loadshow = false;
                    console.log(_this.sharestatement);
                    _this.sharestock = result.share_stock;
                    _this.part2 = service.sc_confirm_register;
                    _this.data2 = service.gethttp(_this.part2, _this.membership_no, _this.service.apikey);
                    _this.data2.subscribe(function (result) {
                        _this.memberdetail = result;
                        console.log(_this.memberdetail);
                    });
                    // ------------------------------------- MAp Space
                    var share_stock = share_stock;
                    var item2 = item2;
                    _this.sharestock = result.map(_this.service.callfunction.getsharestock);
                    // this.sharestock = result.map(getsharestock('',share_stock));
                    _this.sharestock = _this.sharestock.toString();
                    console.log("this is sharestock" + _this.sharestock);
                });
            });
        });
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.prototype.backmain = function () {
        // this.mainshow= true;
        // this.loanshow=false;
    };
    MenuPage.prototype.share = function () {
        console.log("i just Click it");
        // this.test = "share test ";
        this.router.navigate(['/mem-share-statement']);
    };
    MenuPage.prototype.dep = function () {
        console.log("i just Click it");
        // this.test = "pomming Heelo ";
        this.router.navigate(['/mem-disposit']);
        // this.router.navigate(['/authcode']);
    };
    MenuPage.prototype.loan = function () {
        console.log("i just Click Good");
        // this.mainshow = false;
        // this.loanshow = true;
        this.router.navigate(['/mem-loan']);
    };
    MenuPage.prototype.kep = function () {
        // console.log("i just Click Good");
        this.router.navigate(['/mem-keep-det']);
    };
    MenuPage.prototype.dividend = function () {
        // console.log("i just Click dividend");
        this.router.navigate(['/mem-dividend']);
    };
    MenuPage = tslib_1.__decorate([
        Component({
            selector: 'app-menu',
            templateUrl: './menu.page.html',
            styleUrls: ['./menu.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.page.js.map