import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() i = 0;

  @Input() item: Article;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doDelete(): void {
    this.delete.emit(this.item.id);
  }

}
