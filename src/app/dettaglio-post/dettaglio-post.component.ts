import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrls: ['./dettaglio-post.component.css']
})
export class DettaglioPostComponent implements OnInit {
id:any;
 post:any;
  constructor(private route: ActivatedRoute,
    private router: Router,private http:HttpClient ) {
    
   }
   ngOnInit() {
     this.getPost();
   }

  getPost() {
    this.id = this.route.snapshot.paramMap.get('id');
      this.http.get('http://localhost:8080/findbyidpost/'+this.id).subscribe(response =>{
        this.post=response;
        }, 
        error => {
          console.log(error);
      });
  }

}
