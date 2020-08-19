import {Component, OnInit} from '@angular/core';
import {HaircutService} from '../shared/haircut/haircut.service';
import {FormBuilder} from '@angular/forms';
import {OrderService} from '../shared/order/order.service';
import {ClientService} from '../shared/client/client.service';
import {Client} from '../shared/models/client/client.model';


@Component({
  selector: 'app-sign-up-for-a-haircut',
  templateUrl: './sign-up-for-a-haircut.component.html',
  styleUrls: ['./sign-up-for-a-haircut.component.css']
})
export class SignUpForAHaircutComponent implements OnInit {
  client;
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
      firstName: '',
      middleName: '',
      secondName: '',
      gender: '',
      haircut: '',
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

    // tslint:disable-next-line:label-position
    this.client = {
      firstName: customerData.firstName,
      middleName: customerData.middleName,
      secondName: customerData.secondName,
      gender: customerData.gender
    };
    const clientIdRes = this.clientService.create(this.client);
    // tslint:disable-next-line:no-unused-expression
    clientIdRes.subscribe(
      client => {
        // if (client.id) {
          const order = {
            clientId: client.id,
            haircutId: customerData.haircut,
            secondName: customerData.secondName,
            gender: customerData.gender
          };
          const orderId = this.orderService.create(order);
          // console.log('order response', orderId);
          // if (orderId) {
          //   console.log('order has been created');
          // } else {
          //   console.log('order hasn`t been created');
          // }
          // console.log('client has been created');
        // } else {
        //   console.log('client hasn`t been created');
        // }
      }
    );

  }

}
