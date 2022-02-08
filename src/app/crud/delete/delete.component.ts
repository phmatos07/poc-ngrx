import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.interface';
import { DialogComponent } from './../../feature-view/dialog/dialog.component';
import { ActionType } from './../../feature-view/dialog/model/action-type.enum';
import { DialogData } from './../../feature-view/dialog/model/dialog-data.model';
import { DialogType } from './../../feature-view/dialog/model/dialog-type.enum';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit, OnDestroy {

  users?: User[];
  selectUsers = new FormControl('', [
    Validators.required
  ]);

  private subscription = new Subscription();

  constructor(
    private crud: CrudFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.getAllUsers());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  delete(): void {
    if (this.isSelectValid) {

      const dialogRef = this.dialog.open(DialogComponent, {
        data: new DialogData(DialogType.CONFIRM, 'Tem certeza que deseja excluir esse perfil?'),
      });

      dialogRef.afterClosed()
        .subscribe((action: ActionType) => {
          if (action === ActionType.OK) {
            this.crud.delete(this.selectUsers.value);
            delete this.users;
            this.selectUsers.reset();
          }
        });
    }
  }

  private getAllUsers(): Subscription {
    return this.crud.allUsers$
      .subscribe((users: User[]) => this.users = users,
        error => console.error(error)
      );
  }

  get isUsers(): boolean {
    return Array.isArray(this.users) && this.users.length >= 1;
  }

  get isSelectValid(): boolean {
    return this.selectUsers?.valid;
  }
}
