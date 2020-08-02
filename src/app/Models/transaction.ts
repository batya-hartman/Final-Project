export class transaction {
    constructor(
        public fromAccountId?: string,
        public toAccountId?: string,
        public amount?: number) {
    }
}