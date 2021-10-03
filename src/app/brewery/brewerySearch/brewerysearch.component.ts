import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { BreweriesService } from '../breweries.service';
export class SearchFields {
  name: string | undefined;
  city: string | undefined;
}
@Component({
  templateUrl: './brewerysearch.component.html',
  styleUrls: ['./brewerysearch.component.scss']
})
export class BrewerySearchComponent implements OnInit {
  value: any;
  selectedBrewery: any;
  filteredBreweries: any = [];

  breweryList: any = [];

  searchFields!: SearchFields;

  constructor(private _breweryService: BreweriesService, private _router: Router) { }
  ngOnInit(): void {
    this.searchFields = new SearchFields();
    this._breweryService.getAllBreweries().pipe().subscribe((data: any) => {
      this.breweryList = data;
    })
  }

  filterBrewery(event: any) {
    this.filteredBreweries = [];
    let query = event.query;
    this._breweryService.getAutocomplete(query).pipe(debounceTime(500)).subscribe((data: any) => {
      if (data) {
        this.filteredBreweries = data;
      }
    })
  }

  dropdownValueSelected() {
    this._router.navigate(['/breweryDetails', this.selectedBrewery.id]);
  }

  filterByCriteria() {
    this.breweryList = [];
    this._breweryService.filterBreweryByCriteria(this.searchFields).pipe().subscribe((data: any) => {
      if (data) {
        this.breweryList = data;
      }
    })
  }

}
