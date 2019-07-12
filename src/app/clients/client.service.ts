import{Injectable} from '@angular/core';
import{Client} from '../models/client.model';
import{Http, Response} from '@angular/http';
import{Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ClientsService{
    constructor(private http : Http){

    }
    getClients() : Observable<Client[]>{
      return this.http.get<Client[]>('./app/clients.json');
    }
}