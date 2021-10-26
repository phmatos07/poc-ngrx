import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  userRegistration = new FormGroup({});
  displaysPassword = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.startForm();
  }

  onSubmit(): void {

  }

  hidePassword(): void {
    this.displaysPassword = !this.displaysPassword;
  }

  private startForm(): void {
    this.userRegistration = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(50),
      ]],
      email: ['', [
        Validators.required,
        Validators.maxLength(100),
        Validators.email
      ]],
      cellPhone: ['', [
        Validators.required,
        Validators.maxLength(11)
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]]
    });
  }
}