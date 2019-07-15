import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styles: [],
})

export class ListClientsComponent implements OnInit {
  public clients = [];
  
  constructor(private clientService: ClientsService) {
  }

  ngOnInit() {
    this.clientService.getClients().subscribe(data => this.clients = data);
  }
}