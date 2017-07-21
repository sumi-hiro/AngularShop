import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wear-view',
  templateUrl: './wear-view.component.html',
  styleUrls: ['./wear-view.component.css']
})
export class WearViewComponent implements OnInit {

  constructor() { }

  //あとで動かすと思うが、ここに配列を置いてみる。が、書けなかったので、server配下にjsonを作ることにした。

  ngOnInit() {
  }

  wearviewData: any = [
    {name: 'パーカー', price: 5000, image: "./assets/images/mo/10-14154B.jpg"},
    {name: 'ジャケット', price: 6000, image: "./assets/images/mo/10-14157B.jpg"},
    {name: 'ウインドブレーカー', price: 4500, image: "./assets/images/mo/10-15068B.jpg"}
  ]
}
