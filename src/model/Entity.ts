import { Api } from "./Api";

export class Entity {
    row: number;
    column: number;
    isEntity: boolean = true;
    API: Api;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
        this.API = new Api();
    }

    async _post(url: string, data: object) {
        return this.API.post(url, data);
    }

    setAttribute(any: string) { }
    async post() { }
}
