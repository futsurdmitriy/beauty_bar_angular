import {DatePipe} from '@angular/common';

export class Haircut {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _name: string;
  // tslint:disable-next-line:variable-name
  private _cost: string;
  // tslint:disable-next-line:variable-name
  private _genderType: string;
  // tslint:disable-next-line:variable-name
  private _createdAt: DatePipe;
  // tslint:disable-next-line:variable-name
  private _updatedAt: DatePipe;

  constructor(id: number, name: string, cost: string, genderType: string, createdAt: DatePipe, updatedAt: DatePipe) {
    this._id = id;
    this._name = name;
    this._cost = cost;
    this._genderType = genderType;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cost(): string {
    return this._cost;
  }

  set cost(value: string) {
    this._cost = value;
  }

  get genderType(): string {
    return this._genderType;
  }

  set genderType(value: string) {
    this._genderType = value;
  }

  get createdAt(): DatePipe {
    return this._createdAt;
  }

  set createdAt(value: DatePipe) {
    this._createdAt = value;
  }

  get updatedAt(): DatePipe {
    return this._updatedAt;
  }

  set updatedAt(value: DatePipe) {
    this._updatedAt = value;
  }
}
