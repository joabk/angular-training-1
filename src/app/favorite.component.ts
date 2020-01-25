import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';



export interface favoriteChangedArgs{
    newValue:boolean;
}

@Component({
    selector:'favorite',
    template:`
    <h2>Better solusions for class binding</h2>
    <!--
    [class.glyphicon-star]="isFavorite" <br> 
    [class.glyphicon-star-empty]="!isFavorite"  <br> 

    [ngClass]="{
        'glyphicon-star': isFavorite,
        'glyphicon-star-empty': !isFavorite
    }"  
    
    -->
    

    <span 
        class="glyphicon"         
        (click)="onClick()"
        

        [ngClass]="{
            'glyphicon-star': isFavorite,
            'glyphicon-star-empty': !isFavorite
        }">
    </span>
        <br />
        


    `
})

export class FavoriteComponent{
   @Input('isFavorite') isFavorite:boolean;
   @Output('change') change = new EventEmitter();
   onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue:this.isFavorite});
   }

   

}