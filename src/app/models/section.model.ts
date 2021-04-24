export class New {
    public constructor(init?: Partial<New>) {
        Object.assign(this, init);
    }

    title: string = "";
    content: string = "";

}