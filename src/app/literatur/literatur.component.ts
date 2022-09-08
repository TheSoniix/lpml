import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-literatur',
  templateUrl: './literatur.component.html',
  styleUrls: ['./literatur.component.scss']
})
export class LiteraturComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
