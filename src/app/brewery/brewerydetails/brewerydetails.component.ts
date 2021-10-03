import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreweriesService } from '../breweries.service';
@Component({
  selector: 'app-brewerydetails',
  templateUrl: './brewerydetails.component.html',
  styleUrls: ['./brewerydetails.component.scss']
})
export class BreweryDetailsComponent implements OnInit {
  selectedId: any;
  breweryDetail: any;
  options: any;
  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';
  constructor(private _activatedRoute: ActivatedRoute, private _service: BreweriesService) { }

  ngOnInit(): void {
    this.selectedId = this._activatedRoute.snapshot.params.id;
    this._service.getBreweryById(this.selectedId).pipe().subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.breweryDetail = data;
        this.options = {
          center: { lat: +this.breweryDetail.latitude, lng: +this.breweryDetail.longitude },
          zoom: 12
        };
      }
    });
  }

}
