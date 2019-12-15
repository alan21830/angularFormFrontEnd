import { Component, OnInit } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;

  constructor(private http :HttpClient){}

ngOnInit()
{
  this.getUser();
}

getUser()
{
  this.http.get('http://localhost:8080/user').subscribe(response =>{
  this.user=response;
  }, 
  error => {
    console.log(error);
});
}

}
