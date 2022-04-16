import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['../dist/scss/variables.scss'],
})
export class AppComponent {
  title = 'app-todo';
}
