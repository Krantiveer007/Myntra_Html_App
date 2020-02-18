import { Component, OnInit } from '@angular/core';
import { SEARCHED_RESULTS } from 'src/app/shared/app.constants';

@Component({
  selector: 'app-result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.css']
})
export class ResultCardsComponent implements OnInit {

  searchedResults = [];
  // showHidden=false;
  constructor() { }

  ngOnInit() {
    while(this.searchedResults.length <= 51) {
      SEARCHED_RESULTS.forEach((rowNode)=>{
        this.searchedResults.push(rowNode);
      })
    }
  }

}
