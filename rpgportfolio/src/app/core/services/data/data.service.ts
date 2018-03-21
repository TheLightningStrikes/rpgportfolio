import {Injectable} from "@angular/core";
import {Campaign} from "../../classes/campaign";
import {Skill} from "../../classes/skill";
import {Achievement} from "../../classes/achievement";

@Injectable()
export class DataService {
    campaigns: Campaign[] = [];
    skills: Skill[] = [];
    achievement: Achievement[] = [];

    constructor() {
      // dummy
      this.campaigns.push(new Campaign());
      this.achievement.push(new Achievement());
      this.skills.push(new Skill());
    }
}
