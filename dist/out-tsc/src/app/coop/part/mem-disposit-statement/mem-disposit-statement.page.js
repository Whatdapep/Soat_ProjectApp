import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemDispositStatementPage = /** @class */ (function () {
    function MemDispositStatementPage(router, navigate, storage, Http, loadingController, service) {
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
        this.disposit_no = '';
        this.disposit_statement_head = '';
        this.disposit_statement = '';
        this.mainshow = false;
        this.loadshow = true;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            storage.get('deposit_account_no').then(function (val) {
                _this.disposit_no = val.toString();
                console.log("this is loan_statement inside " + _this.disposit_no);
                // *----------------------HTTP ------------------------------------------------
                _this.part = service.ws_mem_disposit_statement_head;
                _this.data = service.gethttp(_this.part, _this.disposit_no, _this.service.apikey);
                _this.data.subscribe(function (results) {
                    _this.items = results;
                    _this.disposit_statement_head = results;
                    _this.mainshow = true;
                    _this.loadshow = false;
                    console.log(_this.items);
                    _this.part2 = service.ws_mem_disposit_statement;
                    console.log(_this.part2);
                    _this.data2 = service.gethttp(_this.part2, _this.disposit_no, _this.service.apikey);
                    _this.data2.subscribe(function (results) {
                        _this.disposit_statement = results;
                        // this.loan_statement=results;
                        // this.mainshow = true;
                        // this.loadshow = false;
                        console.log(_this.disposit_statement);
                    });
                });
            });
        });
    }
    MemDispositStatementPage.prototype.ngOnInit = function () {
    };
    MemDispositStatementPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-disposit-statement',
            templateUrl: './mem-disposit-statement.page.html',
            styleUrls: ['./mem-disposit-statement.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemDispositStatementPage);
    return MemDispositStatementPage;
}());
export { MemDispositStatementPage };
//# sourceMappingURL=mem-disposit-statement.page.js.map