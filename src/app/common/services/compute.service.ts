import { Injectable } from '@angular/core';

@Injectable()
export class ComputeService {

  constructor(private min: number, private max: number) { }

  randomIntFromInterval(){
    return Math.floor(Math.random()*(this.max-this.min+1)+this.max);
  }

}