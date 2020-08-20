import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HaircutService} from '../shared/haircut/haircut.service';


@Component({
  selector: 'app-haircut-admin-delete',
  templateUrl: './haircut-admin-delete.component.html',
  styleUrls: ['./haircut-admin-delete.component.css']
})
export class HaircutAdminDeleteComponent implements OnInit {

  constructor(
    private haircutsService: HaircutService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log('Your haircut has been submitted', data.haircutId);
      this.haircutsService.delete(data.haircutId).subscribe((deleted) => deleted);
    });
    this.router.navigate(['haircut-admin/list']);

  }

}
