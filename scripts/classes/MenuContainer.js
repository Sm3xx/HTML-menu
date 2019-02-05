const mc = {
    menus: {},
    currentMenu: undefined,

    openMenu: function (menu) {
        this.menus[menu].open();
        this.currentMenu = menu;
    },

    navBack: function() {
        if (this.menus[this.currentMenu].prev) {
            let prevMenu = this.menus[this.currentMenu].prev;
            this.openMenu(prevMenu);
        }
    },

    addMenu: function(name, obj) {
        this.menus[name] = obj;
    },

    getSelectedItem: function() {
        let menu = this.menus[this.currentMenu];
        return menu.getSelectedItem();
    }
}