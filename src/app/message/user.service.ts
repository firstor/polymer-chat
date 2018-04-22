import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {User} from './user.model';

@Injectable()
export class UserService {

    private apiUrl = 'api/users';

    constructor(private http: Http) {
    }

    getUsers(): Promise<User[]> {
        return this.http
            .get(this.apiUrl)
            .toPromise()
            .then((res) => {
                return res.json().data as User[];
            })
            .catch(this.handleError);
    }

    fetchUsers(): Promise<User[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(this.getUsers());
            }, 2000);
        });
    }

    handleError(err: any): Promise<any> {
        console.error('An error occured ', err);
        return Promise.reject(err.message || err);
    }
}
