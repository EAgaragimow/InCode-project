import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  target: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      const str = this.router.url.match(/\w+$/ig);
      const route = str[0];
      for (let i = 0; i < route.length; i++) {
        if (i === 0) {
          this.target += route[i].toUpperCase();
          i++;
        }
        this.target += route[i];
      }
    }, 0);
  }

  onClick(route, e) {
    this.router.navigate(route, {relativeTo: this.route});
    setTimeout(() => {
      this.target = e.target.parentNode.textContent;
    }, 0);
  }

}
