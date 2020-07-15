(function() {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.url = "http://code.jquery.com/jquery-1.7.2.min.js";
    var node = document.getElementsByName('script')[0];
    node.insertBefore(script, node);
})()