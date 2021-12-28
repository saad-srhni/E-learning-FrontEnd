import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Chapitre } from '../classes/chapitre';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {

  constructor(private http: HttpClient, private route: Router) { }

  getAllChapitre(idcourse:number) {
    return this.http.get(
      environment.backendUrl + '/chapitre/'+idcourse
    );
  }

  addChapitre(idcourse:number,chapitre:Chapitre) {
    return this.http.post(
      environment.backendUrl + '/chapitre/' + idcourse,
      chapitre
    );
  }

  updateChapitre(chapitre:Chapitre) {
    return this.http.put(
      environment.backendUrl + '/chapitre',
      chapitre
    );
  }
  deleteChapite(idchapitre: number) {
    return this.http.delete(
      environment.backendUrl + '/chapitre/' + idchapitre
    );
  }
}
