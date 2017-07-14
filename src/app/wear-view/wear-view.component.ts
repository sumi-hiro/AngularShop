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
    {name: 'パーカー', price: 5000},
    {name: 'ジャケット', price: 6000},
    {name: 'ウインドブレーカー', price: 4500}
  ]
}
