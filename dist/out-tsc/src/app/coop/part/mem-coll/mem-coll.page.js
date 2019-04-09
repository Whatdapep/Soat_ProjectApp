import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemCollPage = /** @class */ (function () {
    function MemCollPage(router, navigate, storage, Http, loadingController, service) {
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
        this.loan = '';
        this.loan_type = '';
        this.mainshow = false;
        this.loadshow = true;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.ws_mem_coll;
            _this.data = service.gethttp(_this.part, _this.membership_no, _this.service.apikey);
            _this.data.subscribe(function (results) {
                _this.items = results;
                _this.mainshow = true;
                _this.loadshow = false;
                console.log(_this.loan);
            });
        });
    }
    MemCollPage.prototype.ngOnInit = function () {
    };
    MemCollPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-coll',
            templateUrl: './mem-coll.page.html',
            styleUrls: ['./mem-coll.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemCollPage);
    return MemCollPage;
}());
export { MemCollPage };
//# sourceMappingURL=mem-coll.page.js.map