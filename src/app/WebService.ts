import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map } from  'rxjs/operators';
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Injectable(
    {
        providedIn:'root'
    }
)

export class WebService
{

    constructor(private http:HttpClient){}

    baseUrl:string="https://restaurantserverside.herokuapp.com/";
    profile_url:string;

    retrieveUserProfile(username:any){
        this.profile_url=this.getUrl(username,"viewprofiledata");
        //console.log((this.profile_url));
        return this.http.get(this.profile_url);
    }

    //"https://restaurantserverside.herokuapp.com/demo/uploadmenuimage"
    getUrl(name:any,comp:any)
    {
        return this.baseUrl+name+"/"+comp;
    }

    
}