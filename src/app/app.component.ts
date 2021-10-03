import { Component, OnInit } from '@angular/core';
import { BreweriesService } from './brewery/breweries.service';
import { map, switchMap, debounceTime, debounce, catchError, } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Breweries';

}
