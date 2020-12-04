import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../model/personne';



@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes:Personne[] = []
  selectPersonneSubject = new Subject<Personne>();
  constructor(private http:HttpClient) {
  this.personnes = [
    new Personne(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', 123456, 38),
    new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '', 123456, 38),
    new Personne(2, 'sellaouti2', 'aymen2', 'teacher2', '                 ', 123456, 38),
  ];

  }

  fetchdata(): Observable<Personne[]> {
    return this.http.get<Personne[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');
  }

  getFakeData(): Personne[] {
    console.log(this.personnes);
    return this.personnes;
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
