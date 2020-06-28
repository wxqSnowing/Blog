//插件的写法
;
(function() {
    function Test(opt) {
        this.name = ope.name;
        this.eat = function() {
            console.log('eating');
        }
    }
    Test.prototype = {
        type: 'Chian',
        speak: function() {
            console.log('speak chinese');
        }
    }
    window.Test = Test;
})();