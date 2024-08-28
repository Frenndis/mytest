import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        console.log(this.router.getCurrentNavigation()?.extras.state?.['user']);
        console.log(this.router.getCurrentNavigation()?.extras.state?.['id']);

      }
    });
  }

}
