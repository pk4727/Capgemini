export interface Item {
    id: string;  // public
    item: string;
    checked: boolean;
}

// _id = private storage (implementation detail).
// id (getter/setter) = public API (what other code interacts with).

export default class ListItem implements Item {
    constructor(
        private _id: string = "", // private
        private _item: string = "",
        private _checked: boolean = false
    ) { }

    get id(): string {
        return this._id;
    }
    get item(): string {
        return this._item;
    }
    get checked(): boolean {
        return this._checked;
    }

    set id(id: string) {
        this._id = id;
    }
    set item(item: string) {
        this._item = item;
    }
    set checked(checked: boolean) {
        this._checked = checked;
    }
}
const l = new ListItem("1", "ball", true);
console.log(l.id);      // "1"   ✅
console.log(l.item);    // "ball" ✅
console.log(l.checked); // true  ✅
// l._id ❌ ERROR: private property (cannot be accessed outside)


