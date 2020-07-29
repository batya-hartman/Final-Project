export class Pagination {
  selectItemsPerPage: number[] = [5, 10, 25, 100];
  pageSize = this.selectItemsPerPage[0];
  pageIndex = 1;
  allItemsLength = 20;
  fromDate:Date=new Date("01/01/0001");
  toDate:Date=new Date(Date.now()) ;
  type:string="";
}