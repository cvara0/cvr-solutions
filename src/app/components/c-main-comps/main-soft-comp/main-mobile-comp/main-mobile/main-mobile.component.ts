import { Component, OnInit } from '@angular/core';
import { ImageOte } from 'src/app/models/imageOte.models';

@Component({
  selector: 'app-main-mobile',
  templateUrl: './main-mobile.component.html'
})
export class MainMobileComponent implements OnInit {

  imagesOteList:ImageOte[]=[];

  constructor() { 
    this.imagesOteList=[
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png')

    ]
  }

  ngOnInit(): void {
  }

}
