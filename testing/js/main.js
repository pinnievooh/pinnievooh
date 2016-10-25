var chars = {'name':'Виталя Гора', 'sp':'холост', 'phone':'+7 (440) 554-32-15', 'mail':'vitalya@gora.ru'};
var ints = ['Музыка', 'Компьютеры', 'Радио'];
//localStorage.clear();
$(document).ready(function(){
    $('#imBtn').addClass('button_blue_white');
    $.each(chars, function(index, value) {
        var l = localStorage[index];
        if (l !== undefined){
            $("#"+index).html(l);
        }
        else {
            var n = localStorage[index] = value;
            $("#"+index).html(n);
        }
    });
    var intsCnt = 3;
    var myInts = "";
    if(localStorage['ints'] === undefined || localStorage['ints'].length === 0 ) {
        for(var i = 0; i < intsCnt; i++) {
            if(ints[i] !== '')
                $('#int').append('<input type="submit" class="btn_int" value=' + ints[i] + '>');
            myInts = ints[i] + '$' + myInts;
        }
        localStorage['ints'] = myInts;
    }
    else {
        var myStr = localStorage['ints'];
        var myArr = myStr.split('$');
        var len = myArr.length;
        for(var i = 0; i < len; i++) {
            if(myArr[i] !== '')
                $('#int').append('<input type="submit" class="btn_int" value=' + myArr[i] + '>');
        }
    }
    
});

$(document).on("click", "span", function() {
    var value = $(this).html();
    var id = $(this).attr("id");
    $('#' + id).css('display','none');
    var value = $(this).html();
    $('#new'+ id).css('display','block').val(value);
    var newvalue = $('#new'+ id).val();
    
    $(document).on("click", 'body', function() {
        
        $(document).mouseup(function() {
            
            if ($(event.target).closest('#new'+ id).length === 0){
                var newvalue = $('#new'+ id).val();
                l = localStorage[id] = newvalue;
                $('#' + id).html(l).css('display','block');
                $('#new'+ id).css('display','none');
            }
        });
    });
});

$(document).on("click", ".btn_int", function() {
    $(this).css("display", "none");
    var s = localStorage['ints'].split('$');
    var key = s.indexOf($(this).val());
    delete s[key];
    localStorage['ints'] = s.join('$');
});


$(document).on("click", "#friendBtn", function() {
    $('#friendBtn').removeClass('button_blue_white').addClass('button_blue_white');
    $('#imBtn').removeClass('button_blue_white').addClass('button_blue');
    $('#im').css('display','none');
    $('#friends').css('display','block');
});
$(document).on("click", "#imBtn", function() {
    $('#imBtn').removeClass('button_blue_white').addClass('button_blue_white');
    $('#friendBtn').removeClass('button_blue_white').addClass('button_blue');
    $('#friends').css('display','none');
    $('#im').css('display','block');
});

$(document).on("click", "#newIntBtn", function() {
    var x = $('#newInt').val();
        if (x === ''){
            alert('Поле не заполнено');
        }
        else {
            $('#int').prepend('<input type="submit" class="btn_int" value=' + x + '>');
            var myInts = "";
            if(localStorage['ints'] === undefined || localStorage['ints'].length === 0 ) {
                localStorage['ints'] = "";
            }
            else {
                var myStr = localStorage['ints'];
                var myArr = myStr.split('$');
                var len = myArr.length;
                myArr.unshift(x);
                localStorage['ints'] = myArr.join('$');
            }
            $('#newInt').val('');
        }
});
