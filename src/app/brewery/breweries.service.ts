import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BreweriesService {
    base_url = 'https://api.openbrewerydb.org/breweries';

    constructor(private _http: HttpClient) { }

    getAutocomplete(term: any): any {
        return this._http.get(`${this.base_url}/autocomplete?query=${term}`);
    }

    getAllBreweries(): any {
        return this._http.get(`${this.base_url}`);
    }

    getBreweryById(id: any) {
        return this._http.get(`${this.base_url}/${id}`);
    }

    filterBreweryByCriteria(filter: any): any {
        return this._http.get(`${this.base_url}?by_city=${filter.city ? filter.city : '_'}&by_name=${filter.name ? filter.name : '_'}`)
    }

}