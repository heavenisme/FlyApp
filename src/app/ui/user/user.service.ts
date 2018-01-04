import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {User} from './user.model';
import {HttpService} from '../../net/http.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  public userLoginURL = 'http://localhost:8080/v1/signin/signin';
  public subject: Subject<User> = new Subject<User>();

  constructor(public httpService: HttpService) {
  }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public login(user: User) {
    return this.httpService
      .post<User>(this.userLoginURL, user);

  }

  public register(user: User) {
      return this.httpService.post<User>(this.userLoginURL, user);
  }


  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }
}
