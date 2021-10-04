$(document).ready(function() {

    let body = $('body');
    let btn = $('.btn');

    $(btn).click(() => {

        let container = $('div.container');

        // console.log(container.length);

        if (container.length) {

            container.remove();
            console.log('usuwam');
            btn.text('Pobierz dane');
        } else {
            container = $('<div class="container"></div>');
            btn.text('Next');

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
        }

    });

    $(document).on('mousemove', function(e) {
        $('.fa-fan').css({
            left: e.pageX,
            top: e.pageY
        });

    });
});