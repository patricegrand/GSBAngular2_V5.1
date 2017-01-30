import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-connexion',
  templateUrl: 'app.connexion.html',
  styleUrls: ['app.connexion.css'],

})
export class ConnexionComponent {
   titre : string ="Connexion";
   lblLogin : string ="Login";
   lblMdp : string ="Mot de passe";
   login : string ;
   mdp : string;
   estCache : boolean = true;
   lblMessage : string = "";


   valider() : void{
          if(this.login != "toto" || this.mdp !="titi"){
            this.lblMessage ="erreur"; 
            this.estCache = false;
          }
          else{
              this.lblMessage =""; 
              this.estCache = true;

          }
           




   }
   
}









































































