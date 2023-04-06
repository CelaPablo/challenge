import { Api } from "./model/Api";
import { EntityFactory } from "./model/Factory";

async function main(): Promise<void> {
    const API = new Api();
    const factory = new EntityFactory();
    
    const { goal } = await API.getGoal();
    const length = goal.length;

    console.log("Challenge init ...");

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            const astralObject = goal[i][j];
            const entity = factory.createEntity(astralObject, i, j);
            if (entity.isEntity) {
                entity.setAttribute(astralObject);
                await entity.post();
            }
        }
    }

    console.log("Done!");
}

main();