import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd , NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-sa-dashboard',
  templateUrl: './sa-dashboard.component.html',
  styleUrls: ['./sa-dashboard.component.css']
})
export class SaDashboardComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
      // this.router.events.pairwise().subscribe((event) => {
      //       console.log(event);
      //   });
  }

}
