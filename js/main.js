$(document).ready(function() {

    let body = $('body');
    let btn = $('.btn');

    let count = 0;


    $(btn).click(() => {

        count += 1;

        let container = $('<div class="container"></div>');

        // if (count >= 2 && container.hasClass("container")) {
        // container.addClass("open").removeClass("container");
        // }

        // if (count % 2 == 1) {
        //     body.append(container);
        // } else {

        //     $(body).remove(container);

        // }

        let paragraphUserId = $('<p id="Userid"></p>');
        let paragraphId = $('<p id="id"></p>');
        let paragraphTitle = $('<p id="title"></p>');
        let paragraphBody = $('<p id="body"></p>');

        paragraphUserId.appendTo(container);
        paragraphId.appendTo(container);
        paragraphTitle.appendTo(container);
        paragraphBody.appendTo(container);
        container.appendTo(body);

        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        //     .done(function(data) {

        //         paragraphUserId.text('user Id: ' + data.id);
        //         paragraphId.text('Id: ' + data.userId);
        //         paragraphTitle.text('title: ' + data.title);
        //         paragraphBody.text('body: ' + data.body);

        //     })
        //     .fail(function(error) {
        //        alert("Wystąpił błąd w połączeniu");
        //     });

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done((data) => {


                paragraphUserId.text('user Id: ' + data.id);
                paragraphId.text('Id: ' + data.userId);
                paragraphTitle.text('title: ' + data.title);
                paragraphBody.text('body: ' + data.body);
                console.log(data);


            })
            .fail(() => {
                alert("Wystąpił błąd w połączeniu");
            })

    });

    $(document).on('mousemove', function(e) {
        $('.fa-fan').css({
            left: e.pageX,
            top: e.pageY
        });

    });
});