import { Space } from "./Space";
import { Soloon } from "./Soloon";
import { Cometh } from "./Cometh";
import { Entity } from "./Entity";
import { Polyanet } from "./Polyanet";

export class EntityFactory {
    createEntity(type: string, row: number, column: number): Entity {
        switch (type) {
            case "SPACE":
                return new Space(row, column);

            case "BLUE_SOLOON":
            case "RED_SOLOON":
            case "PURPLE_SOLOON":
            case "WHITE_SOLOON":
                return new Soloon(row, column);

            case "UP_COMETH":
            case "DOWN_COMETH":
            case "RIGHT_COMETH":
            case "LEFT_COMETH":
                return new Cometh(row, column);

            case "POLYANET":
                return new Polyanet(row, column);

            default:
                throw new Error("Invalid entity type.");
        }
    }
}