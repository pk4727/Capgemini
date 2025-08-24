// _id = private storage (implementation detail).
// id (getter/setter) = public API (what other code interacts with).
export default class ListItem {
    _id;
    _item;
    _checked;
    constructor(_id = "", // private
    _item = "", _checked = false) {
        this._id = _id;
        this._item = _item;
        this._checked = _checked;
    }
    get id() {
        return this._id;
    }
    get item() {
        return this._item;
    }
    get checked() {
        return this._checked;
    }
    set id(id) {
        this._id = id;
    }
    set item(item) {
        this._item = item;
    }
    set checked(checked) {
        this._checked = checked;
    }
}
const l = new ListItem("1", "ball", true);
console.log(l.id); // "1"   ✅
console.log(l.item); // "ball" ✅
console.log(l.checked); // true  ✅
// l._id ❌ ERROR: private property (cannot be accessed outside)
//# sourceMappingURL=class.js.map