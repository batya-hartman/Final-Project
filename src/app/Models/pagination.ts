export class Pagination {
  selectItemsPerPage: number[] = [5, 10, 25, 100];
  pageSize = this.selectItemsPerPage[0];
  pageIndex = 1;
  allItemsLength = 20;
  fromDate:Date;
  toDate:Date;
  type:string="";
}