import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-circle-s',
  templateUrl: './circle-s.component.html',
  styles: [
  ]
})
export class CircleSComponent implements OnInit {
  @Input() imgRoute:string="";
  closeResult = '';

  listStyle1    : string='hideContent';
  transStyle1    : string='';
  isShow1      : boolean=false;

  listStyle2    : string='hideContent';
  transStyle2    : string='';
  isShow2      : boolean=false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  

  open(content:any) {
    this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title',
        centered:true
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
