import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import { breweryRoutes } from './brewery.routing';
import { BreweryDetailsComponent } from './brewerydetails/brewerydetails.component';
import { BrewerySearchComponent } from './brewerySearch/brewerysearch.component';
import { BreweryhomeComponent } from './breweryhome/breweryhome.component';
import { GMapModule } from 'primeng/gmap';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        AutoCompleteModule,
        TableModule,
        GMapModule,
        breweryRoutes],
    exports: [],
    declarations: [BreweryDetailsComponent, BreweryhomeComponent, BrewerySearchComponent],
    providers: [],
})
export class BreweryModule { }
