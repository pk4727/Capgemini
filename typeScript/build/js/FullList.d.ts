import ListItem from './ItemClass';
export interface List {
    list: ListItem[];
    load(): void;
    saveToLocalStorage(): void;
    clearList(): void;
    addItem(item: ListItem): void;
    removeItem(id: string): void;
}
export default class FullList implements List {
    private _list;
    static instance: FullList;
    constructor(_list?: ListItem[]);
    get list(): ListItem[];
    load(): void;
    saveToLocalStorage(): void;
    clearList(): void;
    addItem(item: ListItem): void;
    removeItem(id: string): void;
}
//# sourceMappingURL=FullList.d.ts.map