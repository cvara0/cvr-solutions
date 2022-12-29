import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-ote',
  templateUrl: './square-ote.component.html',
  styles: [
  ]
})
export class SquareOteComponent implements OnInit {


  @Input() image_route:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
