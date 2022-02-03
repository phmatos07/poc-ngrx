import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../../feature-view/dialog/model/dialog-data.model';
import { DialogType } from '../../feature-view/dialog/model/dialog-type.enum';
import { DialogComponent } from './../../feature-view/dialog/dialog.component';
import { Helpers } from './../../shared/helpers/helpers';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  userRegistration = new FormGroup({});
  displaysPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private crud: CrudFacade,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.startForm();
  }

  hidePassword(): void {
    this.displaysPassword = !this.displaysPassword;
  }

  onSubmit(): void {
    if (this.isFormValid) {
      this.crud.create({
        id: Math.random().toString(),
        name: this.userRegistration.get('name')?.value,
        email: this.userRegistration.get('email')?.value,
        cellPhone: this.userRegistration.get('cellPhone')?.value,
        password: this.userRegistration.get('currentPassword')?.value,
        dateStamp: Helpers.currentDate()
      });

      this.dialog.open(DialogComponent, {
        data: new DialogData(DialogType.ALERT, 'Perfil cadastrado com sucesso!'),
      });

      this.userRegistration.reset();
    }
  }

  private startForm(): void {
    this.userRegistration = this.formBuilder.group({
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
  }

  private formValue(input: string): string {
    return this.userRegistration.get(input)?.value || '';
  }

  get isFormValid(): boolean {
    return this.userRegistration?.valid;
  }
}
