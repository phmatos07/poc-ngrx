import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionType } from './model/action-type.enum';
import { DialogData } from './model/dialog-data.model';
import { DialogType } from './model/dialog-type.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  readonly DIALOG_TYPE = DialogType;
  readonly ACTION_TYPE = ActionType;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onAction(actionType: ActionType): void {
    this.dialogRef.close(actionType);
  }

  get buttonColor(): string {
    return this.data.type === this.DIALOG_TYPE.CONFIRM ? 'warn' : '';
  }
}
