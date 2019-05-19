import { Component } from '@angular/core';


import { callCordovaPlugin } from '@ionic-native/core/decorators/common';
import {MotionService} from '../services/motion.service'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public motionService:MotionService){
    console.log('Page 1 Constructor');
    
    
  }
  ionViewDidLoad() {
    this.motionService.startWatchingGyroscope();
}

  pushButton(){
    this.motionService.uploadNewMeasurepoint();
    console.log('Button pressed');  

  }
}
