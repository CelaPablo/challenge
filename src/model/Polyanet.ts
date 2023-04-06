import { Entity } from "./Entity";

export class Polyanet extends Entity {
    async post() {
        const data = { row: this.row, column: this.column };
        const url = "polyanets";
        return super._post(url, data);
    }
}