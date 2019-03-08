(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/counter.actions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/counter.actions.ts ***!
  \********************************************/
/*! exports provided: ActionTypes, Increment, Decrement, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Increment", function() { return Increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decrement", function() { return Decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Increment"] = "[Counter Component] Increment";
    ActionTypes["Decrement"] = "[Counter Component] Decrement";
    ActionTypes["Reset"] = "[Counter Component] Reset";
})(ActionTypes || (ActionTypes = {}));
var Increment = /** @class */ (function () {
    function Increment() {
        this.type = ActionTypes.Increment;
    }
    return Increment;
}());

var Decrement = /** @class */ (function () {
    function Decrement() {
        this.type = ActionTypes.Decrement;
    }
    return Decrement;
}());

var Reset = /** @class */ (function () {
    function Reset() {
        this.type = ActionTypes.Reset;
    }
    return Reset;
}());



/***/ }),

/***/ "./src/app/actions/todo.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/todo.actions.ts ***!
  \*****************************************/
/*! exports provided: ActionTypes, Add, Remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Remove", function() { return Remove; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["Add"] = "[TodoList Component] Add";
    ActionTypes["Remove"] = "[TodoList Component] Remove";
})(ActionTypes || (ActionTypes = {}));
var Add = /** @class */ (function () {
    function Add(payload) {
        this.payload = payload;
        this.type = ActionTypes.Add;
    }
    return Add;
}());

var Remove = /** @class */ (function () {
    function Remove(payload) {
        this.payload = payload;
        this.type = ActionTypes.Remove;
    }
    return Remove;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home-view/home-view.component */ "./src/app/views/home-view/home-view.component.ts");
/* harmony import */ var _views_basic_counter_view_basic_counter_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/basic-counter-view/basic-counter-view.component */ "./src/app/views/basic-counter-view/basic-counter-view.component.ts");
/* harmony import */ var _views_todo_list_view_todo_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/todo-list-view/todo-list-view.component */ "./src/app/views/todo-list-view/todo-list-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_2__["HomeViewComponent"] },
    { path: 'basic-counter', component: _views_basic_counter_view_basic_counter_view_component__WEBPACK_IMPORTED_MODULE_3__["BasicCounterViewComponent"] },
    { path: 'todo-list', component: _views_todo_list_view_todo_list_view_component__WEBPACK_IMPORTED_MODULE_4__["TodoListViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home-view/home-view.component */ "./src/app/views/home-view/home-view.component.ts");
/* harmony import */ var _views_basic_counter_view_basic_counter_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/basic-counter-view/basic-counter-view.component */ "./src/app/views/basic-counter-view/basic-counter-view.component.ts");
/* harmony import */ var _shared_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/page-title/page-title.component */ "./src/app/shared/page-title/page-title.component.ts");
/* harmony import */ var _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/counter.reducer */ "./src/app/reducers/counter.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _views_todo_list_view_todo_list_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/todo-list-view/todo-list-view.component */ "./src/app/views/todo-list-view/todo-list-view.component.ts");
/* harmony import */ var _views_todo_list_view_read_todo_read_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/todo-list-view/read-todo/read-todo.component */ "./src/app/views/todo-list-view/read-todo/read-todo.component.ts");
/* harmony import */ var _views_todo_list_view_create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/todo-list-view/create-todo/create-todo.component */ "./src/app/views/todo-list-view/create-todo/create-todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reducers_todo_list_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reducers/todo-list.reducer */ "./src/app/reducers/todo-list.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_5__["HomeViewComponent"],
                _views_basic_counter_view_basic_counter_view_component__WEBPACK_IMPORTED_MODULE_6__["BasicCounterViewComponent"],
                _shared_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_7__["PageTitleComponent"],
                _views_todo_list_view_todo_list_view_component__WEBPACK_IMPORTED_MODULE_10__["TodoListViewComponent"],
                _views_todo_list_view_read_todo_read_todo_component__WEBPACK_IMPORTED_MODULE_11__["ReadTodoComponent"],
                _views_todo_list_view_create_todo_create_todo_component__WEBPACK_IMPORTED_MODULE_12__["CreateTodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({ count: _reducers_counter_reducer__WEBPACK_IMPORTED_MODULE_8__["counterReducer"], todos: _reducers_todo_list_reducer__WEBPACK_IMPORTED_MODULE_14__["todoListReducer"] })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/reducers/counter.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/counter.reducer.ts ***!
  \*********************************************/
/*! exports provided: initialState, counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony import */ var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/counter.actions */ "./src/app/actions/counter.actions.ts");

var initialState = 0;
function counterReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Increment:
            return state + 1;
        case _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Decrement:
            return state - 1;
        case _actions_counter_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Reset:
            return 0;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/todo-list.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/todo-list.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, todoListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoListReducer", function() { return todoListReducer; });
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todo.actions */ "./src/app/actions/todo.actions.ts");

var initialState = {
    todo: 'My first todo'
};
function todoListReducer(state, action) {
    if (state === void 0) { state = [initialState]; }
    switch (action.type) {
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Add:
            return state.concat([action.payload]);
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Remove:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" routerLink=\"\">NgRx learning</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"basic-counter\">Basic counter</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"todo-list\">Todo list</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/page-title/page-title.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/page-title/page-title.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/page-title/page-title.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/page-title/page-title.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>{{title}}</h1>\n  <p *ngIf=\"subTitle\">{{subTitle}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/page-title/page-title.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/page-title/page-title.component.ts ***!
  \***********************************************************/
/*! exports provided: PageTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function() { return PageTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTitleComponent = /** @class */ (function () {
    function PageTitleComponent() {
    }
    PageTitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageTitleComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageTitleComponent.prototype, "subTitle", void 0);
    PageTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-title',
            template: __webpack_require__(/*! ./page-title.component.html */ "./src/app/shared/page-title/page-title.component.html"),
            styles: [__webpack_require__(/*! ./page-title.component.css */ "./src/app/shared/page-title/page-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTitleComponent);
    return PageTitleComponent;
}());



/***/ }),

/***/ "./src/app/views/basic-counter-view/basic-counter-view.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/basic-counter-view/basic-counter-view.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-counter-wrapper .btn {\r\n  margin-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYmFzaWMtY291bnRlci12aWV3L2Jhc2ljLWNvdW50ZXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYmFzaWMtY291bnRlci12aWV3L2Jhc2ljLWNvdW50ZXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLWNvdW50ZXItd3JhcHBlciAuYnRuIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/basic-counter-view/basic-counter-view.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/basic-counter-view/basic-counter-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-counter-wrapper\">\n  <app-page-title title=\"Basic counter\"></app-page-title>\n\n  <button class=\"btn btn-primary\" (click)=\"increment()\">Increment</button>\n  <button class=\"btn btn-primary\" (click)=\"decrement()\">Decrement</button>\n  <button class=\"btn\" (click)=\"reset()\">Reset</button>\n\n  <div>Current count: {{count$|async}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/basic-counter-view/basic-counter-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/basic-counter-view/basic-counter-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: BasicCounterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicCounterViewComponent", function() { return BasicCounterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_counter_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/counter.actions */ "./src/app/actions/counter.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicCounterViewComponent = /** @class */ (function () {
    function BasicCounterViewComponent(store) {
        this.store = store;
        this.count$ = store.select('count');
    }
    BasicCounterViewComponent.prototype.ngOnInit = function () {
    };
    BasicCounterViewComponent.prototype.increment = function () {
        this.store.dispatch(new _actions_counter_actions__WEBPACK_IMPORTED_MODULE_2__["Increment"]());
    };
    BasicCounterViewComponent.prototype.decrement = function () {
        this.store.dispatch(new _actions_counter_actions__WEBPACK_IMPORTED_MODULE_2__["Decrement"]());
    };
    BasicCounterViewComponent.prototype.reset = function () {
        this.store.dispatch(new _actions_counter_actions__WEBPACK_IMPORTED_MODULE_2__["Reset"]());
    };
    BasicCounterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-counter-view',
            template: __webpack_require__(/*! ./basic-counter-view.component.html */ "./src/app/views/basic-counter-view/basic-counter-view.component.html"),
            styles: [__webpack_require__(/*! ./basic-counter-view.component.css */ "./src/app/views/basic-counter-view/basic-counter-view.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], BasicCounterViewComponent);
    return BasicCounterViewComponent;
}());



/***/ }),

/***/ "./src/app/views/home-view/home-view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/home-view/home-view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUtdmlldy9ob21lLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/home-view/home-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/home-view/home-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-title title=\"Ngrx learning\" subTitle=\"Angular, NgRX & Bootstrap.\"></app-page-title>\n\n  <table class=\"table table-hover\">\n    <thead>\n    <tr>\n      <th scope=\"col\">View</th>\n      <th scope=\"col\">Attribute</th>\n      <th scope=\"col\">Value</th>\n      <th scope=\"col\">Link</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>Basic counter</td>\n      <td>count</td>\n      <td>{{count$ | async}}</td>\n      <td><a routerLink=\"../basic-counter\">Basic counter</a></td>\n    </tr>\n\n    <tr>\n      <td>Todo list</td>\n      <td>todos</td>\n      <td>{{todos$ | async | json}}</td>\n      <td><a routerLink=\"../todo-list\">Todo list</a></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/views/home-view/home-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/home-view/home-view.component.ts ***!
  \********************************************************/
/*! exports provided: HomeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewComponent", function() { return HomeViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeViewComponent = /** @class */ (function () {
    function HomeViewComponent(store) {
        this.store = store;
        this.count$ = store.select('count');
        this.todos$ = store.select('todos');
    }
    HomeViewComponent.prototype.ngOnInit = function () {
    };
    HomeViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-view',
            template: __webpack_require__(/*! ./home-view.component.html */ "./src/app/views/home-view/home-view.component.html"),
            styles: [__webpack_require__(/*! ./home-view.component.css */ "./src/app/views/home-view/home-view.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HomeViewComponent);
    return HomeViewComponent;
}());



/***/ }),

/***/ "./src/app/views/todo-list-view/create-todo/create-todo.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/views/todo-list-view/create-todo/create-todo.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvZG8tbGlzdC12aWV3L2NyZWF0ZS10b2RvL2NyZWF0ZS10b2RvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/todo-list-view/create-todo/create-todo.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/todo-list-view/create-todo/create-todo.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"createTodoForm\" (ngSubmit)=\"submitForm()\">\n  <div class=\"input-group mb-3\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"New todo\" formControlName=\"todo\">\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-outline-secondary\" type=\"submit\">save</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/views/todo-list-view/create-todo/create-todo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/todo-list-view/create-todo/create-todo.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoComponent", function() { return CreateTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/todo.actions */ "./src/app/actions/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTodoComponent = /** @class */ (function () {
    function CreateTodoComponent(store, fb) {
        this.store = store;
        this.fb = fb;
    }
    CreateTodoComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    CreateTodoComponent.prototype.createForm = function () {
        this.createTodoForm = this.fb.group({
            todo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    CreateTodoComponent.prototype.submitForm = function () {
        var data = this.createTodoForm.value;
        this.store.dispatch(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_3__["Add"]({ todo: data.todo }));
        this.createForm();
    };
    CreateTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-todo',
            template: __webpack_require__(/*! ./create-todo.component.html */ "./src/app/views/todo-list-view/create-todo/create-todo.component.html"),
            styles: [__webpack_require__(/*! ./create-todo.component.css */ "./src/app/views/todo-list-view/create-todo/create-todo.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateTodoComponent);
    return CreateTodoComponent;
}());



/***/ }),

/***/ "./src/app/views/todo-list-view/read-todo/read-todo.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/todo-list-view/read-todo/read-todo.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvZG8tbGlzdC12aWV3L3JlYWQtdG9kby9yZWFkLXRvZG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/todo-list-view/read-todo/read-todo.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/todo-list-view/read-todo/read-todo.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let todo of todos$ | async; let i = index\">\n    {{todo.todo}}\n    <button class=\"btn btn-danger badge\" (click)=\"removeTodo(i)\">Remove</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/views/todo-list-view/read-todo/read-todo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/todo-list-view/read-todo/read-todo.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReadTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadTodoComponent", function() { return ReadTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/todo.actions */ "./src/app/actions/todo.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadTodoComponent = /** @class */ (function () {
    function ReadTodoComponent(store) {
        this.store = store;
        this.todos$ = store.select('todos');
    }
    ReadTodoComponent.prototype.ngOnInit = function () {
    };
    ReadTodoComponent.prototype.removeTodo = function (index) {
        this.store.dispatch(new _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__["Remove"](index));
    };
    ReadTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-read-todo',
            template: __webpack_require__(/*! ./read-todo.component.html */ "./src/app/views/todo-list-view/read-todo/read-todo.component.html"),
            styles: [__webpack_require__(/*! ./read-todo.component.css */ "./src/app/views/todo-list-view/read-todo/read-todo.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ReadTodoComponent);
    return ReadTodoComponent;
}());



/***/ }),

/***/ "./src/app/views/todo-list-view/todo-list-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/views/todo-list-view/todo-list-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RvZG8tbGlzdC12aWV3L3RvZG8tbGlzdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/todo-list-view/todo-list-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/todo-list-view/todo-list-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-counter-wrapper\">\n  <app-page-title title=\"Todo list\"></app-page-title>\n\n  <app-create-todo></app-create-todo>\n  <app-read-todo></app-read-todo>\n</div>\n"

/***/ }),

/***/ "./src/app/views/todo-list-view/todo-list-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/todo-list-view/todo-list-view.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListViewComponent", function() { return TodoListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListViewComponent = /** @class */ (function () {
    function TodoListViewComponent() {
    }
    TodoListViewComponent.prototype.ngOnInit = function () {
    };
    TodoListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list-view',
            template: __webpack_require__(/*! ./todo-list-view.component.html */ "./src/app/views/todo-list-view/todo-list-view.component.html"),
            styles: [__webpack_require__(/*! ./todo-list-view.component.css */ "./src/app/views/todo-list-view/todo-list-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListViewComponent);
    return TodoListViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\angular-ngrx-learning\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map