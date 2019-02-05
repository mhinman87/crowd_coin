import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import factory from '../../../ethereum/factory.js';
import web3 from '../../../ethereum/web3.js'; 
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-create-campaign', 
  templateUrl: 'create-campaign.html',
})
export class CreateCampaignPage {

  minContrib: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCampaignPage');
  }

  async createCampaign(min: number){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createCampaign(min).send({
        from: accounts[0]
      });

      this.navCtrl.popToRoot();
    } catch(e){
      console.error(e);
    }

    loading.dismiss();

   
  }

  navigateToHomePage(){
    this.navCtrl.popToRoot();
  }

  navigateToPage(page){
    this.navCtrl.push(page);
  }


  

}
