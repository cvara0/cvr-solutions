import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-m',
  templateUrl: './circle-m.component.html',
  styles: [
  ]
})
export class CircleMComponent implements OnInit {

  @Input() imgRoute:string="";

  constructor() { }

  ngOnInit(): void {
  }
  

}
