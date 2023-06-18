import {Component, ViewChild} from '@angular/core';
import links from './nav-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links = links;

  showFiller = false;

 

  logOut(): void {
   
  }
}
