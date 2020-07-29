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
  get toDate(): Date {
    return this.pagination.toDate;
  }
  get fromDate(): Date {
    return this.pagination.fromDate;
  }
  get type(): string {
    return this.pagination.type;
  }
  get selectItemsPerPage(): number[] {
    const total = this.pagination.allItemsLength
    if (total > 100) {
      
      return this.pagination.selectItemsPerPage;
    }
    else {
      const len: number[] = [
        Math.ceil(total / 10),
        Math.ceil(total / 2),
        total]
      return len;
    }
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
