import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  // tslint:disable-next-line:typedef
  add(message: string) {
    this.messages.push(message);
  }

  // tslint:disable-next-line:typedef
  clear() {
    this.messages = [];
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
