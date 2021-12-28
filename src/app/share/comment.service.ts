import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private route: Router) { }

  addComment(Comment:any) {
    return this.http.post(
      environment.backendUrl + '/comment/',
      Comment
    );
  }

  deleteComment(idcomment:number,idownner:number,typeownner:string) {
    return this.http.delete(
      environment.backendUrl + '/comment/' + idcomment + '/' + idownner + '/' + typeownner
    );
  }

  updateComment(Comment:any) {
    return this.http.put(
      environment.backendUrl + '/comment/',
      Comment
    );
  }


}
