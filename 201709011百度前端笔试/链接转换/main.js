function link() {
    var container = document.getElementById('jsContainer');
    var text = container.innerText;
    var reg = /(https:\/\/|http:\/\/)?www[\w\.=\?\/]*/g;
    var newText = text.replace(reg, function (match) {
        if (match.charAt(0) == 'w') {
            var a = '<a href="http://' + match + '" target="_blank">' + match + '</a>';
        } else {
            var a = '<a href="' + match + '" target="_blank">' + match + '</a>';
        }

        return a;
    });
    container.innerHTML = newText;
}
window.onload = link;