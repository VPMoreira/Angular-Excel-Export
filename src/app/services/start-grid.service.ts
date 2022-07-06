import { Injectable, ElementRef } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartGridService {
  constructor(private http: HttpClient) { }

  Start(params: GridReadyEvent, element: ElementRef) {
    element.nativeElement.checked = true;
    this.http.get<any[]>(
      "http://localhost:3000/Users").subscribe((data) =>
        params.api!.setRowData(data.filter((rec: any) => rec.nome != null))
      );
  }
}
