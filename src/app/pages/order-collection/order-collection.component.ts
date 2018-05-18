import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-collection',
  templateUrl: './order-collection.component.html',
  styleUrls: ['./order-collection.component.scss']
})
export class OrderCollectionComponent implements OnInit {
  closeResult: string;

  ngOnInit() {
  }

  constructor(private modalService: NgbModal) {}
  // -------------------- Create dialog ------------------------------
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true }).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }
  // -------------------- Create dialog ------------------------------

}
