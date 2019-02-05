import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/**
 * Generated class for the MenuBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-bar',
  templateUrl: 'menu-bar.html'
})
export class MenuBarComponent {

  text: string;

  constructor( public navCtrl: NavController) {
    console.log('Hello MenuBarComponent Component');
    this.text = 'Hello World';
  }

  navigateToHomePage(){
    this.navCtrl.popToRoot();
  }

  navigateToPage(page){
    this.navCtrl.push(page);
  }

}
