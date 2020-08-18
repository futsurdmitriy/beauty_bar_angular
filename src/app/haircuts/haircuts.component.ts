import { Component, OnInit } from '@angular/core';
import {HaircutService } from '../shared/haircut/haircut.service';

@Component({
  selector: 'app-haircuts',
  templateUrl: './haircuts.component.html',
  styleUrls: ['./haircuts.component.css']
})
export class HaircutsComponent implements OnInit {
  haircuts: Array<any>;
  constructor(private haircutsService: HaircutService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.haircutsService.getAll().subscribe((data) => {
      this.haircuts = data;
    });
  }

}
