import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-btn',
  templateUrl: './d-btn.component.html',
  styles: [
  ]
})
export class DBtnComponent implements OnInit {
  @Input() imgRoute:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
