import{Injectable} from '@angular/core';
import{Client} from '../models/client';
import{HttpClient} from '@angular/common/http';
import{Observable} from "rxjs/Observable";

@Injectable()
export class ClientsService{
  private _url: string = "/app/assets/clients.json";
    constructor(private http : HttpClient){

    }
    getClients() : Observable<Client[]>{
      return this.http.get<Client[]>(this._url);
    }
}