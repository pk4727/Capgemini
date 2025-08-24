export interface Item {
    id: string;
    item: string;
    checked: boolean;
}
export default class ListItem implements Item {
    private _id;
    private _item;
    private _checked;
    constructor(_id?: string, // private
    _item?: string, _checked?: boolean);
    get id(): string;
    get item(): string;
    get checked(): boolean;
    set id(id: string);
    set item(item: string);
    set checked(checked: boolean);
}
//# sourceMappingURL=ItemClass.d.ts.map