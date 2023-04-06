import { Api } from "./Api";

export class Space {
    row: number;
    column: number;
    isEntity: boolean = false;
    API: Api;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    async post() { }
    async _post() { }
    setAttribute(any: string) { }
}