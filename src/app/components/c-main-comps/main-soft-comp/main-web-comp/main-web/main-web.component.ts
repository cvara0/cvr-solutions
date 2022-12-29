import { Component, OnInit } from '@angular/core';
import { ImageOte } from 'src/app/models/imageOte.models';

@Component({
  selector: 'app-main-web',
  templateUrl: './main-web.component.html'
})
export class MainWebComponent implements OnInit {

  imagesOteList:ImageOte[]=[];

  constructor() {

    this.imagesOteList=[
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png'),
      new ImageOte('assets/images/cvr_icon_128.png')

    ]
   }

  ngOnInit(): void {
  }

}
