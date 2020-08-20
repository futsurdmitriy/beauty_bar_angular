import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  checkoutForm;
  constructor(private formBuilder: FormBuilder,) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      cost: '',
    });
  }

  ngOnInit(): void {
  }

}
