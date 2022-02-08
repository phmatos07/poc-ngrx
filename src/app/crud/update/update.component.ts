import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { User } from '../../shared/models/user.interface';
import { DialogComponent } from './../../feature-view/dialog/dialog.component';
import { DialogData } from './../../feature-view/dialog/model/dialog-data.model';
import { DialogType } from './../../feature-view/dialog/model/dialog-type.enum';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {

  userUpdate = new FormGroup({});
  users?: User[] | null;
  displaysPassword = false;

  private subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private crud: CrudFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.startForm();
    this.subscriptions.add(this.getUsers());
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  hidePassword(): void {
    this.displaysPassword = !this.displaysPassword;
  }

  onSubmit(): void {
    if (this.isFormValid) {
      /* this.crud.update(
        this.userUpdate.get('selectUsers')?.value,
        {
          name: this.userUpdate.get('name')?.value,
          email: this.userUpdate.get('email')?.value,
          cellPhone: this.userUpdate.get('cellPhone')?.value,
          password: this.userUpdate.get('currentPassword')?.value
        }); */

      this.dialog.open(DialogComponent, {
        data: new DialogData(DialogType.ALERT, 'Perfil atualizado com sucesso!'),
      });

      this.userUpdate.reset();
    }
  }

  private getUsers(): Subscription | any {
    /* return this.crud.users$.subscribe((users: User[] | null) =>
      this.users = users,
      error => console.error(error)
    ); */
  }

  private startForm(): void {
    this.userUpdate = this.formBuilder.group({
      selectUsers: [
        this.formValue('selectUsers'),
        [
          Validators.required
        ]
      ],
      name: [
        this.formValue('name'),
        [
          Validators.required,
          Validators.maxLength(50),
        ]
      ],
      email: [
        this.formValue('email'),
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.email
        ]
      ],
      cellPhone: [
        this.formValue('cellPhone'),
        [
          Validators.required,
          Validators.maxLength(11),
        ]
      ],
      currentPassword: [
        this.formValue('currentPassword'),
        [
          Validators.required,
          Validators.maxLength(50)
        ]]
    });

    if (this.userUpdate.get('selectUsers')) {
      this.selectUsersChanges();
    }
  }

  private selectUsersChanges(): void {
    const subscription = this.userUpdate.get('selectUsers')?.valueChanges
      .subscribe((idUser: number) => {
        if (typeof idUser === 'number' && this.users) {
          this.userUpdate.controls['name'].setValue(this.users[idUser].name);
          this.userUpdate.controls['email'].setValue(this.users[idUser].email);
          this.userUpdate.controls['cellPhone'].setValue(this.users[idUser].cellPhone);
          this.userUpdate.controls['currentPassword'].setValue(this.users[idUser].password);
        }
      });
    this.subscriptions.add(subscription);
  }

  private formValue(input: string): string {
    return this.userUpdate.get(input)?.value || '';
  }

  get isSelectUsersValid(): boolean {
    return this.userUpdate.get('selectUsers')?.valid || false;
  }

  get isFormValid(): boolean {
    return this.userUpdate?.valid;
  }
}
