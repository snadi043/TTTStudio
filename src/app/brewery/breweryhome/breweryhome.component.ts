import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breweryhome',
  templateUrl: './breweryhome.component.html',
  styleUrls: ['./breweryhome.component.scss']
})
export class BreweryhomeComponent {
  value: any;
  selectedBrewery: any;
  filteredBreweries: any = [];

  breweryList: any = [];

  constructor() { }

}
