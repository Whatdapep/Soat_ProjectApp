import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import {ServicesService} from './services.service';
var FunctionService = /** @class */ (function () {
    function FunctionService(navCtrl, router, alertController, loadingController) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
    }
    FunctionService.prototype.Loginfalse = function () {
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
    FunctionService.prototype.LoginComplete = function (member_name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'สำเร็จ!',
                            // subHeader: 'Subtitle',
                            message: 'สวัสดียินดีต้อนรับคุณ ' + member_name,
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
    FunctionService.prototype.Change_password_Complete = function (new_password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'สำเร็จ!',
                            // subHeader: 'Subtitle',
                            message: 'คุณเปลี่ยนรหัสผ่านสำเร็จ รหัสผ่านของคุณคือ' + new_password,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        setTimeout(function () {
                            _this.router.navigate(['/footer/footer/profile']);
                        }, 500);
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 
    FunctionService.prototype.presentLoading = function () {
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
    FunctionService.prototype.passcodeComplete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'สำเร็จ!',
                            // subHeader: 'Subtitle',
                            message: 'รหัสผ่านถูกต้อง',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        setTimeout(function () {
                            _this.router.navigate(['/footer/footer/menu']);
                        }, 700);
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FunctionService.prototype.presentLoadingWithOptions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'dots',
                            duration: 250,
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
    FunctionService.prototype.getmembership_no = function (item, index) {
        var fullname = [item.membership_no];
        return fullname;
    };
    FunctionService.prototype.getmem_password = function (item, index) {
        var fullname = [item.mem_password];
        return fullname;
    };
    FunctionService.prototype.gettoken = function (item, index) {
        var fullname = [item.token];
        return fullname;
    };
    //--------------------- ws_mem_status 
    FunctionService.prototype.getsharestock = function (item2, name) {
        var item = item;
        var results = [item2.share_stock];
        return results;
    };
    FunctionService.prototype.getname = function (item, index) {
        var fullname = [item.member_name];
        return fullname;
    };
    FunctionService.prototype.getnametoken = function (item, index) {
        var fullname = [item.results.member_name];
        return fullname;
    };
    FunctionService.prototype.getsurname = function (item, index) {
        var fullname = [item.member_surname];
        return fullname;
    };
    FunctionService.prototype.getdateborn = function (item2, index) {
        var fullname = [item2.date_of_birth];
        return fullname;
    };
    FunctionService.prototype.getapprove = function (item, index) {
        var fullname = [item.approve_date];
        return fullname;
    };
    FunctionService.prototype.getid_card = function (item, index) {
        var fullname = [item.id_card];
        return fullname;
    };
    FunctionService.prototype.getgroupname = function (item, index) {
        var fullname = [item.member_group_name];
        return fullname;
    };
    FunctionService.prototype.getposition = function (item, index) {
        var fullname = [item.position_name];
        return fullname;
    };
    FunctionService.prototype.getaddress_present = function (item, index) {
        var fullname = [item.address_present];
        return fullname;
    };
    // -----------------------LOAN 
    FunctionService.prototype.getloan_contract_no = function (item, index) {
        var fullname = [item.loan_contract_no];
        return fullname;
    };
    FunctionService.prototype.getprincipal_balance = function (item, index) {
        var fullname = [item.principal_balance];
        return fullname;
    };
    FunctionService.prototype.getloan_type_description = function (item, index) {
        var fullname = [item.loan_type_description];
        return fullname;
    };
    // -------- www_data Map
    FunctionService.prototype.getNote = function (item, index) {
        var fullname = [item.Note];
        return fullname;
    };
    FunctionService.prototype.getnphoto = function (item, index) {
        var fullname = [item.nphoto];
        return fullname;
    };
    // ---------------------
    FunctionService.prototype.getreceive_month_fp = function (item, index) {
        var fullname = [item.receive_month_fp];
        return fullname;
    };
    FunctionService.prototype.getmoney_amount = function (item, index) {
        var fullname = [item.money_amount];
        return fullname;
    };
    // ----------------------------
    FunctionService.prototype.validate_change_password = function (old_password, new_password, confirm_password) {
        if (old_password == "") {
            alert('กรุณาระบุรหัสผ่านเดิม !');
            return false;
        }
        if (new_password == "") {
            alert('กรุณาระบุรหัสผ่านใหม่ !');
            return false;
        }
        if (confirm_password != new_password) {
            alert('กรุณายืนยันรหัสผ่านใหม่ให้ถูกต้อง !');
            return false;
        }
        if (old_password == new_password || old_password == confirm_password) {
            alert('ไม่สามารถระบุรหัสเดิมซ้ำ !');
            return false;
        }
        else {
            return true;
        }
    };
    FunctionService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            Router,
            AlertController,
            LoadingController])
    ], FunctionService);
    return FunctionService;
}());
export { FunctionService };
// }
//# sourceMappingURL=function.service.js.map