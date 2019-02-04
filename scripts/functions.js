function createUniqueId(menu) {
    let existingIds = [];
    let id = Math.random().toString(36).substring(7);
    for (let key in menu.items) {
        if (menu.items.hasOwnProperty(key)) {
            existingIds.push(menu.items[key].id);
        }
    }

    if (existingIds.includes(id)) {
        createUniqueId(menu)
    }
    return id;
}