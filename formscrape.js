// formscrape.js
// https://github.com/jamiesonbecker/formscrape.js
// Copyright (c) 2013 Jamieson Becker (MIT)

$.fn.formscrape = function(data) {
    var form = this;
    // wipe checkboxes and radio buttons from current data
    $("[type=checkbox], [type=radio]", this).each(function() {
        var name = $(this).attr("name");
        delete data[name];
    });
    $.each($(form).serializeArray(), function(i, field) {
        data[field.name] = field.value;
    });
    // fixup checkboxes
    $("[type=checkbox]", this).each(function() {
        var name = $(this).attr("name");
        // convert "checked" to true/false
        data[name] = name in data;
    });
    return form;
}
