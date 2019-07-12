import{Component,OnInit} from '@angular/core';
import{Client} from '../models/client.model';
import{Http, Response} from '@angular/http';
import{Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import{ClientsService} from '../clients/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'], 
})

export class ListClientsComponent implements OnInit{
  clients: Client[] = null;
  constructor(private cliService: ClientsService){
  }

  ngOnInit(){
    this.cliService.getClients().subscribe((cliData) => this.clients = cliData);
  }
}