import { AuthService } from './../_services/Auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private alertify: AlertifyService,
                private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        // tslint:disable-next-line:no-string-literal
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
