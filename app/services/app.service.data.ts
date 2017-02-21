import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import{ Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private  urlDomaine :  string = "http://localhost/restGSB";
    constructor(private http: Http) {}
    public connexion( loginIn : string, mdpIn : string ) : Observable<string[]> {
        let url :string = this.urlDomaine + "/connexion?login=" + loginIn + "&mdp=" + mdpIn;
        let req = this.http
                    .get(url)
                    .map((r: Response)=>r.json());
        return req;
    }
}

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


