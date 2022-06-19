import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data: any = [];
  params: any;
  dataArr: any = [];
  rowData: any = [];
  detailArr: any = [];
  constructor(
    private router: Router
  ) { }

  agInit(params: { value: any; }) {
    this.params = params;
    this.data = params.value;
  }

  ngOnInit() { }

  editRow() {
    this.rowData = this.params;
    let data = this.params.data
    let i = this.rowData.rowIndex;
    console.log(data);


    this.dataArr = localStorage.setItem('edit', JSON.stringify(data));
    this.router.navigate(['/home/'], { queryParams: { id: this.rowData.rowIndex } });
  }


}
