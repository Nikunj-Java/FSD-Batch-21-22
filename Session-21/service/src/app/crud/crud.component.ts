import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  posts: any[] = [];

  //DI
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    //load posts
    this.loadPosts();
  }


  addPost(): void {
    const newPost = { title: 'New Post', date: 'New Date' };
    this.postService.addPost(newPost).subscribe(()=>{this.loadPosts();});
  }
  loadPosts():void{
    this.postService.getPosts().subscribe(post=>{this.posts=post});
  }

}
