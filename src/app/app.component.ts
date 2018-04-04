import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

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
  ]


  
}
