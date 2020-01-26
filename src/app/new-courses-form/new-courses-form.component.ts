import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,FormControl } from '@angular/forms';

@Component({
  selector: 'new-courses-form',
  templateUrl: './new-courses-form.component.html',
  styleUrls: ['./new-courses-form.component.css']
})
export class NewCoursesFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topics: HTMLInputElement){
    this.topics.push(new FormControl(topics.value));
    topics.value="";
  }

  removeTopic(topic: FormControl){
    //this.topics.removeAt(topic); //Not applicable
    let index = this.topics.controls.indexOf(topic);
    //this.topics.controls.splice(index,1);//Works
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
}