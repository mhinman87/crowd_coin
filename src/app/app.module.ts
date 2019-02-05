import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContractsProvider } from '../providers/contracts/contracts';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CampaignCardComponent } from '../components/campaign-card/campaign-card';
import { MenuBarComponent} from '../components/menu-bar/menu-bar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampaignCardComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContractsProvider,
    HttpClientModule
  ]
})
export class AppModule {}
