import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() sitename = 'Hello World';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  fontSize = 12;

  constructor() { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sitename = 'The Will Will Web';
    // }, 2000);
  }

  changeSitename(evt: MouseEvent): void {
    console.log(evt);
    this.fontSize++;
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
