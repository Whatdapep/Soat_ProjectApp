import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ServicesService } from '../services.service';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
var AuthcodePage = /** @class */ (function () {
    function AuthcodePage(alertController, toastController, router, service, fingeraio, storage) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.service = service;
        this.fingeraio = fingeraio;
        this.storage = storage;
        // push=new Array;
        this.passcode = new Array;
        this.passcodestorage = '654321';
        this.shake = false;
        this.main = true;
        this.falsecount = 0;
    }
    AuthcodePage.prototype.keep = function () {
        this.main = true;
        this.shake = false;
        if (this.passcode.length < 6) {
            console.log(this.passcode.length);
        }
        else {
            if (this.passcode.length == 6) {
                var result = this.passcode.toString();
                if (result == this.passcodestorage) {
                    this.storage.set('passcode', result);
                    console.log('set passcode is ' + result);
                    this.service.callfunction.passcodeComplete();
                    // this.router.navigate(['/footer/footer/menu']);
                }
                else {
                    this.falsecount++;
                    // this.Loginfalse();
                    this.passcode = '';
                    this.falsepasscode();
                    // setTimeout(()=>{ 
                    this.shake = true;
                    this.main = false;
                    // },500);
                }
                console.log(result);
                console.log("you are push6");
            }
            else {
                this.Loginfalse();
            }
        }
    };
    AuthcodePage.prototype.Loginfalse = function () {
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
    AuthcodePage.prototype.falsepasscode = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'กรุณากรอกรหัสให้ถูกต้อง ครั้งทึ่ ' + this.falsecount,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    //02-8888888
    AuthcodePage.prototype.ngOnInit = function () {
    };
    AuthcodePage.prototype.one = function () {
        this.passcode = this.passcode + 1;
        this.keep();
    };
    AuthcodePage.prototype.two = function () {
        this.passcode = this.passcode + 2;
        this.keep();
    };
    AuthcodePage.prototype.three = function () {
        this.passcode = this.passcode + 3;
        this.keep();
    };
    AuthcodePage.prototype.four = function () {
        this.passcode = this.passcode + 4;
        this.keep();
    };
    AuthcodePage.prototype.five = function () {
        this.passcode = this.passcode + 5;
        this.keep();
    };
    AuthcodePage.prototype.six = function () {
        this.passcode = this.passcode + 6;
        this.keep();
    };
    AuthcodePage.prototype.seven = function () {
        this.passcode = this.passcode + 7;
        this.keep();
    };
    AuthcodePage.prototype.eight = function () {
        this.passcode = this.passcode + 8;
        this.keep();
    };
    AuthcodePage.prototype.ninth = function () {
        this.passcode = this.passcode + 9;
        this.keep();
    };
    AuthcodePage.prototype.zero = function () {
        this.passcode = this.passcode + 0;
        this.keep();
    };
    AuthcodePage.prototype.del = function () {
        var len = this.passcode.length;
        var find = this.passcode[len - 1];
        // var push = new Array;
        // push[len-1]=find;
        // console.log(push);
        // this.passcode[len-1] = 1;
        // var res = this.passcode.substr(len, 1);
        // this.passcode = this.passcode +3;
        this.passcode = '';
        delete (this.passcode[len - 1]);
        console.log(find);
        console.log(this.passcode[len - 1]);
    };
    AuthcodePage.prototype.finger = function () {
        this.fingeraio.show({
            clientId: 'Fingerprint-Demo',
            clientSecret: 'password',
        })
            .then(function (result) { return console.log(result); })
            .catch(function (error) { return console.log(error); });
    };
    AuthcodePage = tslib_1.__decorate([
        Component({
            selector: 'app-authcode',
            templateUrl: './authcode.page.html',
            styleUrls: ['./authcode.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            ToastController,
            Router,
            ServicesService,
            FingerprintAIO,
            Storage])
    ], AuthcodePage);
    return AuthcodePage;
}());
export { AuthcodePage };
//# sourceMappingURL=authcode.page.js.map