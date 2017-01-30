"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ConnexionComponent = (function () {
    function ConnexionComponent() {
        this.titre = "Connexion";
        this.lblLogin = "Login";
        this.lblMdp = "Mot de passe";
        this.estCache = true;
        this.lblMessage = "";
    }
    ConnexionComponent.prototype.valider = function () {
        if (this.login != "toto" || this.mdp != "titi") {
            this.lblMessage = "erreur";
            this.estCache = false;
        }
        else {
            this.lblMessage = "";
            this.estCache = true;
        }
    };
    return ConnexionComponent;
}());
ConnexionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-connexion',
        templateUrl: 'app.connexion.html',
        styleUrls: ['app.connexion.css'],
    })
], ConnexionComponent);
exports.ConnexionComponent = ConnexionComponent;
//# sourceMappingURL=app.connexion.component.js.map