import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd , NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  previousUrl;

  constructor(
    private router:Router
  ) { 
    // router.events
    //     .filter(event => event instanceof NavigationStart).subscribe(e => {
    //     this.previousUrl = e;
    //     console.log(this.previousUrl);
    //   });
  }

  ngOnInit() {
    // this.router.events.pairwise().subscribe((event) => {
    //         console.log(event);
    //     });
  }

}
