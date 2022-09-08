import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './demo/demo.component';
import { FooterComponent } from './footer/footer.component';
import { MissionComponent } from './mission/mission.component';
import { ProblemComponent } from './problem/problem.component';
import { TitleComponent } from './title/title.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ImgComponent } from './img/img.component';
import { LiteraturComponent } from './literatur/literatur.component';



const routes: Routes = [
  {
    path: "",
    component: AppComponent
  }
];


const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled"
  //scrollPositionRestoration: "enabled"
};

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FooterComponent,
    MissionComponent,
    ProblemComponent,
    TitleComponent,
    DatenschutzComponent,
    ImpressumComponent,
    ImgComponent,
    LiteraturComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes, routerOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
