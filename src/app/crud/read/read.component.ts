import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../models/user.model';
import { CrudFacade } from './../../store/crud.facade';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  users$?: Observable<User[] | undefined>;

  constructor(
    private crud: CrudFacade
  ) { }

  ngOnInit(): void {
    this.users$ = this.crud.users$;
  }
}
