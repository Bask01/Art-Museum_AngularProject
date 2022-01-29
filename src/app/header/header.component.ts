import { Component, Input, OnInit } from '@angular/core';
//import the interface to pass my personal data for sharing procedure 
import { MyDetails } from '../myInterfaces/myInfointerface';
//these imports for popup dialog box
import { MatDialog } from '@angular/material/dialog';
import { PopupbioComponent } from './popupbio/popupbio.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //decleare the variable with using interface type
  @Input() myDetails!: MyDetails;

  openMyInfoDialog() {
    const dialogRef = this.dialog.open(PopupbioComponent, {data: this.myDetails});
  }

  //constructor argument updated for popup dialog box 
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  
}
