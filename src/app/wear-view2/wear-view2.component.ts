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
    {name: 'パーカー', price: 5000, image: "./assets/images/lo/10-24101B.jpg"},
    {name: 'ジャケット', price: 6000, image: "./assets/images/lo/10-24102B.jpg"},
    {name: 'ウインドブレーカー', price: 4500, image: "./assets/images/lo/10-25058B.jpg"}
  ]
}
