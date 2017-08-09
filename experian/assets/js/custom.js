let live_app = '598957e33647358022a3327d'; /* app unique key**/
let visitor_key = ''; /* visitor key **/
let hidVal = {};

let fxns = (function () {
  /* -- Get Visitor Key -- **/
  function generateVisitor() {
    /*  post data */
    let post_data = {
      appId: live_app,
      hidVal: hidVal,
      key: visitor_key,
      utm_param: utm_param
    };

    /*  call for generate unique key */
    $.ajax({
      url: "https://api.outgrow.co/api/v1/analytic/visitor_key",
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(post_data),
      success: (response) => {
        visitor_key = response.data.key;
        calculateFormula();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('Error');
      }
    });
  }
  /* -- Get Visitor Key End -- **/

  /* -- save question -- **/
  function save_stats(item, value) {
    /*  post data */
    let slider_data = {
      appId: live_app,
      item: {
        _id: item,
        type: 'slider',
        props: {
          currentValue: value,
          currentLabel: value
        }
      },
      key: visitor_key,
      unsavedArray: []
    };
    /*  call for save stats */
    $.ajax({
      url: "https://api.outgrow.co/api/v1/analytic/save_stats",
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(slider_data),
      success: () => {
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('Error');
      }
    });
  }
  /* -- save question end-- **/

  /* -- save result -- **/
  function save_result() {
    let formulas = [];
    /*  get all result value */
    $('.result-value p').each(function () {
      formulas.push({
        _id: $(this).data('result'),
        value: $(this).text(),
        units: {
          preValue: '',
          postValue: ''
        }
      });
    });

    /*  post data */
    let slider_data = {
      appId: live_app,
      formula: formulas,
      key: visitor_key,
    };
    /*  call for save result */
    $.ajax({
      url: "https://api.outgrow.co/api/v1/analytic/save_result",
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(slider_data),
      success: () => {
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('Error');
      }
    });
  }
  /* -- save question end-- **/
  function rangeSliderInit() {
    /* initialize range sliders **/
    $(".js-range-slider").ionRangeSlider({
      type: "single",
      min: 0,
      max: 100,
      from: 50,
      keyboard: true,
      grid: true,
      onFinish: function (data) {
        /* save stats */
        save_stats(data.input.data('question'), data.from);
        calculateFormula();
      }
    });
  }
  /* initialize range sliders end **/

  /** calculate formula */
  function calculateFormula() {
    let questions = $(".js-range-slider");
    $('.result-value p').each(function () {
      let formula = $(this).data('formula');
      /** replace formula with values */
      formula = formula.replace(/(Q[\d]+)/g, (match) => {
        let index = Number(match.split(/[Q]/)[1]);
        return questions[index - 1].value ? questions[index - 1].value : match;
      });
      /** replace formula with values */
      /*** calculate values by pass to math lib */
      formula = Math.round(math.eval(formula));
      $(this).text(formula);
    });

    /* save result */
    save_result();
  }
  /** calculate formula end */


  return {
    generateVisitor: function () {
      generateVisitor();
    },
    save_item: function (item, value) {
      save_stats(item, value);
    },
    save_result: function () {
      save_result();
    },
    initSlider: function () {
      rangeSliderInit();
    }
  };
})();

$(document).ready(function () {
  resultScroll();
  fxns.generateVisitor(); /*  unique key For User */
  fxns.initSlider();

});

$(window).resize(function () {
  resultScroll();
});

function resultScroll() {
  let resultheading = $('.result-topheading').height();
  let firstresult = $('.result-first').height();
  let resultheight = $('.result-inner').prop('scrollHeight');
  let pageHeight = $(window).height();
  let scrollsHeight = $(window).height() - 100 - resultheading - firstresult;

  if (resultheight > pageHeight) {
    $('.result-outer-scroll').css('height', scrollsHeight);
  }
  else {
    $('.result-outer-scroll').css('height', 'auto');
  }
}

$(".graph-icon-hideDiv i").click(function () {
  $('.graph-icon-mainDiv').css({ top: 0, opacity: 1 }).
    animate({ top: -400, opacity: 0 }, 'slow');
  $('.graph-icon-mainDiv').hide(50);
  $("html").css("overflow", "auto");
  $(".result-outer").removeClass("hide");
});

$(".graph-icon").click(function () {
  $('.graph-icon-mainDiv').css({ top: -400, opacity: 0 }).
    animate({ top: 0, opacity: 1 }, 'slow');
  $('.graph-icon-mainDiv').css('display', 'block');
  $("html").css("overflow", "hidden");
  $(".result-outer").addClass("hide");
});

Highcharts.chart('graph-container', {
  exporting: { enabled: false },
  chart: {
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
    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
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
    data: [100000, 98524, 96973, 95343, 93630, 91828, 89935, 87945, 85852, 83653, 81342, 78912, 76357, 73672, 70850, 67883, 64765, 61487, 58041, 54419, 50612, 46610, 42403, 37981, 33332, 28446, 23310, 17911, 12236, 6270], color: '#000'
  }, {
    name: 'Total Interest Paid $',
    data: [4966, 9857, 14669, 19397, 24038, 28586, 33038, 37387, 41603, 45760, 49772, 53660, 57413, 61036, 64511, 67835, 70999, 73995, 76814, 79449, 81889, 84124, 86143, 87937, 89493, 90798, 91841, 92602, 93084, 93255], color: '#5D14B7'
  }, {
    name: 'Total Mortgage Payments $',
    data: [6441, 12883, 19325, 25767, 32209, 38651, 45093, 51534, 57976, 64418, 70860, 77302, 83744, 90186, 96627, 103069, 109511, 115953, 122395, 128837, 135279, 141720, 148162, 154604, 161046, 167488, 173930, 180372, 186813, 193255], color: '#1483B7'
  }
  ]

});