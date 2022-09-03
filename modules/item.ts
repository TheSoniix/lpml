export class Item {

  name: string;
  value: boolean;
  plastic: number;
  recyclable: number;
  microplastic: number;
  hazardousToHealth: number;


  constructor(name: string, value: boolean, plastic: number, recyclable: number, microplastic: number, hazardousToHealth: number) {
    this.name = name;
    this.value = value;
    this.plastic = plastic;
    this.recyclable = recyclable;
    this.microplastic = microplastic;
    this.hazardousToHealth = hazardousToHealth;
  }
}
