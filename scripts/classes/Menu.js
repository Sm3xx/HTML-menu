class Menu {
    constructor(title, desc) {
        this.items = [];
        this.id = createUniqueId(this);
        if (title && desc) {
            this.title = title;
            this.desc = desc;
        } else {
            if (!title && !desc) throw new Error("No Title and Description entered!")
            if (!title) throw new Error("No Title entered!");
            if (!desc) throw new Error("No Description entered!");
        }
    }

    open() {
        this.render();
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

    addItem(name, action, data) {
        let item = new MenuItem(name, action, data);
        this.items.push(item);
    }

    addSubMenu(name, desc) {
        let menu = new SubMenu(name, desc, this);
        let item = new MenuItem(this, "SubMenu", menu);
        this.items.push(item);
        return menu;
    }

    getItem(id) {
        for (let key in menu.items) {
            if (menu.items.hasOwnProperty(key)) {
                if (menu.items[key].id == id) {
                    return menu.items[key];
                }
            }
        }
    }
}