import { Component, OnInit } from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from '../shared/client/client.service';

@Component({
  selector: 'app-client-admin-create',
  templateUrl: './client-admin-create.component.html',
  styleUrls: ['./client-admin-create.component.css']
})
export class ClientAdminCreateComponent implements OnInit {
  checkoutForm;
  client;
  constructor(
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      middleName: '',
      secondName: '',
      gender: '',
      isRegular: '',
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(clientData) {
    this.checkoutForm.reset();
    console.log('Your haircut has been submitted', clientData);

    // tslint:disable-next-line:label-position
    this.client = {
      firstName: clientData.firstName,
      middleName: clientData.middleName,
      secondName: clientData.secondName,
      gender: clientData.gender,
      isRegular: clientData.isRegular,
    };

    this.clientService.create(this.client).subscribe((data) => data);
    this.router.navigate(['client-admin/list']);
  }

}
