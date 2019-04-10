import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../system/services.service';
var MemLoanStatementPage = /** @class */ (function () {
    function MemLoanStatementPage(router, navigate, storage, Http, loadingController, service) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.test = "First";
        this.itemm = '';
        this.items = null;
        this.tests = '';
        this.membership_no = '';
        this.loan_main = '';
        // ---------
        this.loan_head = '';
        this.loan = '';
        this.loan_no = '';
        this.loan_statement = '';
        this.loan_item_description = '';
        this.mainshow = false;
        this.loadshow = true;
        this.balance = '';
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            storage.get('loan_contract_no').then(function (val) {
                _this.loan_no = val.toString();
                console.log("this is loan_statement inside " + _this.loan_no);
                // *----------------------HTTP ------------------------------------------------
                _this.part_loan = service.ws_mem_loan;
                _this.data_loan = service.gethttp(_this.part_loan, _this.membership_no, _this.service.apikey);
                _this.data_loan.subscribe(function (results) {
                    _this.loan_main = results;
                    console.log(_this.loan_main);
                    _this.part_head = service.ws_mem_loan_item;
                    _this.data_head = service.gethttp(_this.part_head, _this.loan_no, _this.service.apikey);
                    _this.data_head.subscribe(function (results) {
                        _this.loan_head = results;
                        _this.mainshow = true;
                        _this.loadshow = false;
                        _this.loan_item_description = results.map(_this.service.callfunction.getloan_type_description);
                        _this.loan_item_description = _this.loan_item_description.toString();
                        console.log(_this.loan_head);
                        _this.part = service.ws_mem_loan_statement;
                        _this.data = service.gethttp(_this.part, _this.loan_no, _this.service.apikey);
                        _this.data.subscribe(function (results) {
                            _this.items = results;
                            _this.loan_statement = results;
                            console.log(_this.items);
                            _this.part2 = service.ws_mem_loan_coll;
                            console.log(_this.part2);
                            _this.data2 = service.gethttp(_this.part2, _this.loan_no, _this.service.apikey);
                            _this.data2.subscribe(function (results) {
                                _this.itemm = results;
                                // this.loan_statement=results;
                                // this.mainshow = true;
                                // this.loadshow = false;
                                console.log(_this.itemm);
                            });
                            // this.balance = this.loan_main.map(this.service.callfunction.getprincipal_balance);
                            // this.balance = this.balance.toString();
                            _this.balance = _this.loan_main.map(_this.service.callfunction.getprincipal_balance);
                            _this.balance = _this.balance.toString();
                        });
                    });
                });
            });
        });
    }
    MemLoanStatementPage.prototype.ngOnInit = function () {
    };
    MemLoanStatementPage = tslib_1.__decorate([
        Component({
            selector: 'app-mem-loan-statement',
            templateUrl: './mem-loan-statement.page.html',
            styleUrls: ['./mem-loan-statement.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], MemLoanStatementPage);
    return MemLoanStatementPage;
}());
export { MemLoanStatementPage };
//# sourceMappingURL=mem-loan-statement.page.js.map