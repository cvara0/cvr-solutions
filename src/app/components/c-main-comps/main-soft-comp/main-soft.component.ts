import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-soft',
  templateUrl: './main-soft.component.html'
})
export class MainSoftComponent implements OnInit {

  listStyle1    : string='hideContent';
  transStyle1    : string='';
  isShow1      : boolean=false;

  listStyle2    : string='hideContent';
  transStyle2    : string='';
  isShow2      : boolean=false;

  constructor() { }

  ngOnInit(): void {
    
  }
  

  showWebSection(){
    this.hideMobileSection(0);
    this.transStyle1 ='fadeInUp';
    if(!this.isShow1){
      this.listStyle1="showContent";
      this.isShow1=true;
    }
    else
      this.hideWebSection(1000);
  }

  hideWebSection(time:number){
    this.isShow1=false;
    this.transStyle1 ='zoomOut';
    
    setTimeout(() => {this.listStyle1="hideContent";}, time);
  }
  
  showMobileSection(){
    this.hideWebSection(0);
    this.transStyle2 ='fadeInUp';
    if(!this.isShow2){
      this.listStyle2="showContent";
      this.isShow2=true;
    }
    else
      this.hideMobileSection(1000);
  }

  hideMobileSection(time:number){
    this.isShow2=false;
    this.transStyle2 ='zoomOut';
    
    setTimeout(() => {this.listStyle2="hideContent";}, time);
  }

}
