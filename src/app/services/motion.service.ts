import { Injectable } from '@angular/core';
import {DeviceMotion, DeviceMotionAccelerationData, } from '@ionic-native/device-motion/ngx'
import {Gyroscope, GyroscopeOrientation, GyroscopeOptions} from '@ionic-native/gyroscope/ngx'
import {Measurepoint} from '../models/Measurepoint'
import { API, graphqlOperation } from 'aws-amplify'
import {createMeasurepoint} from '../../graphql/mutations'
import {CreateMeasurepointInput} from '../../API'
@Injectable({
  providedIn: 'root'
})
export class MotionService {
  options: GyroscopeOptions = {
    frequency: 1000
}
  constructor(public deviceMotion: DeviceMotion, public gyro: Gyroscope) {
  }


  startWatchingGyroscope(){
    console.log('startWatching Gyro');
    
   this.gyro.watch(this.options)
   .subscribe((orientation: GyroscopeOrientation) => {
      console.log("X: " + orientation.x + " Y: " + orientation.y +"Z: " + orientation.z );
      let measurepoint: Measurepoint;
      measurepoint.x = orientation.x;
      measurepoint.y = orientation.y;
      measurepoint.z = orientation.z;
      measurepoint.timestamp = orientation.timestamp;

    
   });

  }

  uploadNewMeasurepoint(){
    console.log('upload new Measupoint');
    // let input: CreateMeasurepointInput = {timestamp: orientation.timestamp.toString(), x:orientation.x, y:orientation.y,z:orientation.z}
   
      
      this.gyro.getCurrent()
        .then((orientation: GyroscopeOrientation) => {
            console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
            var foo = async() => {
              console.log('inner async');

          let input: CreateMeasurepointInput = {timestamp: orientation.timestamp.toString(), x:orientation.x, y:orientation.y,z:orientation.z}
          const gqlAPIServiceArguments: any = {
            input
          };
          console.log(gqlAPIServiceArguments);
          try {
            
            await API.graphql(graphqlOperation(createMeasurepoint, gqlAPIServiceArguments))
              
            console.log('measurepoint successfully created!')
          }catch(err){
            console.log('error creating measurepoint...')
            console.log(err);
            
          }
        }
    
        foo();
        })
        .catch()

       
  }

}
