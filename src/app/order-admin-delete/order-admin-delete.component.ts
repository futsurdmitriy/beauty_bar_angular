import { Component, OnInit } from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../shared/order/order.service';

@Component({
  selector: 'app-order-admin-delete',
  templateUrl: './order-admin-delete.component.html',
  styleUrls: ['./order-admin-delete.component.css']
})
export class OrderAdminDeleteComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log('Your order has been submitted', data.orderId);
      this.orderService.delete(data.orderId).subscribe((deleted) => deleted);
    });
    this.router.navigate(['order-admin/list']);

  }
}
