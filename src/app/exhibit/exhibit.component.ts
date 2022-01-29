import { Component, OnInit, Input } from '@angular/core';
import { ArtDetails, NationsFeatured } from '../myInterfaces/artInterface';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent implements OnInit {
  
  @Input()  artDetails!: ArtDetails[];
  @Input() nationFeatured!: NationsFeatured[];

  constructor() { }

  ngOnInit(): void {
  }

}
