import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the CampaignCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'campaign-card',
  templateUrl: 'campaign-card.html'
})
export class CampaignCardComponent {

  @Input() address: string;

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello CampaignCardComponent Component');
    this.text = 'Hello World';
  }

  navigateToPage(address){
    this.navCtrl.push('CampaignPage', {campaignAddress: address})
  }

}
