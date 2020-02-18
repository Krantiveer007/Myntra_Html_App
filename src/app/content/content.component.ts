import { Component, OnInit, TemplateRef } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  navigationLink = '';
  searchedItem = [];
  searchedItemCount = '';
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: false,
  };
  isDiscountShown = false;
  couponIcon = '../assets/images/shopping500Off.png';
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.navigationLink = 'Home/Clothing/Men Clothing/Tshirts/Men Tshirts';
    this.searchedItem = this.navigationLink.split('/');
    this.searchedItemCount = ' - 40687 items';
  }

  openDiscountInfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    this.isDiscountShown = true;
  }
}
