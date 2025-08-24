import ListItem from './ItemClass'

// List interface defines the contract for managing a collection of ListItem objects.
// Any class implementing this must provide methods for loading, saving, clearing,
// adding, and removing items from the list.
export interface List {
    list: ListItem[],
    load(): void,
    saveToLocalStorage(): void,
    clearList(): void,
    addItem(item: ListItem): void,
    removeItem(id: string): void
}

// FullList is a singleton class that manages a list of ListItem objects.
export default class FullList implements List {

    // Singleton instance of FullList
    static instance: FullList = new FullList()

    // Internal array holding all list items
    constructor(
        private _list: ListItem[] = []
    ) { }

    // Getter for accessing the list of items
    get list(): ListItem[] {
        return this._list
    }

    // Load items from localStorage (key: "myList"). If items exist, they are parsed and added to the list.
    load(): void {
        // Try to get the string stored in localStorage under the key "list". 
        // If nothing is stored, this will return null.
        const storedList: string | null = localStorage.getItem("list")
        if (typeof storedList !== "string") return // If there is no saved data (null), just exit the function early.

        const parsedList: { _id: string, _item: string, _checked: boolean }[]
            = JSON.parse(storedList) // Convert the JSON string back into an array of objects & Each object has the same structure: {_id, _item, _checked}.  

        parsedList.forEach((itemObj) => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)  // For each object, create a new ListItem instance & This ensures we are working with class objects, not just plain JSON.  
            FullList.instance.addItem(newListItem)  // Add the newly created ListItem into our FullList’s internal list.  
        })
    }

    // Save the current list to localStorage (key: "list").
    saveToLocalStorage(): void {
        localStorage.setItem("list", JSON.stringify(this._list))
    }

    // Clear the entire list and update localStorage.
    clearList(): void {
        this._list = []
        this.saveToLocalStorage()
    }

    // Add a new ListItem to the list. (item - The ListItem to be added)
    addItem(item: ListItem): void {
        this._list.push(item)
    }

    // Remove a ListItem from the list by its id. (id - The unique identifier of the item to remove)
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.saveToLocalStorage()
    }
}