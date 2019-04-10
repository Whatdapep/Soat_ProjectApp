import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemShareStatementPage = /** @class */ (function () {
    function MemShareStatementPage(router, navigate, storage, Http, loadingController, service) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.test = "First";
        this.items_head = null;
        this.items = '';
        this.tests = '';
        this.membership_no = '';
        // ---------
        this.mainshow = false;
        this.share_statement = '';
        this.loadshow = true;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.ws_mem_share_statement_head;
            _this.data = service.gethttp(_this.part, _this.membership_no, _this.service.apikey);
            _this.data.subscribe(function (results) {
                _this.items_head = results;
                _this.mainshow = true;
                _this.loadshow = false;
                console.log(_this.items_head);
                _this.part2 = service.ws_mem_share_statement;
                _this.data2 = service.gethttp(_this.part2, _this.membership_no, _this.service.apikey);
                _this.data2.subscribe(function (results) {
                    _this.items = results;
                    _this.share_statement = results;
                    _this.mainshow = true;
                    _this.loadshow = false;
                    console.log(_this.items);
                });
            });
        });
    }
    MemShareStatementPage.prototype.ngOnInit = function () {
    };
    MemShareStatementPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-share-statement',
            templateUrl: './mem-share-statement.page.html',
            styleUrls: ['./mem-share-statement.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemShareStatementPage);
    return MemShareStatementPage;
}());
export { MemShareStatementPage };
//# sourceMappingURL=mem-share-statement.page.js.map