(function() {
    var els = document.getElementsByTagName('img');
    els = Array.prototype.slice.call(els, 0);
    els.forEach(function(el) {
        el.style.display = 'none';
    });
})();
