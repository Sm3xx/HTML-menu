var menu = new Menu("Test Menu", "Menu zum testen");

menu.addItem(menu, "Item 1", {script: "test", event: "testevent"}, {test: 1});
menu.addItem(menu, "Item 2", {script: "test", event: "testevent"}, {test: 2});

menu.open();

window.onload = function(e) {
    window.addEventListener('message', function(event) {
      onData(event.data);
    });
  }


document.onkeydown = (e) => {
    const KEYS = {enter: 13, up: 38, down: 40}
    var current = $('#menuContent ul li.active');
    var next;

    switch(e.keyCode) {
        case KEYS.up:
            next = current.prev();
            break;

        case KEYS.down:
            next = current.next();
            break;

        case KEYS.enter: 
            let id = current.attr("id");
            let item = menu.getItem(id);
            item.onEnter();
            return;

        default:
            return;
    }
    
    if (next.length > 0) {
        $('#menuContent ul li').removeClass('active');
        next.addClass('active');
    }
}