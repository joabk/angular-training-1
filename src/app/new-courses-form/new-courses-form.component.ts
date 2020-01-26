import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'new-courses-form',
  templateUrl: './new-courses-form.component.html',
  styleUrls: ['./new-courses-form.component.css']
})
export class NewCoursesFormComponent implements OnInit {

  constructor(fb:FormBuilder) { 
    this.form = fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics:fb.array([])
    })
  }

  ngOnInit() {
  }
/*
//Shorter approach on the constructor/
  form = new FormGroup({
    name: new FormControl(''),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  })
  */

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