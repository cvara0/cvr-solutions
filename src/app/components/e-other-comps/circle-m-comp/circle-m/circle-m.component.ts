import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-m',
  templateUrl: './circle-m.component.html',
  styles: [
  ]
})
export class CircleMComponent implements OnInit {

  @Input() icon_name:string="";

  constructor() { }

  ngOnInit(): void {
  }
  

}
