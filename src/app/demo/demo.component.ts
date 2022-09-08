import {Component, ViewEncapsulation} from '@angular/core';
import {Item} from "../../../modules/item";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {

  plastic: number = 0;
  recyclable: number = 0;
  microplastic: number = 0;
  hazardousToHealth: number = 0;
  einkaufsliste: Item[] =
    [
      new Item('Cornflakes',        false, 28, 0, 15, 15),
      new Item('Tomaten',           false, 2, 2, 1, 1),
      new Item('Wasser (Mehrweg)',  false, 10, 10, 3, 8),
      new Item('Wasser (Einweg)',   false, 39, 38, 6, 8),
      new Item('Chips',             false, 13, 0, 5, 7),
      new Item('Milch',             false, 4, 0, 2, 3),
      new Item('Pizza',             false, 10, 0, 2, 3),
      new Item('Süßigkeit',         false, 26, 26, 11, 19),
    ]

  constructor() {
  }

  onItemChange(index: number) {
    this.einkaufsliste[index].value = !this.einkaufsliste[index].value;
    console.log(this.einkaufsliste[index].name + ": " + this.einkaufsliste[index].value);
    this.calcValues();
  }

  checkAllItems(){
    for (const item of this.einkaufsliste) {
      item.value = true;
    }
    this.calcValues();
  }

  uncheckAllItems() {
    for (const item of this.einkaufsliste) {
      item.value = false;
    }
    this.calcValues();
  }

  calcValues() {
    this.clearValues();
    for (const item of this.einkaufsliste) {
      if (item.value) {
        this.plastic += item.plastic;
        this.recyclable += item.recyclable;
        this.microplastic += item.microplastic;
        this.hazardousToHealth += item.hazardousToHealth;
      }
    }
  }

  clearValues() {
    this.plastic = 0;
    this.recyclable = 0;
    this.microplastic = 0;
    this.hazardousToHealth = 0;
  }
}
