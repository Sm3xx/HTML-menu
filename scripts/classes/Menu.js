class Menu {
    constructor(title, desc, short) {
        this.short = short;
        this.items = [];
        this.id = createUniqueId(this);
        this.title = title;
        this.desc = desc;
    }

    open() {
        this.render();
        this.setFirstItemActive();
        $(`#${this.id}`).show();
    }

    close() {
        $('#menuContainer').html("");
    }

    render() {
        let html = `<div id="${this.id}" class="menu" style="display: none"> <div id="menuHeader"><h1 id="header">${this.title}</h1></div><div id="shortDescription"><p id="desc">${this.desc}</p></div><div id="menuContent"><ul></ul></div></div>`;
        $('#menuContainer').html(html);

        this.items.forEach(item => {
            $("#menuContent ul").append(item.element);
        });
    }

    addItem(name) {
        let item = new MenuItem(name, null);
        this.items.push(item);
    }

    addSubMenu(itemName, menuName, desc, short ,prevMenu) {
        let sub = new Menu(menuName, desc, short);
        sub.prev = prevMenu;
        let item = new MenuItem(itemName, short);
        this.items.push(item);
        mc.addMenu(short, sub);
        return sub;
    }

    setFirstItemActive() {
        let items = this.items;
        for (let i=0; i<items.length; i++) {
            items[i].element.className = "";
        }
        items[0].element.className = "active";
    }

    getSelectedItem() {
        for (let i=0; i<this.items.length; i++) {
            let item = this.items[i];
            if (item.element.className === "active") {
                return item;
            }
        }
    }
}