import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HttpResponse, HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user.model';

@Injectable()
export class UserService {
  public subject: Subject<User> = new Subject<User>();
}
