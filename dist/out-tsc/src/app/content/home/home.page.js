import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../coop/system/services.service';
import { Network } from '@ionic-native/network/ngx';
var HomePage = /** @class */ (function () {
    function HomePage(router, navigate, storage, Http, loadingController, service, Network) {
        //  let connectSubscription = Network.onConnect().subscribe(() => {
        //   console.log('network connected!');
        //   // We just got a connection but we need to wait briefly
        //    // before we determine the connection type. Might need to wait.
        //   // prior to doing any api requests as well.
        //   setTimeout(() => {
        //     if (Network.type === 'wifi') {
        //       alert('we got a wifi connection, woohoo!');
        //       // console.log('we got a wifi connection, woohoo!');
        //     }
        //   }, 1000);
        // });
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.Network = Network;
        this.slideOpts = {
            effect: 'flip'
        };
        this.membership_no = '';
        this.membership_no_test = '';
        this.Category = 'photo';
        // // stop connect watch
        // connectSubscription.unsubscribe();
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            // *----------------------HTTP ------------------------------------------------
            _this.part = service.www_data_limit;
            _this.data = service.gethttp(_this.part, _this.Category, _this.service.apikey);
            _this.data.subscribe(function (result) {
                _this.items = result;
                // this.board = result;
                console.log(_this.items);
                // ------------------------------------- MAp Space
            });
        });
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.board = function () {
        this.router.navigate(['/board-list']);
    };
    HomePage.prototype.list = function () {
        this.router.navigate(['/list']);
    };
    HomePage.prototype.show = function (item) {
        this.storage.set('www_data_No', item);
        console.log('set No is ' + item);
        this.router.navigate(['/show']);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService,
            Network])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map