import { Component, OnInit } from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../shared/client/client.service';

@Component({
  selector: 'app-client-admin-delete',
  templateUrl: './client-admin-delete.component.html',
  styleUrls: ['./client-admin-delete.component.css']
})
export class ClientAdminDeleteComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log('Your haircut has been submitted', data.clientId);
      this.clientService.delete(data.clientId).subscribe((deleted) => deleted);
    });
    this.router.navigate(['client-admin/list']);

  }


}
