import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  product: Product;

  constructor(public dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public p: Product) {
    this.product = p;
  }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

}
