import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from './user.model';
import {HttpService} from '../../net/http.service';

@Injectable()
export class UserService {
  public userLoginURL = 'http://localhost:8080/v1/signin/signin';
  public subject: Subject<User> = new Subject<User>();

  constructor(public httpService: HttpService) {
  }

  public login(user: User) {
    return this.httpService
      .post<User>(this.userLoginURL, user);

  }
}
