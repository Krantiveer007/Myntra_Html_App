import { Component, OnInit } from '@angular/core';
import { COLORS, BRANDS, PRICE_RANGE } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit {

  objectKeys = Object.keys;
  isExpandedColor = true;
  isExpandedBrand = true;
  
  filters = {
    'Brand': BRANDS,
    'Price': PRICE_RANGE,
    'Color': COLORS,
    'Discount Range': ['10', '20', '30', '40', '50', '60', '70', '80']
  };
  searchIcon = '../assets/images/search.png';
  constructor() { }

  ngOnInit() {
  }

  colorStyling(item: string): Object {
    const color = item.substring(0, item.indexOf(' ('));
    return { background: color, border: '1px solid #d6d6d6' };
  }
  onClickExpand(filter: string) {
    if(filter === 'Brand') {
      this.isExpandedBrand = !this.isExpandedBrand;
    } else {
      this.isExpandedColor = !this.isExpandedColor;
    }
  }
}
