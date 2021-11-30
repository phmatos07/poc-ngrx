import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from './../../models/user.model';
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
    this.crud.users$
      .pipe(first())
      .subscribe((users?: User[]) => this.users = users,
        error => console.error(error)
      );
  }
}
