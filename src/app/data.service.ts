import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article/Article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  load(): Observable<Article[]> {
    return this.http.get<Article[]>('/api/articles.json');
  }

}
