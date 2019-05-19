import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {DeviceMotion, DeviceMotionAccelerationData} from '@ionic-native/device-motion/ngx'
import {Gyroscope, GyroscopeOrientation, GyroscopeOptions} from '@ionic-native/gyroscope/ngx'
// import {AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular'


import {MotionService} from '../app/services/motion.service'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Gyroscope,
    DeviceMotion,
    MotionService,

    // AmplifyIonicModule,
    // AmplifyService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
