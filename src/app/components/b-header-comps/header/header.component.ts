import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  listStyle    : string='hideContent';
  transStyle1    : string='fadeInDown';
  transStyle2    : string='fadeInRightBig';
  isShow       : boolean=false;

  sectionToShow: string='';

  constructor() { }

  ngOnInit(): void {
  }

  
  showSoftSection(){
    this.transStyle1 ='fadeInDown';
    if(!this.isShow){
      this.listStyle="showContent";
      this.isShow=!this.isShow;
    }
    else
      this.hideSoftSection();
  }

  hideSoftSection(){
    this.isShow=!this.isShow;
    this.transStyle1 ='fadeOutUp';
    
    setTimeout(() => {this.listStyle="hideContent";}, 1000);
  }
  
  showDesignSection(){}
  hideDesignSection(){}

  /* todo hace un main para soft y para desig luego un section para apps moviles y web */
  

}
