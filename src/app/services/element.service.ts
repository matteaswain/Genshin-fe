import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from '../models/element.cl';

const baseurl: string = "http://localhost:12362/api"

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http : HttpClient) { }

  list(): Observable<Element[]>
  {
    return this.http.get(`${baseurl}/Elements`) as Observable<Element[]>
  }

  detail(id:number): Observable<Element>
  {
    return this.http.get(`${baseurl}/Elements/${id}`) as Observable<Element>
  }

}
