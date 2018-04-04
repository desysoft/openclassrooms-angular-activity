import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
 
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLoveIts: number;


  
  constructor() { }

  ngOnInit() {
  }

  

  

  increaseLove(){
    console.log('before increaseLove ==== '+this.postLoveIts);
    this.postLoveIts++;
    console.log('after increaseLove ==== '+this.postLoveIts);
  }

  decreaseLove(){
    console.log('before decreaseLove ==== '+this.postLoveIts);
    this.postLoveIts--;
    console.log('after increaseLove ==== '+this.postLoveIts);
  }

}
