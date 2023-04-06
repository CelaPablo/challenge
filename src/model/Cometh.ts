import { Entity } from "./Entity";

export class Cometh extends Entity {
    direction: string;

    constructor(row: number, column: number) {
        super(row, column);
    }

    setAttribute(direction: string) {
        this.direction = direction.split("_")[0].toLowerCase();
    }

    async post() {
        let data = { row: this.row, column: this.column, direction: this.direction };
        const url = "comeths";
        return super._post(url, data);
    }
}