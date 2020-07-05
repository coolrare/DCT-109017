import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() i = 0;

  @Input() item: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
