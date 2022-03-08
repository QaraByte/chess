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
            $('.can-move').removeClass('can-move');
            $(this).addClass('clicked');
            //console.log($(this).attr('id'));
            $('td').css('background-color', '');
            $(this).css('background-color', 'cadetblue');
            let id = $(this).attr('id');
            console.log(id);
            let figureAttr = $(this).data('figure');
            console.log(figureAttr);
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
                    if (td_id != undefined) {
                        //console.log(td_id);
                        //Если ячейка не равна выбранной ячейке
                        //если x<8, т.е. если координата x меньше конца доски по оси X (столбца 8 не существует, столбец 7 самый последний)
                        //если у фигуры координата Y равна Y ячейки, т.е. они находятся на одной строке 
                        if (td_id[1] != x && figure.x < 8 && td_id[3] == figure.y) {
                            let img = $(tds[i]).find('img'); //Есть ли картинка в ячейке
                            if (img == undefined)
                                if (td_id[1] > figure.x) {
                                    $(tds[i]).addClass('can-move');
                                }
                        }
                        //Если координата Y у выбранной ячейки больше, чем начало доски по оси Y
                        //если координата X у выбранной ячейки равна координате X у ячейке на доске
                        if (figure.y > 0 && td_id[1] == figure.x) {
                            //if (td_id[1] < figure.y) {
                            $(tds[i]).addClass('can-move');
                            //}
                        }
                    }
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