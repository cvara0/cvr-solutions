import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-btn',
  templateUrl: './a-btn.component.html',
  styles: [
  ]
})
export class ABtnComponent implements OnInit {
  @Input() imgRoute:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
