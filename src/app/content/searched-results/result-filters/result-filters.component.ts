import { Component, OnInit } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { SEARCHED_ITEM_TYPES } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-result-filters',
  templateUrl: './result-filters.component.html',
  styleUrls: ['./result-filters.component.css']
})
export class ResultFiltersComponent implements OnInit {

  objectKeys = Object.keys;
  itemTypes = SEARCHED_ITEM_TYPES;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  isExpanded = true;
  itemSubtypes = [];
  sortFilters = ['Recommended',
    `What's New`,
    'Popularity',
    'Better Discount',
    'Price: High to Low',
    'Price: Low to High',
    'Faster Delivery'];
  selectedVal = '';
  isExpandedDropDown = false;
  constructor() { }

  ngOnInit() {
    this.selectedVal = this.sortFilters[0];
  }

  onTypeSelect(type: string) {
    if (this.itemSubtypes === this.itemTypes[type]) {
      this.itemSubtypes = [];
    } else {
      this.itemSubtypes = this.itemTypes[type];
    }
  }
  onChange(sortFilter: string){
    this.selectedVal = sortFilter;
    this.isExpandedDropDown = false;
  }
}
