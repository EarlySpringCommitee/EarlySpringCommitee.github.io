window.onload = () => {

    document.querySelectorAll("#welcome .header").forEach(function(node) {
        addClass(node, "inverted")
    });
};

function addClass(obj, cls) {
    var obj_class = obj.className
    var blank = (obj_class != '') ? ' ' : '';
    var added = obj_class + blank + cls;
    obj.className = added;
}

function removeClass(obj, cls) {
    var obj_class = ' ' + obj.className + ' ';
    obj_class = obj_class.replace(/(\s+)/gi, ' ')
    var removed = obj_class.replace(' ' + cls + ' ', ' ');
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');
    obj.className = removed;
}