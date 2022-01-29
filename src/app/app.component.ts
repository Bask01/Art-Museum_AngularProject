import { Component } from '@angular/core';
import { MyDetails } from './myInterfaces/myInfointerface';
import data from '../assets/data/ClevelandMuseum.json'
import { NationsFeatured, ArtDetails } from './myInterfaces/artInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArtMuseum';

  myDetails: MyDetails = data.myDetails;

  artDetails : ArtDetails[] = data.artDetails;
  nationFeatured: NationsFeatured[] = data.nationsFeatured;
}
