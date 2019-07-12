import{PipeTransform, Pipe} from '@angular/core';
import {Client} from '../models/client.model';

@Pipe({
  name: 'clientFilter'
})

export class ClientFilterPipe implements PipeTransform{
  transform(clients: Client[], searchTerm: string): Client[]{
    if(!clients||!searchTerm){
      return clients;
    }
    return clients.filter(client => client.name.indexOf(searchTerm) !== -1);
  }
}