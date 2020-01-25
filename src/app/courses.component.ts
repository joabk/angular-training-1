import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summery.pipe';

@Component({
    selector:'courses',
    template:`
    <h3> {{ title }} </h3>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <input (keyup.enter)="onKeyUp($event)" type="text"><br />
    title {{ course.title | uppercase }} <br>
    rating {{ course.rating | number:'1.2-2' }}<br>
    students {{ course.students | number }}<br>
    price {{ course.price | currency:'AUD':true:'3.2-2' }}<br>
    releaseDate {{ course.releaseDate | date:'mediumDate'}}<br>
    <button (click)="onClick($event)" class="btn btn-primary">Button</button>

    <br>
    The text is {{ text | summary:'10'}}
    `
})

export class CoursesComponent{
    title = 'List of courses';
    text = 'Lorem dudhu iuewuf efygajsoih idugiuwegf adluigvjfbv sdgha higiwheof hwoefhw eiaigi ahewo iuaefi sgi hosehof rnehgi gs iwegif gefihawef iwegfiwehf ohewehf heuhfaegfwoei hweofh woe fhweofh wefouweh ';
    course = {
        title: "The complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2020, 1, 19)
    }

    post = {
        title:'Title',
        isFavorite:true
    }

    constructor(private service:CoursesService){

    }
    courses = this.service.getCourses();

    onClick($event){
        $event.stopPropagation();
    }

    onKeyUp($event){
        console.log('enter was hit');
    }
}