import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.interface';
import { PostsService } from 'src/app/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(private ps: PostsService, private router:Router) {}

  ngOnInit(): void {
    this.caricaPost();
  }

  cancellaPost(id: string) {
    console.log(id)
    this.ps.delete(id).subscribe(()=>{
        this.caricaPost()
    });
  }

  caricaPost() {
    this.ps.getPosts().subscribe((ris) => {
      this.posts = ris;
    });
  }

  nuovoPost(){
    if(this.posts.length>=100){
        alert('Spazio massimo della pagina raggiunto, eliminare post per aggiungerne di nuovi')
    }
    else{
        this.router.navigate(['/create'])
    }
  }

  guardaPost(id:string){

    this.router.navigate(['/view/:'+id])
  }

}
