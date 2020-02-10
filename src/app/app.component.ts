import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'World of Beer Craft';
  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

   // this.getConfig();
  }


}


