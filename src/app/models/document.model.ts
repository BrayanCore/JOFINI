import { New } from "./section.model";

export class Documento {
    public constructor(init?: Partial<Documento>) {
        Object.assign(this, init);
    }

    id: string = '';
    new: New = new New();

}