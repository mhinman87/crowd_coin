import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-campaign',
  templateUrl: 'campaign.html',
})
export class CampaignPage {

  campaignAddress: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.campaignAddress = this.navParams.get("campaignAddress");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampaignPage');
  }

  navigateToHomePage(){
    this.navCtrl.popToRoot();
  }

  navigateToPage(page){
    this.navCtrl.push(page);
  }

}
