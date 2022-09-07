import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'plastic';

  @HostListener("window:scroll", []) onWindowScroll() {
    console.log(this.router.url);
      this.router.navigate([]);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  scrollTo(value: string) {
    switch (value) {
      case "": {
        this.router.navigate([], {fragment: "title"});
        break;
      }

      case "problem": {
        this.router.navigate([], {fragment: "problem"});
        break;
      }

      case "mission": {
        this.router.navigate([], {fragment: "mission"});
        break;
      }

      case "demo": {
        this.router.navigate([], {fragment: "demo"});
        break;
      }
    }
  }
}
