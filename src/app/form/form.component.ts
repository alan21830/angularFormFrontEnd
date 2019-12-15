import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

 
@Component({
  selector: 'form-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']  
})
export class FormComponent implements OnInit{
  
   
    constructor(private http :HttpClient,  private router : Router){}

    ngOnInit()
    {
      
    }

    addUser(model:NgForm)
    {
     
         this.http.post('http://localhost:8080/postdto',model.value).subscribe((data) => {});
        model.resetForm();
    }
}
