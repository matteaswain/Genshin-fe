import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.cl';

const baseurl: string = "http://localhost:12362/api"

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http : HttpClient) { }

  list(): Observable<Character[]>
  {
    return this.http.get(`${baseurl}/Characters`) as Observable<Character[]>
  }

  detail(id:number): Observable<Character>
  {
    return this.http.get(`${baseurl}/Characters/${id}`) as Observable<Character>
  }

  create(character:Character): Observable<Character>
  {
    return this.http.post(`${baseurl}/Characters`,character) as Observable<Character>
  }

  edit(character:Character): Observable<any>
  {
    return this.http.put(`${baseurl}/Characters/${character.id}`,character) as Observable<any>
  }
  
  delete(id:number): Observable<Character>
  {
    return this.http.delete(`${baseurl}/Characters/${id}`) as Observable<Character>
  }

}
