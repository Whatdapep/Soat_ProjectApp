import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { ServicesService } from '../coop/system/services.service';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
// import { Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
var LogonPage = /** @class */ (function () {
    function LogonPage(navCtrl, alertController, router, Http, storage, loadingController, service, NetworkInterface, Device, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.Http = Http;
        this.storage = storage;
        this.loadingController = loadingController;
        this.service = service;
        this.NetworkInterface = NetworkInterface;
        this.Device = Device;
        this.platform = platform;
        this.member = '';
        this.time = 1000;
        this.member_surname = '';
        this.member_key = '';
        this.ip = '';
        this.membership_no = '';
        this.storage.get('membership_no').then(function (val) {
            _this.membership_no = val;
            if (_this.membership_no == null) {
            }
            else {
                _this.router.navigate(['/footer']);
                console.log("the membership_no is" + _this.membership_no);
                // this.service.Set_Storage_membership_no(members);
                // this.service.Set_Storage_member_key(this.password);
                // this.storage.set('member_name',this.member_name);
            }
        });
        if (this.platform.is('android') || this.platform.is('ios') || this.platform.is('desktop')) {
            this.plat = true;
            console.log("this is Platform test" + this.plat);
        }
        else {
            console.log("this is Platform test False");
        }
        // is(desktop:platforms) => this.plat = true
        this.NetworkInterface.getWiFiIPAddress()
            .then(function (address) { return console.info("IP: " + address.ip.toString() + ", Subnet: " + address.subnet.toString()); })
            .catch(function (error) { return console.error("Unable to get IP: " + error); });
        this.NetworkInterface.getCarrierIPAddress()
            .then(function (address) { return console.info("IP: " + address.ip + ", Subnet: " + address.subnet); })
            .catch(function (error) { return console.error("Unable to get IP: " + error); });
        var url = 'www.github.com';
        this.NetworkInterface.getHttpProxyInformation(url)
            .then(function (proxy) { return console.info("Type: " + proxy.type + ", Host: " + proxy.host + ", Port: " + proxy.port); })
            .catch(function (error) { return console.error("Unable to get proxy info: " + error); });
    }
    LogonPage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            // subHeader: 'Subtitle',
                            message: 'Please Enter Username and Password Correctly',
                            buttons: ['OK']
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
    LogonPage.prototype.LoginComplete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            // subHeader: 'Subtitle',
                            message: 'Hello' + this.member_name + 'Wellcome',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        setTimeout(function () {
                            _this.router.navigate(['/footer']);
                        }, 2000);
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 
    LogonPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Hellooo',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    LogonPage.prototype.presentLoadingWithOptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'dots',
                            duration: this.time,
                            message: 'Please wait...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // -*--------------------------------------------------------------------------
    LogonPage.prototype.uid = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.log('Device UUID is: ' + _this.Device.uuid);
            _this.NetworkInterface.getWiFiIPAddress()
                .then(function (address) { return console.info("IP: " + address.ip + ", Subnet: " + address.subnet); })
                .catch(function (error) { return console.error("Unable to get IP: " + error); });
        });
    };
    LogonPage.prototype.login = function () {
        var _this = this;
        // this.presentLoadingWithOptions();
        this.service.callfunction.presentLoadingWithOptions();
        if ((this.username != null) || (this.password != null)) {
            console.log(" Username is " + this.username);
            console.log(" Password is " + this.password);
            var body = {
                membership_no: this.username,
                mem_password: this.password
            };
            this.part = this.service.login_post;
            this.data = this.service.posthttp(this.part, body);
            this.data.subscribe(function (result) {
                _this.items = result;
                _this.members = result;
                console.log(_this.members);
                _this.membership_no_new = result.map(_this.service.callfunction.getmembership_no);
                _this.member_key = result.map(_this.service.callfunction.getmem_password);
                _this.member_name = result.map(_this.service.callfunction.getname);
                _this.member_surname = result.map(_this.service.callfunction.getsurname);
                _this.member_name = _this.member_name + _this.member_surname;
                if (_this.membership_no_new != '') {
                    // this.presentLoadingWithOptions() = false;
                    _this.time = 1;
                    //  this.LoginComplete();
                    _this.service.callfunction.LoginComplete(_this.member_name);
                    console.log(_this.time);
                }
                else {
                    _this.service.callfunction.Loginfalse();
                }
                //  var members = this.membership_no_new;
                var members = '0000123';
                // this.storage.set('membership_no',this.membership_no_new.toString());
                _this.service.Set_Storage_membership_no(members);
                _this.service.Set_Storage_member_key(_this.password);
                _this.storage.set('member_name', _this.member_name);
                console.log('set member_name is ' + _this.member_name);
                // this.storage.set('membership_no',members.toString());
            });
        }
    };
    LogonPage.prototype.ngOnInit = function () {
    };
    LogonPage = tslib_1.__decorate([
        Component({
            selector: 'app-logon',
            templateUrl: './logon.page.html',
            styleUrls: ['./logon.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AlertController,
            Router,
            HttpClient,
            Storage,
            LoadingController,
            ServicesService,
            NetworkInterface,
            Device,
            Platform])
    ], LogonPage);
    return LogonPage;
}());
export { LogonPage };
//# sourceMappingURL=logon.page.js.map