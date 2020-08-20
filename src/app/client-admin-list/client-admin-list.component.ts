import { Component, OnInit } from '@angular/core';
import {ClientService} from '../shared/client/client.service';

@Component({
  selector: 'app-client-admin-list',
  templateUrl: './client-admin-list.component.html',
  styleUrls: ['./client-admin-list.component.css']
})
export class ClientAdminListComponent implements OnInit {
  clients: Array<any>;

  constructor(private clientsService: ClientService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.clientsService.getAll().subscribe((data) => {
      this.clients = data;
    });
  }

}
