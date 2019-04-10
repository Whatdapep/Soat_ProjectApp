import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemDispositPage = /** @class */ (function () {
    function MemDispositPage(router, navigate, storage, Http, loadingController, service) {
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
        // ---------
        this.disposit = '';
        this.mainshow = false;
        this.loadshow = true;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.ws_mem_disposit;
            _this.data = service.gethttp(_this.part, _this.membership_no, _this.service.apikey);
            _this.data.subscribe(function (results) {
                _this.items = results;
                _this.mainshow = true;
                _this.loadshow = false;
                console.log(_this.items);
            });
        });
    }
    MemDispositPage.prototype.chkstatement = function (item) {
        // console.log("Hello your");
        this.storage.set('deposit_account_no', item);
        console.log('set Storage is ' + item);
        // console.log(item);
        this.router.navigate(['/mem-disposit-statement']);
    };
    MemDispositPage.prototype.ngOnInit = function () {
    };
    MemDispositPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-disposit',
            templateUrl: './mem-disposit.page.html',
            styleUrls: ['./mem-disposit.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemDispositPage);
    return MemDispositPage;
}());
export { MemDispositPage };
//# sourceMappingURL=mem-disposit.page.js.map