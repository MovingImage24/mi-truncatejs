var truncator = function(){

    return {
        truncate: truncateText,
        getCssValueAsInteger: getCssValueAsInteger
    };

    function getCssValueAsInteger(selector, cssKey) {
        var value = $(selector).css(cssKey);
        return parseInt(value, 10);
    };

    function cutOffLastWord(text) {
        var omission = ' [...]';
        var delimeterPos = text.lastIndexOf(omission);
        if (delimeterPos > 1) {
            text = text.substr(0, delimeterPos);
        }
        var pos = text.lastIndexOf(' ');
        return text.substr(0, pos) + omission;
    };

    function truncateText(selector, lines) {
        $(selector).each(function(){
            while(getCssValueAsInteger(this, 'height') > lines * getCssValueAsInteger(this, 'line-height')){
                $(this).html(cutOffLastWord($(this).html()));
            }
        });
    };
}()