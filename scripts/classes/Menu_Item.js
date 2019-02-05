class MenuItem {
    constructor(name, submenu) {
        this.id = createUniqueId()
        this.name = name;
        this.element = this.createNewItem();
        this.subToOpen = submenu;
    }

    createNewItem() {
        let item = document.createElement("li");
        let p = document.createElement("p");
        let text = document.createTextNode(this.name)

        p.appendChild(text)

        item.appendChild(p);
        item.id = this.id;

        return item;
    }

    onEnter() {
        if (this.subToOpen) {
            mc.openMenu(this.subToOpen);
        }
    }
}