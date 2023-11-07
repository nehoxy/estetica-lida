import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IsLoggedInService {

  constructor() { }
  
  private isLoggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLogged$: Observable<boolean> = this.isLoggedSubject.asObservable();

  setLoggedStatus(isLogged: boolean) {
    this.isLoggedSubject.next(isLogged);
  }
}
