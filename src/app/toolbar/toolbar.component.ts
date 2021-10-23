import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output()
  openSidebarEmitter = new EventEmitter<boolean>();

  private toggleSidebar = false;

  openSidebar(): void {
    this.toggleSidebar = !this.toggleSidebar;
    this.openSidebarEmitter.emit(this.toggleSidebar);
  }
}