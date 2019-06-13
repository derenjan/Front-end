(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', pathMatch: '', redirectTo: 'login' }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sign_up_page\">\r\n\r\n  <div class=\"sign_up\">\r\n    <!--<div class=\"login_register row\">\r\n       <button type=\"button\" id=\"login\" class=\"btn btn-link active\">Sign Up  /</button>\r\n        <button type=\"button\" id=\"register\" class=\"btn btn-link\">Login</button>\r\n    </div>-->\r\n\r\n    <!--  <form id=\"inputs\">\r\n         <input type=\"text\" placeholder=\"User name\">\r\n          <input type=\"email\" placeholder=\"Email \">\r\n          <input type=\"password\" placeholder=\"Password\">\r\n          <input type=\"text\" placeholder=\"Phone number *\">\r\n          <input type=\"text\" placeholder=\"Company name *\">\r\n          <input type=\"text\" placeholder=\"Address\">\r\n      </form>-->\r\n    <div class=\"logo\">\r\n      <img src=\"/assets/logo.png\">\r\n    </div>\r\n    <form id=\"input_login\" [formGroup]=\"loginForm\">\r\n\r\n      <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\r\n      <div class=\"validation\">\r\n        <ng-container *ngIf=\"loginForm.get('email').invalid && loginForm.get('email').dirty\">\r\n          <ng-container *ngIf=\"loginForm.get('email').errors['required']\">This field is required</ng-container>\r\n          <ng-container *ngIf=\"loginForm.get('email').errors['email']\">Need to enter email</ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <input type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n      <div class=\"validation\">\r\n        <ng-container *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').dirty\">\r\n          <ng-container *ngIf=\"loginForm.get('password').errors['required']\">This field is required</ng-container>\r\n          <ng-container *ngIf=\"loginForm.get('password').errors['minlength']\">\r\n            Minimum number of characters {{loginForm.get('password').errors['minlength'].requiredLength}}\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n      <button class=\"login_buttton\" (click)=\"onClick()\" [disabled]=\"loginForm.invalid\">LOGIN</button>\r\n      <div class=\"validation\">\r\n        {{error}}\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"image_auto\">\r\n    <div class=\"image\">\r\n      <img src=\"/assets/imj.png\">\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_register {\n  margin-bottom: 64px; }\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  background: #FCFEFF;\n  border-radius: 1px; }\n\n.logo {\n  height: 40px;\n  width: 110px;\n  margin-bottom: 10px; }\n\n.logo img {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 100%; }\n\n.sign_up_page {\n  display: flex;\n  align-items: center;\n  background: #ffffff; }\n\n.sign_up {\n  width: 65%;\n  align-items: center;\n  display: flex;\n  flex-direction: column; }\n\n.image_auto {\n  width: 70%; }\n\n#inputs {\n  display: flex;\n  flex-direction: column;\n  width: 50%; }\n\n#input_login {\n  display: flex;\n  flex-direction: column;\n  width: 60%; }\n\n#login {\n  text-decoration: none;\n  font-family: Impact;\n  font-size: 20px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #03426a; }\n\n.login_buttton {\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  height: 50px;\n  box-shadow: 0px 7px 24px 0 rgba(0, 51, 136, 0.26);\n  background-color: #48ACE9;\n  font-family: Comfortaa-Regular;\n  font-size: 20px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #ffffff;\n  border-radius: 1px;\n  margin-top: 10px; }\n\n.login_buttton:disabled {\n    background-color: rgba(72, 172, 233, 0.8); }\n\n.login_buttton:focus {\n  outline: none; }\n\n#register {\n  text-decoration: none;\n  font-family: Impact;\n  font-size: 30px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #03426a; }\n\ninput {\n  background: #D7D8D8;\n  outline: none;\n  border-radius: 2px;\n  font-family: Comfortaa-Regular;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #6c6c6c;\n  width: 100%;\n  height: 50px;\n  border: none;\n  padding-left: 45px;\n  margin-top: 2px; }\n\n.image {\n  width: 100%;\n  height: 100vh; }\n\n.image img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.validation {\n  height: 20px;\n  font-size: 80%;\n  color: #dc3545;\n  text-align: center; }\n\n@media (max-width: 1300px) {\n  #inputs {\n    width: 90%; }\n  #input_login {\n    width: 90%; } }\n\n@media (max-width: 900px) {\n  .sign_up_page {\n    display: flex;\n    flex-direction: column; }\n  .logo {\n    margin-bottom: 29px; }\n  .login_register {\n    margin-bottom: 42px; }\n  .image {\n    height: 316px;\n    width: 76%;\n    margin: 0 auto; }\n  .sign_up {\n    width: 80%;\n    margin: 0 auto; }\n  .image_auto {\n    width: 100%; } }\n\n@media (max-width: 800px) {\n  .sign_up_page {\n    flex-direction: column; } }\n\n@media (max-width: 600px) {\n  .sign_up {\n    width: 100%; }\n  .image {\n    width: 100%; }\n  input {\n    height: 49px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZyb250LWVuZC9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQWlEO0VBQ2pELHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBakJsQjtJQW1CSSx5Q0FBeUMsRUFBQTs7QUFJN0M7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQU1qQjtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7O0FBR0g7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLG1CQUFtQixFQUFBO0VBRXJCO0lBQ0UsbUJBQW1CLEVBQUE7RUFFckI7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWMsRUFBQTtFQUVoQjtJQUNFLFVBQVU7SUFDVixjQUFjLEVBQUE7RUFFaEI7SUFDRSxXQUFXLEVBQUEsRUFDWjs7QUFHSDtFQUNFO0lBQ0Usc0JBQXNCLEVBQUEsRUFDdkI7O0FBR0g7RUFDRTtJQUNFLFdBQVcsRUFBQTtFQUViO0lBQ0UsV0FBVyxFQUFBO0VBRWI7SUFDRSxZQUFZLEVBQUEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZm9udHMtZmFjZSB7XHJcbi8vICAgICBmb250cy1mYW1pbHk6IENvbWZvcnRhYV9SZWd1bGFyO1xyXG4vLyAgICAgc3JjOiB1cmwoXCIuLi9mb250cy9Db21mb3J0YWFfUmVndWxhci50dGZcIik7XHJcbi8vIH1cclxuXHJcbi5sb2dpbl9yZWdpc3RlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjRkNGRUZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmxvZ28gaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZ25fdXBfcGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblxyXG59XHJcblxyXG4uc2lnbl91cCB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmltYWdlX2F1dG8ge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbiNpbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4jaW5wdXRfbG9naW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogSW1wYWN0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDM0MjZhO1xyXG59XHJcblxyXG4ubG9naW5fYnV0dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDdweCAyNHB4IDAgcmdiYSgwLCA1MSwgMTM2LCAwLjI2KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDhBQ0U5O1xyXG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEtUmVndWxhcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcyLCAxNzIsIDIzMywgMC44KTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbl9idXR0dG9uOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jcmVnaXN0ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LWZhbWlseTogSW1wYWN0O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDM0MjZhO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI0Q3RDhEODtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBmb250LWZhbWlseTogQ29tZm9ydGFhLVJlZ3VsYXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICBjb2xvcjogIzZjNmM2YztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogNDVweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgJjpkaXNhYmxlZCB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICNpbnB1dHMge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgI2lucHV0X2xvZ2luIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuc2lnbl91cF9wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOXB4O1xyXG4gIH1cclxuICAubG9naW5fcmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxuICB9XHJcbiAgLmltYWdlIHtcclxuICAgIGhlaWdodDogMzE2cHg7XHJcbiAgICB3aWR0aDogNzYlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5zaWduX3VwIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLmltYWdlX2F1dG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuc2lnbl91cF9wYWdlIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc2lnbl91cCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDQ5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
        this.error = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onClick = function () {
        var _this = this;
        this.error = '';
        this.auth.login(this.loginForm.value).subscribe(function () {
            _this.router.navigate(['/dashboard']);
        }, function (error1) {
            _this.error = error1.error;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map