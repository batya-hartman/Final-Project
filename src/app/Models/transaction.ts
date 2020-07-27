// export interface transaction{
//     fromAccountId:string,
//     toAccountId:string,
//     amount:number
// }
export class transaction {
    constructor(
        public fromAccountId?: string,
        public toAccountId?: string,
        public amount?: number) {
    }
}