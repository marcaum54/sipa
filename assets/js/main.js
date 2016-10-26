(function($)
{
    INPC = 0;
    SALARIO_MINIMO = 880;

    function calcular_porcentagem(total, valor)
    {
        return parseFloat(valor) * 100 / total;
    }

    function get_valor_porcentagem(total, porcentagem)
    {
        return parseFloat(porcentagem) * total / 100;
    }

    function get_meses_por_ano(ini, fim)
    {
        var aux_ini = ini;
        var months = fim.diff(ini, 'months');
        var months_by_year = new Array();

        for(var i = 0; i <= months; i++)
        {
            if( typeof months_by_year[aux_ini.year()] == 'undefined' )
                months_by_year[aux_ini.year()] = new Array();

            months_by_year[aux_ini.year()].push(moment.months(aux_ini.month()).toLowerCase());

            aux_ini.add(1, 'month');
        }

        return months_by_year;
    }

    $('#calcular').click(function(e)
    {
        e.preventDefault();

        $('.year:visible').remove();

        var ini = moment($('#data-inicial').val(), 'DD-MM-YYYY');
        var fim = moment($('#data-final').val(), 'DD-MM-YYYY');
        var meses_por_ano = get_meses_por_ano(ini, fim);
        var porcentagem_multa = parseFloat($('#percentual-multa'));
        var porcentagem_salario_minimo = parseFloat($('#percentual-salario-minimo'));


        var html = $('.year:hidden').clone()[0].outerHTML.replace('year hidden', 'year');

        var years = new Array();

        for( var i = ini.year(); i <= fim.year(); i++ )
            years.push(i);

        for(var i = 0 in years)
        {
            var year = years[i];

            $('.years').append(html.replace(/_YEAR_/g, year).replace(/_PERCENTUAL_/g, 0));
        }
    });
})
(jQuery)