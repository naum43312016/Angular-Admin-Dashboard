import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart(){
    return [
      {
        name: 'Asia',
        data: [55,256,65,84,95,65,654]
      },
      {
        name: 'Europe',
        data: [55,256,65,84,95,65,654]
      },
      {
        name: 'Africa',
        data: [55,256,65,84,95,65,654]
      },
      {
        name: 'America',
        data: [55,256,65,84,95,65,654]
      },
    ];
  }

  cards(){
    return [71,25,68,98];
  }

  pie(){
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Internet Explorer',
      y: 11.84
  }, {
      name: 'Firefox',
      y: 10.85
  }, {
      name: 'Edge',
      y: 4.67
  }, {
      name: 'Safari',
      y: 4.18
  }, {
      name: 'Sogou Explorer',
      y: 1.64
  }, {
      name: 'Opera',
      y: 1.6
  }, {
      name: 'QQ',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }];
  }
}
