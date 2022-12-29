import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  listStyle1    : string='hideContent';
  transStyle1    : string='';
  isShow1      : boolean=false;

  listStyle2    : string='hideContent';
  transStyle2    : string='';
  isShow2      : boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  
  showSoftSection(){
    this.hideDesignSection(0);
    this.transStyle1 ='zoomIn';
    if(!this.isShow1){
      this.listStyle1="showContent";
      this.isShow1=true;
    }
    else
      this.hideSoftSection(1000);
  }

  hideSoftSection(time:number){
    this.isShow1=false;
    this.transStyle1 ='zoomOut';
    
    setTimeout(() => {this.listStyle1="hideContent";}, time);
  }
  
  showDesignSection(){
    this.hideSoftSection(0);
    this.transStyle2 ='zoomIn';
    if(!this.isShow2){
      this.listStyle2="showContent";
      this.isShow2=true;
    }
    else
      this.hideDesignSection(1000);
  }

  hideDesignSection(time:number){
    this.isShow2=false;
    this.transStyle2 ='zoomOut';
    
    setTimeout(() => {this.listStyle2="hideContent";}, time);
  }


  

}
