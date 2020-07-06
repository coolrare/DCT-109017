import { DataService } from './data.service';
import { Component } from '@angular/core';
import { Article } from './article/Article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Will';

  keyword = 'TEST';

  data$: Observable<Article[]>;

  constructor(private datasvc: DataService) {
    this.data$ = this.datasvc.load();
  }

  deleteArticle(id: number): void {
    console.log('刪除 ' + id);
  }

  doSearch(str: string): void {
    this.keyword = str;
  }
}
