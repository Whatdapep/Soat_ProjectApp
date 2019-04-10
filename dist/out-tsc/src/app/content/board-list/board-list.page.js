import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../coop/system/services.service';
var BoardListPage = /** @class */ (function () {
    function BoardListPage(router, navigate, storage, Http, loadingController, service, alertController, modal) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.alertController = alertController;
        this.modal = modal;
        this.membership_no = '';
        this.membership_no_test = '';
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            _this.storage.get('member_name').then(function (val) {
                _this.member_name = val;
                // *----------------------HTTP ------------------------------------------------
                _this.part = service.www_board;
                _this.data = service.gethttpall(_this.part, _this.service.apikey);
                _this.data.subscribe(function (result) {
                    _this.items = result;
                    // this.board = result;
                    console.log(_this.items);
                    // ------------------------------------- MAp Space
                });
            });
        });
    }
    BoardListPage.prototype.ngOnInit = function () {
    };
    //   async presentModal() {
    //     const modal = await this.modal.create({
    //       component: ModalPage,
    //       componentProps: { value: 123 }
    //     });
    //     return await modal.present();
    //   }
    // }
    BoardListPage.prototype.board_post_alert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'กระดานสนทนาใหม่',
                            inputs: [
                                {
                                    name: 'Question',
                                    type: 'text',
                                    id: 'Question',
                                    placeholder: 'หัวข้อ.. .'
                                },
                                {
                                    name: 'Note',
                                    type: 'text',
                                    id: 'Note',
                                    placeholder: 'รายละเอียด'
                                }
                            ],
                            // message:[
                            //   {
                            //     name:'test',
                            //     placeholder:'iายละเอียด'
                            //   }
                            // ],
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'ตกลง',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                        var body = {
                                            Category: _this.service.board_Category,
                                            Question: body.id.Question,
                                            Msg: body.id.Note,
                                            Name: _this.member_name,
                                            IP: '',
                                            Date: new Date()
                                        };
                                        _this.part2 = _this.service.post_board;
                                        _this.data2 = _this.service.posthttps(_this.part2, _this.service.apikey, body);
                                        _this.data2.subscribe(function (result) {
                                            console.log(result);
                                        });
                                        //   Category:req.body.Category,
                                        // Question:req.body.Question,
                                        // QNote:req.body.QNote,
                                        // QName:req.body.QName,
                                        // IP:req.body.IP,
                                        // Date:req.body.Date,
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
    BoardListPage.prototype.board_detail = function (item) {
        this.storage.set('No', item);
        console.log('set No is ' + item);
        this.router.navigate(['/board-detail']);
    };
    BoardListPage.prototype.board_post = function () {
        this.board_post();
        // this.router.navigate(['/board-post']);
    };
    BoardListPage = tslib_1.__decorate([
        Component({
            selector: 'app-board-list',
            templateUrl: './board-list.page.html',
            styleUrls: ['./board-list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService,
            AlertController,
            ModalController])
    ], BoardListPage);
    return BoardListPage;
}());
export { BoardListPage };
//# sourceMappingURL=board-list.page.js.map