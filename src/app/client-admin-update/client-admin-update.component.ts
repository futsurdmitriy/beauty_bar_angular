import { Component, OnInit } from '@angular/core';
import {ClientService} from '../shared/client/client.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-admin-update',
  templateUrl: './client-admin-update.component.html',
  styleUrls: ['./client-admin-update.component.css']
})
export class ClientAdminUpdateComponent implements OnInit {
  updateForm;
  client;
  // haircutGenderTypes = {
  //   male: 'male',
  //   female: 'female',
  //   _undefined: 'undefined',
  // };
  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      id: '',
      firstName: '',
      middleName: '',
      secondName: '',
      gender: '',
      isRegular: '',
      createdAt: '',
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.client = this.activatedRoute.params.subscribe(data => {
      this.client = this.clientService.getById(data.clientId).subscribe(dataClient => {
        this.client = dataClient;
      });
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(clientData) {
    // this.updateForm.reset();
    console.log('Your client has been submitted', clientData);

    // tslint:disable-next-line:label-position
    this.client = {
      id: clientData.id,
      firstName: clientData.firstName,
      middleName: clientData.middleName,
      secondName: clientData.secondName,
      gender: clientData.gender,
      isRegular: clientData.isRegular,
      createdAt: clientData.createdAt,
    };

    this.clientService.update(this.client).subscribe((data) => data);
    this.router.navigate(['client-admin/list']);
  }
}
