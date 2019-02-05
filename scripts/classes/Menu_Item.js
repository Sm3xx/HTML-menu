class MenuItem {
    constructor(menu, name, action, data) {
        this.parentMenu = menu;
        this.id = createUniqueId(menu)
        this.name = name;
        this.action = action;
        this.data = data;
        this.element;
        this.createNewItem()
    }

    createNewItem() {
        let item = document.createElement("li");
        let p = document.createElement("p");
        let text = document.createTextNode(this.name)

        p.appendChild(text)

        item.appendChild(p);
        item.id = this.id;
        // this.appendItem(item)

        if (this.parentMenu.items.length < 1) {
            item.className = "active";
        }

        this.element = item;
    }

    appendItem(item) {
        $("#menuContent ul").append(item)
    }

    onEnter() {
        if (typeof(this.action) == "object") {
            this.action.open();
        } else {
            this.sendPost(this.action.script, this.action.event, this.data)
        }
    }

    sendPost (script, event, data) {
        let url = `http://${script}/${event}`;
        $.post(url, JSON.stringify({
            data:   data
        }));
    }
}