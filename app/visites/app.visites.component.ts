import { Component } from '@angular/core';
import { DataService} from '../services/app.service.data';
import { Router } from '@angular/router';
import{ Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'my-visites',
  templateUrl: 'app.visites.html'
  
})
export class VisitesComponent {
  nomMedecin : string;
  lesMedecins : Array<any>; 
  medecin : any;
  gestionMajRapport : boolean = false;
  gestionAjoutRapport : boolean = false;
  dateVisite : Date;
  dateNouveauRapport :Date;
  nomMedicament : string;
  lesMedicaments : Array<any>; 
  medicamentsSelect : Array<any> = new Array();
  medicamentSelect : any;
  lesRapports : Array<any>;
  qtes : Array<number> = [1,2,3,4,5];
  qteSelect :number;
  titre : string; 
  rapport : any;
  motif : string;
  bilan : string;
  afficherRapport : boolean = false;
  messageMAJ : string ="";
  messageEnregistrement : string =""
  typeMessage : string ="";
  constructor(private dataService : DataService, private router : Router ){
  }
  chargerMedecins(){
     this.dataService.chargerMedecins(this.nomMedecin)
                                  .subscribe( 
                                      (data)=>{this.lesMedecins = data['medecins'];
                                      this.dataService.ticket = data['ticket'];
                                         }
                                      ,(error)=>{this.router.navigate(['']);}
                                              );
  }
  selectionnerMedecin(med) : void{
        this.medecin = med;
        this.nomMedecin = med.nom + " " + med.prenom + "; dep : " + med.departement;
        this.lesMedecins = null;
  }
  modifierRapport(): void{
       this.gestionMajRapport = true;
       this.gestionAjoutRapport = false;
       this.afficherRapport = false;
       this.typeMessage="";
       this.lesRapports = null;
       this.dateVisite = null;
       this.messageMAJ ="";
  }
  chargerVisites() : void{
       this.titre = "Médecins visité(s) ce jour :";
       this.dataService.chargerRapportsAuneDate( this.dateVisite)
                                  .subscribe( 
                                      (data)=>{this.lesRapports = data['rapports'];
                                       this.dataService.ticket = data['ticket'];
                                         }
                                      ,(error)=>{this.router.navigate(['']);}
                                             );
  } 
  selectionner(rapport){
       this.rapport = rapport;
       this.afficherRapport = true;
  }
  valider(): void{
       console.log(this.rapport);
       this.dataService.majRapport(this.rapport.idRapport,this.rapport.motif,this.rapport.bilan)
                                  .subscribe( 
                                      (data)=>{ this.typeMessage ="alert alert-success";
                                                this.messageMAJ= "Mise à jour effectuée";
                                                this.dataService.ticket = data;  
                                         }
                                      ,(error)=>{this.router.navigate(['']);}
                                              );
   }
   initNouveauRapport(){
       this.nomMedecin ="";
       this.bilan="";
       this.motif="";
       this.dateNouveauRapport = null;
       this.nomMedicament = "";
       this.qteSelect = 1;
       this.typeMessage="";
       this.messageEnregistrement ="";

   }
   ajouterRapport(): void{
     this.initNouveauRapport();
      this.gestionAjoutRapport = true;
      this.gestionMajRapport = false;

   }
   chargerMedicaments(){
      this.dataService.chargerMedicaments(this.nomMedicament)
          .subscribe( 
                     (data)=>{this.lesMedicaments = data['medicaments'];
                              this.dataService.ticket = data['ticket'];
                              }
                                      ,(error)=>{this.router.navigate(['']);}
                                             );

   }
   choisirMedicament(medicament : any){
      this.medicamentSelect = medicament;
      this.nomMedicament = medicament.nomCommercial;
    
      this.lesMedicaments = null;
   }
   ajouter(): void{
      this.medicamentsSelect.push({id : this.medicamentSelect.id, nom : 
        this.medicamentSelect.nomCommercial, qte : this.qteSelect});
      this.nomMedicament ="";
   }
   retirer() : void{
      this.medicamentsSelect.pop();
   }
   enregistrer(): void{
      this.dataService.enregistrerRapport(this.medecin.id,this.motif,this.dateNouveauRapport, this.bilan,this.medicamentsSelect )
               .subscribe( 
                     (data)=>{ this.typeMessage ="alert alert-success";
                               this.messageEnregistrement= "Enregistrement effectué";
                               this.dataService.ticket = data}
                              ,(error)=>{
                                this.router.navigate(['']);}
                        );
   }
  
}
