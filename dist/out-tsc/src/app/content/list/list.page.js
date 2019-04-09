import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../coop/system/services.service';
var ListPage = /** @class */ (function () {
    function ListPage(router, navigate, storage, Http, loadingController, service) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.membership_no = '';
        this.membership_no_test = '';
        this.Category = 'photo';
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.www_data;
            _this.data = service.gethttpall(_this.part, _this.service.apikey);
            _this.data.subscribe(function (result) {
                _this.items = result;
                // this.board = result;
                console.log(_this.items);
                // ------------------------------------- MAp Space
            });
        });
    }
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage.prototype.show = function (item) {
        this.storage.set('www_data_No', item);
        console.log('set No is ' + item);
        this.router.navigate(['/show']);
    };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.page.html',
            styleUrls: ['./list.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map