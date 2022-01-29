import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HeaderComponent} from '../header.component';

@Component({
  selector: 'app-popupbio',
  templateUrl: './popupbio.component.html',
  styleUrls: ['./popupbio.component.css']
})
export class PopupbioComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<HeaderComponent>,
                @Inject(MAT_DIALOG_DATA) public data:any) { }

onOK() {this.dialogRef.close();}

  ngOnInit(): void {
  }

}
