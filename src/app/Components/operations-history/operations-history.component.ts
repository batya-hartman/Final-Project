import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { operation } from '../../Models/operation';
import { PaginationService } from '../../Services/pagination.service';
import { OperationService } from '../../Services/operation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-operations-history',
  templateUrl: './operations-history.component.html',
  styleUrls: ['./operations-history.component.css']
})
export class OperationsHistoryComponent implements OnInit {

  constructor(public paginationService: PaginationService,
    private operationService: OperationService,
    private router: Router) { }
  displayedColumns: string[] = ['transactionId', 'isCredit', 'amount', 'balance', 'date'];
  operations: operation[];
  panelOpenState = false;
  dataSource: MatTableDataSource<operation>;
  @Input() totalCount: number;
  @Output() onDeletelocation = new EventEmitter();
  isLoading: boolean = true;
  halfLength: number;
  operationssLength: number;
  pageSizeOptions: [];
  index: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    debugger
    this.operationService.getAll().subscribe(
      succsses => {
        debugger
        this.isLoading = false,

          this.operations = succsses.body.value,
          console.log(this.operations),
          this.dataSource = new MatTableDataSource<operation>(this.operations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        //this.dataSource.paginator = this.paginator,

      },
      err => console.log(err));
  }
  applyFilter(filterValue: string) {
    debugger;
    filterValue = filterValue.trim(); // Remove whitespace    
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches    
    this.dataSource.filter = filterValue;

  }
  onPageSwitch(event: PageEvent) {
    debugger;
    this.paginationService.change(event);
    this.getAllOperations();
  }
  onFilterType(type: string) {
    debugger;
    this.paginationService.pagination.type = type;
    this.getAllOperations();
  }

  onFilterToDate(date: any) {
    debugger;
    this.paginationService.pagination.toDate = date.value;
    this.getAllOperations();
  }
  onFilterFromDate(date: any) {
    debugger;
    this.paginationService.pagination.fromDate = date.value;
    this.getAllOperations();
  }
  getAllOperations() {
    this.operationService.getAll()
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
        this.dataSource = result.body.value;
      });
  }
  getDetails(id: number) {
    //should go to server
  }
  goShowDetails() {
    this.router.navigate(['accountDetails']);
  }
}