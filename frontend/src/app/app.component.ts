import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Portfolio';
  private isButtonVisible = true;

  constructor() {
    sessionStorage.setItem('modoEditor', 'false');
  }

}
