import { Component, OnInit } from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';

@Component({
  selector: 'app-haircut-admin-list',
  templateUrl: './haircut-admin-list.component.html',
  styleUrls: ['./haircut-admin-list.component.css']
})
export class HaircutAdminListComponent implements OnInit {
  haircuts: Array<any>;

  constructor(private haircutsService: HaircutService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.haircutsService.getAll().subscribe((data) => {
      this.haircuts = data;
    });
  }

}
