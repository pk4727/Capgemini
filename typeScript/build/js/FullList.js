import ListItem from './ItemClass';
// FullList is a singleton class that manages a list of ListItem objects.
export default class FullList {
    _list;
    // Singleton instance of FullList
    static instance = new FullList();
    // Internal array holding all list items
    constructor(_list = []) {
        this._list = _list;
    }
    // Getter for accessing the list of items
    get list() {
        return this._list;
    }
    // Load items from localStorage (key: "myList"). If items exist, they are parsed and added to the list.
    load() {
        // Try to get the string stored in localStorage under the key "list". 
        // If nothing is stored, this will return null.
        const storedList = localStorage.getItem("list");
        if (typeof storedList !== "string")
            return; // If there is no saved data (null), just exit the function early.
        const parsedList = JSON.parse(storedList); // Convert the JSON string back into an array of objects & Each object has the same structure: {_id, _item, _checked}.  
        parsedList.forEach((itemObj) => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked); // For each object, create a new ListItem instance & This ensures we are working with class objects, not just plain JSON.  
            FullList.instance.addItem(newListItem); // Add the newly created ListItem into our FullList’s internal list.  
        });
    }
    // Save the current list to localStorage (key: "list").
    saveToLocalStorage() {
        localStorage.setItem("list", JSON.stringify(this._list));
    }
    // Clear the entire list and update localStorage.
    clearList() {
        this._list = [];
        this.saveToLocalStorage();
    }
    // Add a new ListItem to the list. (item - The ListItem to be added)
    addItem(item) {
        this._list.push(item);
    }
    // Remove a ListItem from the list by its id. (id - The unique identifier of the item to remove)
    removeItem(id) {
        this._list = this._list.filter(item => item.id !== id);
        this.saveToLocalStorage();
    }
}
//# sourceMappingURL=FullList.js.map