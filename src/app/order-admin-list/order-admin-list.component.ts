import { Component, OnInit } from '@angular/core';
import {OrderService} from '../shared/order/order.service';

@Component({
  selector: 'app-order-admin-list',
  templateUrl: './order-admin-list.component.html',
  styleUrls: ['./order-admin-list.component.css']
})
export class OrderAdminListComponent implements OnInit {
  orders: Array<any>;

  constructor(private orderService: OrderService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.orderService.getAll().subscribe((data) => {
      this.orders = data;
    });
  }

}
