import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private API_BASE_URL = 'http://localhost:8000/Users';

  constructor(private http: HttpClient) { }

  upload(formData: any) {
    let teste = {
      "Content-type": "application/json"
    }
    return this.http.post<any>(this.API_BASE_URL, formData, { headers: teste })
  }

  

  
}
