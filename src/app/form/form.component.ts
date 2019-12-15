import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

 
@Component({
  selector: 'form-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']  
})
export class FormComponent implements OnInit{
  post:any;
  retVal:any;

    constructor(private http :HttpClient,  private router : Router){}

    ngOnInit()
    {
      
    }

    addUser(model:NgForm)
    {
         this.http.post('http://localhost:8080/postdto',model.value).subscribe((data) => { this.retVal=data});
         this.router.navigate(['/DettaglioPost/'+this.retVal.id]);
    }
}
