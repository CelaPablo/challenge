import { Entity } from "./Entity";

export class Soloon extends Entity {
    color: string;

    constructor(row: number, column: number) {
        super(row, column);
    }

    setAttribute(color: string) {
        this.color = color.split("_")[0].toLowerCase();
    }

    async post() {
        let data = { row: this.row, column: this.column, color: this.color };
        const url = "soloons";
        return super._post(url, data);
    }
}