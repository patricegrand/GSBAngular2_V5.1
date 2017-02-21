"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.urlDomaine = "http://localhost/restGSB";
    }
    DataService.prototype.connexion = function (loginIn, mdpIn) {
        var url = this.urlDomaine + "/connexion?login=" + loginIn + "&mdp=" + mdpIn;
        var req = this.http
            .get(url)
            .map(function (r) { return r.json(); });
        return req;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//import 'rxjs/add/operator/catch';
/* let headers = new Headers({ 'Content-Type': 'application/json',
                             'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                           });
 let options = new RequestOptions({ headers: headers });*/
//     let url :string = this.url + "/connexion";
//    let body : any = {"login" : loginIn, "mdp" : mdpIn}; 
//    console.log(body);
//       .post(url,body,options)
//      .catch(this.handleError);
/*private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}*/
//# sourceMappingURL=app.service.data.js.map