import { Component, OnInit, Input } from '@angular/core';
import { ArtDetails, NationsFeatured } from '../myInterfaces/artInterface';

@Component({
  selector: 'app-nation-only',
  templateUrl: './nation-only.component.html',
  styleUrls: ['./nation-only.component.css']
})
export class NationOnlyComponent implements OnInit {

  @Input()  artDetails!: ArtDetails[];
  @Input() nationFeatured!: NationsFeatured[];
  outArea!: string;

      
  displayArtDetails(index : number)
  {     
      this.outArea = `<h3 class='title'>${this.nationFeatured[index].nation} Art</h3>`;
  
      this.outArea += `<table border="1"><tr>
                        <th>ID</th><th>Title</th><th>Creator</th>
                  <th>Creation Date</th><th>Description</th>`;

      for (let x=0; x < this.artDetails.length; x++){
        if (this.nationFeatured[index].nation === this.artDetails[x].nation) {
            this.outArea +=
            `
              <tr>
                  <td >${this.artDetails[x].id}</td>
                  <td>${this.artDetails[x].title}</td>
                  <td>${this.artDetails[x].creator}</td>
                  <td>${this.artDetails[x].creation_date}</td>
                  <td>${this.artDetails[x].description}</td>
              </tr>
            `
        }       
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
