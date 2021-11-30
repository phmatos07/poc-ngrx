import { DialogType } from './dialog-type.enum';

export class DialogData {
  constructor(
    public type: DialogType,
    public message: string
  ) { }
}
