window.onload = function(e) {
    window.addEventListener('message', function(event) {
      onData(event.data);
    });
  }


document.onkeydown = (e) => {
    const KEYS = {enter: 13, up: 38, down: 40, backspace: 8}
    var current = $('#menuContent ul li.active');
    var next;
    let id = current.attr("id");
    let item = mc.getSelectedItem();

    switch(e.keyCode) {
        case KEYS.up:
            next = current.prev();
            break;

        case KEYS.down:
            next = current.next();
            break;

        case KEYS.enter: 
            item.onEnter();
            return;

        case KEYS.backspace:
            mc.navBack();
            return;

        default:
            return;
    }
    
    if (next.length > 0) {
        $('#menuContent ul li').removeClass('active');
        next.addClass('active');
    }
}