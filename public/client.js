'use strict'

$(document).ready(function () {
    $('#form').submit((event) => {

        $.ajax({
            url: '/api/lorem',
            type: 'POST',
            data: $('form').serialize(),
            success: data => {
                
            }
        })

        event.preventDefault();
    })
})