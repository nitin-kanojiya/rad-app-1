(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- About us  -->\n<div class=\"container my-5 \">\n    <div class=\"section-head mb-5\">\n        <h2 class=\"mx-auto primary-dark-orange\">ABOUT US</h2>\n    </div>\n\n    <div class=\"row justify-content-center primary-dark-blue mb-5 pl-5 pr-5\">\n        <h4 class=\"\">\n            <i>\n                \"We are an organization that will always go an extra mile to put a smile on \n                the faces of our customers. The services providers associated with us also \n                share the same feeling of leaving behind happy faces and satisfied customers \n                every single time.\" \n            </i>\n        </h4>\n    </div>\n    <div class=\"mission-vision row pl-md-5 pr-md-5\">\n        <div class=\"col-md-9 ml-1 p-0 p-md-0\">\n            <!-- <div class=\"row mb-3\">\n                <h6 class=\"primary-light-gray\">WHAT HAVE WE ACHIEVED?</h6>\n                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cupiditate dolorum mollitia aliquid accusamus possimus obcaecati nihil quia, vitae, exercitationem laborum animi est error nam, facere repellendus tempore illum velit.</P>\n            </div> -->\n            <div class=\"row mb-3\">\n                <h5 class=\"primary-light-gray\">OUR MISSION</h5>\n                <p>\n                    Our mission is to keep in touch with the need of society and connect them to the person who are willing to do work.\n                </p>\n                <p>\n                    We provide a platform to local qualified and experienced professionals who are nearby us but we can't find them in need. Who have the ability of performing duties at their best way. \n                </p>\n            </div>\n            <div class=\"row\">\n                <h6 class=\"primary-light-gray\">OUR VISION</h6>\n                <p>\n                    We are offering people to create their future with us, we are the organization that will work for the benefit of the people who are keen to work but do not find the platform for performing their tasks.\n                </p>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n<!-- END About us  -->\n\n<!-- Our team  -->\n<div class=\"our-team container my-5 \">\n    <div class=\"section-head mb-5\">\n        <h3 class=\"mx-auto primary-dark-blue\">OUR GOLDEN TEAM</h3>\n        <p class=\"lead text-center\">We treat people as the best resources</p>\n    </div>\n\n    <div class=\"row justify-content-center\">\n\n        <div class=\"col-md-3 justify-content-center\">\n            <div class=\"row justify-content-center\">\n                <div class=\"team-img text-center\" style=\"background-image: url('../../assets/img/team/harish.jpg');\"></div>\n            </div>\n            <div class=\"row mt-2 justify-content-center\">\n                <h5 class=\"text-center primary-dark-blue\">Harish Nautiyal</h5>\n            </div>\n            <div class=\"row mt-0 primary-dark-orange text-center justify-content-center\">\n                <h4>Founder and Director</h4>\n            </div>\n        </div>\n\n        <div class=\"col-md-3 justify-content-center\">\n            <div class=\"row justify-content-center\">\n                <div class=\"team-img text-center\" style=\"background-image: url('../../assets/img/team/nitin3.jpg');\"></div>\n            </div>\n            <div class=\"row mt-2 justify-content-center\">\n                <h5 class=\"text-center primary-dark-blue\">Nitin Kanojiya</h5>\n            </div>\n            <div class=\"row mt-0 primary-dark-orange justify-content-center\">\n                <h4>Product Designer</h4>\n            </div>\n        </div>\n        <div class=\"col-md-3 justify-content-center\">\n            <div class=\"row justify-content-center\">\n                <div class=\"team-img text-center\" style=\"background-image: url('../../assets/img/team/mudit.jpg');\"></div>\n            </div>\n            <div class=\"row mt-2 justify-content-center\">\n                <h5 class=\"text-center primary-dark-blue\">Mudit Mittal</h5>\n            </div>\n            <div class=\"row mt-0 primary-dark-orange text-center justify-content-center\">\n                <h4>FullStack Product Developer</h4>\n            </div>\n        </div>\n\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid form-container bg-dark\"\n        [style.display]=\"showLogin()\">\n    <form (ngSubmit)=\"onSubmitLoginForm(loginForm)\" #loginForm=\"ngForm\" class=\"bg-dark p-5 text-white\">\n        <div class=\"form-group\">\n            <label for=\"inputUname\">Email address</label>\n            <input \n            name=\"uname\"\n            ngModel\n            #uname=\"ngModel\"\n            type=\"email\" \n            class=\"form-control\" \n            id=\"inputUname\" \n            placeholder=\"Enter Username\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"inputPassword\">Password</label>\n            <input \n            name=\"password\"\n            ngModel\n            #password=\"ngModel\"\n            type=\"password\" \n            class=\"form-control\" \n            id=\"inputPassword\"\n            placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n</div>\n\n\n\n<div class=\"container-fluid admin-section\"\n    [ngStyle]=\"{'display': showAdmin()}\">\n    <div class=\"handyman-section-cases card-container justify-content-center\">\n        <div class=\"card bg-primary\" (click)=\"showSwitchCase.value = 'all'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n            <span>All</span>\n        </div>\n        <div class=\"card bg-success\" (click)=\"showSwitchCase.value = 'verified'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n            <span>Verified</span>\n        </div>\n        <div class=\"card bg-danger\" (click)=\"showSwitchCase.value = 'notverified'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n            <span>Not Verified</span>\n        </div>\n    </div>\n    <p class=\"mt-5 mx-auto mb-0\" style=\"width: 80%;\">\n        <input type=\"text\" class=\"form-control\"\n        name=\"searchText\"\n        [(ngModel)]=\"searchText\" \n        autocomplete=\"off\" \n        placeholder= \"Search Service..\"\n        aria-label= \"Search Service..\"\n        >  \n      </p>\n    \n    <div class=\"handyman-section-values\" [ngSwitch]=\"showSwitchCase.value\" >\n        \n        <div \n            class=\"container mt-3\" *ngSwitchCase=\"'all'\">\n            \n            <div\n                class=\"row mt-3 mt-lg-2\"\n                [ngClass]=\"{'border-success': handyman.isVerified, 'border-danger': !handyman.isVerified}\"\n                *ngFor=\"let handyman of allHandymanList | filter:searchText\">\n                    <div \n                    class=\"col-lg-3 profile-img\"\n                    [ngStyle]=\"{'background-image': urlopen+handyman.img_url+urlclose }\"\n                            >\n                    </div>\n                    <div class=\"col-lg-8 profile-content\">\n                        <table class=\"row table text-capitalize table-borderless\">\n                            <tbody>\n                              <tr>\n                                <td>Name</td>\n                                <td>{{handyman.name}}</td>\n                              </tr>\n                              <tr>\n                                <td>D.O.B</td>\n                                <td>{{handyman.dob}}</td>\n                              </tr>\n                              <tr>\n                                <td>Contact Number</td>\n                                <td>{{handyman.contactNumber}}</td>\n                              </tr>\n                              <tr>\n                                <td>Aadhar Number</td>\n                                <td>{{handyman.aadharNumber}}</td>\n                              </tr>\n                              <tr>\n                                <td>City</td>\n                                <td>{{handyman.city}}</td>\n                              </tr>\n                              <tr>\n                                <td>State</td>\n                                <td>{{handyman.state}}</td>\n                              </tr>\n                              <tr>\n                                <td>Service name</td>\n                                <td>{{handyman.serviceName}}</td>\n                              </tr>\n                              <tr>\n                                <td>Experience</td>\n                                <td>{{handyman.serviceExperience}}</td>\n                              </tr>\n                              <tr>\n                                <td>Rating</td>\n                                <td>{{handyman.rating}}</td>\n                              </tr>\n                              <tr>\n                                <td>Number of ratings</td>\n                                <td>{{handyman.ratingNumber}}</td>\n                              </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"row\">\n                          <div class=\"col-1\"></div>\n                          <button class=\"btn btn-primary col-4\"\n                              (click)=\"deleteHandyman(handyman._id)\">\n                                DELETE\n                            </button>\n                            <div class=\"col-1\"></div>\n                            \n                            <button *ngIf=\"handyman.isVerified\" class=\"btn text-white bg-danger col-4\"\n                                (click)=\"unverifyHandyman(handyman._id)\"\n                                >\n                                UNVERIFY\n                            </button>\n                            <button *ngIf=\"!handyman.isVerified\" class=\"btn text-white bg-success col-4\"\n                                (click)=\"verifyHandyman(handyman._id)\"\n                                >\n                                VERIFY\n                            </button>\n                            <div class=\"col-1\"></div>\n                        </div>\n    \n                    </div>\n\n                        \n                </div>\n            </div>\n\n\n            <div \n            class=\"container mt-3\" *ngSwitchCase=\"'verified'\">\n            \n            <div\n                class=\"row mt-3 mt-lg-2\"\n                [ngClass]=\"{'border-success': handyman.isVerified, 'border-danger': !handyman.isVerified}\"\n                *ngFor=\"let handyman of verifiedHandymanList | filter:searchText\">\n                    <div \n                    class=\"col-lg-3 profile-img\"\n                    [ngStyle]=\"{'background-image': urlopen+handyman.img_url+urlclose }\"\n                            >\n                    </div>\n                    <div class=\"col-lg-8 profile-content\">\n                        <table class=\"row table text-capitalize table-borderless\">\n                            <tbody>\n                              <tr>\n                                <td>Name</td>\n                                <td>{{handyman.name}}</td>\n                              </tr>\n                              <tr>\n                                <td>D.O.B</td>\n                                <td>{{handyman.dob}}</td>\n                              </tr>\n                              <tr>\n                                <td>Contact Number</td>\n                                <td>{{handyman.contactNumber}}</td>\n                              </tr>\n                              <tr>\n                                <td>Aadhar Number</td>\n                                <td>{{handyman.aadharNumber}}</td>\n                              </tr>\n                              <tr>\n                                <td>City</td>\n                                <td>{{handyman.city}}</td>\n                              </tr>\n                              <tr>\n                                <td>State</td>\n                                <td>{{handyman.state}}</td>\n                              </tr>\n                              <tr>\n                                <td>Service name</td>\n                                <td>{{handyman.serviceName}}</td>\n                              </tr>\n                              <tr>\n                                <td>Experience</td>\n                                <td>{{handyman.serviceExperience}}</td>\n                              </tr>\n                              <tr>\n                                <td>Rating</td>\n                                <td>{{handyman.rating}}</td>\n                              </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"row\">\n                          <div class=\"col-1\"></div>\n                          <button class=\"btn btn-primary col-4\"\n                              (click)=\"deleteHandyman(handyman._id)\">\n                                DELETE\n                            </button>\n                            <div class=\"col-1\"></div>\n                            \n                            <button *ngIf=\"handyman.isVerified\" class=\"btn text-white bg-danger col-4\"\n                                (click)=\"unverifyHandyman(handyman._id)\"\n                                >\n                                UNVERIFY\n                            </button>\n                            <button *ngIf=\"!handyman.isVerified\" class=\"btn text-white bg-success col-4\"\n                                (click)=\"verifyHandyman(handyman._id)\"\n                                >\n                                VERIFY\n                            </button>\n                            <div class=\"col-1\"></div>\n                        </div>\n    \n                    </div>\n\n                        \n                </div>\n            </div>\n\n            <div \n            class=\"container mt-3\" *ngSwitchCase=\"'notverified'\">\n            \n            <div\n                class=\"row mt-3 mt-lg-2\"\n                [ngClass]=\"{'border-success': handyman.isVerified, 'border-danger': !handyman.isVerified}\"\n                *ngFor=\"let handyman of notVerifiedHandymanList | filter:searchText\">\n                    <div \n                    class=\"col-lg-3 profile-img\"\n                    [ngStyle]=\"{'background-image': urlopen+handyman.img_url+urlclose }\"\n                            >\n                    </div>\n                    <div class=\"col-lg-8 profile-content\">\n                        <table class=\"row table text-capitalize table-borderless\">\n                            <tbody>\n                              <tr>\n                                <td>Name</td>\n                                <td>{{handyman.name}}</td>\n                              </tr>\n                              <tr>\n                                <td>D.O.B</td>\n                                <td>{{handyman.dob}}</td>\n                              </tr>\n                              <tr>\n                                <td>Contact Number</td>\n                                <td>{{handyman.contactNumber}}</td>\n                              </tr>\n                              <tr>\n                                <td>Aadhar Number</td>\n                                <td>{{handyman.aadharNumber}}</td>\n                              </tr>\n                              <tr>\n                                <td>City</td>\n                                <td>{{handyman.city}}</td>\n                              </tr>\n                              <tr>\n                                <td>State</td>\n                                <td>{{handyman.state}}</td>\n                              </tr>\n                              <tr>\n                                <td>Service name</td>\n                                <td>{{handyman.serviceName}}</td>\n                              </tr>\n                              <tr>\n                                <td>Experience</td>\n                                <td>{{handyman.serviceExperience}}</td>\n                              </tr>\n                              <tr>\n                                <td>Rating</td>\n                                <td>{{handyman.rating}}</td>\n                              </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"row\">\n                          <div class=\"col-1\"></div>\n                          <button class=\"btn btn-primary col-4\"\n                              (click)=\"deleteHandyman(handyman._id)\">\n                                DELETE\n                            </button>\n                            <div class=\"col-1\"></div>\n                            \n                            <button *ngIf=\"handyman.isVerified\" class=\"btn text-white bg-danger col-4\"\n                                (click)=\"unverifyHandyman(handyman._id)\"\n                                >\n                                UNVERIFY\n                            </button>\n                            <button *ngIf=\"!handyman.isVerified\" class=\"btn text-white bg-success col-4\"\n                                (click)=\"verifyHandyman(handyman._id)\"\n                                >\n                                VERIFY\n                            </button>\n                            <div class=\"col-1\"></div>\n                        </div>\n    \n                    </div>\n\n                        \n                </div>\n            </div>\n\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\n\n<!-- <app-admin></app-admin> -->\n<router-outlet></router-outlet>\n\n<!-- <app-our-services></app-our-services> -->\n<!-- <app-home-page></app-home-page> -->\n<!-- <app-handyman-details></app-handyman-details> -->\n\n\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-us-section container justify-content-center\">\n    <div class=\"row mx-auto\">\n        <div class=\"col-md-4 section-head mb-5\">\n            <h2 class=\"mx-auto primary-dark-orange\">CONTACT US</h2>\n        </div>\n        <div class=\"col-md-8 contact-items\">\n            <div class=\"row\">\n                <span>\n                    <i class=\"fas fa-map-marker-alt \"></i>\n                    <em> Radiating Planet</em>\n                    - 69, Dhakpatti, Rajpur, Dehradun, Uttarakhand 248009\n                </span>\n            </div>\n            <div class=\"row\">\n                <span>\n\t\t\t\t\t<i class=\"fas fa-mobile-alt\"></i>\n                    +91-79008-34071\n                </span>\n            </div>\n            <div class=\"row\">\n                <span>\n                    <i class=\"far fa-envelope\"></i>\n                    radiatingplanet@gmail.com\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"map\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5440311105813!2d78.09191941512331!3d30.392303081757223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d79f996da4df%3A0x57aa02ebcf6eb2db!2sRadiating%20Planet!5e0!3m2!1sen!2sin!4v1582656786613!5m2!1sen!2sin\" \n        width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\">\n    </iframe>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!-- Footer -->\n\n<div class=\"py-5 container-fluid primary-bg-dark text-white text-center text-md-left\">\n    <div class=\"row mt-3\">\n\n        <div class=\"col-md-4 order-1  col-lg-3 col-xl-3 mx-auto mb-md-4\">\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item\">                \n                    <a class=\"mr-3\" href=\"https://www.facebook.com/radiatingplanet\">\n                      <i class=\"fab fa-facebook-f\"></i>\n                    </a>\n                </li>\n                <li class=\"list-inline-item\">\n                    <a class=\"mr-3\" href=\"https://twitter.com/RadiatingPlanet\">\n                      <i class=\"fab fa-twitter\"></i>\n                    </a>\n                </li>\n                <li class=\"list-inline-item\">\n                    <a class=\"mr-3\" href=\"https://www.linkedin.com/in/radiatingplanet\">\n                      <i class=\"fab fa-linkedin-in\"></i>\n                    </a>\n                </li>\n                <li class=\"list-inline-item\">\n                    <a class=\"\" href=\"https://www.instagram.com/radiating.planet\">\n                      <i class=\"fab fa-instagram\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        \n\n        <div class=\"col-md-2 order-md-2 col-6 col-lg-2 col-xl-2 \">\n            <ul class=\"list-unstyled\">\n                <li>\n                    <a [routerLink]=\"['/home']\" class=\"text-white\">Home</a>  \n                </li>\n                <li>\n                    <a [routerLink]=\"['/about-us']\" class=\"text-white\">About Us</a> \n                </li>\n                <li>\n                    <a [routerLink]=\"['/services']\" class=\"text-white\">Services</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/contact-us']\" class=\"text-white\">Contact Us</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/register']\" class=\"text-white\">Register</a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-md-3 order-md-3 col-6 col-lg-2 col-xl-2 \">\n            <ul class=\"list-unstyled\">\n                <li>\n                    <a [routerLink]=\"['/about-us']\" class=\"text-white\">Terms</a>  \n                </li>\n                <li>\n                    <a [routerLink]=\"['/about-us']\" class=\"text-white\">Privacy Policy</a> \n                </li>\n                <li>\n                    <a [routerLink]=\"['/admin']\"  class=\"text-white\">Admin</a> \n                </li>\n            </ul>  \n        </div>\n\n        <div class=\"col-md-3 order-4  col-lg-4 col col-xl-3 mx-auto \">\n            <img class=\"img-logo\" src=\"../../assets/img/logo.png\" alt=\"\">\n            <!-- <h3 class=\"company-name\">radiating.Planet</h3> -->\n            <p class=\"text-muted mat-small\">\n                All Rights Reserved &copy; 2020 \n            </p>\n        </div>\n\n        \n    </div>\n</div>\n<!-- Footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/handyman/handyman-details/handyman-details.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/handyman/handyman-details/handyman-details.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n    <h1 class=\"my-4\">\r\n      <small class=\"text-capitalize\">{{dataHandyman.name}}</small>\r\n    </h1>\r\n  \r\n    <div class=\"row\">\r\n  \r\n      <div class=\"col-md-8\">\r\n        <img class=\"img-fluid profile-img\"\r\n        [src]=\"dataHandyman.img_url\"\r\n        alt=\"\">\r\n      </div>\r\n  \r\n      <div class=\"col-md-4\">\r\n        <!-- <star-rating\r\n          value=\"{{dataHandyman.rating}}\"\r\n          totalstars=\"5\"\r\n          checkedcolor=\"#fa9600\" \r\n          uncheckedcolor=\"#ccc\"\r\n          size=\"24px\" \r\n          readonly=\"true\"\r\n          (rate)=\"onRate($event)\">\r\n        </star-rating> -->\r\n        <ngb-rating [(rate)]=\"selectedRating\" max=5 (click)=\"ratingChanged()\" >\r\n            <ng-template let-fill=\"fill\" let-index=\"index\">\r\n                <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n            </ng-template>\r\n        </ngb-rating>\r\n\r\n        <table class=\"my-3 table text-capitalize table-borderless\">\r\n          <tbody>\r\n            <tr>\r\n              <td>Name</td>\r\n              <td>{{dataHandyman.name}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>D.O.B</td>\r\n              <td>{{dataHandyman.dob}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Service</td>\r\n              <td>{{dataHandyman.serviceName}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Experience</td>\r\n              <td>{{dataHandyman.serviceExperience}} years</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Contact Number</td>\r\n              <td>{{dataHandyman.contactNumber}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>City</td>\r\n              <td>{{dataHandyman.city}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>State</td>\r\n              <td>{{dataHandyman.state}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n  \r\n    </div>\r\n  \r\n    <h3 *ngIf=\"relatedHandymanList.length > 0\" class=\"mt-5 mb-3\">Related Handyman</h3>\r\n  \r\n    <div class=\"row\">\r\n  \r\n      <div class=\"col-md-3 col-sm-6 mb-4\" *ngFor=\"let handyman of relatedHandymanList\">\r\n        <a \r\n          (click)=\"gotoDetails(handyman.id)\"\r\n          style=\"cursor: pointer;\">\r\n          \r\n          <div class=\"related-img\" \r\n            [ngStyle]=\"{ 'background-image': 'url(\\''+handyman.img_url+'\\')' }\"></div>\r\n            <h6 class=\"text-capitalize\">\r\n              {{handyman.name}}\r\n            </h6>\r\n        </a>\r\n            \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/handyman/handyman-list/handyman-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/handyman/handyman-list/handyman-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container-fluid\">\r\n\r\n    <div class=\"section-head mb-2\">\r\n        <h2 class=\"mx-auto text-capitalize primary-dark-orange\">{{serviceName}} Service</h2>\r\n    </div>\r\n\r\n    <div *ngIf=\"handymanList.length==0; then emptyListBlock else nonEmptyListBlock\"></div>\r\n    <ng-template #emptyListBlock>\r\n            <div class=\"row mx-auto text-center mt-5 mb-3\">\r\n                <p class=\"primary-light-blue\">\r\n                    We donot have enough members for this service but we are under registering programme.\r\n                    Please Come back later.  \r\n                </p>\r\n            </div>\r\n            <div class=\"row mx-auto my-2\">\r\n                If you want to work for us, then Register.\r\n            </div>\r\n            <div class=\"row mx-auto mb-5\">\r\n                <button class=\"register-btn btn ml-2\" [routerLink]=\"['/register']\">\r\n                    Work for Us\r\n                </button>\r\n            </div>\r\n    </ng-template>\r\n    \r\n    <ng-template #nonEmptyListBlock>\r\n        <div class=\"row\">\r\n            <div class=\" col-lg-3 text-capitalize col-sm-6 my-0 my-sm-3\" *ngFor=\"let handyman of handymanList\">\r\n                <div\r\n                    (click)=\"gotoDetailsPage(handyman._id)\"\r\n                    class=\"handyman-content justify-content-center py-5 px-0 p-lg-5\">\r\n    \r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"handyman-img text-center\"\r\n                        [ngStyle]=\"{'background-image': urlopen+handyman.img_url+urlclose}\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"moredetails text-center\">\r\n                        Click for more details\r\n                    </div>\r\n                    <div class=\"row mt-0 justify-content-center\">\r\n\r\n                        <ngb-rating max=5 readonly=\"true\" [rate]=\"handyman.rating\">\r\n                            <ng-template let-fill=\"fill\" let-index=\"index\">\r\n                                <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n                            </ng-template>\r\n                        </ngb-rating>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row mt-0 justify-content-center\">\r\n                        <h5 class=\"text-center primary-light-blue text-capitalize\">{{handyman.name}}</h5>\r\n                    </div>\r\n                    <div class=\"row handyman-content-age mx-auto\">\r\n                        {{handyman.city}}\r\n                    </div>\r\n                    <div class=\"row handyman-content-age mx-auto\">\r\n                        <div class=\"col-6 mt-0\">\r\n                            Age\r\n                        </div>\r\n                        <div class=\"col-6 mt-0\">\r\n                            {{calcAge(handyman.dob)}}yrs\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row handyman-content-age mx-auto\">\r\n                        <div class=\"col-6 mt-0\">\r\n                            Exp\r\n                        </div>\r\n                        <div class=\"col-6 mt-0\">\r\n                            {{handyman.serviceExperience}}yrs\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n    \r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n    \r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Home Head Section -->\n<div id=\"home-head\" class=\"bg-light home-head-section container-fluid\">\n    <div class=\"row\">\n        <div class=\"home-head-section-data col-sm-7 col-lg-7\">\n            <!-- <h3 class=\"company-name\">Radiating Planet</h3> -->\n            <span class=\"head-section-data-head\">Handyman Service</span>\n            <p class=\"primary-dark-blue\">\n                <!-- <em> -->\n                    \"Skill and Experienced professionals at your pocket price.\"              \n                <!-- </em> -->\n            </p>\n            <p>\n                Book your service at your door-step with our local and verified servicemen. \n            </p>\n            <p>\n                Behavioral workers with a positive attitude.\n            </p>\n            <div class=\"head-contact\">\n\n                    <button class=\"register-btn btn ml-3 mb-lg-5 mb-2\" [routerLink]=\"['/register']\">\n                        Work for Us\n                    </button>\n                <br class=\" mt-lg-5\">\n                    <button [routerLink]=\"['/contact-us']\" class=\"contact-btn btn\">\n                        Contact Us\n                    </button>\n                    <span class=\"btn\">\n                        <a href=\"https://www.facebook.com/radiatingplanet\">\n                            <i class=\"fab fa-facebook-square\"></i>\n                        </a>\n                    </span>                    \n                    <span class=\"btn\">\n                        <a href=\"https://www.instagram.com/radiating.planet\">\n                            <i class=\"fab fa-instagram\"></i>\n                        </a>\n                    </span>\n            </div>\n        </div>\n        <div class=\"head-section-img bg-light text-center col-lg-5 col-sm-5\">\n            <img src=\"../../assets/img/worker-2.png\" class=\"head-img\" alt=\"\">\n        </div>\n    </div>\n</div>\n<!-- END Home Head Section -->\n\n\n\n<!-- why us section -->\n<div id=\"why-us-section\" class=\"why-us-section  container-fluid\">\n    <div class=\"section-head\">\n        <h2 class=\"mx-auto\">WHY US</h2>\n    </div>\n    <div class=\"row section-subhead\">\n        <div class=\"col-md-6\">\n            <p class=\"text-center mx-auto\">\n                <!-- Handyman from various services -->\n            </p>\n        </div>\n    </div>\n    <div class=\"row my-5  why-us-section-content justify-content-center text-center mx-auto\">\n        <div class=\"col-6 col-sm-3\">\n            <span >\n                <i class=\"fas fa-user-check\"></i>\n            </span>\n            <h5 class=\"mt-3\">Verified Personals</h5>\n        </div>\n        <div class=\"col-6 col-sm-3\">\n            <span >\n                <i class=\"fas fa-handshake\"></i>\n            </span>\n            <h5 class=\"mt-3\">Bond Back Guarantee</h5>\n        </div>\n        <div class=\"col-6 col-sm-3 mt-sm-0 mt-3\">\n            <span >\n                <i class=\"fas fa-coins\"></i>\n            </span>\n            <h5 class=\"mt-3\">Affordable Rates</h5>\n        </div>\n        <div class=\"col-6 col-sm-3 mt-sm-0 mt-3\">\n            <span>\n                <i class=\"fas fa-user-clock\"></i>\n            </span>\n            <h5 class=\"mt-3\">Timely Services</h5>\n            \n        </div>\n    </div>\n</div>\n<!-- END why us section -->\n\n\n\n<!-- OUR Services Section -->\n<div id=\"our-services\" class=\"services-section container mb-md-5\">\n\n    <div class=\"section-head\">\n        <h2 class=\"mx-auto\">OUR SERVICES</h2>\n    </div>\n    <div class=\"row section-subhead\">\n        <div class=\"col-md-6\">\n            <p class=\"text-center mx-auto\">\n                We provide various services and experienced personnel who are well \n                versed in their field of work at affordable rates.            \n            </p>\n        </div>\n    </div>\n    \n    <div class=\"row section-content services-section-content\">\n        <div class=\"col-lg-3 col-md-4 col-sm-6 services-section-content-col mb-5\" *ngFor=\"let item of services \">\n            <div class=\"card\" >\n                <div class=\"card-body text-center\" \n                    (click)=\"gotoListPage(item.id)\" \n                    [routerLink]=\"['/services']\">\n        \n                    <span class=\"services-section-icon\">\n                        <i class=\"{{item.icon}}\"></i>\n                    </span>\n                    <h5 class=\"card-title\">{{item.name}}</h5>\n                    <!-- <p class=\"card-text\">{{item.desc}}</p> -->\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-3 col-md-4 col-sm-6 services-section-content-col mb-5\">\n            <div class=\"card\" >\n                <div class=\"card-body text-center\"\n                    [routerLink]=\"['/services']\">        \n                    <span class=\"services-section-icon\">\n                        <i class=\"fas fa-ellipsis-h\"></i>\n                    </span>\n                    <h5 class=\"card-title\">And More</h5>\n                    <p class=\"card-text\">Click to know many other services.</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    \n</div>\n\n<!-- END Our Services Section -->\n\n<!-- Handyman section -->\n<div id=\"handyman-section\" class=\"handyman-section container \">\n    <div class=\"section-head\">\n        <h2 class=\"mx-auto\">HANDYMAN FOR YOU</h2>\n    </div>\n    <div class=\"row section-subhead\">\n        <div class=\"col-md-6\">\n            <p class=\"text-center mx-auto\">Handyman from various services</p>\n        </div>\n    </div>\n\n    <div class=\"handyman-section-cases card-container justify-content-center\">\n        <div class=\"card\" (click)=\"handymanCase.value = 'labour'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n            <span>Labours</span>\n        </div>\n        <div class=\"card\" (click)=\"handymanCase.value = 'electrician'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n            <span>Electricians</span>\n        </div>\n        <div class=\"card\" (click)=\"handymanCase.value = 'carpenter'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n            <span>Carpenters</span>\n        </div>\n        <div class=\"card\" (click)=\"handymanCase.value = 'plumber'\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>    \n            <span>Plumbers</span>\n        </div>\n    </div>\n\n    <div class=\"handyman-section-values \" [ngSwitch]=\"handymanCase.value\" >\n        <div \n            class=\"container mt-3\" *ngSwitchCase=\"'labour'\">\n            <div class=\"row text-center section-subhead\">\n                <div\n                    class=\"col-12 primary-dark-gray\">Some Labours in the town</div>\n            </div>\n            <div\n                class=\"row card-container mt-3 mt-lg-2 justify-content-center\">\n                <div\n                (click)=\"findIdForListPage()\"\n                class=\"card col-sm-3 handyman-section-values-img primary-light-gray\"\n                [ngStyle]=\"{'background-image': 'url(\\''+labour.img_url+'\\')' }\"\n                    *ngFor=\"let labour of labours\">\n                    <div class=\"handyman-section-values-content\">\n                        {{labour.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"container mt-3\" *ngSwitchCase=\"'electrician'\">\n            <div class=\"row text-center section-subhead\">\n                <div class=\"col-12 primary-dark-gray\">Some Electricians in the town</div>\n            </div>\n            <div class=\"row card-container mt-3 mt-lg-2 justify-content-center\">\n                <div\n                (click)=\"findIdForList()\" \n                class=\"card col-sm-3 handyman-section-values-img primary-light-gray\"\n                [ngStyle]=\"{'background-image': 'url(\\''+electrician.img_url+'\\')'}\"\n                    *ngFor=\"let electrician of electricians\">\n                    <div class=\"handyman-section-values-content\">\n                        {{electrician.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"container mt-3\" *ngSwitchCase=\"'carpenter'\">\n            <div class=\"row text-center section-subhead\">\n                <div class=\"col-12 primary-dark-gray\">Some Carpenters in the town</div>\n            </div>\n            <div class=\"row card-container mt-3 mt-lg-2 justify-content-center\">\n                <div\n                (click)=\"findIdForList()\"\n                class=\"card col-sm-3 handyman-section-values-img primary-light-gray\"\n                [ngStyle]=\"{'background-image': 'url(\\''+carpenter.img_url+'\\')'}\"\n                    *ngFor=\"let carpenter of carpenters\">\n                    <div class=\"handyman-section-values-content\">\n                        {{carpenter.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"container mt-3\" *ngSwitchCase=\"'plumber'\">\n            <div class=\"row text-center section-subhead\">\n                <div class=\"col-12 primary-dark-gray\">Some Plumbers in the town</div>\n            </div>\n            <div class=\"row card-container mt-3 mt-lg-2 justify-content-center\">\n                <div\n                (click)=\"findIdForList()\"\n                class=\"card col-sm-3 handyman-section-values-img primary-light-gray\"\n                [ngStyle]=\"{'background-image': 'url(\\''+plumber.img_url+'\\')'}\"\n                    *ngFor=\"let plumber of plumbers\">\n                    <div class=\"handyman-section-values-content\">\n                        {{plumber.name}}\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- END Handyman section -->\n\n\n\n\n<!-- book-service section -->\n<div id=\"call-us-section\" class=\"container-fluid call-us-section primary-bg-dark\">\n    <div class=\"row\">\n        <h4 class=\"mx-auto text-center text-light\">Got any doubt? Call Us Now:</h4>\n    </div>\n    <div class=\"row call-us-section-subhead mt-3\">\n        <div class=\"text-center mx-auto col-md-6\">\n            <div class=\"number primary-light-blue\">\n                <i class=\"fas fa-phone-volume\"></i> &nbsp;\n                +91-79008-34071\n            </div>        \n        </div>\n    </div>\n</div>\n\n\n<!-- <div id=\"book-service-section\" class=\"container-fluid book-service-section primary-bg-dark\">\n    <div class=\"row book-service-section-head\">\n        <p class=\"mx-auto text-center\">Book your service</p>\n    </div>\n    <div class=\"row book-service-section-subhead\">\n        <div class=\"text-center primary-light-gray mx-auto col-md-6\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vero qui quos dignissimos tempore itaque laboriosam impedit a sunt similique.\n        </div>\n    </div>\n\n    <div class=\"book-service-section-form  text-light\">\n        <div class=\"row mt-5 mx-auto text-center\">\n            <div class=\"col-lg-9\">\n              <form (submit)=\"onSubmitForm(registerForm)\" #bookForm=\"ngForm\">\n                <div class=\"row mb-2 justify-content-center\">\n                    <div class=\" col-md-4\">\n                        <input \n                        ngModel\n                        name=\"fullName\"\n                        #fullName=\"ngModel\"\n                        class=\"form-control mx-auto\" placeholder=\"Full name\" type=\"text\">\n                    </div>\n                    <div class=\" col-md-4 mt-3 mt-md-0\">\n                        <input class=\"form-control mx-auto\" \n                        ngModel\n                        name=\"contactNumber\"\n                        #contactNumber=\"ngModel\"\n                        placeholder=\"Contact Number\" type=\"text\">\n                    </div>\n                </div>\n                \n                <div class=\"row my-3 justify-content-center\">\n                    <div class=\" col-md-4 \">\n                        <input \n                        ngModel\n                        name=\"email\"\n                        #email=\"ngModel\"\n                        class=\"form-control mx-auto\" placeholder=\"Your Email\" type=\"text\">\n                    </div>\n                    <div class=\" col-md-4 mt-3 mt-md-0\">\n                        <input\n                        ngModel\n                        name=\"serviceType\"\n                        #serviceType=\"ngModel\"\n                        class=\"form-control mx-auto\" placeholder=\"Service Type\" type=\"text\">\n                    </div>\n                </div>\n                <div class=\"row mt-3 mt-md-3\">\n                    <div class=\"text-center col-12\">\n                        <button type=\"submit\" class=\"btn \">SUBMIT</button>\n                    </div>\n                </div> \n\n              </form>\n            </div> -->\n            <!-- Call Us part -->\n            <!-- <div class=\"col-lg-3 my-2 pr-5 mt-3 mt-lg-0\">\n                <p class=\"lead \">Got any doubt? Call Us Now:</p>\n                <div class=\"number primary-light-blue\">\n                    <i class=\"fas fa-phone-volume\"></i> &nbsp;\n                    +91-79008-34071\n                </div>        \n            </div>\n        </div>\n    </div>\n</div> -->\n<!-- END book-service section -->\n\n<!-- Map section -->\n<div class=\"map-section\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5440311105813!2d78.09191941512331!3d30.392303081757223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d79f996da4df%3A0x57aa02ebcf6eb2db!2sRadiating%20Planet!5e0!3m2!1sen!2sin!4v1582656786613!5m2!1sen!2sin\" \n        width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\">\n    </iframe>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\" bg-light primary-dark-gray\">\n    <!-- <h3 class=\"company-name\">radiating.Planet</h3> -->\n\n    <img class=\"img-logo\" [routerLink]=\"['/']\" src=\"../../assets/img/logo.png\" alt=\"\">\n    <span class=\"space-filler\"></span>\n    \n    <div class=\"mobile-toolbar\">\n        <span class=\"\"\n            (click)=\"navEvent()\">\n\n            <i [hidden]=\"showToolbar\"\n            class=\"fas fa-align-right\"></i>\n            \n            <i [hidden]=\"!showToolbar\"\n            class=\"fas fa-times\"></i>            \n        </span>        \n    </div>\n\n    <div class=\"desktop-toolbar\">\n        <ul>\n            <li  [routerLink]=\"['/']\" >\n                <a>\n                    <span>HOME</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/about-us']\">\n                <a>\n                    <span>ABOUT US</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/services']\">\n                <a>\n                    <span>SERVICES</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/contact-us']\">\n                <a>\n                    <span>CONTACT US</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/register']\">\n                <a>\n                    <span>REGISTER</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n    <span class=\"desktop-toolbar space-filler\"></span>\n</mat-toolbar>\n\n<div class=\" container-fluid mobile-toolbar-container\"\n[hidden]=\"!showToolbar\">\n    <div class=\"row\">\n        <ul>\n            <li  [routerLink]=\"['/']\" >\n                <a>\n                    <span>HOME</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/about-us']\">\n                <a>\n                    <span>ABOUT US</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/services']\">\n                <a>\n                    <span>SERVICES</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/contact-us']\">\n                <a>\n                    <span>CONTACT US</span>\n                </a>\n            </li>\n            <li [routerLink]=\"['/register']\">\n                <a>\n                    <span>REGISTER</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-services/our-services.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/our-services/our-services.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Video -->\n<header>\n    <div class=\"overlay\"></div>\n    <img src=\"/assets/img/services_head.jpg\" alt=\"\">\n    <div class=\"container h-100\">\n      <div class=\"d-flex h-100 text-center align-items-center\">\n        <div class=\"w-100 text-white\">\n          \n          <div class=\"section-head\">\n            <h2 class=\"mx-auto primary-dark-orange\">OUR SERVICES</h2>\n          </div>  \n          <p class=\"mt-5 mx-auto mb-0\" style=\"width: 80%;\">\n            <input type=\"text\" class=\"form-control\"\n            [(ngModel)]=\"searchText\" \n            autocomplete=\"off\" \n            placeholder= \"Search Service..\"\n            aria-label= \"Search Service..\">  \n          </p>\n        </div>\n      </div>\n    </div>\n</header>\n<!--END Video -->\n    \n<!-- Services Showcases -->\n\n<!-- <div class=\"services-section container-fluid p-0\">\n    <div class=\"row no-gutters my-md-2\" *ngFor=\"let service of ourservices | filter:searchText; let i=index\"  >\n        <div class=\"col-md-6 text-white showcase-img\"\n            [ngClass]=\"{'order-2': i%2==0 }\" \n            [ngStyle]=\"{'background-image': 'url('+service.img_url+')' }\" \n            >\n        </div>\n        <div class=\"col-md-6 my-auto showcase-text\"\n            [ngClass]=\"{'order-2': i%2!=0}\">\n            <h3>{{i+1}}. {{service.name}}</h3>\n            <p class=\"mb-0\"> \n                {{service.desc}}\n                <br>\n                <a (click)=\"gotoListPage(service.id)\">Explore servicemen</a>\n            </p>\n        </div>\n    </div>\n\n</div> -->\n\n<!-- END Services Showcases -->\n\n\n<!-- OUR Services Section -->\n<div id=\"our-services\" class=\"services-section container\">\n  \n  <div class=\"row section-content services-section-content\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 services-section-content-col mb-5\" *ngFor=\"let item of ourservices | filter:searchText\">\n          <div class=\"card\" >\n              <div class=\"card-body text-center\" \n                  (click)=\"gotoListPage(item.id)\" \n                  [routerLink]=\"['/services']\">\n      \n                  <span class=\"services-section-icon\">\n                      <i class=\"{{item.icon}}\"></i>\n                  </span>\n                  <h5 class=\"card-title\">{{item.name}}</h5>\n                  <p class=\"card-text\">{{item.desc}}</p>\n              </div>\n          </div>\n      </div>\n  </div>\n  \n</div>\n\n<!-- END Our Services Section -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <form\n      (submit)=\"onSubmitForm(registerForm)\" \n      class=\"mx-auto\" \n      [formGroup]=\"registerForm\"\n      >\n\n        <div class=\"section-head\">\n            <h2 class=\"mx-auto text-center primary-dark-orange\">REGISTER YOURSELF</h2>\n            <p class=\"mx-auto lead primary-light-gray\">Work as a handyman</p>\n        </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"name\">Full Name</label>\n                <input \n                name=\"name\"\n                formControlName=\"name\"\n                type=\"text\" class=\"form-control\" \n                id=\"name\" placeholder=\"As in Aadhar Card\">\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"contactNumber\">Mobile Number</label>\n                <input \n                name=\"contactNumber\"\n                formControlName=\"contactNumber\"\n                type=\"tel\" \n                class=\"form-control\" \n                id=\"contactNumber\" \n                maxlength=\"10\" \n                minlength=\"10\" \n                placeholder=\"10 digits\">\n              </div>\n            </div>\n\n  \n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"aadhar\">Aadhar Card number</label>\n                <input \n                name=\"aadharNumber\"\n                formControlName=\"aadharNumber\"\n                type=\"tel\" \n                class=\"form-control\" \n                id=\"aadhar\" \n                minlength=\"12\" \n                maxlength=\"12\" \n                placeholder=\"0000-0000-0000\">\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"dob\">Date Of Birth</label>\n                <input \n                name=\"dob\"\n                formControlName=\"dob\"\n                type=\"date\" \n                class=\"form-control\" \n                id=\"dob\" \n                placeholder=\"\">\n              </div>\n\n              <!-- <div class=\"form-group col-md-6\">\n                <label for=\"distance\">Maximum Distance</label>\n                <input \n                name=\"distance\"\n                required\n                ngModel\n                #distance=\"ngModel\"\n                type=\"number\" class=\"form-control\" id=\"distance\" placeholder=\"Distance in km\">\n              </div> -->\n            </div>\n\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"servicename\">Your Service Name</label>\n                <!-- <input \n\n                type=\"text\" class=\"form-control\"  placeholder=\"eg. Electrician\"> -->\n                <select\n                  name=\"serviceName\"\n                  formControlName=\"serviceName\"\n                  id=\"servicename\"\n                  class=\"form-control\">\n                    <option selected>\n                      Choose one\n                    </option>\n                    <option *ngFor=\"let option of ourservices\">\n                      {{option.name}}\n                    </option>\n                </select>\n\n              </div>\n\n              <div class=\"form-group col-md-6\">\n                <label for=\"experience\">Service Experience</label>\n                <input \n                name=\"serviceExperience\"\n                formControlName=\"serviceExperience\"\n                type=\"number\" \n                class=\"form-control\" \n                id=\"experience\" \n                placeholder=\"In years\">\n              </div>\n            </div>\n\n  \n            <!-- <div class=\"form-group\">\n              <label for=\"currAddress\">Current Address</label>\n              <input type=\"text\" class=\"form-control\" id=\"currAddress\" placeholder=\"House Number, Street, Locality\">\n            </div> -->\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                  <label for=\"city\">City</label>\n                  <input \n                  name=\"city\"\n                  formControlName=\"city\"\n                  type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"eg.Dehradun\">\n              </div>\n              <div class=\"form-group col-md-6\">\n                  <label for=\"state\">State</label>\n                  <input \n                  name=\"state\"\n                  formControlName=\"state\"\n                  type=\"text\" class=\"form-control\" id=\"state\" placeholder=\"eg.Uttarakhand\">\n              </div>\n            </div>\n\n            <!-- <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"currCity\">City</label>\n                    <input type=\"text\" class=\"form-control\" id=\"currCity\" placeholder=\"eg.Dehradun\">\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"currState\">State</label>\n                    <input type=\"text\" class=\"form-control\" id=\"currState\" placeholder=\"eg.Uttarakhand\">\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"currZip\">Zip</label>\n                    <input type=\"text\" class=\"form-control\" id=\"currZip\" placeholder=\"000000\">\n                </div>\n            </div> -->\n  \n            <!-- <div class=\"form-group\">\n                <label for=\"permPoliceStation\">Police Station</label>\n                <input type=\"text\" class=\"form-control\" id=\"permPoliceStation\">\n            </div>\n\n  \n            <div class=\"form-group\">\n                <label for=\"permAddress\">Permanent Address</label>\n                <input type=\"text\" class=\"form-control\" id=\"permAddress\" placeholder=\"House Number, Street, Locality\">\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"permCity\">City</label>\n                    <input type=\"text\" class=\"form-control\" id=\"permCity\" placeholder=\"eg.Dehradun\">\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"permState\">State</label>\n                    <input type=\"text\" class=\"form-control\" id=\"permState\" placeholder=\"eg.Uttarakhand\">\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"permZip\">Zip</label>\n                    <input type=\"text\" class=\"form-control\" id=\"permZip\" placeholder=\"000000\">\n                </div>\n            </div>\n  \n            <div class=\"form-group\">\n              <label for=\"permPoliceStation\">Police Station</label>\n              <input type=\"text\" class=\"form-control\" id=\"permPoliceStation\">\n            </div> -->\n\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-6\">\n                  <label for=\"pick\">Upload Image</label>\n                  <input \n                  (change) = \"onImagePicked($event)\"\n                  type=\"file\" \n                  class=\"form-control\" \n                  id=\"profile-image\">\n              </div>\n              <div \n                *ngIf=\"imagePreview !== '' && imagePreview && registerForm.get('previewImg').valid\"\n                class=\"form-group col-md-6 image-preview\"\n                [ngStyle]=\"{'background-image': 'url(\\''+imagePreview+'\\')' }\"\n                >\n                <!-- <img [src]=\"imagePreview\" alt=\"\"> -->\n              </div>\n            </div>\n\n            \n            <div class=\"form-group\">\n              <div class=\"form-check\">\n                <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                id=\"termsCheck\" \n                [checked]=\"termsCheck\"\n                (change)=\"termsCheck=!termsCheck\"\n                    >\n                <label class=\"form-check-label\" for=\"termsCheck\"\n                    [ngClass]=\"{'text-success': termsCheck, 'text-danger': !termsCheck}\">\n                  I declare all details filled by me are true.\n                </label>\n              </div>\n            </div>\n\n            <button type=\"submit\"\n              [hidden]=\"!termsCheck\"\n              class=\"btn submit-btn\">\n              Submit\n            </button>\n    </form>\n</div>\n\n<div class=\"container-fluid alertbox\" [hidden]=\"!showhide\">\n  <div class=\"alert alert-success text-center mt-5 mx-auto\" role=\"alert\" >\n    <h4 class=\"alert-heading\">Form Submitted!</h4>\n    <p>Please wait for the call from our team</p>\n  </div>\n</div>\n        <!-- [ngClass]=\"{'submit-btn': termsCheck, 'disabled': !termsCheck, 'submit-btn-disabled': !termsCheck}\" -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-head h2{\r\n    font-family: 'Merriweather', serif;\r\n    font-weight: 700;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.section-head {\r\n    margin: 4rem 0 0 0;\r\n}\r\nh3{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.mission-vision p{\r\n    font-size: 1.2rem;\r\n}\r\n/****************************\r\n    Our team\r\n****************************/\r\n.team-img{\r\n    width: 10rem;\r\n    height: 10rem;\r\n    background-position:center;\r\n\tbackground-repeat:no-repeat;\r\n    background-size:cover;\r\n    border: 2px solid #2861CF;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBOzs0QkFFNEI7QUFDNUI7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtDQUM3QiwyQkFBMkI7SUFDeEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5zZWN0aW9uLWhlYWQge1xyXG4gICAgbWFyZ2luOiA0cmVtIDAgMCAwO1xyXG59XHJcbmgze1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5taXNzaW9uLXZpc2lvbiBwe1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBPdXIgdGVhbVxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4udGVhbS1pbWd7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI4NjFDRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* *************************\r\n    Tiles\r\n**************************/\r\n.card svg.material-icons path {\r\n    fill: #fff;\r\n}\r\n.handyman-section-cases.card-container{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    margin-top: 16px;\r\n}\r\n.handyman-section-cases .card{\r\n    color: #FFFFFF;\r\n    border-radius: 2rem;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n    cursor: pointer;\r\n}\r\n.handyman-section-cases .card:hover{\r\n    -webkit-transform: scale(1.1, 1.2);\r\n            transform: scale(1.1, 1.2);\r\n    box-shadow: 3px 3px 5px #9BA5BA;\r\n}\r\n.handyman-section-values > .container > .row {\r\n    border-radius: 4px;\r\n    border: 1px solid;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    width: 100%;\r\n    margin: 0 4px 8px;\r\n    padding: 16px;\r\n    /* display: flex;\r\n    flex-direction: column; */\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;   \r\n}\r\n.border-sucess{\r\n    border-color: green;\r\n}\r\n.border-danger{\r\n    border-color: red;\r\n}\r\n/* ******************\r\n    Content\r\n****************** */\r\n.profile-img{\r\n    background-size: contain;\r\n    background-position: center;\r\n    width: 10rem;\r\n    height: 10rem;\r\n    border-radius: 0.5rem;\r\n    background-repeat: no-repeat;\r\n}\r\n.profile-content > .row {\r\n    place-content: center;\r\n}\r\n@media only screen and (min-width: 990px){\r\n    .profile-img{\r\n        width: 20rem;\r\n        height: 13rem;\r\n    }    \r\n}\r\n/* ********************\r\n    Form\r\n********************* */\r\n.form-container{\r\n    position: absolute;\r\n    height: 100%;\r\n    z-index: 10;\r\n    background: none;\r\n}\r\n.form-update{\r\n    padding: 1rem;\r\n}\r\n@media only screen and (min-width:576px){\r\n    .form-container{\r\n        padding: 5rem;\r\n    }\r\n    .form-update{\r\n        padding: 5rem;\r\n    }\r\n        \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7MEJBRTBCO0FBQzFCO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2Ysd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYjs2QkFDeUI7SUFDekIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBOztvQkFFb0I7QUFDcEI7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0FBQ0o7QUFDQTs7dUJBRXVCO0FBQ3ZCO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgVGlsZXNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICAgIGZpbGw6ICNmZmY7XHJcbn1cclxuICBcclxuLmhhbmR5bWFuLXNlY3Rpb24tY2FzZXMuY2FyZC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbiAgXHJcbi5oYW5keW1hbi1zZWN0aW9uLWNhc2VzIC5jYXJke1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiAwIDhweCAxNnB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGFuZHltYW4tc2VjdGlvbi1jYXNlcyAuY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjIpO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzlCQTVCQTtcclxufVxyXG4uaGFuZHltYW4tc2VjdGlvbi12YWx1ZXMgPiAuY29udGFpbmVyID4gLnJvdyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCA0cHggOHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDsgICBcclxufVxyXG4uYm9yZGVyLXN1Y2Vzc3tcclxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XHJcbn1cclxuLmJvcmRlci1kYW5nZXJ7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG4vKiAqKioqKioqKioqKioqKioqKipcclxuICAgIENvbnRlbnRcclxuKioqKioqKioqKioqKioqKioqICovXHJcbi5wcm9maWxlLWltZ3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5wcm9maWxlLWNvbnRlbnQgPiAucm93IHtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MHB4KXtcclxuICAgIC5wcm9maWxlLWltZ3tcclxuICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxM3JlbTtcclxuICAgIH0gICAgXHJcbn1cclxuLyogKioqKioqKioqKioqKioqKioqKipcclxuICAgIEZvcm1cclxuKioqKioqKioqKioqKioqKioqKioqICovXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uZm9ybS11cGRhdGV7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NzZweCl7XHJcbiAgICAuZm9ybS1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgIH1cclxuICAgIC5mb3JtLXVwZGF0ZXtcclxuICAgICAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _our_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../our-services.service */ "./src/app/our-services.service.ts");
/* harmony import */ var _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../handyman/handyman.service */ "./src/app/handyman/handyman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AdminComponent = class AdminComponent {
    constructor(ourservicesservice, handymanservices, route, router) {
        this.ourservicesservice = ourservicesservice;
        this.handymanservices = handymanservices;
        this.route = route;
        this.router = router;
        this.urlopen = 'url(\'';
        this.urlclose = '\')';
        this.showSwitchCase = {
            "value": "all"
        };
        this.ourservices = [];
        this.allHandymanList = [];
        this.verifiedHandymanList = [];
        this.notVerifiedHandymanList = [];
        // admin=false;
        // login=true;
        this.login = false;
        this.admin = true;
    }
    ngOnInit() {
        this.ourservices = [];
        this.allHandymanList = [];
        this.verifiedHandymanList = [];
        this.notVerifiedHandymanList = [];
        console.log("lol00");
        this.ourservicesservice.getServices()
            .subscribe(data => {
            this.ourservices = data;
        });
        this.ourservicesservice.getHandyman()
            .subscribe(data => {
            this.allHandymanList = data.handymans;
            data.handymans.forEach(element => {
                if (element.isVerified) {
                    this.verifiedHandymanList.push(element);
                }
                if (!element.isVerified) {
                    this.notVerifiedHandymanList.push(element);
                }
            });
        });
    }
    verifyHandyman(idHandyman) {
        console.log(idHandyman);
        this.notVerifiedHandymanList
            .forEach(element => {
            if (element._id === idHandyman) {
                console.log(element);
                console.log(element.isVerified);
                element.isVerified = true;
                console.log(element);
                this.ourservicesservice.updateHandyman(element);
                this.verifiedHandymanList.push(element);
                alert("Verified");
                this.ngOnInit();
                // return;
            }
        });
    }
    unverifyHandyman(idHandyman) {
        console.log(idHandyman);
        this.verifiedHandymanList
            .forEach(element => {
            if (element._id === idHandyman) {
                console.log(element);
                console.log(element.isVerified);
                element.isVerified = false;
                console.log(element);
                this.ourservicesservice.updateHandyman(element);
                this.notVerifiedHandymanList.push(element);
                alert("Un-Verified");
                this.ngOnInit();
                // return;
            }
        });
    }
    deleteHandyman(idHandyman) {
        this.ourservicesservice.deleteHandyman(idHandyman);
        alert("Deleted");
        this.ngOnInit();
    }
    onSubmitLoginForm(loginForm) {
        if (("").localeCompare(loginForm.value.uname) === 0
            &&
                ("").localeCompare(loginForm.value.password) === 0) {
            this.login = false;
            this.admin = true;
        }
        else
            alert("Username or Password Incorrect !");
    }
    showAdmin() {
        if (this.admin)
            return "block";
        return "none";
    }
    showLogin() {
        if (this.login)
            return "block";
        return "none";
    }
};
AdminComponent.ctorParameters = () => [
    { type: _our_services_service__WEBPACK_IMPORTED_MODULE_2__["OurServicesService"] },
    { type: _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_3__["HandymanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    })
], AdminComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/our-services/our-services.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _handyman_handyman_list_handyman_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handyman/handyman-list/handyman-list.component */ "./src/app/handyman/handyman-list/handyman-list.component.ts");
/* harmony import */ var _handyman_handyman_details_handyman_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handyman/handyman-details/handyman-details.component */ "./src/app/handyman/handyman-details/handyman-details.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");












const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"]
    },
    {
        path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"]
    },
    {
        path: 'services', component: _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_5__["OurServicesComponent"]
    },
    {
        path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"]
    },
    {
        path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
    },
    {
        path: 'list', component: _handyman_handyman_list_handyman_list_component__WEBPACK_IMPORTED_MODULE_9__["HandymanListComponent"]
    },
    {
        path: 'details', component: _handyman_handyman_details_handyman_details_component__WEBPACK_IMPORTED_MODULE_10__["HandymanDetailsComponent"]
    },
    {
        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"]
    }
    // ,
    // {
    //   path: '**', redirectTo: '/home'
    // }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' }), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'rad-app';
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.router.navigate(['']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/our-services/our-services.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _handyman_handyman_details_handyman_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./handyman/handyman-details/handyman-details.component */ "./src/app/handyman/handyman-details/handyman-details.component.ts");
/* harmony import */ var _handyman_handyman_list_handyman_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./handyman/handyman-list/handyman-list.component */ "./src/app/handyman/handyman-list/handyman-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_12__["OurServicesComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_16__["AboutUsComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
            _handyman_handyman_details_handyman_details_component__WEBPACK_IMPORTED_MODULE_22__["HandymanDetailsComponent"],
            _handyman_handyman_list_handyman_list_component__WEBPACK_IMPORTED_MODULE_23__["HandymanListComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map{\r\n    width: 100%;\r\n    height: 80%;\r\n    z-index: 1;\r\n}\r\n.map iframe{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.contact-us-section{\r\n    top: 20%;\r\n    z-index: 2;\r\n}\r\n/* @media only screen and (max-width: 750px){\r\n    .container{\r\n        position: relative;\r\n        top: 80%;\r\n    }    \r\n} */\r\n.container>.row{\r\n    /* background-color: #22262de7;\r\n    border: 1px solid #22262d;\r\n    border-radius: 0.5rem; */\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    color: #22262D;\r\n    /* font-weight: bold; */\r\n}\r\n.section-head h2{\r\n    font-family: 'Merriweather', serif;\r\n    font-weight: 700;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.section-head {\r\n    margin: 4rem 0 0 0;\r\n}\r\n.contact-items{\r\n    font-size: 1.1rem;\r\n}\r\n.contact-items i{\r\n    font-size: 1.4rem;\r\n    color: #4F84EB;\r\n    margin-right: 0.5rem;\r\n}\r\n.contact-items .row{\r\n    margin: 2rem;\r\n}\r\n@media only screen and (max-width: 568px){\r\n    .contact-items{\r\n        font-size: 1rem;\r\n    }\r\n    .contact-items i{\r\n        font-size: 1.2rem;\r\n        color: #4F84EB;\r\n        margin-right: 0.2rem;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUNBOzs7OztHQUtHO0FBRUg7SUFDSTs7NEJBRXdCO0lBQ3hCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsY0FBYztRQUNkLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLm1hcCBpZnJhbWV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFjdC11cy1zZWN0aW9ue1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA4MCU7XHJcbiAgICB9ICAgIFxyXG59ICovXHJcblxyXG4uY29udGFpbmVyPi5yb3d7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNjJkZTc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyNjJkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6ICMyMjI2MkQ7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxufVxyXG4uc2VjdGlvbi1oZWFkIGgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLnNlY3Rpb24taGVhZCB7XHJcbiAgICBtYXJnaW46IDRyZW0gMCAwIDA7XHJcbn1cclxuLmNvbnRhY3QtaXRlbXN7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG4uY29udGFjdC1pdGVtcyBpe1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBjb2xvcjogIzRGODRFQjtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcbi5jb250YWN0LWl0ZW1zIC5yb3d7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjhweCl7XHJcbiAgICAuY29udGFjdC1pdGVtc3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1pdGVtcyBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNEY4NEVCO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/************************\r\n    Company name\r\n***********************/\r\n/* .company-name{\r\n    font-family: 'Niconne' ;\r\n    letter-spacing: 5px;\r\n    font-weight: 700;\r\n} */\r\n/************************\r\n    Company logo\r\n***********************/\r\n.img-logo{\r\n    padding: 0.5rem;\r\n    width: 7.5rem;\r\n}\r\n@media only screen and (min-width: 768px){\r\n    .img-logo{\r\n        margin-left: 1.8rem;\r\n    }    \r\n}\r\nul li:hover a{\r\n    cursor: pointer;\r\n    color: #FA9600 !important;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzt1QkFFdUI7QUFDdkI7Ozs7R0FJRztBQUNIOzt1QkFFdUI7QUFFdkI7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb21wYW55IG5hbWVcclxuKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qIC5jb21wYW55LW5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ05pY29ubmUnIDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59ICovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIENvbXBhbnkgbG9nb1xyXG4qKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5pbWctbG9nb3tcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHdpZHRoOiA3LjVyZW07XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuaW1nLWxvZ297XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEuOHJlbTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbnVsIGxpOmhvdmVyIGF7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI0ZBOTYwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/handyman/handyman-details/handyman-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/handyman/handyman-details/handyman-details.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.related-img{\r\n    width: 12rem;\r\n    height: 10rem;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n\r\n/*******************\r\n    Star Rating\r\n********************/\r\n\r\nngb-rating .star {\r\n    font-size: 1.5rem;\r\n    color: #b0c4de;\r\n}\r\n\r\nngb-rating .filled {\r\n    color: #FA9600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZHltYW4vaGFuZHltYW4tZGV0YWlscy9oYW5keW1hbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBOztvQkFFb0I7O0FBQ3BCO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaGFuZHltYW4vaGFuZHltYW4tZGV0YWlscy9oYW5keW1hbi1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJlbGF0ZWQtaW1ne1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqXHJcbiAgICBTdGFyIFJhdGluZ1xyXG4qKioqKioqKioqKioqKioqKioqKi9cclxubmdiLXJhdGluZyAuc3RhciB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjYjBjNGRlO1xyXG59XHJcbm5nYi1yYXRpbmcgLmZpbGxlZCB7XHJcbiAgICBjb2xvcjogI0ZBOTYwMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/handyman/handyman-details/handyman-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/handyman/handyman-details/handyman-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: HandymanDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandymanDetailsComponent", function() { return HandymanDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _handyman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handyman.service */ "./src/app/handyman/handyman.service.ts");
/* harmony import */ var src_app_our_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/our-services.service */ "./src/app/our-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HandymanDetailsComponent = class HandymanDetailsComponent {
    constructor(handymanservice, ourservicesservice, route, router) {
        this.handymanservice = handymanservice;
        this.ourservicesservice = ourservicesservice;
        this.route = route;
        this.router = router;
        this.selectedRating = 0;
        this.ourservices = [];
        this.relatedHandymanList = [];
    }
    ngOnInit() {
        this.selectedRating = 0;
        this.ourservices = [];
        this.relatedHandymanList = [];
        console.log("on init details");
        this.relatedHandymanList = [];
        this.ourservicesservice.getHandyman()
            .subscribe(data => {
            data.handymans.forEach(element => {
                if (element._id === this.handymanservice.getdataForDetailsPage()) {
                    this.dataHandyman = element;
                    this.setRelatedHandymanList(element.serviceName);
                }
            });
        });
    }
    setRelatedHandymanList(serviceName) {
        this.ourservicesservice.getHandyman()
            .subscribe(data => {
            data.handymans.forEach(element => {
                if ((element.serviceName.toLowerCase()).localeCompare(serviceName) === 0) {
                    this.relatedHandymanList.push(element);
                }
            });
        });
    }
    gotoDetails(dataForDetails) {
        // console.log("CLick = " + dataForDetails);
        this.handymanservice.setDataForDetailPage(dataForDetails);
        this.ngOnInit();
    }
    ratingChanged() {
        console.log(this.dataHandyman);
        setTimeout(() => {
            let newRating = ((this.dataHandyman.rating * this.dataHandyman.ratingNumber) + this.selectedRating) / (this.dataHandyman.ratingNumber + 1);
            this.dataHandyman.ratingNumber += 1;
            this.dataHandyman.rating = newRating;
            console.log(this.dataHandyman);
            this.ourservicesservice.updateHandyman(this.dataHandyman);
        }, 2000);
    }
};
HandymanDetailsComponent.ctorParameters = () => [
    { type: _handyman_service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"] },
    { type: src_app_our_services_service__WEBPACK_IMPORTED_MODULE_3__["OurServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HandymanDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-handyman-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./handyman-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/handyman/handyman-details/handyman-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./handyman-details.component.css */ "./src/app/handyman/handyman-details/handyman-details.component.css")).default]
    })
], HandymanDetailsComponent);



/***/ }),

/***/ "./src/app/handyman/handyman-list/handyman-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/handyman/handyman-list/handyman-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-head h2{\r\n    font-family: 'Merriweather', serif;\r\n    font-weight: 700;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.section-head {\r\n    margin: 4rem 0 0 0;\r\n}\r\n.handyman-img{\r\n    width: 14rem;\r\n    height: 14rem;\r\n    background-position:center;\r\n\tbackground-repeat:no-repeat;\r\n    background-size:cover;\r\n    border-radius: 1rem;\r\n}\r\n.handyman-content {\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    /* border-radius: 1rem;\r\n    color: #FFFFFF; */\r\n}\r\n.handyman-content:hover .handyman-img{\r\n    -webkit-transform: translateY(-1rem);\r\n            transform: translateY(-1rem);\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    box-shadow: 2px 2px 10px #9BA5BA;\r\n    opacity: 0.7;\r\n}\r\n.moredetails{\r\n    font-size: 1.2rem;\r\n    -webkit-transform: translateY(-50rem);\r\n            transform: translateY(-50rem);\r\n    color: #FFFFFF;\r\n    text-shadow: 2px 2px  #000000;\r\n}\r\n.handyman-content:hover .moredetails{\r\n    cursor: pointer;\r\n    -webkit-transform: translateY(-9rem);\r\n            transform: translateY(-9rem);\r\n    -webkit-animation: moredetails 1s 1;\r\n            animation: moredetails 1s 1;\r\n}\r\n.handyman-content>.handyman-content-age{\r\n    width: -webkit-max-content;\r\n    width: -moz-max-content;\r\n    width: max-content;\r\n}\r\n@-webkit-keyframes moredetails{\r\n    from{\r\n        -webkit-transform: translateY(-20rem);\r\n                transform: translateY(-20rem);\r\n    }\r\n    to{\r\n        -webkit-transform: translateY(-9rem);\r\n                transform: translateY(-9rem);\r\n    }\r\n}\r\n@keyframes moredetails{\r\n    from{\r\n        -webkit-transform: translateY(-20rem);\r\n                transform: translateY(-20rem);\r\n    }\r\n    to{\r\n        -webkit-transform: translateY(-9rem);\r\n                transform: translateY(-9rem);\r\n    }\r\n}\r\n@media only screen and (max-width:768px){\r\n    .handyman-img{\r\n        width: 12rem;\r\n        height: 12rem;\r\n    }\r\n    .moredetails{\r\n        font-size: 1rem;\r\n    }\r\n    \r\n}\r\n@media only screen and (max-width:576px){\r\n    .handyman-img{\r\n        width: 10rem;\r\n        height: 10rem;\r\n    }\r\n    .moredetails{\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n}\r\n.emptylist-container>.row{\r\n    position: relative;\r\n    padding: 15rem;\r\n}\r\n.register-btn{\r\n    padding-right: 2rem;\r\n    padding-left: 2rem;\r\n    font-weight: 400;\r\n    border-radius: 0.5rem;\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n}\r\n.register-btn:hover {\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n    box-shadow: 2px 3px 5px #9BA5BA;\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n}\r\n/*******************\r\n    Star Rating\r\n********************/\r\nngb-rating .star {\r\n    font-size: 1.5rem;\r\n    color: #b0c4de;\r\n}\r\nngb-rating .filled {\r\n    color: #FA9600;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZHltYW4vaGFuZHltYW4tbGlzdC9oYW5keW1hbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0NBQzdCLDJCQUEyQjtJQUN4QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO3FCQUNpQjtBQUNyQjtBQUNBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1Qiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxxQ0FBNkI7Z0JBQTdCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7QUFDSjtBQVBBO0lBQ0k7UUFDSSxxQ0FBNkI7Z0JBQTdCLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7QUFDSjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCOztBQUVKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0Isa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5QjtBQUdBOztvQkFFb0I7QUFDcEI7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hhbmR5bWFuL2hhbmR5bWFuLWxpc3QvaGFuZHltYW4tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24taGVhZCBoMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5zZWN0aW9uLWhlYWQge1xyXG4gICAgbWFyZ2luOiA0cmVtIDAgMCAwO1xyXG59XHJcblxyXG4uaGFuZHltYW4taW1ne1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgaGVpZ2h0OiAxNHJlbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuLmhhbmR5bWFuLWNvbnRlbnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBjb2xvcjogI0ZGRkZGRjsgKi9cclxufVxyXG4uaGFuZHltYW4tY29udGVudDpob3ZlciAuaGFuZHltYW4taW1ne1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4ICM5QkE1QkE7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLm1vcmVkZXRhaWxze1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcmVtKTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggICMwMDAwMDA7XHJcbn1cclxuLmhhbmR5bWFuLWNvbnRlbnQ6aG92ZXIgLm1vcmVkZXRhaWxze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC05cmVtKTtcclxuICAgIGFuaW1hdGlvbjogbW9yZWRldGFpbHMgMXMgMTtcclxufVxyXG4uaGFuZHltYW4tY29udGVudD4uaGFuZHltYW4tY29udGVudC1hZ2V7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuQGtleWZyYW1lcyBtb3JlZGV0YWlsc3tcclxuICAgIGZyb217XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHJlbSk7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlyZW0pO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuaGFuZHltYW4taW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgfVxyXG4gICAgLm1vcmVkZXRhaWxze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAuaGFuZHltYW4taW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgfVxyXG4gICAgLm1vcmVkZXRhaWxze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmVtcHR5bGlzdC1jb250YWluZXI+LnJvd3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE1cmVtO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnRue1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3JkZXI6ICNGQTk2MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTk2MDA7XHJcbn1cclxuLnJlZ2lzdGVyLWJ0bjpob3ZlciB7XHJcbiAgICBib3JkZXI6ICNGQTk2MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTk2MDA7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjOUJBNUJBO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKlxyXG4gICAgU3RhciBSYXRpbmdcclxuKioqKioqKioqKioqKioqKioqKiovXHJcbm5nYi1yYXRpbmcgLnN0YXIge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogI2IwYzRkZTtcclxufVxyXG5uZ2ItcmF0aW5nIC5maWxsZWQge1xyXG4gICAgY29sb3I6ICNGQTk2MDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/handyman/handyman-list/handyman-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/handyman/handyman-list/handyman-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: HandymanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandymanListComponent", function() { return HandymanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _handyman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handyman.service */ "./src/app/handyman/handyman.service.ts");
/* harmony import */ var src_app_our_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/our-services.service */ "./src/app/our-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let HandymanListComponent = class HandymanListComponent {
    constructor(handymanservice, ourservicesservice, route, router, ratingConfig) {
        this.handymanservice = handymanservice;
        this.ourservicesservice = ourservicesservice;
        this.route = route;
        this.router = router;
        this.serviceName = "";
        this.ourservices = [];
        // serviceData;
        this.handymanList = [];
        this.urlopen = 'url(\'';
        this.urlclose = '\')';
        // ratingConfig.max= 5;
    }
    ngOnInit() {
        this.ourservicesservice.getServices()
            .subscribe(data => {
            this.ourservices = data;
        });
        this.setData(this.handymanservice.getDataForListPage());
    }
    setData(serviceIdForListPage) {
        this.ourservicesservice.getServices()
            .subscribe(data => {
            data.forEach(element => {
                if (element.id === serviceIdForListPage) {
                    this.serviceName = element.name.toLowerCase();
                    this.setHandymanList();
                }
            });
        });
    }
    setHandymanList() {
        this.ourservicesservice.getHandyman()
            .subscribe(data => {
            data.handymans.forEach(element => {
                if (((this.serviceName).toLowerCase()).localeCompare(element.serviceName.toLowerCase()) === 0
                    &&
                        element.isVerified) {
                    this.handymanList.push(element);
                }
            });
        });
    }
    gotoDetailsPage(IdHandymanForDetails) {
        console.log(IdHandymanForDetails);
        let entered = false;
        // let inserted:boolean = false;
        let customerName = prompt("Please enter your Name:");
        let customerContact = prompt("Please enter your contact number:");
        if (customerContact == null || customerContact == "" || customerName == null || customerName == "") {
            entered = false;
            alert("Please enter details to view information !");
        }
        else {
            entered = true;
        }
        if (entered) {
            this.ourservicesservice.createCustomer(customerName, customerContact, IdHandymanForDetails);
            this.handymanservice.setDataForDetailPage(IdHandymanForDetails);
            this.router.navigate(['/details'], { relativeTo: this.route });
        }
    }
    calcAge(Dob) {
        let today = new Date();
        let birthDate = new Date(Dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        // console.log(age + " " + today.getFullYear() + " " + birthDate.getFullYear());
        // console.log(today.getMonth()+" "+birthDate.getMonth());
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
};
HandymanListComponent.ctorParameters = () => [
    { type: _handyman_service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"] },
    { type: src_app_our_services_service__WEBPACK_IMPORTED_MODULE_3__["OurServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbRatingConfig"] }
];
HandymanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-handyman-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./handyman-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/handyman/handyman-list/handyman-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./handyman-list.component.css */ "./src/app/handyman/handyman-list/handyman-list.component.css")).default]
    })
], HandymanListComponent);



/***/ }),

/***/ "./src/app/handyman/handyman.service.ts":
/*!**********************************************!*\
  !*** ./src/app/handyman/handyman.service.ts ***!
  \**********************************************/
/*! exports provided: HandymanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandymanService", function() { return HandymanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HandymanService = class HandymanService {
    constructor() { }
    getdataForDetailsPage() {
        return this.idDataForDetailsPage;
    }
    setDataForDetailPage(IdofHandyMan) {
        this.idDataForDetailsPage = IdofHandyMan;
        console.log(this.idDataForDetailsPage);
    }
    getDataForListPage() {
        return this.serviceIdForListPage;
    }
    setDataForListPage(IdofService) {
        this.serviceIdForListPage = IdofService;
    }
};
HandymanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HandymanService);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".company-name{\r\n    font-family: 'Georgia' ;\r\n    font-weight: 700;\r\n}\r\n\r\n/* ********************** \r\n    section head content\r\n********************** */\r\n\r\n.section-head h2{\r\n    font-family: 'Merriweather', serif;\r\n    font-weight: 700;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.section-head {\r\n\tmargin: 4rem 0 0 0;\r\n}\r\n\r\n.section-subhead{\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.section-subhead div{\r\n    color: #9BA5BA;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n/* ********************** \r\n    Home head section\r\n********************** */\r\n\r\n.head-section-img{\r\n    background-color: #ffffff;\r\n    /* clip-path: polygon(26% 0%, 100% 0%, 100% 100%, 0% 100%); */\r\n    overflow: hidden;\r\n}\r\n\r\n.head-img{\r\n    position: relative;\r\n    width: inherit;\r\n    left: 50px;\r\n}\r\n\r\n.home-head-section-data{\r\n    height: inherit;\r\n    margin: 2rem 0 0 0;\r\n    padding-left: 5rem;\r\n}\r\n\r\n.head-section-data-head{\r\n    margin-top: 20rem;\r\n    font-family: 'Montserrat';\r\n    color: #FA9600;\r\n    font-size: 3.5rem;\r\n    font-weight: 800;\r\n}\r\n\r\n.home-head-section-data p{\r\n    font-size: 1.5rem;\r\n    color: #22262D;\r\n}\r\n\r\n.home-head-section-data p.primary-dark-blue{\r\n    font-weight: 700;\r\n}\r\n\r\n.home-head-section-data h3{\r\n    color: #22262D;\r\n    font-size: 2rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.company-name{\r\n    font-family: 'Georgia' ;\r\n    font-weight: 700;\r\n}\r\n\r\n.head-contact{\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.head-contact .contact-btn, .head-contact .register-btn{\r\n    padding-right: 2rem;\r\n    padding-left: 2rem;\r\n    font-weight: 400;\r\n    color: #FFFFFF;\r\n    background-color: #2861CF;\r\n    border: 2px solid #2861CF;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.head-contact .contact-btn:hover{\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n    -webkit-transform: scale(1.1, 1.2);\r\n            transform: scale(1.1, 1.2);\r\n    box-shadow: 2px 3px 5px #9BA5BA;\r\n    -webkit-animation: scaling 0.5s 1;\r\n            animation: scaling 0.5s 1;\r\n}\r\n\r\n.head-contact .register-btn:hover {\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n    -webkit-transform: scale(1.3, 1.3);\r\n            transform: scale(1.3, 1.3);\r\n    box-shadow: 2px 3px 5px #9BA5BA;\r\n}\r\n\r\n.head-contact .register-btn{\r\n    border-radius: 0.5rem;\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n}\r\n\r\n.head-contact span a{\r\n    color: #3c6bda;\r\n}\r\n\r\n.head-contact span {\r\n    font-size: 2rem;\r\n    margin-left: 2rem;\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n}\r\n\r\n.head-contact span:hover a{\r\n    color: #FA9600;\r\n}\r\n\r\n.head-contact span:hover {\r\n    -webkit-transform: scale(1.3, 1.3);\r\n            transform: scale(1.3, 1.3);\r\n}\r\n\r\n@-webkit-keyframes scaling {\r\n    from{\r\n        -webkit-transform: scale(1, 1);\r\n                transform: scale(1, 1);\r\n    }\r\n    to{\r\n        -webkit-transform: scale(1.1, 1.2);\r\n                transform: scale(1.1, 1.2);\r\n    }\r\n}\r\n\r\n@keyframes scaling {\r\n    from{\r\n        -webkit-transform: scale(1, 1);\r\n                transform: scale(1, 1);\r\n    }\r\n    to{\r\n        -webkit-transform: scale(1.1, 1.2);\r\n                transform: scale(1.1, 1.2);\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:992px){\r\n    .head-section-img{\r\n        background-color: #ffffff;\r\n        /* clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); */\r\n        overflow: hidden;\r\n    }\r\n    .head-img{\r\n        \r\n        top: 5px;\r\n    }\r\n    .home-head-section-data{\r\n        height: inherit;\r\n        margin: 2rem 0 0 0;\r\n        padding-left: 1rem;\r\n        padding-right: 0;\r\n    }    \r\n    .home-head-section-data p{\r\n        width: inherit;\r\n\r\n        margin-top: 2rem;\r\n    }  \r\n    .head-section-data-head{\r\n        line-height: 2.5rem;\r\n    }\r\n }\r\n\r\n@media only screen and (max-width:900px) and (min-width:576px){\r\n    .head-img {\r\n        width: auto;\r\n        top: 5px;\r\n        left: auto;\r\n    }    \r\n }\r\n\r\n@media only screen and (max-width:768px) and (min-width:576px){\r\n    .head-contact span {\r\n        margin-left: 1rem;\r\n    }       \r\n}\r\n\r\n@media only screen and (max-width:576px){\r\n    .head-section-data-head{\r\n        font-size: 2rem;\r\n    }\r\n    .home-head-section-data p{\r\n        font-size: 1.2rem;\r\n    }\r\n    .head-section-img{\r\n        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);\r\n                clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);\r\n        overflow: hidden;\r\n        display: none;\r\n    }\r\n    .head-img{\r\n        display: none;\r\n    }\r\n    .home-head-section-data{\r\n        height: inherit;\r\n        margin: 2rem 0 0 0;\r\n        padding-left: 1rem;\r\n        padding-right: 0;\r\n    }\r\n    .home-head-section-data p{\r\n        padding-right: 1rem;\r\n        width: inherit;\r\n        margin-top: 1rem;\r\n    }\r\n\r\n}\r\n\r\n/* ********************** \r\n    Why us section\r\n********************** */\r\n\r\n.why-us-section{\r\n    padding-top: 2rem;\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.why-us-section-content div span i{\r\n    font-size: 2rem;\r\n    color: #FA9600;\r\n    border: 1px solid #FA9600;\r\n    border-radius: 250rem;\r\n    padding: 1.5rem 1.5rem 1.5rem 1.5rem;\r\n    box-shadow: 2px 2px 20px #FA9600;\r\n}\r\n\r\n.why-us-section-content h5{\r\n    color: #22262D;\r\n}\r\n\r\n/* ********************** \r\n    services section\r\n********************** */\r\n\r\n.services-section-subhead{\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.services-section-subhead div{\r\n    color: #9BA5BA;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.services-section-content{\r\n    margin-top: 2rem;\r\n    color: #9BA5BA;\r\n}\r\n\r\n.services-section-icon{\r\n    font-size: 2rem;\r\n}\r\n\r\n.services-section-content-col div.card{\r\n    border: 0.1px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.services-section-content-col:hover div.card{\r\n    border: 0.5px solid #9BA5BA;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 3px 3px 5px #9BA5BA;\r\n\r\n}\r\n\r\n.services-section-content-col div.card div .card-text{\r\n    display: none;\r\n    -webkit-transform: translateY(100px);\r\n            transform: translateY(100px);\r\n}\r\n\r\n.services-section-content-col div.card:hover div .card-text{\r\n    display: block;\r\n    -webkit-transform: translateY(-30px);\r\n            transform: translateY(-30px);\r\n    -webkit-animation: translateDescAnim 1s 1;\r\n            animation: translateDescAnim 1s 1;\r\n    margin-bottom: 0;\r\n}\r\n\r\n@-webkit-keyframes translateDescAnim{\r\n    from{\r\n        -webkit-transform: translateY(100px);\r\n                transform: translateY(100px);\r\n    }\r\n    to{\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n}\r\n\r\n@keyframes translateDescAnim{\r\n    from{\r\n        -webkit-transform: translateY(100px);\r\n                transform: translateY(100px);\r\n    }\r\n    to{\r\n        -webkit-transform: translateY(-30px);\r\n                transform: translateY(-30px);\r\n    }\r\n}\r\n\r\n.services-section-content-col div.card:hover div span i{\r\n    -webkit-transform: translate(-70px, 0px);\r\n            transform: translate(-70px, 0px);\r\n}\r\n\r\n.services-section-content-col div.card:hover div span{\r\n    color: #FA9600;\r\n}\r\n\r\n.services-section-content-col div.card:hover div .card-title{\r\n    color: #22262D;\r\n    -webkit-transform: translate(50px,-38px);\r\n            transform: translate(50px,-38px);\r\n}\r\n\r\n/* ********************** \r\n    book-service section\r\n********************** */\r\n\r\n.book-service-section{\r\n    padding-top: 4rem;\r\n    padding-bottom: 4rem;\r\n}\r\n\r\n.book-service-section-head{\r\n    font-variant-caps: all-petite-caps;\r\n    color: #FFFFFF;\r\n    font-size: 2rem;\r\n    font-weight: 200;\r\n    letter-spacing: 0.5rem;\r\n}\r\n\r\n.book-service-section-subhead{\r\n    color: #d4d4d4;\r\n}\r\n\r\n.book-service-section-form input{\r\n    width: 80%;\r\n}\r\n\r\n.book-service-section-form input, .book-service-section-form textarea {\r\n    background-color: #22262D;\r\n    color: #FFFFFF;\r\n    border: 1px solid #d4d4d4;\r\n}\r\n\r\n.book-service-section-form button{\r\n    padding-left: 3rem;\r\n    padding-right: 3rem;\r\n    font-weight: 400;\r\n    color: #FFFFFF;\r\n    background-color: #3c6bda;\r\n    border: 1px solid #2861CF;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.book-service-section-form button:hover{\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n    -webkit-animation: scaling 0.5s 1;\r\n            animation: scaling 0.5s 1;\r\n    -webkit-transform: scale(1.1, 1.2);\r\n            transform: scale(1.1, 1.2);\r\n    box-shadow: 3px 1px 5px #fa960042;\r\n}\r\n\r\n.book-service-section-form .number{\r\n    font-size: 1.8rem;\r\n}\r\n\r\n@media only screen and (max-width:768px){\r\n    .book-service-section-form textarea {\r\n        width: 84%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:576px){\r\n    .book-service-section-form textarea {\r\n        width: 86%;\r\n    }\r\n}\r\n\r\n/* ********************** \r\n    CAll us section\r\n********************** */\r\n\r\n.call-us-section{\r\n    padding-top: 6rem;\r\n    padding-bottom: 6rem;\r\n}\r\n\r\n.call-us-section .number{\r\n    font-size: 2.7rem;\r\n}\r\n\r\n.call-us-section h4{\r\n    font-size: 2.5rem;\r\n}\r\n\r\n@media only screen and (max-width: 576px){\r\n    .call-us-section .number{\r\n        font-size: 1.7rem;\r\n    }\r\n    .call-us-section h4{\r\n        font-size: 1.5rem;\r\n    }    \r\n}\r\n\r\n/* ********************** \r\n    Handyman section\r\n********************** */\r\n\r\n.handyman-section{\r\n    margin-top: 5rem;\r\n    margin-bottom: 7rem;\r\n}\r\n\r\n.handyman-section .section-head h2{\r\n    font-size: 1.6rem;\r\n}\r\n\r\n.card svg.material-icons path {\r\n  fill: #fff;\r\n}\r\n\r\n.handyman-section-cases.card-container, .handyman-section-values .card-container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n\r\n.handyman-section-cases .card{\r\n    color: #FFFFFF;\r\n    background-color: #3c6bda;\r\n    border: 1px solid #2861CF;\r\n    border-radius: 2rem;\r\n    height: 40px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;\r\n    cursor: pointer;\r\n}\r\n\r\n.handyman-section-cases .card:hover{\r\n    -webkit-transform: scale(1.1, 1.2);\r\n            transform: scale(1.1, 1.2);\r\n    -webkit-animation: scaling 0.5s 1;\r\n            animation: scaling 0.5s 1;\r\n    background-color: #FA9600;\r\n    border-color: #FA9600;\r\n    box-shadow: 3px 3px 5px #9BA5BA;\r\n}\r\n\r\n.handyman-section-values .card {\r\n    border-radius: 4px;\r\n    border: 1px solid #eee;\r\n    height: 200px;\r\n    width: 200px;\r\n    margin: 0 8px 16px;\r\n    padding: 16px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n    line-height: 24px;   \r\n}\r\n\r\n.handyman-section-values .card:hover {\r\n    border: 1px solid #BFBFBF;\r\n    box-shadow: 5px 5px 5px #9BA5BA;\r\n    cursor: pointer;\r\n    color: #FA9600;\r\n    \r\n}\r\n\r\n.handyman-section-values .card::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 100%; height:100%;\r\n    top:0; left:0;\r\n    background:#000000af;\r\n    opacity: 0;\r\n    transition: all 1s;\r\n    -webkit-transition: all 1s;\r\n}\r\n\r\n.handyman-section-values .card:hover::after {\r\n    opacity: 1;\r\n}\r\n\r\n.handyman-section-values-img{\r\n    background-position:center;\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n\theight:5rem;\r\n\twidth:5rem;\r\n}\r\n\r\n.handyman-section-values .card .handyman-section-values-content{\r\n\r\n    font-variant-caps: all-petite-caps;\r\n}\r\n\r\n.handyman-section-values .card:hover .handyman-section-values-content{\r\n    color: #FA9600;\r\n    font-size: 1.5rem;\r\n    z-index: 2;\r\n    -webkit-transform: translateY(-20px);\r\n            transform: translateY(-20px);\r\n    text-shadow: 1px 1px 3px #22262D;\r\n}\r\n\r\n/* ********************** \r\n    Map section\r\n********************** */\r\n\r\n.map-section{\r\n    position: relative;\r\n    height:50%;\r\n}\r\n\r\n.map-section h3{\r\n    z-index: 5;\r\n}\r\n\r\n.map-section iframe{\r\n    position:absolute;\r\n    left:0;\r\n    top:0;\r\n    height:100%;\r\n    width:100%;\r\n}\r\n\r\n@media only screen and (max-width: 567px){\r\n\t.map-section{\r\n\t\theight: 30%;\r\n\t}\r\n}\r\n\r\n/* .map-section::after{\r\n    content: '';\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #3c6bda2d;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTs7d0JBRXdCOztBQUV4QjtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7SUFDSSx3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFHQTs7d0JBRXdCOztBQUV4QjtJQUNJLHlCQUF5QjtJQUN6Qiw2REFBNkQ7SUFDN0QsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJO1FBQ0ksOEJBQXNCO2dCQUF0QixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGtDQUEwQjtnQkFBMUIsMEJBQTBCO0lBQzlCO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLDhCQUFzQjtnQkFBdEIsc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxrQ0FBMEI7Z0JBQTFCLDBCQUEwQjtJQUM5QjtBQUNKOztBQUNDO0lBQ0c7UUFDSSx5QkFBeUI7UUFDekIsNERBQTREO1FBQzVELGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjOztRQUVkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0NBQ0g7O0FBQ0E7SUFDRztRQUNJLFdBQVc7UUFDWCxRQUFRO1FBQ1IsVUFBVTtJQUNkO0NBQ0g7O0FBRUQ7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDhEQUFzRDtnQkFBdEQsc0RBQXNEO1FBQ3RELGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCOztBQUVKOztBQUVBOzt3QkFFd0I7O0FBRXhCO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTs7d0JBRXdCOztBQUN4QjtJQUNJLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiwrQkFBK0I7O0FBRW5DOztBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1Qix5Q0FBaUM7WUFBakMsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJO1FBQ0ksb0NBQTRCO2dCQUE1Qiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLG9DQUE0QjtnQkFBNUIsNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBUEE7SUFDSTtRQUNJLG9DQUE0QjtnQkFBNUIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTs7d0JBRXdCOztBQUN4QjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUNBOzt3QkFFd0I7O0FBQ3hCO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTs7d0JBRXdCOztBQUN4QjtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdDQUFnQztJQUFoQyxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYzs7QUFFbEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLEtBQUssRUFBRSxNQUFNO0lBQ2Isb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0NBQzdCLDJCQUEyQjtDQUMzQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFDQTs7SUFFSSxrQ0FBa0M7QUFDdEM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFFQTs7d0JBRXdCOztBQUV4QjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLEtBQUs7SUFDTCxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUNBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7QUFDRDs7QUFDQTs7Ozs7Ozs7R0FRRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55LW5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ0dlb3JnaWEnIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKiogXHJcbiAgICBzZWN0aW9uIGhlYWQgY29udGVudFxyXG4qKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4uc2VjdGlvbi1oZWFkIGgye1xyXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLnNlY3Rpb24taGVhZCB7XHJcblx0bWFyZ2luOiA0cmVtIDAgMCAwO1xyXG59XHJcbi5zZWN0aW9uLXN1YmhlYWR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uc2VjdGlvbi1zdWJoZWFkIGRpdntcclxuICAgIGNvbG9yOiAjOUJBNUJBO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqIFxyXG4gICAgSG9tZSBoZWFkIHNlY3Rpb25cclxuKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLmhlYWQtc2VjdGlvbi1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogY2xpcC1wYXRoOiBwb2x5Z29uKDI2JSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCAwJSAxMDAlKTsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmhlYWQtaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG59XHJcbi5ob21lLWhlYWQtc2VjdGlvbi1kYXRhe1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAycmVtIDAgMCAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG59XHJcbi5oZWFkLXNlY3Rpb24tZGF0YS1oZWFke1xyXG4gICAgbWFyZ2luLXRvcDogMjByZW07XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgY29sb3I6ICNGQTk2MDA7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmhvbWUtaGVhZC1zZWN0aW9uLWRhdGEgcHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMyMjI2MkQ7XHJcbn1cclxuLmhvbWUtaGVhZC1zZWN0aW9uLWRhdGEgcC5wcmltYXJ5LWRhcmstYmx1ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLmhvbWUtaGVhZC1zZWN0aW9uLWRhdGEgaDN7XHJcbiAgICBjb2xvcjogIzIyMjYyRDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuLmNvbXBhbnktbmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2VvcmdpYScgO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaGVhZC1jb250YWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmhlYWQtY29udGFjdCAuY29udGFjdC1idG4sIC5oZWFkLWNvbnRhY3QgLnJlZ2lzdGVyLWJ0bntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg2MUNGO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI4NjFDRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuLmhlYWQtY29udGFjdCAuY29udGFjdC1idG46aG92ZXJ7XHJcbiAgICBib3JkZXI6ICNGQTk2MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTk2MDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4yKTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggNXB4ICM5QkE1QkE7XHJcbiAgICBhbmltYXRpb246IHNjYWxpbmcgMC41cyAxO1xyXG59IFxyXG4uaGVhZC1jb250YWN0IC5yZWdpc3Rlci1idG46aG92ZXIge1xyXG4gICAgYm9yZGVyOiAjRkE5NjAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE5NjAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjOUJBNUJBO1xyXG59XHJcbi5oZWFkLWNvbnRhY3QgLnJlZ2lzdGVyLWJ0bntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogI0ZBOTYwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBOTYwMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG59XHJcbi5oZWFkLWNvbnRhY3Qgc3BhbiBhe1xyXG4gICAgY29sb3I6ICMzYzZiZGE7XHJcbn1cclxuLmhlYWQtY29udGFjdCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbn1cclxuLmhlYWQtY29udGFjdCBzcGFuOmhvdmVyIGF7XHJcbiAgICBjb2xvcjogI0ZBOTYwMDtcclxufVxyXG4uaGVhZC1jb250YWN0IHNwYW46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2NhbGluZyB7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4yKTtcclxuICAgIH1cclxufVxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgIC5oZWFkLXNlY3Rpb24taW1ne1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgLyogY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAlIDEwMCUpOyAqL1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuaGVhZC1pbWd7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZS1oZWFkLXNlY3Rpb24tZGF0YXtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgbWFyZ2luOiAycmVtIDAgMCAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgfSAgICBcclxuICAgIC5ob21lLWhlYWQtc2VjdGlvbi1kYXRhIHB7XHJcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9ICBcclxuICAgIC5oZWFkLXNlY3Rpb24tZGF0YS1oZWFke1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICB9XHJcbiB9XHJcbiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpIGFuZCAobWluLXdpZHRoOjU3NnB4KXtcclxuICAgIC5oZWFkLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgbGVmdDogYXV0bztcclxuICAgIH0gICAgXHJcbiB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIGFuZCAobWluLXdpZHRoOjU3NnB4KXtcclxuICAgIC5oZWFkLWNvbnRhY3Qgc3BhbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9ICAgICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAuaGVhZC1zZWN0aW9uLWRhdGEtaGVhZHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuaG9tZS1oZWFkLXNlY3Rpb24tZGF0YSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLmhlYWQtc2VjdGlvbi1pbWd7XHJcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5oZWFkLWltZ3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtaGVhZC1zZWN0aW9uLWRhdGF7XHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwIDAgMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5ob21lLWhlYWQtc2VjdGlvbi1kYXRhIHB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiBcclxuICAgIFdoeSB1cyBzZWN0aW9uXHJcbioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi53aHktdXMtc2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn1cclxuLndoeS11cy1zZWN0aW9uLWNvbnRlbnQgZGl2IHNwYW4gaXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjRkE5NjAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZBOTYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1MHJlbTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW0gMS41cmVtIDEuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCAjRkE5NjAwO1xyXG59XHJcbi53aHktdXMtc2VjdGlvbi1jb250ZW50IGg1e1xyXG4gICAgY29sb3I6ICMyMjI2MkQ7XHJcbn1cclxuLyogKioqKioqKioqKioqKioqKioqKioqKiBcclxuICAgIHNlcnZpY2VzIHNlY3Rpb25cclxuKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4uc2VydmljZXMtc2VjdGlvbi1zdWJoZWFke1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNlcnZpY2VzLXNlY3Rpb24tc3ViaGVhZCBkaXZ7XHJcbiAgICBjb2xvcjogIzlCQTVCQTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgY29sb3I6ICM5QkE1QkE7XHJcbn1cclxuLnNlcnZpY2VzLXNlY3Rpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uc2VydmljZXMtc2VjdGlvbi1jb250ZW50LWNvbCBkaXYuY2FyZHtcclxuICAgIGJvcmRlcjogMC4xcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnQtY29sOmhvdmVyIGRpdi5jYXJke1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjOUJBNUJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzlCQTVCQTtcclxuXHJcbn1cclxuLnNlcnZpY2VzLXNlY3Rpb24tY29udGVudC1jb2wgZGl2LmNhcmQgZGl2IC5jYXJkLXRleHR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxufVxyXG4uc2VydmljZXMtc2VjdGlvbi1jb250ZW50LWNvbCBkaXYuY2FyZDpob3ZlciBkaXYgLmNhcmQtdGV4dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICAgIGFuaW1hdGlvbjogdHJhbnNsYXRlRGVzY0FuaW0gMXMgMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuQGtleWZyYW1lcyB0cmFuc2xhdGVEZXNjQW5pbXtcclxuICAgIGZyb217XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnQtY29sIGRpdi5jYXJkOmhvdmVyIGRpdiBzcGFuIGl7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzBweCwgMHB4KTtcclxufVxyXG4uc2VydmljZXMtc2VjdGlvbi1jb250ZW50LWNvbCBkaXYuY2FyZDpob3ZlciBkaXYgc3BhbntcclxuICAgIGNvbG9yOiAjRkE5NjAwO1xyXG59XHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnQtY29sIGRpdi5jYXJkOmhvdmVyIGRpdiAuY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiAjMjIyNjJEO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwtMzhweCk7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKiogXHJcbiAgICBib29rLXNlcnZpY2Ugc2VjdGlvblxyXG4qKioqKioqKioqKioqKioqKioqKioqICovXHJcbi5ib29rLXNlcnZpY2Utc2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW07XHJcbn1cclxuLmJvb2stc2VydmljZS1zZWN0aW9uLWhlYWR7XHJcbiAgICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxufVxyXG4uYm9vay1zZXJ2aWNlLXNlY3Rpb24tc3ViaGVhZHtcclxuICAgIGNvbG9yOiAjZDRkNGQ0O1xyXG59XHJcbi5ib29rLXNlcnZpY2Utc2VjdGlvbi1mb3JtIGlucHV0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uYm9vay1zZXJ2aWNlLXNlY3Rpb24tZm9ybSBpbnB1dCwgLmJvb2stc2VydmljZS1zZWN0aW9uLWZvcm0gdGV4dGFyZWEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjYyRDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxufVxyXG4uYm9vay1zZXJ2aWNlLXNlY3Rpb24tZm9ybSBidXR0b257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNmJkYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyODYxQ0Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcbi5ib29rLXNlcnZpY2Utc2VjdGlvbi1mb3JtIGJ1dHRvbjpob3ZlcntcclxuICAgIGJvcmRlcjogI0ZBOTYwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBOTYwMDtcclxuICAgIGFuaW1hdGlvbjogc2NhbGluZyAwLjVzIDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4yKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNXB4ICNmYTk2MDA0MjtcclxufVxyXG5cclxuLmJvb2stc2VydmljZS1zZWN0aW9uLWZvcm0gLm51bWJlcntcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5ib29rLXNlcnZpY2Utc2VjdGlvbi1mb3JtIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogODQlO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICAuYm9vay1zZXJ2aWNlLXNlY3Rpb24tZm9ybSB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDg2JTtcclxuICAgIH1cclxufVxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqIFxyXG4gICAgQ0FsbCB1cyBzZWN0aW9uXHJcbioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLmNhbGwtdXMtc2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZyZW07XHJcbn1cclxuLmNhbGwtdXMtc2VjdGlvbiAubnVtYmVye1xyXG4gICAgZm9udC1zaXplOiAyLjdyZW07XHJcbn1cclxuLmNhbGwtdXMtc2VjdGlvbiBoNHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpe1xyXG4gICAgLmNhbGwtdXMtc2VjdGlvbiAubnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgfVxyXG4gICAgLmNhbGwtdXMtc2VjdGlvbiBoNHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKiogXHJcbiAgICBIYW5keW1hbiBzZWN0aW9uXHJcbioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLmhhbmR5bWFuLXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcclxufVxyXG4uaGFuZHltYW4tc2VjdGlvbiAuc2VjdGlvbi1oZWFkIGgye1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiAjZmZmO1xyXG59XHJcblxyXG4uaGFuZHltYW4tc2VjdGlvbi1jYXNlcy5jYXJkLWNvbnRhaW5lciwgLmhhbmR5bWFuLXNlY3Rpb24tdmFsdWVzIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmhhbmR5bWFuLXNlY3Rpb24tY2FzZXMgLmNhcmR7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzZiZGE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjg2MUNGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmhhbmR5bWFuLXNlY3Rpb24tY2FzZXMgLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4yKTtcclxuICAgIGFuaW1hdGlvbjogc2NhbGluZyAwLjVzIDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE5NjAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRkE5NjAwO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzlCQTVCQTtcclxufVxyXG4uaGFuZHltYW4tc2VjdGlvbi12YWx1ZXMgLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyAgIFxyXG59XHJcbi5oYW5keW1hbi1zZWN0aW9uLXZhbHVlcyAuY2FyZDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkZCRkJGO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIzlCQTVCQTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjRkE5NjAwO1xyXG4gICAgXHJcbn1cclxuLmhhbmR5bWFuLXNlY3Rpb24tdmFsdWVzIC5jYXJkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6MTAwJTtcclxuICAgIHRvcDowOyBsZWZ0OjA7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDAwMDBhZjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcclxufVxyXG4uaGFuZHltYW4tc2VjdGlvbi12YWx1ZXMgLmNhcmQ6aG92ZXI6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5oYW5keW1hbi1zZWN0aW9uLXZhbHVlcy1pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cdGhlaWdodDo1cmVtO1xyXG5cdHdpZHRoOjVyZW07XHJcbn1cclxuLmhhbmR5bWFuLXNlY3Rpb24tdmFsdWVzIC5jYXJkIC5oYW5keW1hbi1zZWN0aW9uLXZhbHVlcy1jb250ZW50e1xyXG5cclxuICAgIGZvbnQtdmFyaWFudC1jYXBzOiBhbGwtcGV0aXRlLWNhcHM7XHJcbn1cclxuLmhhbmR5bWFuLXNlY3Rpb24tdmFsdWVzIC5jYXJkOmhvdmVyIC5oYW5keW1hbi1zZWN0aW9uLXZhbHVlcy1jb250ZW50e1xyXG4gICAgY29sb3I6ICNGQTk2MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMyMjI2MkQ7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKiogXHJcbiAgICBNYXAgc2VjdGlvblxyXG4qKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4ubWFwLXNlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG59XHJcbi5tYXAtc2VjdGlvbiBoM3tcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuLm1hcC1zZWN0aW9uIGlmcmFtZXtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjdweCl7XHJcblx0Lm1hcC1zZWN0aW9ue1xyXG5cdFx0aGVpZ2h0OiAzMCU7XHJcblx0fVxyXG59XHJcbi8qIC5tYXAtc2VjdGlvbjo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzZiZGEyZDtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handyman/handyman.service */ "./src/app/handyman/handyman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _our_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../our-services.service */ "./src/app/our-services.service.ts");





let HomePageComponent = class HomePageComponent {
    constructor(router, handymanservice, ourservicesservice, route) {
        this.router = router;
        this.handymanservice = handymanservice;
        this.ourservicesservice = ourservicesservice;
        this.route = route;
        this.handymanCase = { value: "labour" };
        this.handymancaseValue = "";
        this.services = [];
        this.labours = [];
        this.plumbers = [];
        this.carpenters = [];
        this.electricians = [];
    }
    ngOnInit() {
        this.setServices();
        // const handys= (this.ourservicesservice.getHandyman());
        // console.log(handys);
        this.setHandymanLists();
    }
    setServices() {
        this.ourservicesservice.getServices()
            .subscribe(data => {
            // console.log(data);
            this.services = data.slice(0, 3);
        });
    }
    setHandymanLists() {
        this.ourservicesservice.getHandyman()
            .subscribe(data => {
            // console.log(data);
            data.handymans.forEach(element => {
                if (((element.serviceName).toLowerCase()).localeCompare("labour") === 0
                    &&
                        element.isVerified) {
                    if (this.labours.length < 3)
                        this.labours.push(element);
                }
                if (((element.serviceName).toLowerCase()).localeCompare("carpenter") === 0
                    &&
                        element.isVerified) {
                    if (this.carpenters.length < 3)
                        this.carpenters.push(element);
                }
                if (((element.serviceName).toLowerCase()).localeCompare("plumber") === 0
                    &&
                        element.isVerified) {
                    if (this.plumbers.length < 3)
                        this.plumbers.push(element);
                }
                if (((element.serviceName).toLowerCase()).localeCompare("electrician") === 0
                    &&
                        element.isVerified) {
                    if (this.electricians.length < 3)
                        this.electricians.push(element);
                }
            });
        });
    }
    gotoListPage(IdofService) {
        this.handymanservice.setDataForListPage(IdofService);
        this.router.navigate([`/list`], { relativeTo: this.route });
    }
    findIdForListPage() {
        this.handymancaseValue = this.handymanCase.value.toLowerCase();
        this.services.forEach(element => {
            if (this.handymancaseValue.localeCompare(element.name.toLowerCase()) === 0) {
                this.gotoListPage(element.id);
            }
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_2__["HandymanService"] },
    { type: _our_services_service__WEBPACK_IMPORTED_MODULE_4__["OurServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    })
], HomePageComponent);

// labours=[
//   {
//     "name": "ranjan pant",
//     "age": 21,
//     "img_url": "url('../../assets/img/labour/labour (1).jpg')"
//   },
//   {
//     "name": "ravi kaler",
//     "age": 20,
//     "img_url": "url('../../assets/img/labour/labour (2).jpg')"
//   },
//   {
//     "name": "rohit kamboj",
//     "age": 22,
//     "img_url": "url('../../assets/img/labour/labour (3).jpg')"
//   },
//   {
//     "name": "shahid khan",
//     "age": 20,
//     "img_url": "url('../../assets/img/labour/labour (4).jpg')"
//   }
// ];
// plumbers=[
//   {
//     "name": "ranjan pant",
//     "age": 21,
//     "img_url": "url('../../assets/img/plumber/plumber (1).jpg')"
//   },
//   {
//     "name": "ravi kaler",
//     "age": 20,
//     "img_url": "url('../../assets/img/plumber/plumber (2).jpg')"
//   },
//   {
//     "name": "rohit kamboj",
//     "age": 22,
//     "img_url": "url('../../assets/img/plumber/plumber (3).jpg')"
//   },
//   {
//     "name": "shahid khan",
//     "age": 20,
//     "img_url": "url('../../assets/img/plumber/plumber (4).jpg')"
//   }
// ];
// electricians=[
//   {
//     "name": "Aftab ahmed",
//     "age": 21,
//     "img_url": "url('../../assets/img/electrician/electrician (1).jpg')"
//   },
//   {
//     "name": "Veer singh",
//     "age": 20,
//     "img_url": "url('../../assets/img/electrician/electrician (2).jpg')"
//   },
//   {
//     "name": "bhole lal",
//     "age": 22,
//     "img_url": "url('../../assets/img/electrician/electrician (3).jpg')"
//   },
//   {
//     "name": "rizwi shah",
//     "age": 20,
//     "img_url": "url('../../assets/img/electrician/electrician (4).jpg')"
//   }
// ];
// carpenters=[
//   {
//     "name": "Mukesh suri",
//     "age": 21,
//     "img_url": "url('../../assets/img/carpenter/carpenter(1).jpg')"
//   },
//   {
//     "name": "raj Ambani",
//     "age": 20,
//     "img_url": "url('../../assets/img/carpenter/carpenter(2).jpg')"
//   },
//   {
//     "name": "Pandit ramfal",
//     "age": 22,
//     "img_url": "url('../../assets/img/carpenter/carpenter(3).jpg')"
//   },
//   {
//     "name": "Mohd Abdul",
//     "age": 20,
//     "img_url": "url('../../assets/img/carpenter/carpenter(4).jpg')"
//   }
// ];


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ***************************\r\n    Toolbar \r\n*************************** */\r\nmat-toolbar{\r\n    padding: 3rem 2rem 3rem 2rem;\r\n    overflow: hidden;\r\n}\r\n.space-filler{\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n.img-logo{\r\n    margin-left: 2rem;\r\n    margin-top: 1.3rem;\r\n    /* padding: 0.5rem; */\r\n    /* width: 7.5rem; */\r\n    width: 10rem;\r\n}\r\nul{\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    font-weight: 700;\r\n    font-variant-caps: all-petite-caps;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\na span{\r\n    color: #22262D;\r\n    font-size: 1.3rem;\r\n}\r\nul li:hover a span{\r\n    color: #4F84EB;\r\n}\r\n/* ***************************\r\n    Mobile Toolbar \r\n*************************** */\r\n.mobile-toolbar{\r\n    display: none;\r\n}\r\n.mobile-toolbar i{\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n.mobile-toolbar-container{\r\n    z-index: 100;\r\n    background-color: #FFFFFF;\r\n    margin: 4rem auto 4rem auto;\r\n}\r\n.mobile-toolbar-container ul{\r\n    margin-left: 3rem;\r\n}\r\n.mobile-toolbar-container ul li{\r\n    margin-bottom: 1rem;\r\n}\r\n/* ***************************\r\n    Desktop Toolbar \r\n*************************** */\r\n.desktop-toolbar ul li{\r\n    display: inline;\r\n    margin-right: 2rem;\r\n    padding: 0.5rem;\r\n    cursor: pointer;\r\n}\r\n/* *******************\r\n    Responsive\r\n******************** */\r\n@media only screen and (max-width: 750px){\r\n    .desktop-toolbar{\r\n        display: none;\r\n    }\r\n    .mobile-toolbar{\r\n        display: block;\r\n    }\r\n}\r\n/* *******************\r\n    Company name\r\n******************** */\r\n.company-name{\r\n    font-family: 'Niconne' ;\r\n    letter-spacing: 5px;\r\n    font-weight: 700;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzZCQUU2QjtBQUM3QjtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQztJQUNHLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBOzs2QkFFNkI7QUFDN0I7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7OzZCQUU2QjtBQUU3QjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFFQTs7c0JBRXNCO0FBQ3RCO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7QUFFQTs7c0JBRXNCO0FBQ3RCO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgVG9vbGJhciBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbm1hdC10b29sYmFye1xyXG4gICAgcGFkZGluZzogM3JlbSAycmVtIDNyZW0gMnJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNwYWNlLWZpbGxlcntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5pbWctbG9nb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS4zcmVtO1xyXG4gICAgLyogcGFkZGluZzogMC41cmVtOyAqL1xyXG4gICAgLyogd2lkdGg6IDcuNXJlbTsgKi9cclxuICAgIHdpZHRoOiAxMHJlbTtcclxufVxyXG4gdWx7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuYSBzcGFue1xyXG4gICAgY29sb3I6ICMyMjI2MkQ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG51bCBsaTpob3ZlciBhIHNwYW57XHJcbiAgICBjb2xvcjogIzRGODRFQjtcclxufVxyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBNb2JpbGUgVG9vbGJhciBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi5tb2JpbGUtdG9vbGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1vYmlsZS10b29sYmFyIGl7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1vYmlsZS10b29sYmFyLWNvbnRhaW5lcntcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0byA0cmVtIGF1dG87XHJcbn1cclxuLm1vYmlsZS10b29sYmFyLWNvbnRhaW5lciB1bHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG59XHJcbi5tb2JpbGUtdG9vbGJhci1jb250YWluZXIgdWwgbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgIERlc2t0b3AgVG9vbGJhciBcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4uZGVza3RvcC10b29sYmFyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqXHJcbiAgICBSZXNwb25zaXZlXHJcbioqKioqKioqKioqKioqKioqKioqICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgLmRlc2t0b3AtdG9vbGJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1vYmlsZS10b29sYmFye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiAqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb21wYW55IG5hbWVcclxuKioqKioqKioqKioqKioqKioqKiogKi9cclxuLmNvbXBhbnktbmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTmljb25uZScgO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() {
        this.showToolbar = false;
    }
    ngOnInit() {
    }
    navEvent() {
        this.showToolbar = !this.showToolbar;
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/our-services.service.ts":
/*!*****************************************!*\
  !*** ./src/app/our-services.service.ts ***!
  \*****************************************/
/*! exports provided: OurServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesService", function() { return OurServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



// import { environment } from 'src/environments/environment.prod';

const BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
let OurServicesService = class OurServicesService {
    constructor(http) {
        this.http = http;
        this.handymans = [];
    }
    getServices() {
        return this.http.get('/assets/data/ourservice.json');
    }
    getHandyman() {
        return this.http
            .get(BACKEND_URL + "/handymans");
    }
    createCustomer(name, contactNumber, handymanId) {
        console.log(name + " == " + contactNumber + " == " + handymanId);
        const customerData = new FormData();
        customerData.append("name", name);
        customerData.append("contactNumber", contactNumber);
        customerData.append("handymanId", handymanId);
        customerData.forEach((element) => {
            console.log(element);
        });
        this.http
            .post(BACKEND_URL + "/handymans/custo", customerData)
            .subscribe(responseData => {
            console.log("added custo");
            console.log(responseData.message);
            console.log(responseData.inserted);
            console.log(responseData.createdCustomer);
        });
    }
    createHandyman(HandymanDetails) {
        const handymanData = new FormData();
        for (const key in HandymanDetails) {
            if (HandymanDetails.hasOwnProperty(key)
                && key != "_id") {
                // console.log(key +"=>" + newHandymanDetails[key]);
                handymanData.append(key, HandymanDetails[key]);
            }
        }
        this.http
            .post(BACKEND_URL + "/handymans", handymanData)
            .subscribe(responseData => {
            console.log(responseData.message);
            const handyman = {
                _id: responseData.handyman._id,
                name: HandymanDetails.name,
                dob: HandymanDetails.dob,
                img_url: responseData.handyman.img_url,
                contactNumber: HandymanDetails.contactNumber,
                aadharNumber: HandymanDetails.aadharNumber,
                serviceName: HandymanDetails.serviceName,
                serviceExperience: HandymanDetails.serviceExperience,
                city: HandymanDetails.city,
                state: HandymanDetails.state,
                isVerified: HandymanDetails.isVerified,
                rating: HandymanDetails.rating,
                ratingNumber: HandymanDetails.ratingNumber
            };
            this.handymans.push(handyman);
        });
    }
    updateHandyman(newHandymanDetails) {
        let handymanData;
        if (typeof newHandymanDetails.img_url === "object") {
            handymanData = new FormData();
            for (const key in newHandymanDetails) {
                if (newHandymanDetails.hasOwnProperty(key)
                    && key !== "_id") {
                    // console.log(key +"=>" + newHandymanDetails[key]);
                    handymanData.append(key, newHandymanDetails[key]);
                }
            }
        }
        else {
            handymanData = {
                _id: newHandymanDetails._id,
                name: newHandymanDetails.name,
                dob: newHandymanDetails.dob,
                img_url: newHandymanDetails.img_url,
                contactNumber: newHandymanDetails.contactNumber,
                aadharNumber: newHandymanDetails.aadharNumber,
                serviceName: newHandymanDetails.serviceName,
                serviceExperience: newHandymanDetails.serviceExperience,
                city: newHandymanDetails.city,
                state: newHandymanDetails.state,
                isVerified: newHandymanDetails.isVerified,
                rating: newHandymanDetails.rating,
                ratingNumber: newHandymanDetails.ratingNumber
            };
        }
        this.http
            .put(BACKEND_URL + "/handymans/"
            + newHandymanDetails._id, handymanData)
            .subscribe(response => {
            console.log(response);
            const updatedHandymans = [...this.handymans];
            const oldHandymanIndex = updatedHandymans.findIndex(h => h._id === newHandymanDetails._id);
            const handyman = {
                _id: newHandymanDetails._id,
                name: newHandymanDetails.name,
                dob: newHandymanDetails.dob,
                img_url: newHandymanDetails.img_url,
                contactNumber: newHandymanDetails.contactNumber,
                aadharNumber: newHandymanDetails.aadharNumber,
                serviceName: newHandymanDetails.serviceName,
                serviceExperience: newHandymanDetails.serviceExperience,
                city: newHandymanDetails.city,
                state: newHandymanDetails.state,
                isVerified: newHandymanDetails.isVerified,
                rating: newHandymanDetails.rating,
                ratingNumber: newHandymanDetails.ratingNumber
            };
            updatedHandymans[oldHandymanIndex] = handyman;
            this.handymans = updatedHandymans;
        });
    }
    deleteHandyman(handymanId) {
        console.log(handymanId);
        this.http
            .delete(BACKEND_URL + "/handymans/" + handymanId)
            .subscribe((response) => {
            console.log(response);
            const updatedHandymans = this.handymans.filter(handyman => handyman._id !== handymanId);
            this.handymans = updatedHandymans;
        });
    }
};
OurServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OurServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], OurServicesService);



/***/ }),

/***/ "./src/app/our-services/our-services.component.css":
/*!*********************************************************!*\
  !*** ./src/app/our-services/our-services.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*  ***********\r\n  Services\r\n*************  */\r\n.showcase-text {\r\n  padding: 3rem;\r\n}\r\n.showcase-img {\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n@media (min-width: 768px) {\r\n  .showcase-text {\r\n    padding: 7rem;\r\n  }  \r\n}\r\n/*  ***********\r\n  Video\r\n*************  */\r\nheader {\r\n  position: relative;\r\n  background-color: black;\r\n  height: 75vh;\r\n  min-height: 25rem;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\nheader img {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  z-index: 0;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\nheader .container {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\nheader .overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: black;\r\n  opacity: 0.8;\r\n  z-index: 1;\r\n}\r\n/*  ***********\r\n  Heading and search\r\n*************  */\r\n.section-head h2{\r\n  font-family: 'Merriweather', serif;\r\n  font-weight: 700;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.section-head {\r\nmargin: 4rem 0 0 0;\r\n}\r\na, a:hover{\r\n  color: #2861CF;\r\n  cursor: pointer;\r\n}\r\n/* \r\n******************* */\r\n.services-section-content{\r\n  margin-top: 2rem;\r\n  color: #9BA5BA;\r\n}\r\n.services-section-icon{\r\n  font-size: 2rem;\r\n}\r\n.services-section-content-col div.card{\r\n  border: 0.1px;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n.services-section-content-col:hover div.card{\r\n  border: 0.5px solid #9BA5BA;\r\n  border-radius: 0.5rem;\r\n  box-shadow: 3px 3px 5px #9BA5BA;\r\n\r\n}\r\n.services-section-content-col div.card div .card-text{\r\n  display: none;\r\n  -webkit-transform: translateY(100px);\r\n          transform: translateY(100px);\r\n}\r\n.services-section-content-col div.card:hover div .card-text{\r\n  display: block;\r\n  -webkit-transform: translateY(-30px);\r\n          transform: translateY(-30px);\r\n  -webkit-animation: translateDescAnim 1s 1;\r\n          animation: translateDescAnim 1s 1;\r\n  margin-bottom: 0;\r\n}\r\n@-webkit-keyframes translateDescAnim{\r\n  from{\r\n      -webkit-transform: translateY(100px);\r\n              transform: translateY(100px);\r\n  }\r\n  to{\r\n      -webkit-transform: translateY(-30px);\r\n              transform: translateY(-30px);\r\n  }\r\n}\r\n@keyframes translateDescAnim{\r\n  from{\r\n      -webkit-transform: translateY(100px);\r\n              transform: translateY(100px);\r\n  }\r\n  to{\r\n      -webkit-transform: translateY(-30px);\r\n              transform: translateY(-30px);\r\n  }\r\n}\r\n.services-section-content-col div.card:hover div span i{\r\n  -webkit-transform: translate(-70px, 0px);\r\n          transform: translate(-70px, 0px);\r\n}\r\n.services-section-content-col div.card:hover div span{\r\n  color: #FA9600;\r\n}\r\n.services-section-content-col div.card:hover div .card-title{\r\n  color: #22262D;\r\n  -webkit-transform: translate(50px,-38px);\r\n          transform: translate(50px,-38px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztnQkFFZ0I7QUFDaEI7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTs7Z0JBRWdCO0FBQ2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBR1Ysb0RBQW9EO0VBQ3BELDRDQUE0QztBQUM5QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBOztnQkFFZ0I7QUFDaEI7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7cUJBQ3FCO0FBRXJCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQiwrQkFBK0I7O0FBRWpDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isb0NBQTRCO1VBQTVCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztFQUNkLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO01BQ0ksb0NBQTRCO2NBQTVCLDRCQUE0QjtFQUNoQztFQUNBO01BQ0ksb0NBQTRCO2NBQTVCLDRCQUE0QjtFQUNoQztBQUNGO0FBUEE7RUFDRTtNQUNJLG9DQUE0QjtjQUE1Qiw0QkFBNEI7RUFDaEM7RUFDQTtNQUNJLG9DQUE0QjtjQUE1Qiw0QkFBNEI7RUFDaEM7QUFDRjtBQUVBO0VBQ0Usd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHdDQUFnQztVQUFoQyxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgKioqKioqKioqKipcclxuICBTZXJ2aWNlc1xyXG4qKioqKioqKioqKioqICAqL1xyXG4uc2hvd2Nhc2UtdGV4dCB7XHJcbiAgcGFkZGluZzogM3JlbTtcclxufVxyXG4gIFxyXG4uc2hvd2Nhc2UtaW1nIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuc2hvd2Nhc2UtdGV4dCB7XHJcbiAgICBwYWRkaW5nOiA3cmVtO1xyXG4gIH0gIFxyXG59XHJcblxyXG4vKiAgKioqKioqKioqKipcclxuICBWaWRlb1xyXG4qKioqKioqKioqKioqICAqL1xyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDc1dmg7XHJcbiAgbWluLWhlaWdodDogMjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5oZWFkZXIgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAwO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuaGVhZGVyIC5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oZWFkZXIgLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLyogICoqKioqKioqKioqXHJcbiAgSGVhZGluZyBhbmQgc2VhcmNoXHJcbioqKioqKioqKioqKiogICovXHJcbi5zZWN0aW9uLWhlYWQgaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4uc2VjdGlvbi1oZWFkIHtcclxubWFyZ2luOiA0cmVtIDAgMCAwO1xyXG59XHJcblxyXG5hLCBhOmhvdmVye1xyXG4gIGNvbG9yOiAjMjg2MUNGO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogXHJcbioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBjb2xvcjogIzlCQTVCQTtcclxufVxyXG4uc2VydmljZXMtc2VjdGlvbi1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4uc2VydmljZXMtc2VjdGlvbi1jb250ZW50LWNvbCBkaXYuY2FyZHtcclxuICBib3JkZXI6IDAuMXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnQtY29sOmhvdmVyIGRpdi5jYXJke1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgIzlCQTVCQTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggIzlCQTVCQTtcclxuXHJcbn1cclxuLnNlcnZpY2VzLXNlY3Rpb24tY29udGVudC1jb2wgZGl2LmNhcmQgZGl2IC5jYXJkLXRleHR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG59XHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnQtY29sIGRpdi5jYXJkOmhvdmVyIGRpdiAuY2FyZC10ZXh0e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgYW5pbWF0aW9uOiB0cmFuc2xhdGVEZXNjQW5pbSAxcyAxO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuQGtleWZyYW1lcyB0cmFuc2xhdGVEZXNjQW5pbXtcclxuICBmcm9te1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG4gIH1cclxuICB0b3tcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlcy1zZWN0aW9uLWNvbnRlbnQtY29sIGRpdi5jYXJkOmhvdmVyIGRpdiBzcGFuIGl7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwcHgsIDBweCk7XHJcbn1cclxuLnNlcnZpY2VzLXNlY3Rpb24tY29udGVudC1jb2wgZGl2LmNhcmQ6aG92ZXIgZGl2IHNwYW57XHJcbiAgY29sb3I6ICNGQTk2MDA7XHJcbn1cclxuLnNlcnZpY2VzLXNlY3Rpb24tY29udGVudC1jb2wgZGl2LmNhcmQ6aG92ZXIgZGl2IC5jYXJkLXRpdGxle1xyXG4gIGNvbG9yOiAjMjIyNjJEO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsLTM4cHgpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/our-services/our-services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-services/our-services.component.ts ***!
  \********************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _our_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../our-services.service */ "./src/app/our-services.service.ts");
/* harmony import */ var _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../handyman/handyman.service */ "./src/app/handyman/handyman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let OurServicesComponent = class OurServicesComponent {
    constructor(ourservicesservice, handymanservices, route, router) {
        this.ourservicesservice = ourservicesservice;
        this.handymanservices = handymanservices;
        this.route = route;
        this.router = router;
        this.ourservices = [];
    }
    ngOnInit() {
        this.ourservicesservice.getServices()
            .subscribe(data => {
            this.ourservices = data;
        });
    }
    gotoListPage(IdofService) {
        this.handymanservices.setDataForListPage(IdofService);
        this.router.navigate([`/list`], { relativeTo: this.route });
    }
};
OurServicesComponent.ctorParameters = () => [
    { type: _our_services_service__WEBPACK_IMPORTED_MODULE_2__["OurServicesService"] },
    { type: _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_3__["HandymanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OurServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-services/our-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./our-services.component.css */ "./src/app/our-services/our-services.component.css")).default]
    })
], OurServicesComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid{\r\n    width: 100%;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    background-image: url('reg_bg.jpg');\r\n    background-size: 29rem;\r\n    padding-top: 5rem;\r\n    padding-bottom: 5rem;\r\n}\r\nform{\r\n    position: relative;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    background-color: #22262D;\r\n    border: 1px solid #22262D;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 1px 1px 10px 5px #9BA5BA;\r\n    color: #FFFFFF;\r\n    padding: 2rem;\r\n}\r\n/***********************\r\n    Section Head\r\n*************************/\r\n.section-head h2{\r\n    font-family: 'Merriweather', serif;\r\n    font-weight: 700;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n.section-head>p{\r\n      width: -webkit-fit-content;\r\n      width: -moz-fit-content;\r\n      width: fit-content;\r\n  }\r\n.section-head {\r\n  margin: 0 0 2rem 0;\r\n  }\r\n/***********************\r\n    Submit Btn\r\n*************************/\r\n.submit-btn{\r\n  padding-right: 2rem;\r\n  padding-left: 2rem;\r\n  font-weight: 400;\r\n  color: #FFFFFF;\r\n  background-color: #2861CF;\r\n  border: 2px solid #2861CF;\r\n  border-radius: 2rem;\r\n}\r\n.submit-btn-disabled{\r\n    padding-right: 2rem;\r\n    padding-left: 2rem;\r\n    font-weight: 400;\r\n    color: #FFFFFF;\r\n    background-color: #9BA5BA;\r\n    border: 2px solid #9BA5BA;\r\n    border-radius: 2rem;  \r\n    cursor: default;\r\n}\r\n.submit-btn:hover {\r\n    border: #FA9600;\r\n    color: #ffffff;\r\n    background-color: #FA9600;\r\n    -webkit-transform: scale(1.2, 1.1);\r\n            transform: scale(1.2, 1.1);\r\n    box-shadow: 0.5px 0.5px 3px #FA9600;\r\n}\r\n.alertbox{\r\n    background: none;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    position: fixed;\r\n    top: 2%;\r\n}\r\n.alertbox .alert{\r\n    width: 20rem;\r\n}\r\n.image-preview{\r\n    background-size: contain;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    width: 7rem;\r\n    height: 10rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixtQ0FBb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLGFBQWE7QUFDakI7QUFDQTs7eUJBRXlCO0FBQ3pCO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtFQUNwQjtBQUNBO01BQ0ksMEJBQWtCO01BQWxCLHVCQUFrQjtNQUFsQixrQkFBa0I7RUFDdEI7QUFDQTtFQUNBLGtCQUFrQjtFQUNsQjtBQUNGOzt5QkFFeUI7QUFFdkI7RUFDQSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLE9BQU87QUFDWDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9yZWdfYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI5cmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5mb3Jte1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI2MkQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjIyNjJEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDVweCAjOUJBNUJBO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgU2VjdGlvbiBIZWFkXHJcbioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5zZWN0aW9uLWhlYWQgaDJ7XHJcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcbiAgLnNlY3Rpb24taGVhZD5we1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWhlYWQge1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICB9XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgU3VibWl0IEJ0blxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAuc3VibWl0LWJ0bntcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODYxQ0Y7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzI4NjFDRjtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcbi5zdWJtaXQtYnRuLWRpc2FibGVke1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5QkE1QkE7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOUJBNUJBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTsgIFxyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5zdWJtaXQtYnRuOmhvdmVyIHtcclxuICAgIGJvcmRlcjogI0ZBOTYwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBOTYwMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggM3B4ICNGQTk2MDA7XHJcbn1cclxuXHJcbi5hbGVydGJveHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMiU7XHJcbn1cclxuLmFsZXJ0Ym94IC5hbGVydHtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _our_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../our-services.service */ "./src/app/our-services.service.ts");
/* harmony import */ var _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../handyman/handyman.service */ "./src/app/handyman/handyman.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






// import { mimeType } from "./mime-type.validator";
let RegisterComponent = class RegisterComponent {
    constructor(ourservicesservice, handymanservices, route, router) {
        this.ourservicesservice = ourservicesservice;
        this.handymanservices = handymanservices;
        this.route = route;
        this.router = router;
        this.termsCheck = false;
        this.showhide = false;
        this.ourservices = [];
        this.newHandymanDetails = {
            "_id": "0",
            "name": "",
            "dob": "",
            "img_url": "",
            "contactNumber": "",
            "aadharNumber": "",
            "serviceName": "",
            "serviceExperience": 0,
            "city": "",
            "state": "",
            "isVerified": false,
            "rating": 0,
            "ratingNumber": 0
        };
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'contactNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'aadharNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'serviceName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'serviceExperience': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            'previewImg': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                // ,asyncValidators: [mimeType]
            })
        });
        this.ourservicesservice.getServices()
            .subscribe(data => {
            this.ourservices = data;
        });
    }
    showAlert() {
        this.showhide = true;
        setTimeout(() => {
            this.showhide = false;
        }, 6000);
    }
    onSubmitForm() {
        if (this.registerForm.invalid) {
            console.log("invalid");
            console.log(this.registerForm.value);
            return;
        }
        console.log("Valid");
        console.log(this.registerForm.value);
        this.newHandymanDetails.name = this.registerForm.value.name;
        this.newHandymanDetails.contactNumber = this.registerForm.value.contactNumber;
        this.newHandymanDetails.aadharNumber = this.registerForm.value.aadharNumber;
        this.newHandymanDetails.serviceName = this.registerForm.value.serviceName;
        this.newHandymanDetails.dob = this.registerForm.value.dob;
        this.newHandymanDetails.serviceExperience = this.registerForm.value.serviceExperience;
        this.newHandymanDetails.city = this.registerForm.value.city;
        this.newHandymanDetails.state = this.registerForm.value.state;
        this.newHandymanDetails.img_url = this.registerForm.value.previewImg;
        console.log(this.newHandymanDetails.dob);
        this.termsCheck = false;
        this.showAlert();
        this.registerForm.reset();
        this.newHandyman(this.newHandymanDetails);
    }
    newHandyman(Details) {
        this.ourservicesservice.createHandyman(Details);
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.registerForm.patchValue({
            'previewImg': file
        });
        this.registerForm.get('previewImg').updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
        // console.log(this.imagePreview);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _our_services_service__WEBPACK_IMPORTED_MODULE_3__["OurServicesService"] },
    { type: _handyman_handyman_service__WEBPACK_IMPORTED_MODULE_4__["HandymanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: "http://localhost:3000/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VSCode\rad-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map