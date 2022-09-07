import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DatenschutzComponent} from "../datenschutz/datenschutz.component";
import {ImgComponent} from "../img/img.component";

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {

  constructor(public modalService: NgbModal) { }

  openImg() {
    const modalRef = this.modalService.open(ImgComponent, {
      animation: true,
      centered: true,
      scrollable: true,
      size: 'xl'
    });
    modalRef.dismissed.toPromise().then(()=> {})
  }
}
