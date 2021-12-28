import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Choice } from '../classes/choice';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  constructor(private http: HttpClient, private route: Router) { }

  addChoice(idquestion:number,choice: Choice) {
    return this.http.post(
      environment.backendUrl + '/choice/' + idquestion,
      choice
    );
  }

  getAllChoice(idquestion:number) {
    return this.http.get(
      environment.backendUrl + '/choice/' + idquestion
    );
  }

  deleteChoice(idchoice: number) {
    return this.http.delete(
      environment.backendUrl + '/choice/' + idchoice
    );
  }

}
