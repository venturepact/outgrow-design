$(document).ready(function() {
    /* slimscroll js */
    $('.formula-questions').slimScroll({
        height: '58vh'
    });


    /* scroll horizontal */
    // $(".for-horzscroll").mCustomScrollbar({
    //     axis:"x",
    //     advanced:{autoExpandHorizontalScroll:true}
    // });

    /*Scroller for right panel and left panel */
    var panelHeight = jQuery(".panel-scroll").height();
    windowScroll();
    jQuery(window).on("resize", function() {
        windowScroll();
    })

    function windowScroll() {
        var panelMaxHeight = jQuery(window).height() - 203;
        //console.log(panelHeight,panelMaxHeight);
        if (panelHeight > panelMaxHeight) {
            var pHeight = panelMaxHeight;
            // console.log(pHeight);
            jQuery('.panel-scroll').slimScroll({
                height: pHeight
            });
        } else {
            jQuery('.panel-scroll').slimScroll({
                destroy: true
            });
            jQuery('.panel-scroll').css('height', 'auto');
        }
        var rightPanelHeight = jQuery(window).height() - 65;
        jQuery('.side-scroll').slimScroll({
            height: rightPanelHeight
        });
    }
    /*Scroller for right panel and left panel end */

    /* file upload js */
    $(function() {

        // We can attach the `fileselect` event to all file inputs on the page
        $(document).on('change', ':file', function() {
            var input = $(this),
                numFiles = input.get(0).files ? input.get(0).files.length : 1,
                label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
            input.trigger('fileselect', [numFiles, label]);
        });

        // We can watch for our custom `fileselect` event like this
        $(document).ready(function() {
            $(':file').on('fileselect', function(event, numFiles, label) {

                var input = $(this).parents('.input-group').find(':text'),
                    log = numFiles > 1 ? numFiles + ' files selected' : label;

                if (input.length) {
                    input.val(log);
                } else {
                    if (log) alert(log);
                }

            });
        });

    });

    /* wysiwyg editor */

    $('.wysiwyg').froalaEditor({
        toolbarButtons: ['fontSize','|','color', '|', 'bold', '|', 'italic', '|', 'underline',  ],
    })
    /* wysiwyg editor */

    /*For add another option and removal in Lead gen */
    var max_fields = 3; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append(`<div class="lead-gen"><div class="input-group"><label class="check"><input type="checkbox" value="" name="manadatory" id="manadatory` + x + `"><label for="manadatory` + x + `"> </label>*</label><select class="select-default" data-width="100px"><option>Name</option>
                                            <option>Text</option>
                                            <option>Email</option>
                                            <option>Password</option>
                                        </select>
                                        <input type="text" class="form-control" aria-label="Text input with dropdown button">
                                    </div><a href="#" class="form-control-icon remove_field"><i class="material-icons">close</i></a>
                                </div>`); //add input box
        }
    });
    $(document).on("click", ".remove_field", function(e) { //user click on remove text
        e.preventDefault();
        $(this).parent('.lead-gen').remove();
        x--;
    })
    /*End of add another option and removal in Lead gen */

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

/* tabs js */
$('ul.nav.nav-tabs  a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

(function($) {
    // Test for making sure event are maintained
    $('.js-alert-test').click(function() {
        alert('Button Clicked: Event was maintained');
    });
    fakewaffle.responsiveTabs(['xs', 'sm']);
})(jQuery);

/* tabs js end */

/* On click outside the div hide sidebar container */
 $(document).mouseup(function(e) {
     var container = $("#sidebar");
     var colorContainer = $(".cp-popover-container");
     if (!container.is(e.target) // if the target of the click isn't the container...
         && (container.has(e.target).length === 0)) // ... nor a descendant of the container
     {
         if (!$(".cp-popover-container").is(e.target)) {
             if (!$('.box-build .ed-sidebar a').is(e.target)) {
                 container.toggle('slide', {
                     direction: 'right',
                     easing: 'linear'
                 }, 400);
           } else {
                container.show('slide', {
                     direction: 'right',
                     easing: 'linear'
                 }, 400);
             }
         }
     }
 });
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

/* build right side hide show */
$(document).on('click', '.build-page ', function() {
    $('.tab-content').addClass('hide');
    $('.landing-page').removeClass('hide');
});

$(document).on('click', '.gen-setting ', function() {
    $('.landing-page').addClass('hide');
    $('.tab-content').removeClass('hide');
});
$(document).on('click','.add-question',function(){
	$(this).parents(".first").append(`<li><span class="hollow"></span>
                                                    <a href="#" class="ellipsis head" data-toggle="text-field">Q. Which paltform will...</a>
                                                    <a href="javascript:void(0);" class="sublist-action add-question" title="Add" ><i class="material-icons">add_circle_outline</i></a>
                                                    <a href="javascript:void(0);" class="sublist-action" title="Duplicate"><i class="material-icons">filter_none</i></a>
                                                    <a href="javascript:void(0);" class="sublist-action" title="Delete"><i class="material-icons">clear</i></a>
                                                </li>`);
		$(".first").addClass('.ed-sidebar-sub ul li');
});

$(document).on('click', 'a', function() {
    var toggleValue = $(this).data('toggle');
    $('*[data-section="' + toggleValue + '"]').removeClass('hide').siblings().addClass('hide');
	if($(this).attr("data-template")){
	$('html,body').animate({
        scrollTop: $('*[data-template="' + toggleValue + '"]').offset().top},
        'slow');}
	
})