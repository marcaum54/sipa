(function($)
{
    moment.locale('pt-br');

    $('.mask-number').mask("#0.00", {reverse: true});
    $('.mask-date').mask('00/00/0000');

    $('input.datepicker').datepicker({
        dateFormat: 'dd/mm/yy',
        defaultDate: "+1w",
        language: 'pt-BR',
        defaultDate: new Date()
    })
    .on('change', function () {
        var target = $(this).data('target');

        if ($(this).data('start') && target)
            $(target).datepicker('option', 'minDate', $(this).datepicker('getDate'));

        if ($(this).data('end') && target)
            $(target).datepicker('option', 'maxDate', $(this).datepicker('getDate'));
    })
    .change();
})
(jQuery);