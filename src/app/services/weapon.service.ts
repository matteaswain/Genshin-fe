import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from '../models/weapon.cl';

const baseurl: string = "http://localhost:12362/api"

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor(private http : HttpClient) { }

  list(): Observable<Weapon[]>
  {
    return this.http.get(`${baseurl}/Weapons`) as Observable<Weapon[]>
  }

  detail(id:number): Observable<Weapon>
  {
    return this.http.get(`${baseurl}/Weapons/${id}`) as Observable<Weapon>
  }

}


