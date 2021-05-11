import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { title: 'Home', path: 'home' },
    { title: 'Budget Home', path: 'budget' }
  ];

  constructor(public route: ActivatedRoute) {
  }

}
