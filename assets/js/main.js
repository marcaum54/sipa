(function($)
{
    INPCS = {
        '1994': new Array(41.32, 40.57, 43.08, 42.86, 42.73, 48.24, 7.75, 1.85, 1.40, 2.82, 2.96, 1.70),
        '1995': new Array(1.44, 1.01, 1.62, 2.49, 2.10, 2.18, 2.46, 1.02, 1.17, 1.40, 1.51, 1.65),
        '1996': new Array(1.46, 0.71, 0.29, 0.93, 1.28, 1.33, 1.20, 0.50, 0.02, 0.38, 0.34, 0.33),
        '1997': new Array(0.81, 0.45, 0.68, 0.60, 0.11, 0.35, 0.18, -0.03, 0.10, 0.29, 0.15, 0.57),
        '1998': new Array(0.85, 0.54, 0.49, 0.45, 0.72, 0.15, -0.28, -0.49, -0.31, 0.11, -0.18, 0.42),
        '1999': new Array(0.65, 1.29, 1.28, 0.47, 0.05, 0.07, 0.74, 0.55, 0.39, 0.96, 0.94, 0.74),
        '2000': new Array(0.61, 0.05, 0.13, 0.09, -0.05, 0.30, 1.39, 1.21, 0.43, 0.16, 0.29, 0.55),
        '2001': new Array(0.77, 0.49, 0.48, 0.84, 0.57, 0.60, 1.11, 0.79, 0.44, 0.94, 1.29, 0.74),
        '2002': new Array(1.07, 0.31, 0.62, 0.68, 0.09, 0.61, 1.15, 0.86, 0.83, 1.57, 3.39, 2.70),
        '2003': new Array(2.47, 1.46, 1.37, 1.38, 0.99, -0.06, 0.04, 0.18, 0.82, 0.39, 0.37, 0.54),
        '2004': new Array(0.83, 0.39, 0.57, 0.41, 0.40, 0.50, 0.73, 0.50, 0.17, 0.17, 0.44, 0.86),
        '2005': new Array(0.57, 0.44, 0.73, 0.91, 0.70, -0.11, 0.03, 0, 0.15, 0.58, 0.54, 0.40),
        '2006': new Array(0.38, 0.23, 0.27, 0.12, 0.13, -0.07, 0.11, -0.02, 0.16, 0.43, 0.42, 0.62),
        '2007': new Array(0.49, 0.42, 0.44, 0.26, 0.26, 0.31, 0.32, 0.59, 0.25, 0.30, 0.43, 0.97),
        '2008': new Array(0.69, 0.48, 0.51, 0.64, 0.96, 0.91, 0.58, 0.21, 0.15, 0.50, 0.38, 0.29),
        '2009': new Array(0.64, 0.31, 0.20, 0.55, 0.60, 0.42, 0.23, 0.08, 0.16, 0.24, 0.37, 0.24),
        '2010': new Array(0.88, 0.70, 0.71, 0.73, 0.43, -0.11, -0.07, -0.07, 0.54, 0.92, 1.03, 0.60),
        '2011': new Array(0.94, 0.54, 0.66, 0.72, 0.57, 0.22, 0, 0.42, 0.45, 0.32, 0.57, 0.51),
        '2012': new Array(0.51, 0.39, 0.18, 0.64, 0.55, 0.26, 0.43, 0.45, 0.63, 0.71, 0.54, 0.74),
        '2013': new Array(0.92, 0.52, 0.60, 0.59, 0.35, 0.28, -0.13, 0.16, 0.27, 0.61, 0.54, 0.72),
        '2014': new Array(0.63, 0.64, 0.82, 0.78, 0.60, 0.26, 0.13, 0.18, 0.49, 0.38, 0.53, 0.62),
        '2015': new Array(1.48, 1.16, 1.51, 0.71, 0.99, 0.77, 0.58, 0.25, 0.51, 0.77, 1.11, 0.00),
        '2016': new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
        '2017': new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
        '2018': new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
        '2019': new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    };

    SALARIOS_MINIMOS = {
        '2016': 880,
        '2015': 788,
        '2014': 724,
        '2013': 678,
        '2012': 622,
        '2011': 545,
        '2010': 510,
        '2009': 465,
        '2008': 415,
        '2007': 380,
        '2006': 350,
        '2005': 300,
        '2004': 260,
        '2003': 240,
        '2002': 200,
        '2001': 180,
        '2000': 151,
        '1999': 136,
        '1998': 130,
        '1997': 120,
        '1996': 112,
        '1995': 100,
        '1994': 70,
        '1993': 64.79,
    };

    SALARIO_MINIMO = SALARIOS_MINIMOS[moment().year()];

    function is_valid()
    {
        var is_valid = true;

        if( ! $('#data-inicial').val() )
        {
            $('#data-inicial').parents('.form-group').addClass('has-error');
            is_valid = false;
        }

        if( ! $('#data-final').val() )
        {
            $('#data-final').parents('.form-group').addClass('has-error');
            is_valid = false;
        }

        if( ! $('#percentual-salario-minimo').val() )
        {
            $('#percentual-salario-minimo').parents('.form-group').addClass('has-error');
            is_valid = false;
        }

        return is_valid;
    }

    function reset_masks()
    {
        $('.mask-money').mask('0.000.000,00', {reverse: true});
    }

    reset_masks();

    function presenter_money(value, hasPrefix)
    {
        var prefix = typeof hasPrefix === 'undefined' || hasPrefix === true ? 'R$ ': '';

        return prefix +  value.toFixed(2).replace('.', ',').replace(/./g, function(c, i, a)
        {
            return i && c !== "," && ((a.length - i) % 3 === 0) ? '.' + c : c;
        });
    }

    function sanitizer_money(value)
    {
        return parseFloat(value.replace('R$ ', '').replace('.', '').replace(',', '.'));
    }

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

            months_by_year[aux_ini.year()].push(moment.months(aux_ini.month()));

            aux_ini.add(1, 'month');
        }

        return months_by_year;
    }

    function get_somatorio_total_percentual_calculado()
    {
        var total = 0;

        $('table:visible .percentual-calculado .total').each(function()
        {
            total += sanitizer_money($(this).html()) || 0;
        });

        return total;
    }

    function get_somatorio_total_pago()
    {
        var total = 0;

        $('table:visible .meses-pagos .total').each(function()
        {
            total += sanitizer_money($(this).html()) || 0;
        });

        return total;
    }

    function get_somatorio_total_inpc()
    {
        var total = 0;

        $('table:visible .inpc .total').each(function()
        {
            total += sanitizer_money($(this).html()) || 0;
        });

        return total;
    }

    function calcular_total()
    {
        return get_somatorio_total_percentual_calculado() - get_somatorio_total_pago();
    }

    function calcular_total_inpc()
    {
        return get_somatorio_total_inpc() - get_somatorio_total_pago();
    }

    function calcular_inpc(valor, taxa_correcao)
    {
        return valor + (valor * (taxa_correcao / 100));
    }

    function calcular_total_multa()
    {
        var total = calcular_total();
        var porcentagem = parseFloat($('#percentual-multa').val()) || 0;

        return get_valor_porcentagem(total, porcentagem);
    }

    function calcular_total_multa_inpc()
    {
        var total = calcular_total_inpc();
        var porcentagem = parseFloat($('#percentual-multa').val()) || 0;

        return get_valor_porcentagem(total, porcentagem);
    }

    function calcular_total_geral()
    {
        return calcular_total() - calcular_total_multa();
    }

    function calcular_total_geral_inpc()
    {
        return calcular_total_inpc() - calcular_total_multa();
    }

    function atualizar_totais()
    {
        $('table:visible .total').each(function()
        {
            var total_field = $(this);

            $(this).parents('.percentual-calculado').each(function()
            {
                var total = 0;

                $(this).find('.mes').each(function()
                {
                    total += parseFloat($(this).html().replace('R$ ', '')) || 0;
                });

                total_field.html(presenter_money(total));
            });

            $(this).parents('.meses-pagos').each(function()
            {
                var total = 0;

                $(this).find('input[type=text]').each(function()
                {
                    total += sanitizer_money($(this).val()) || 0;
                });

                total_field.html(presenter_money(total));
            });

            $(this).parents('.inpc').each(function()
            {
                var total = 0;

                $(this).find('.mes').each(function()
                {
                    var value = $(this).find('.value').html();

                    if(typeof value !== 'undefined')
                        total += parseFloat(value.replace('R$ ', '')) || 0;
                });

                total_field.html(presenter_money(total));
            });
        });

        $('#total').html(presenter_money(calcular_total()));
        $('#total-da-multa').html(presenter_money(calcular_total_multa()));
        $('#total-geral').html(presenter_money(calcular_total_geral()));

        $('#total-inpc').html(presenter_money(calcular_total_inpc()));
        $('#total-da-multa-com-inpc').html(presenter_money(calcular_total_multa_inpc()));
        $('#total-geral-com-inpc').html(presenter_money(calcular_total_geral_inpc()));
    }

    function create_and_feed_tables()
    {
        var ini = moment($('#data-inicial').val(), 'DD-MM-YYYY');
        var fim = moment($('#data-final').val(), 'DD-MM-YYYY');
        var meses_por_ano = get_meses_por_ano(ini, fim);
        var porcentagem_salario_minimo = parseFloat($('#percentual-salario-minimo').val()) || 0;

        if(porcentagem_salario_minimo)
            porcentagem_salario_minimo = get_valor_porcentagem(SALARIO_MINIMO, porcentagem_salario_minimo);

        var html = $('.year:hidden').clone()[0].outerHTML.replace('year hidden', 'year');

        for(var ano in meses_por_ano)
        {
            $('.years').append(html.replace(/_YEAR_/g, ano).replace(/_PERCENTUAL_/g, 0));

            var meses = meses_por_ano[ano];
            var table = $('#'+ ano);

            if(porcentagem_salario_minimo)
            {
                for(var i in meses)
                {
                    var inpc = INPCS[ano][moment.months().indexOf(meses[i])];
                    var calculo_inpc = calcular_inpc(porcentagem_salario_minimo, inpc);

                    table.find('.percentual-calculado .mes.'+ meses[i]).html(presenter_money(porcentagem_salario_minimo));
                    table.find('.inpc .mes.'+ meses[i]).html('<small>('+ inpc +'%)</small><div class="value">'+ presenter_money(calculo_inpc) +'</div>');
                }
            }
        }
    }

    $(document).on('blur', 'table:visible input[type=text]', function()
    {
        atualizar_totais();
    });

    $('#calcular').click(function()
    {
        if( is_valid() )
        {
            $('#resultado').removeClass('hidden');
            $('.year:visible').remove();

            create_and_feed_tables();
            atualizar_totais();
            reset_masks();
        }
    });

    $('#calcular-porcentagem').click(function()
    {
        var parent = $(this).parents('tr');

        var porcentagem = parent.find('.form-control:eq(0)').val();
        var valor = sanitizer_money(parent.find('.form-control:eq(1)').val());

        var resultado = get_valor_porcentagem(valor, porcentagem) || 0;

        parent.find('input[readonly]').val(presenter_money(resultado, false));
    });

    $('.calcular-valor-porcentagem').click(function()
    {
        var parent = $(this).parents('tr');

        var valor_1 = sanitizer_money(parent.find('.form-control:eq(0)').val());
        var valor_2 = sanitizer_money(parent.find('.form-control:eq(1)').val());

        var resultado = calcular_porcentagem(valor_2, valor_1) || 0;

        parent.find('input[readonly]').val(resultado);
    });

    $('#valor-aumentou').click(function()
    {
        var parent = $(this).parents('tr');

        var valor_1 = sanitizer_money(parent.find('.form-control:eq(0)').val());
        var valor_2 = sanitizer_money(parent.find('.form-control:eq(1)').val());

        var diff = valor_2 - valor_1;
        console.debug(diff);

        var resultado = calcular_porcentagem(valor_1, diff) || 0;

        parent.find('input[readonly]').val(resultado);
    });

    $('#valor-diminuiu').click(function()
    {
        var parent = $(this).parents('tr');

        var valor_1 = sanitizer_money(parent.find('.form-control:eq(0)').val());
        var valor_2 = sanitizer_money(parent.find('.form-control:eq(1)').val());

        var diff = valor_1 - valor_2;

        var resultado = calcular_porcentagem(valor_1, diff) || 0;

        parent.find('input[readonly]').val(resultado);
    });

    $('#valor-aumentar').click(function()
    {
        var parent = $(this).parents('tr');

        var valor = sanitizer_money(parent.find('.form-control:eq(0)').val());
        var porcentagem = parent.find('.form-control:eq(1)').val();

        var resultado = valor + get_valor_porcentagem(valor, porcentagem) || 0;

        parent.find('input[readonly]').val(presenter_money(resultado, false));
    });

    $('#valor-diminuir').click(function()
    {
        var parent = $(this).parents('tr');

        var valor = sanitizer_money(parent.find('.form-control:eq(0)').val());
        var porcentagem = parent.find('.form-control:eq(1)').val();

        var resultado = valor - get_valor_porcentagem(valor, porcentagem) || 0;

        parent.find('input[readonly]').val(presenter_money(resultado, false));
    });
})
(jQuery);