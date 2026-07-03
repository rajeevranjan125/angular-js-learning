import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  template: '<p>hey home component</p>'
})
export class Home {
    protected readonly title = signal("ibm-angular-demo");

}
