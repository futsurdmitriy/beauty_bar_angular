import { Component, OnInit } from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-haircut-admin-create',
  templateUrl: './haircut-admin-create.component.html',
  styleUrls: ['./haircut-admin-create.component.css']
})
export class HaircutAdminCreateComponent implements OnInit {
  checkoutForm;
  haircut;
  constructor(
    private haircutsService: HaircutService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      genderType: '',
      cost: '',
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(haircutData) {
    this.checkoutForm.reset();
    console.log('Your haircut has been submitted', haircutData);

    // tslint:disable-next-line:label-position
    this.haircut = {
      name: haircutData.name,
      genderType: haircutData.genderType,
      cost: haircutData.cost,
    };

    this.haircutsService.create(this.haircut).subscribe((data) => data);
    this.router.navigate(['haircut-admin/list']);
  }

}
