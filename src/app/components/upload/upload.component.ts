import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  private API_BASE_URL = 'http://localhost:8000/Users';

  fileName = '';

  constructor(private upload: UploadService, private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  load() {
    (sessionStorage['refresh'] == 'true' || !sessionStorage['refresh']) && location.reload();
    sessionStorage['refresh'] = false;
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file)
    fileReader.onload = () => {
      let result = fileReader.result;
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("file", file, file.name);
      const myJSON = JSON.stringify(result)
      console.log(myJSON)
      const myParse = JSON.parse(myJSON)
      this.upload.upload(myParse).subscribe(
        response => {
          console.log(response);
        }
        );
        fileReader.onerror = (error) => {
          console.log(error);
        }
        this.load();
    }
  }


}
