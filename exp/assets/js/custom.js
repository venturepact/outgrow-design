$(".js-range-slider").ionRangeSlider({
    type: "single",
    min: 0,
    max: 100,
    from: 50,
    keyboard: true,
    grid: true,
    onStart: function (data) {
        console.log("onStart");
    },
    onChange: function (data) {
        console.log("onChange");
    },
    onFinish: function (data) {
        console.log("onFinish");
    },
    onUpdate: function (data) {
        console.log("onUpdate");
    }
});
$( document ).ready(function() {
   resultScroll(); 
});
$(window).resize(function () {
    resultScroll(); 
});
function resultScroll(){
    var resultheading = $('.result-topheading').height();
    var firstresult = $('.result-first').height();
    var resultheight = $('.result-inner').prop('scrollHeight');
    var pageHeight = $(window).height();
    let scrollsHeight = $(window).height() - 100 - resultheading - firstresult;
    if (resultheight > pageHeight) {
      $('.result-outer-scroll').css('height', scrollsHeight);
    }
    else {
      $('.result-outer-scroll').css('height', 'auto');
    }
}
$(".graph-icon-hideDiv i").click(function() { 
    $('.graph-icon-mainDiv').css({ top: 0, opacity: 1 }).
      animate({ top: -400, opacity: 0 }, 'slow');
    $('.graph-icon-mainDiv').hide(50);
    $("html").css("overflow", "auto");
    $(".result-outer").removeClass("hide");
});

$(".graph-icon").click(function() {
    $('.graph-icon-mainDiv').css({ top: -400, opacity: 0 }).
      animate({ top: 0, opacity: 1 }, 'slow');
    $('.graph-icon-mainDiv').css('display', 'block');
    $("html").css("overflow", "hidden");
    $(".result-outer").addClass("hide");
  });

Highcharts.chart('graph-container', {
    exporting: { enabled: false },
    chart :{
        marginTop: 30,
        spacingRight: 50,
    },
    title: {
        text: ''
    },
    credits: {
        enabled: false
    },
    xAxis: {
        title: {
            text: 'Year'
        },
        alternateGridColor: '#f6f7f9',
        type: 'linear',
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17' ,'18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    scrollbar: {
        liveRedraw: false
    },
    plotOptions: {
        series: {
            pointStart: 1,
        },
    },

    series: [{
        name: 'Beginning Balance $',
        data: [100000, 98524, 96973, 95343, 93630, 91828, 89935, 87945, 85852, 83653, 81342, 78912, 76357, 73672, 70850, 67883, 64765, 61487, 58041, 54419, 50612, 46610, 42403, 37981, 33332, 28446, 23310, 17911, 12236, 6270],color: '#000'
    }, {
        name: 'Total Interest Paid $',
        data: [4966, 9857, 14669, 19397, 24038, 28586, 33038, 37387, 41603, 45760, 49772, 53660, 57413, 61036, 64511, 67835, 70999, 73995, 76814, 79449, 81889, 84124, 86143, 87937, 89493, 90798, 91841, 92602, 93084, 93255],color: '#5D14B7'
    }, {
        name: 'Total Mortgage Payments $',
        data: [6441, 12883, 19325, 25767, 32209, 38651, 45093, 51534, 57976, 64418, 70860, 77302, 83744, 90186, 96627, 103069, 109511, 115953, 122395, 128837, 135279, 141720, 148162, 154604, 161046, 167488, 173930, 180372, 186813, 193255],color: '#1483B7'
    }
    ]

});