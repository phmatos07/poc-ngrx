import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../models/user.interface';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  users?: User[];

  constructor(
    private crud: CrudFacade
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers(): void {
    this.crud.allUsers$
      .pipe(first())
      .subscribe((users: User[]) => this.users = users,
        error => console.error(error)
      );
  }
}
