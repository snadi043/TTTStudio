import { RouterModule, Routes } from "@angular/router";
import { BreweryDetailsComponent } from "./brewerydetails/brewerydetails.component";
import { BreweryhomeComponent } from "./breweryhome/breweryhome.component";
import { BrewerySearchComponent } from "./brewerySearch/brewerysearch.component";

const myroutes: Routes = [
    {
        path: '', component: BreweryhomeComponent, children: [
            { path: '', component: BrewerySearchComponent },
            { path: 'breweryDetails/:id', component: BreweryDetailsComponent }
        ]
    }
]

export const breweryRoutes = RouterModule.forChild(myroutes);