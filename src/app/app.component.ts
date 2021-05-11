import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    { title: 'Home', fragment: 'home' },
    { title: 'Budget Home', fragment: 'budget' }
  ];

  constructor(public route: ActivatedRoute) {
    console.log(`Route: ${JSON.stringify(route.url)}`)
    
  }

}
