import { Injectable } from '@angular/core';
import { Pagination } from '../Models/pagination';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
pagination: Pagination;
  constructor() {
    this.pagination = new Pagination();
   }
 
  get page(): number {
      return this.pagination.pageIndex;
  }
  get selectItemsPerPage(): number[] {
      return this.pagination.selectItemsPerPage;
  }
  get pageSize(): number {
      return this.pagination.pageSize;
  }

  change(pageEvent: PageEvent) {
      this.pagination.pageIndex = pageEvent.pageIndex + 1;
      this.pagination.pageSize = pageEvent.pageSize;
      this.pagination.allItemsLength = pageEvent.length;
  }
}
