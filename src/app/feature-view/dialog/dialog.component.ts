import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './model/dialog-data.model';
import { DialogType } from './model/dialog-type.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  readonly DIALOG_TYPE = DialogType;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onAction(actionType: 'CLOSE' | 'OK'): void {
    this.dialogRef.close(actionType);
  }
}
