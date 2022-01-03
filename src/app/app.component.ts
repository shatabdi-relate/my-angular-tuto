import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [ 
    //back tick for multiple line in the string/javascript
   `
   h1{
      color:red;
    }
    `
  ]
})
export class AppComponent {
 
}
