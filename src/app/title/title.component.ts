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

  mobileToggle(nav: any, mobile: any) {
    const visi = nav.getAttribute('data-visible')
    if (visi === 'false') {
      nav.setAttribute('data-visible', true);
      mobile.setAttribute('aria-expanded', true)
    } else {
      nav.setAttribute('data-visible', false)
      mobile.setAttribute('aria-expanded', false)
    }
  }

}
