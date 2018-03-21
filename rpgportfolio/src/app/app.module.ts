import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {DataService} from "./core/services/data/data.service";
import {LoggerService} from "./core/services/logger/logger.service";
import {AchievementComponent} from "./components/achievement/achievement.component";
import {CampaignComponent} from "./components/campaign/campaign.component";
import {SkillComponent} from "./components/skill/skill.component";

@NgModule({
  declarations: [
    AppComponent,
    AchievementComponent,
    CampaignComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [DataService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
