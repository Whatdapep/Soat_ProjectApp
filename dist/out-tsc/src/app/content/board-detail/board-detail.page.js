import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../coop/system/services.service';
var BoardDetailPage = /** @class */ (function () {
    function BoardDetailPage(router, navigate, storage, Http, loadingController, service, alertController) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.alertController = alertController;
        this.membership_no = '';
        this.membership_no_test = '';
        this.No = '';
        this.member_name = '';
        this.ans = '';
        this.part3 = '';
        this.data3 = '';
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            _this.storage.get('No').then(function (val) {
                _this.No = val.toString();
                console.log("this is get No" + _this.No);
                _this.storage.get('member_name').then(function (val) {
                    _this.member_name = val.toString();
                    console.log("this is get member_name" + _this.member_name);
                    // *----------------------HTTP ------------------------------------------------
                    _this.part = service.www_board;
                    _this.data = service.gethttp(_this.part, _this.No, _this.service.apikey);
                    _this.data.subscribe(function (result) {
                        _this.items = result;
                        // this.board = result;
                        console.log(_this.items);
                        _this.part2 = service.www_board_ans;
                        _this.data2 = service.gethttp(_this.part2, _this.No, _this.service.apikey);
                        _this.data2.subscribe(function (result) {
                            _this.items2 = result;
                            // this.board = result;
                            console.log(_this.items2);
                            // ------------------------------------- MAp Space
                        });
                    });
                });
            });
        });
    }
    BoardDetailPage.prototype.Confirm_board_ans = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'กรุณาตรวจสอบความถูกต้องให้เรียบร้อย!',
                            message: 'คุณแน่ใจหรือไม่ ? ',
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.ans = '';
                                    }
                                }, {
                                    text: 'ตกลง',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        var body = {
                                            Category: "this",
                                            QuestionNo: _this.No,
                                            Msg: _this.ans,
                                            Name: _this.member_name,
                                            IP: '',
                                            Date: ''
                                        };
                                        _this.part3 = _this.service.www_board_ans;
                                        _this.data3 = _this.service.posthttps(_this.part3, _this.service.apikey, body);
                                        _this.data3.subscribe(function (result) {
                                            console.log(result);
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardDetailPage.prototype.ngOnInit = function () {
    };
    BoardDetailPage.prototype.confirm_ans = function () {
        this.Confirm_board_ans();
    };
    BoardDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-board-detail',
            templateUrl: './board-detail.page.html',
            styleUrls: ['./board-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService,
            AlertController])
    ], BoardDetailPage);
    return BoardDetailPage;
}());
export { BoardDetailPage };
//# sourceMappingURL=board-detail.page.js.map