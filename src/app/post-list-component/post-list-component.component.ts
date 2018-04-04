import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent {

  posts=[
    {
     title: "Mon titre 1",
     content: "Sed cautela nimia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ",
     loveIts: 0,
     created_at: new Date()
   } , {
     title: "Mon titre 2",
     content: "Sed cautela nimia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ",
     loveIts: 5,
     created_at: new Date()
   } , {
     title: "Mon titre 3",
     content: "Sed cautela nimia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ",
     loveIts: 0,
     created_at: new Date()
   } ,{
     title: "Mon titre 4",
     content: "Sed cautela nimia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi quivis infudisset ",
     loveIts: 5,
     created_at: new Date()
   } 
 ];
 
}
