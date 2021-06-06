import { Component, OnInit, ViewChild, Input} from '@angular/core';
import {} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() tableData?:any;
  displayedColumns?:any;
  dataSource?: any;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public doFilter = (event: any) => {
    console.log(this.dataSource);
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableData['name'];
    this.dataSource = new MatTableDataSource(this.tableData['data']);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.tableData['data']);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}