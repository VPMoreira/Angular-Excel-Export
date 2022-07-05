import { UploadService } from 'src/app/services/upload.service';
import { HttpClient } from '@angular/common/http';
import { StartGridService } from './services/start-grid.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColDef, GridReadyEvent, GridApi } from 'ag-grid-community';
import 'ag-grid-enterprise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any): void {
  }

  @ViewChild('selectedOnly') selected!: ElementRef;

  private gridApi!: GridApi;


  public columnDefs: ColDef[] = [
    { checkboxSelection: true, field: 'id' },
    { field: 'nome' },
    { field: 'usuario' },
    { field: 'email' },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };

  public rowSelection = 'multiple';
  public rowData!: any[];


  constructor(private gridStart: StartGridService, private up: UploadService) { }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api
    this.gridStart.Start(params, this.selected)
  }

  onBtExport() {
    this.gridApi.exportDataAsExcel({
      onlySelected: (this.selected.nativeElement.checked),
      sheetName: 'teste',
      onlySelectedAllPages: true
    });
  }


}