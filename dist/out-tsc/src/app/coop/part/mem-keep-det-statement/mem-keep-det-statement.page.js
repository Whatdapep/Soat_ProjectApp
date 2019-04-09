import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemKeepDetStatementPage = /** @class */ (function () {
    function MemKeepDetStatementPage(router, navigate, storage, Http, loadingController, service) {
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
        this.receive_month = '';
        this.receive_year = '';
        this.seq_no = '';
        this.receive_month_fp = '';
        this.money_amount = '';
        // ---------
        this.keep = '';
        this.mainshow = false;
        this.loadshow = true;
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            _this.storage.get('receive_year').then(function (val) {
                _this.receive_year = val.toString();
                console.log("this is get year" + _this.receive_year);
                _this.storage.get('receive_month').then(function (val) {
                    _this.receive_month = val.toString();
                    console.log("this is get month" + _this.receive_month);
                    _this.storage.get('seq_no').then(function (val) {
                        _this.seq_no = val.toString();
                        console.log("this is get seq_no" + _this.seq_no);
                        // *----------------------HTTP ------------------------------------------------
                        var body = {
                            membership_no: _this.membership_no,
                            receive_year: _this.receive_year,
                            receive_month: _this.receive_month
                        };
                        _this.part = service.ws_mem_keep_det_distinct;
                        _this.data = service.posthttps(_this.part, body, _this.service.apikey);
                        _this.data.subscribe(function (results) {
                            _this.items = results;
                            _this.mainshow = true;
                            _this.loadshow = false;
                            console.log(_this.items);
                            _this.money_amount = _this.items.map(_this.service.callfunction.getmoney_amount);
                            _this.money_amount = _this.money_amount.toString();
                            _this.receive_month_fp = _this.items.map(_this.service.callfunction.getreceive_month_fp);
                            _this.receive_month_fp = _this.receive_month_fp.toString();
                            var body2 = {
                                membership_no: _this.membership_no,
                                receive_year: _this.receive_year,
                                receive_month: _this.receive_month,
                                seq_no: _this.seq_no
                            };
                            _this.part2 = service.ws_mem_keep_det_statement;
                            _this.data2 = service.posthttps(_this.part2, body2, _this.service.apikey);
                            _this.data2.subscribe(function (results2) {
                                _this.keep = results2;
                                _this.mainshow = true;
                                _this.loadshow = false;
                                console.log(_this.keep);
                            });
                        });
                    });
                });
            });
        });
    }
    MemKeepDetStatementPage.prototype.ngOnInit = function () {
    };
    MemKeepDetStatementPage.prototype.print_keep_det = function () {
        console.log("click Print");
    };
    MemKeepDetStatementPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-keep-det-statement',
            templateUrl: './mem-keep-det-statement.page.html',
            styleUrls: ['./mem-keep-det-statement.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemKeepDetStatementPage);
    return MemKeepDetStatementPage;
}());
export { MemKeepDetStatementPage };
//# sourceMappingURL=mem-keep-det-statement.page.js.map