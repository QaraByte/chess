$(document).ready(function() {
    //$('#a8').text('11');

    // let chess_desk = [
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0,
    // ];

    $("td").click(function() {
        let img = $(this).find('img');
        if (img.length > 0) {
            $('.clicked').removeClass('clicked');
            $(this).addClass('clicked');
            //console.log($(this).attr('id'));
            $('td').css('background-color', '');
            $(this).css('background-color', 'cadetblue');
            let id = $(this).attr('id');
            console.log(id);
            let figureAttr = $(this).data('figure');
            console.log(figure);
            if (figureAttr == 'rook-white') {
                let x = id[1];
                let y = id[3];
                console.log('x=' + x + ' y=' + y);
                let figure = {};
                figure.x = x;
                figure.y = y;
                let tds = $('td');
                for (let i = 0; i < tds.length; i++) {
                    let td_id = $(tds[i]).attr('id');
                    console.log(td_id);
                }

            } else if (figureAttr == 'knight-white') {
                let x = id[1];
                let y = id[3];
                console.log('x=' + x + ' y=' + y);
                let figure = {};
                figure.x = x;
                figure.y = y;
            }
        }
    });
});