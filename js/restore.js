(function() {
    // This pattern identifies our injected CSS.  If we find any styles in
    // the document that match the pattern, we remove them, hopefully
    // restoring the document to its pre-image-killed state.
    var pattern = /@ImageKill@/;
    var styles = document.getElementsByTagName('style');
    for (var i = 0, style = null; i < styles.length; i++) {
        style = styles[i];
        if (pattern.test(style.innerText)) {
            style.parentElement.removeChild(style);
        }
    }
})();