$(document).on('click', '.btn-menu', function() {
    $('.elem').addClass('elem-rotate');
    setTimeout(function() {
        $('.elem').removeClass('elem-rotate');
        $('.elem').hide().html('<i class="material-icons green-color">check</i>').fadeIn('slow');
    }, 3000);
    setTimeout(function() {
        $('.elem').hide().html('<i class="material-icons">donut_large</i>').fadeIn('fast');
    }, 6000);
})


jQuery(document).on('click', '.prop-arrow', function() {
    var container = jQuery('#sidebar');
    container.animate({
        right: "-300px",
        easing: 'linear'
    }, 500);
    jQuery('.main-side').hide();
    jQuery('.prop-arrow').hide();
    jQuery('.properties-window').show();
    jQuery('#sidebar').addClass('properties-close');

    /* for canvas horizontal scroll */
    jQuery("temp").css('width', "auto");
    jQuery(".template-section").css('width', "auto");
    jQuery(".template-section").css('overflow-x', "hidden");

    /*end*/

});


jQuery(document).on('click', '.properties-close', function() {
    var container = jQuery('#sidebar');
    container.animate({
        right: "0px",
        easing: 'linear'
    }, 500);
    jQuery(this).removeClass('properties-close');
    jQuery('.properties-window').hide();
    jQuery('.main-side').show();
    jQuery('.prop-arrow').show();
    /* for canvas horizontal scroll */
    var winWidth = jQuery(window).width() - 244;
    var winHeight = jQuery(window).height() - 71;
    jQuery("temp").css('width', winWidth);
    var minWinWidth = jQuery(window).width() - 573;
    jQuery(".template-section").css('width', minWinWidth);
    jQuery(".template-section").css('overflow-x', "scroll");
    jQuery(".template-section").css('position', "fixed");
    jQuery(".template-section").css('height', winHeight);
    /*end*/
});
jQuery('.ques-textarea').css('height', 'auto');
jQuery(document).on('keydown', '.ques-textarea', function() {
    // if (event.keyCode == 13) {
    //     alert('you pressed enter ^_^');
    // }
    jQuery('.ques-textarea').css('height', 'auto');
    jQuery(this).height(this.scrollHeight);
});
jQuery(document).find('.ques-textarea').keydown();

jQuery("a.section-head").on("click", function() {
    var path = jQuery(this).attr("data-path");
    var anchor = jQuery("." + path);
    var position = anchor.position().top;
    jQuery("html").animate({
        scrollTop: position
    });
});

$(document).ready(function() {


    $(".choice").change(function() {
        if ($(this).val() == "default") {
            $(this).addClass("select-empty");
        } else {
            $(this).removeClass("select-empty");
        }
    });
    $(".choice").change();


    toast("hello");
    /* slimscroll js */
    $('.side-scroll').slimScroll({
        height: '94vh'
    });


    /* slimscroll js */
    $('.formula-questions').slimScroll({
        height: '58vh'
    });

    /* slimscroll js */
    $('.copypaste-box-scroll').slimScroll({
        height: '200px'
    });


    jQuery(window).scroll(function() {
        jQuery('.cp-popover-container').remove();
    });



    var panelHeight = $(".panel-scroll").height();
    var panelMaxHeight = $(window).height() - 203;
    if (panelHeight > panelMaxHeight) {
        pHeight = panelMaxHeight;
        $('.panel-scroll').slimScroll({
            height: pHeight
        });
    }

    /* file upload js */
    // $(function() {

    //     // We can attach the `fileselect` event to all file inputs on the page
    //     $(document).on('change', ':file', function() {
    //         var input = $(this),
    //             numFiles = input.get(0).files ? input.get(0).files.length : 1,
    //             label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    //         input.trigger('fileselect', [numFiles, label]);
    //     });

    //     // We can watch for our custom `fileselect` event like this
    //     $(document).ready(function() {
    //         $(':file').on('fileselect', function(event, numFiles, label) {

    //             var input = $(this).parents('.input-group').find(':text'),
    //                 log = numFiles > 1 ? numFiles + ' files selected' : label;

    //             if (input.length) {
    //                 input.val(log);
    //             } else {
    //                 if (log) alert(log);
    //             }

    //         });
    //     });

    // });

    /* wysiwyg editor */

    $('.wysiwyg').froalaEditor({
        toolbarButtons: ['bold', '|', 'italic', '|', 'underline', '|', 'color', '|', 'fontSize', ],
    })

    $.FroalaEditor.DefineIcon('my_dropdown', {
        NAME: 'settings'
    });
    // $.FroalaEditor.RegisterCommand('my_dropdown', {
    //     title: 'Advanced options',
    //     type: 'dropdown',
    //     focus: false,
    //     undo: false,
    //     refreshAfterCallback: true,
    //     options: {
    //         'v1': 'Option 1',
    //         'v2': 'Option 2'
    //     },
    //     callback: function(cmd, val) {
    //         console.log(val);
    //     },
    //     // Callback on refresh.
    //     refresh: function($btn) {
    //         console.log('do refresh');
    //     },
    //     // Callback on dropdown show.
    //     refreshOnShow: function($btn, $dropdown) {
    //         console.log('do refresh when show');
    //     }
    // });

    $('textarea#froala-editor').froalaEditor({
        toolbarButtons: ['bold', '|', 'italic', '|', 'underline', '|', 'color', '|', 'fontSize', 'my_dropdown']
    })

    /* wysiwyg editor */

    /*For add another option and removal in Lead gen */
    // var max_fields = 3; //maximum input boxes allowed
    // var wrapper = $(".input_fields_wrap"); //Fields wrapper
    // var add_button = $(".add_field_button"); //Add button ID

    // var x = 1; //initlal text box count
    // $(add_button).click(function(e) { //on add input button click
    //     e.preventDefault();
    //     if (x < max_fields) { //max input box allowed
    //         x++; //text box increment
    //         $(wrapper).append(`<div class="lead-gen"><div class="input-group"><label class="check"><input type="checkbox" value="" name="manadatory" id="manadatory` + x + `"><label for="manadatory` + x + `"> </label>*</label><select class="select-default" data-width="100px"><option>Name</option>
    //                                         <option>Text</option>
    //                                         <option>Email</option>
    //                                         <option>Password</option>
    //                                     </select>
    //                                     <input type="text" class="form-control" aria-label="Text input with dropdown button">
    //                                 </div><a href="#" class="form-control-icon remove_field"><i class="material-icons">close</i></a>
    //                             </div>`); //add input box
    //         $('.select-default').selectpicker('refresh');
    //     }
    // });

    $(document).on("click", ".remove_field", function(e) { //user click on remove text
        e.preventDefault();
        $(this).parent('.lead-gen').remove();
        x--;
    })
    /*End of add another option and removal in Lead gen */
    //$('.select-default').selectpicker();
    /*For color Picker */
    $("input.color-picker").ColorPickerSliders({
        placement: 'top',
        sliders: false,
        customswatches: false,
        swatches: ['#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC', '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000', '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF', '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#D1D5D8'],
        hsvpanel: false,
        previewformat: 'hex',

        onchange: function(container, color) {

            console.log(color.tiny.toRgbString());
            //            $('.cp-popover-container').remove();
            // var body = $('body');

            // body.css("background-color", color.tiny.toRgbString());

            // if (color.cielch.l < 60) {
            //     body.css("color", "white");
            // } else {
            //     body.css("color", "black");
            // }
        }
    });
});
/*End of color Picker */
function toast(message) {
    //Toast
    $(".toast span").text(message);
    //$(".toast").show();
    //$(".toast").animate({bottom: "+90px",easing: 'linear'}, 1500);
    $(".toast").delay(1000).fadeOut(500);
    $(document).on("click", ".toast-btn", function(e) {
        $(".toast").remove();
    })
    //Toast end
}
/* tabs js */
$('ul.nav.nav-tabs  a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

// (function($) {
//     // Test for making sure event are maintained
//     $('.js-alert-test').click(function() {
//         alert('Button Clicked: Event was maintained');
//     });
//     fakewaffle.responsiveTabs(['xs', 'sm']);
// })(jQuery);

/* tabs js end */

/* On click outside the div hide sidebar container */
// $(document).mouseup(function(e) {
//     var container = $("#sidebar");
//     var colorContainer = $(".cp-popover-container");
//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && (container.has(e.target).length === 0)) // ... nor a descendant of the container
//     {
//         if (!$(".cp-popover-container").is(e.target)) {
//             if (!$('.box-build .ed-sidebar a').is(e.target)) {
//                 container.hide('slide', {
//                     direction: 'right',
//                     easing: 'linear'
//                 }, 400);
//             } else {
//                 container.show('slide', {
//                     direction: 'right',
//                     easing: 'linear'
//                 }, 400);
//             }
//         }
//     }
// });
/* End of funtion */
$(document).on('click', 'a.visible', function() {
    if (!$(this).hasClass('disable')) {
        $("a.visible").html('<i class="material-icons visibility_off">visibility_off</i>');
        $('.visible-parent a').addClass('disable');
    } else {
        $("a.visible").html('<i class="material-icons">visibility</i>');
        $('.visible-parent a').removeClass('disable');
    }

})

$(document).on('click', 'a.head,a.sub-head ', function() {
    $('a.section-head span.circle').removeClass('active');
    $('span.active-circle').removeClass('active-circle');
    $(this).siblings("span.hollow").addClass('active-circle');
})
$(document).on('click', 'a.sub-head ', function() {
    $('a.section-head span.circle').removeClass('active');
    $('span.active-circle').removeClass('active-circle');
    $(this).find("span").addClass('active-circle');
})
$(document).on('click', '.ed-sidebar a.section-head ', function() {
    $('a.section-head span.circle').removeClass('active');
    $('span.active-circle').removeClass('active-circle');
    $('a.head span.active-circle').removeClass('active-circle');
    $(this).find("span").addClass('active');
})
$('.show-check').change(function() {
    //alert("hello");
    if ($(this).prop('checked')) {
        $(this).parents('.type-details').find('.div-check').fadeIn('slow');
    } else
        $(this).parents('.type-details').find('.div-check').fadeOut('slow');
});
$('input[name = range]').change(function() {

    if ($(this).val() == "1") {
        $(this).parents('.type-details ').find('.range').fadeIn('slow ');
    } else
        $(this).parents('.type-details ').find('.range').fadeOut('slow ');
});


/*result*/
$(document).on('click', '.result-area ', function() {
    $('.result-area-tab').removeClass('hide');
    $('.details-area-tab').addClass('hide');
    $('.result-area').css('background-color', '#f6f8f9')
    $('.details-area').css('background-color', '#ffffff')
})

$(document).on('click', '.details-area ', function() {
    $('.result-area-tab').addClass('hide');
    $('.details-area-tab').removeClass('hide');
    $('.result-area').css('background-color', '#ffffff')
    $('.details-area').css('background-color', '#f6f8f9')
})

/* selectize js */
// $('.email-selectize').selectize();
// $('#email-replyto-selectize').selectize({
//     plugins: ['remove_button'],
//     delimiter: ',',
//     persist: false,
//     create: function(input) {
//         return {
//             value: input,
//             text: input
//         }
//     }
// });



/* build right side hide show */
$(document).on('click', '.build-page ', function() {
    $('.tab-content').addClass('hide');
    $('.landing-page').removeClass('hide');
    $('#sidebar').removeClass('hide');
});

$(document).on('click', '.gen-setting ', function() {
    $('.landing-page').addClass('hide');
    $('.tab-content').removeClass('hide');
    $('#sidebar').addClass('hide');

});