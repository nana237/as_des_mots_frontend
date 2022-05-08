import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  toTabFormdata(tabdata): FormData[]{
    const tabuploaddata =[];
    tabdata.forEach(data => {
      console.log(data)
    const uploaddata = new FormData();
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if(key != 'id'){
            const val = data[key];
            uploaddata.append(key,val);
          }
        }
      }
      tabuploaddata.push(uploaddata);
    });
    console.log(tabuploaddata)
    return tabuploaddata;
  }

  toFormdata(data): FormData{
      console.log(data)
    const uploaddata = new FormData();
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const val = data[key];
          uploaddata.append(key,val);
        }
      }
    console.log(uploaddata);
    return uploaddata;
  }

}
