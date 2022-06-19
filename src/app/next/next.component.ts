import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']

})
export class NextComponent implements OnInit {

  columnDefs = [
    { headerName: 'name', field: 'name', editable: true, sortable: true },
    { headerName: 'age', field: 'age', editable: true, sortable: true },
    { headerName: 'address', field: 'address', editable: true, sortable: true },
    { headerName: 'mobile', field: 'mobile', editable: true, sortable: true },
    { headerName: 'Actions', field: 'action', cellRendererFramework: EditComponent }
  ];

  rowData = [];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true
  };

  public rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  getArray: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.rowData = JSON.parse(localStorage.getItem("data")!);
    this.rowData.push()
  }
}
