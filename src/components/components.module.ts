import { NgModule } from '@angular/core';
import { CampaignCardComponent } from './campaign-card/campaign-card';
import { MenuBarComponent } from './menu-bar/menu-bar';
@NgModule({
	declarations: [CampaignCardComponent,
    MenuBarComponent],
	imports: [],
	exports: [CampaignCardComponent,
    MenuBarComponent]
})
export class ComponentsModule {}
