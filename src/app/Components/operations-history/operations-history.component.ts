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
  single=false;
  selected:operation;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.operationService.getAll().subscribe(
      succsses => {
          this.isLoading = false,
          this.operations = succsses.body.value,
          console.log(this.operations),
          this.dataSource = new MatTableDataSource<operation>(this.operations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => console.log(err));
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace    
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches    
    this.dataSource.filter = filterValue;

  }
  onPageSwitch(event: PageEvent) {
    this.paginationService.change(event);
    this.getAllOperations();
  }
  onFilterType(type: string) {
    this.paginationService.pagination.type = type;
   // this.getAllOperations();
  }

  onFilterToDate(date: any) {    
    this.paginationService.pagination.toDate = date.value;
    //this.getAllOperations();
  }
  onFilterFromDate(date: any) {
    this.paginationService.pagination.fromDate = date.value;
   // this.getAllOperations();
  }
  getAllOperations() {
    this.operationService.getAll()
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
        this.dataSource = result.body.value;
      });
  }
  getDetails(id: number) {
     this.operationService.getSingle(id).subscribe(
      (succsess:any)=>       
       {
          this.single=true;
          this.selected=succsess.body.value
       }
     )
  }
  goShowDetails() {
    this.router.navigate(['accountDetails']);
  }
}