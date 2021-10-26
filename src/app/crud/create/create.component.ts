import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private crud: CrudFacade
  ) { }

  ngOnInit(): void {
    this.startForm();
  }

  hidePassword(): void {
    this.displaysPassword = !this.displaysPassword;
  }

  onSubmit(): void {
    if (this.userRegistration.valid) {
      this.crud.create({
        name: this.userRegistration.get('name')?.value,
        email: this.userRegistration.get('email')?.value,
        cellPhone: this.userRegistration.get('cellPhone')?.value,
        password: this.userRegistration.get('currentPassword')?.value
      });
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
}