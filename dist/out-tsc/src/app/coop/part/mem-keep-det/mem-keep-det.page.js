import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemKeepDetPage = /** @class */ (function () {
    function MemKeepDetPage(router, navigate, storage, Http, loadingController, service) {
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
        this.keep = '';
        this.color = [
            "warning",
            "secondary",
            "success"
        ];
        this.colorrandom = '';
        this.mainshow = false;
        this.loadshow = true;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.ws_mem_keep_det;
            _this.data = service.gethttp(_this.part, _this.membership_no, _this.service.apikey);
            _this.data.subscribe(function (results) {
                _this.items = results;
                _this.mainshow = true;
                _this.loadshow = false;
                console.log(_this.items);
                _this.colorrandom = _this.color[Math.floor(Math.random() * _this.color.length)];
            });
        });
    }
    MemKeepDetPage.prototype.ngOnInit = function () {
    };
    MemKeepDetPage.prototype.keep_det_statement = function (itemref, year, month, seq_no) {
        this.storage.set('kep_method_ref', itemref);
        console.log('set Storage is ' + itemref);
        this.storage.set('receive_year', year);
        console.log('set Storage is ' + year);
        this.storage.set('receive_month', month);
        console.log('set Storage is ' + month);
        this.storage.set('seq_no', seq_no);
        console.log('set seq_no is ' + seq_no);
        this.router.navigate(['/mem-keep-det-statement']);
    };
    MemKeepDetPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-keep-det',
            templateUrl: './mem-keep-det.page.html',
            styleUrls: ['./mem-keep-det.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemKeepDetPage);
    return MemKeepDetPage;
}());
export { MemKeepDetPage };
//# sourceMappingURL=mem-keep-det.page.js.map