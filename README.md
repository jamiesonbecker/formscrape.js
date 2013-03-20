formscrape.js
=============

Formscrape is a tiny (18 lines!) jQuery plugin that scrapes an entire HTML form for you and return all the inputs/checkboxes/textareas/radio buttons in a JSON dictionary! No more messing with .val() for each form input, formscrape does it all for you!

Let's say you have a simple sign-up form:

    <form id=myform>
        <label for="name">Name</label>:  <input name=name id=name><br>
        <label for="address">Address</label>:  <input name=address id=address><br>
        <label for="city">City</label>:  <input name=city id=city><br>
        <label for="state">State</label>:  <input name=state id=state><br>
        <label for="zip">Zip</label>:  <input name=zip id=zip><br>
        <label for="email">Email</label>:  <input name=email id=email><br>
        <label for="username">Username</label>:  <input name=username id=username><br>
    </form>

The old way:

    $("#myform").submit(function(e) {
        e.preventDefault();
        var values = {};
        values.name = $("#name").val();
        values.address = $("#address").val();
        values.city = $("#address").val();
        values.state = $("#state").val();
        values.zip = $("#zip").val();
        values.email = $("#email").val();
        values.username = $("#username").val();
        $("#myform").hide()
        // upload or do something with the data
    });

The new way with formscrape!

    $("#myform").submit(function(e) {
        e.preventDefault();
        var values = {};
        $(this).formscrape(values).hide();
        // upload or do something with the data
    });

 
Now, to add fields, you just add them to your HTML -- you don't need to bother adding them to your javascript, too! Id's not required anymore for each and every form input, either, thus keeping your DOM a bit cleaner.

The values object should be initialized before you call formscrape and it will be modified transparently. It can be empty or filled with the prior data which will be updated by whatever the user has entered. This can be useful if you only want to show a field or two while updating a larger hash with more fields -- for example, if you have a separate form for password resets.

The requirements are simply that the form input fields have matching `name`
attributes -- that is, that for this form there must be a `<input name=name>` and
an `<input name=email>`.


Checkboxes and radios will be properly set in the resulting JSON document as regular JSON booleans (true and false).


Related
-------

See [formplode.js](https://github.com/jamiesonbecker/formplode.js) for the reverse of this plugin -- explode the data back into the form before the user edits it.


