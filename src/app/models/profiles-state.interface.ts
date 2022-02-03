import { EntityState } from '@ngrx/entity';
import { User } from './user.interface';

export interface ProfilesState extends EntityState<User> { }
