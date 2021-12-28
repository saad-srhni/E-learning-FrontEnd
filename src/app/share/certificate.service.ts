import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Certificate } from 'crypto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient, private route: Router) { }

  addCertificate(idcourse:number, idstudent:number,certificate:Certificate) {
    return this.http.post(
      environment.backendUrl+ '/certificate/'+idcourse+'/'+idstudent,
      certificate
    );
  }

  checkCertificate(code:string) {
    return this.http.get(
      environment.backendUrl + '/certificate/' + code
    );
  }

  
}
