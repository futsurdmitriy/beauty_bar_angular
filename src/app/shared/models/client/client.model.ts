import {DatePipe} from '@angular/common';

export class Client {
  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _firstName: string;
  // tslint:disable-next-line:variable-name
  private _middleName: string;
  // tslint:disable-next-line:variable-name
  private _secondName: string;
  // tslint:disable-next-line:variable-name
  private _gender: string;
  // tslint:disable-next-line:variable-name
  private _isRegular: boolean;
  // tslint:disable-next-line:variable-name
  private _createdAt: DatePipe;
  // tslint:disable-next-line:variable-name
  private _updatedAt: DatePipe;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, firstName: string, middleName: string, secondName: string, gender: string, isRegular: boolean, createdAt: DatePipe, updatedAt: DatePipe) {
    this._id = id;
    this._firstName = firstName;
    this._middleName = middleName;
    this._secondName = secondName;
    this._gender = gender;
    this._isRegular = isRegular;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get isRegular(): boolean {
    return this._isRegular;
  }

  set isRegular(value: boolean) {
    this._isRegular = value;
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
