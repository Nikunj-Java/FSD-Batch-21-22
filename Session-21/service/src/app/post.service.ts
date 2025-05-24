import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl="http://localhost:3000/posts";
  

  constructor(private http:HttpClient) { }

  //01 create posts
  addPost(post:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,post);
  }

  //02 load posts
  getPosts():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
