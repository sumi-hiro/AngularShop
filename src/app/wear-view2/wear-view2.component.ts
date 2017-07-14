import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wear-view2',
  templateUrl: './wear-view2.component.html',
  styleUrls: ['./wear-view2.component.css']
})
export class WearView2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dammywearviewData: any = [
    {name: 'ダミーパーカー', price: 50, image: "./assets/images/mo/10-14154B.jpg"},
    {name: 'ダミージャケット', price: 60, image: "./assets/images/mo/10-14157B.jpg"},
    {name: 'ダミーウインドブレーカー', price: 45, image: "./assets/images/mo/10-15068B.jpg"}
  ]
}
