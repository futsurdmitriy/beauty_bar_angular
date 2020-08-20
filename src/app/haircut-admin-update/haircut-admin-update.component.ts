import { Component, OnInit } from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Haircut} from '../shared/models/haircut/haircut.model';

@Component({
  selector: 'app-haircut-admin-update',
  templateUrl: './haircut-admin-update.component.html',
  styleUrls: ['./haircut-admin-update.component.css']
})
export class HaircutAdminUpdateComponent implements OnInit {
  updateForm;
  haircut;
  // haircutGenderTypes = {
  //   male: 'male',
  //   female: 'female',
  //   _undefined: 'undefined',
  // };
  constructor(
    private haircutsService: HaircutService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      id: '',
      name: '',
      genderType: '',
      cost: '',
      createdAt: '',
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.haircut = this.activatedRoute.params.subscribe(data => {
      this.haircut = this.haircutsService.getById(data.haircutId).subscribe(dataHaircut => {
        this.haircut = dataHaircut;
      });
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(haircutData) {
    // this.updateForm.reset();
    console.log('Your haircut has been submitted', haircutData);

    // tslint:disable-next-line:label-position
    this.haircut = {
      id: haircutData.id,
      name: haircutData.name,
      genderType: haircutData.genderType,
      cost: haircutData.cost,
      createdAt: haircutData.createdAt,
    };

    this.haircutsService.update(this.haircut).subscribe((data) => data);
    this.router.navigate(['haircut-admin/list']);
  }

}
