import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Output() scrollTo = new EventEmitter<string>();

  constructor() { }

  scrollToFunc(value: string) {
    this.scrollTo.emit(value);
  }

}
