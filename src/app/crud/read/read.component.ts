import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.interface';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  users?: User[] | null;

  constructor(
    private crud: CrudFacade
  ) { }

  ngOnInit(): void {
    /* this.crud.users$
      .pipe(first())
      .subscribe((users: User[] | null) => this.users = users,
        error => console.error(error)
      ); */
  }
}
