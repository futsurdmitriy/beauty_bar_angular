import { Component, OnInit } from '@angular/core';
import {HaircutService } from '../shared/haircut/haircut.service';
import {FormBuilder} from '@angular/forms';
import {OrderService} from '../shared/order/order.service';
import {ClientService} from '../shared/client/client.service';



@Component({
  selector: 'app-sign-up-for-a-haircut',
  templateUrl: './sign-up-for-a-haircut.component.html',
  styleUrls: ['./sign-up-for-a-haircut.component.css']
})
export class SignUpForAHaircutComponent implements OnInit {
  checkoutForm;
  haircuts: Array<any>;
  selectedHaircut: any;
  constructor(
    private haircutsService: HaircutService,
    private orderService: OrderService,
    private clientService: ClientService,
    private formBuilder: FormBuilder
    ) {
    this.checkoutForm = this.formBuilder.group({
      client_first_name: '',
      client_middle_name: '',
      client_second_name: '',
      client_gender: '',
      client_haircut: '',
    });
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.haircutsService.getAll().subscribe((data) => {
      this.haircuts = data;
    });
  }
  // tslint:disable-next-line:typedef
  onChange(selectedHaircutId): void {
    this.haircutsService.getById(selectedHaircutId).subscribe((data) => {
      this.selectedHaircut = data;
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(customerData) {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    console.log('Your order has been submitted', customerData);
    const clientId = this.clientService.create(customerData);
    console.log('client response', clientId);
    if (clientId) {
      const orderId = this.orderService.create(customerData);
      console.log('order response', orderId);
      if (orderId) {
        console.log('order has been created');
      } else {
        console.log('order hasn`t been created');
      }
      console.log('client has been created');
    } else {
       console.log('client hasn`t been created');
    }
  }

}
