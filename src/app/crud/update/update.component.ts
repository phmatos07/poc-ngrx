import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Update } from '@ngrx/entity';
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
  users?: User[];
  displaysPassword = false;

  private subscriptions = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private crud: CrudFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.startForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  hidePassword(): void {
    this.displaysPassword = !this.displaysPassword;
  }

  onSubmit(): void {
    if (this.isFormValid) {
      const user: Update<User> = {
        id: this.userUpdate.get('selectUsers')?.value,
        changes: {
          id: this.userUpdate.get('selectUsers')?.value,
          name: this.userUpdate.get('name')?.value,
          email: this.userUpdate.get('email')?.value,
          cellPhone: this.userUpdate.get('cellPhone')?.value,
          password: this.userUpdate.get('currentPassword')?.value
        }
      };

      this.crud.update(user);
      this.userUpdate.reset();

      this.dialog.open(DialogComponent, {
        data: new DialogData(DialogType.ALERT, 'Perfil atualizado com sucesso!'),
      });
    }
  }

  private startForm(): void {
    this.userUpdate = this.formBuilder.group({
      selectUsers: [
        this.formValue('selectUsers'), [
          Validators.required
        ]
      ],
      name: [
        this.formValue('name'), [
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
      this.subscriptions.add(this.getUsers());
      this.selectUsersChanges();
    }
  }

  private getUsers(): Subscription {
    return this.crud.allUsers$
      .subscribe((users: User[]) =>
        this.users = users,
        error => console.error(error)
      );
  }

  private selectUsersChanges(): void {
    this.subscriptions.add(
      this.userUpdate.get('selectUsers')?.valueChanges
        .subscribe((id: string) => {
          this.userUpdate.controls['name'].setValue(this.selectUser(id)?.name);
          this.userUpdate.controls['email'].setValue(this.selectUser(id)?.email);
          this.userUpdate.controls['cellPhone'].setValue(this.selectUser(id)?.cellPhone);
          this.userUpdate.controls['currentPassword'].setValue(this.selectUser(id)?.password);
        })
    );
  }

  private formValue(input: string): string {
    return this.userUpdate.get(input)?.value || '';
  }

  private selectUser(id: string): User | undefined {
    return this.users?.find(user => user.id === id);
  }

  get isSelectUsersValid(): boolean {
    return this.userUpdate.get('selectUsers')?.valid || false;
  }

  get isFormValid(): boolean {
    return this.userUpdate?.valid;
  }
}
