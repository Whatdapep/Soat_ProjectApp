import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../../coop/system/services.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
// import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
var ShowPage = /** @class */ (function () {
    function ShowPage(router, navigate, storage, Http, loadingController, service, Webview, InAppBrowser, themeableBrowser
    // private Option:InAppBrowserOptions
    ) {
        var _this = this;
        this.router = router;
        this.navigate = navigate;
        this.storage = storage;
        this.Http = Http;
        this.loadingController = loadingController;
        this.service = service;
        this.Webview = Webview;
        this.InAppBrowser = InAppBrowser;
        this.themeableBrowser = themeableBrowser;
        this.membership_no = '';
        this.membership_no_test = '';
        this.Category = 'photo';
        this.No = '';
        this.Note = '';
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val.toString();
            console.log("this is get Storage" + _this.membership_no);
            _this.storage.get('www_data_No').then(function (val) {
                _this.No = val.toString();
                console.log("this is get No" + _this.No);
                // *----------------------HTTP ------------------------------------------------
                _this.part = service.www_data_detail;
                _this.data = service.gethttp(_this.part, _this.No, _this.service.apikey);
                _this.data.subscribe(function (result) {
                    _this.items = result;
                    // this.board = result;
                    console.log(_this.items);
                    // ------------------------------------- MAp Spacet
                    _this.Note = _this.items.map(_this.service.callfunction.getNote);
                    // this.Note = this.Note.toString();
                });
            });
        });
    }
    ShowPage.prototype.ngOnInit = function () {
    };
    ShowPage.prototype.webclick = function () {
        // const Options:InAppBrowserOptions ={
        //   Zoom:'no'
        // }
        var browser = this.InAppBrowser.create('https://www.google.com/', '_self', { location: 'no' });
        // browser.executeScript(...);
        // browser.insertCSS(...);
        browser.on('loadstop').subscribe(function (event) {
            browser.insertCSS({ code: "body{color: red;" });
        });
        browser.close();
    };
    ShowPage.prototype.webnew = function () {
        // https://ionicframework.com/docs/native/themeable-browser/
        // const options: ThemeableBrowserOptions = {
        //   toolbar: {
        //     height: 44,
        //     color: '#3573bbff'
        //   },
        //   title: {
        //     color: '#ffffffff',
        //     showPageTitle: true,
        //     staticText: 'Academy Browser'
        //   },
        //   backButton: {
        //     wwwImage: 'assets/img/back.png',
        //     align: 'left',
        //     event: 'backPressed'
        //   },
        //   forwardButton: {
        //     wwwImage: 'assets/img/forward.png',
        //     align: 'left',
        //     event: 'forwardPressed'
        //   },
        //   closeButton: {
        //     wwwImage: 'assets/img/close.png',
        //     align: 'left',
        //     event: 'closePressed'
        //   },
        // };
        var options = {
            statusbar: {
                color: '#ffffffff'
            },
            toolbar: {
                height: 44,
                color: '#f0f0f0ff'
            },
            title: {
                color: '#003264ff',
                showPageTitle: true
            },
            backButton: {
                image: 'back',
                imagePressed: 'back_pressed',
                align: 'left',
                event: 'backPressed'
            },
            forwardButton: {
                image: 'forward',
                imagePressed: 'forward_pressed',
                align: 'left',
                event: 'forwardPressed'
            },
            closeButton: {
                image: 'close',
                imagePressed: 'close_pressed',
                align: 'left',
                event: 'closePressed'
            },
            customButtons: [
                {
                    image: 'share',
                    imagePressed: 'share_pressed',
                    align: 'right',
                    event: 'sharePressed'
                }
            ],
            menu: {
                image: 'menu',
                imagePressed: 'menu_pressed',
                title: 'Test',
                cancel: 'Cancel',
                align: 'right',
                items: [
                    {
                        event: 'helloPressed',
                        label: 'Hello World!'
                    },
                    {
                        event: 'testPressed',
                        label: 'Test!'
                    }
                ]
            },
            backButtonCanClose: true
        };
        var browser = this.themeableBrowser.create('https://ionicacademy.com', '_blank', options);
        browser.on('closePressed').subscribe(function (data) {
            browser.close();
        });
    };
    ShowPage = tslib_1.__decorate([
        Component({
            selector: 'app-show',
            templateUrl: './show.page.html',
            styleUrls: ['./show.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            NavController,
            Storage,
            HttpClient,
            LoadingController,
            ServicesService,
            WebView,
            InAppBrowser,
            ThemeableBrowser
            // private Option:InAppBrowserOptions
        ])
    ], ShowPage);
    return ShowPage;
}());
export { ShowPage };
//# sourceMappingURL=show.page.js.map