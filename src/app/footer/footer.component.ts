import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatenschutzComponent} from "../datenschutz/datenschutz.component";
import {ImpressumComponent} from "../impressum/impressum.component";
import {LiteraturComponent} from "../literatur/literatur.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  constructor(public modalService: NgbModal) { }

  openDatenschutz() {
    const modalRef = this.modalService.open(DatenschutzComponent, {
      animation: true,
      centered: true,
      scrollable: true
    });
    modalRef.dismissed.toPromise().then(()=> {})
  }
  openLit() {
    const modalRef = this.modalService.open(LiteraturComponent, {
      animation: true,
      centered: true,
      scrollable: true
    });
    modalRef.dismissed.toPromise().then(()=> {})
  }


  openImpressum() {
    const modalRef = this.modalService.open(ImpressumComponent, {
      animation: true,
      centered: true,
      scrollable: true
    });
    modalRef.dismissed.toPromise().then(()=> {})
  }



}
