import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test-error',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  baseurl = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErrors?: string[];

  get404Error(){
    this.http.get(this.baseurl+'buggy/notfound').subscribe({
      next: respone => console.log(respone),
      error: error => console.error(error)
      
    });
  }

  get400Error(){
    this.http.get(this.baseurl+'buggy/badrequest').subscribe({
      next: respone => console.log(respone),
      error: error => console.error(error)
      
    });
  }

  get401Error(){
    this.http.get(this.baseurl+'buggy/unauthorized').subscribe({
      next: respone => console.log(respone),
      error: error => console.error(error)
      
    });
  }

  get500Error(){
    this.http.get(this.baseurl+'buggy/internalerror').subscribe({
      next: respone => console.log(respone),
      error: error => console.error(error)
      
    });
  }

  get400ValidationError(){
    this.http.post(this.baseurl+'buggy/validationerror',{}).subscribe({
      next: respone => console.log(respone),
      error: error => this.validationErrors = error
      
    });
  }
}
