import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import factory from '../../../ethereum/factory.js';     


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  campaignAddress: Array<string>;

  constructor(public navCtrl: NavController
              ) {

            
  }

  async ionViewDidEnter(){
    this.campaignAddress = await factory.methods.getDeployedCampaigns().call();

    console.log(this.campaignAddress);
  }


  navigateToPage(page){
    this.navCtrl.push('CampaignPage', {campaignAddress: page});
 
  }

  navigateToCreateCampaign(){
    this.navCtrl.push('CreateCampaignPage');
  }

}
