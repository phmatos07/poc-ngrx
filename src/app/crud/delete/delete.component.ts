import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  users$?: Observable<User[] | undefined>;
  selectUsers = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private crud: CrudFacade
  ) { }

  ngOnInit(): void {
    this.users$ = this.crud.users$;
  }

  delete(): void {
    if (this.isSelectValid) {
      this.crud.delete(this.selectUsers.value);
    }
  }

  get isSelectValid(): boolean {
    return this.selectUsers?.valid;
  }
}
