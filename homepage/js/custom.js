(function($){

function testPhone(e) {
    var t = /^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/,
        i = new RegExp(t);
    return i.test(e)
}

function testNumber(e) {
    var t = /^\d*\.?\d*$/,
        i = new RegExp(t);
    return i.test(e)
}

function testNumberWithComa(e) {
    var t = /^(\d|,)*$/,
        i = new RegExp(t);
    return i.test(e)
}

function testAlphanum(e) {
    var t = /^[a-zA-Z0-9]+([a-zA-Z0-9\s])+$/,
        i = new RegExp(t);
    return console.log(i.test(e)), i.test(e)
}

function testPassword(e) {
    var t = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/,
        i = new RegExp(t);
    return console.log(i.test(e)), i.test(e)
}

function testEmail(e) {
    var t = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        i = new RegExp(t);
    return i.test(e)
}

function testURL(e) {
    var t = /^((https?|s?ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    if ($(this).hasClass("required")) {
        var i = new RegExp(t);
        return i.test(e)
    }
    var i = new RegExp(t);
    return "" == e ? !0 : i.test(e)
}

function testDate(e) {
    var t = /^(([1-9]{1}\d{3}))-(([0]?\d{1})|([1][0,1,2]{1}))-(([0-2]?\d{1})|([3][0,1]{1}))$/;
    if ($(this).hasClass("required")) {
        var i = new RegExp(t);
        return i.test(e)
    }
    var i = new RegExp(t);
    return "" == e ? !0 : i.test(e)
}

function testDataRange(e, t) {
    return "" == e && "" == t ? !0 : t >= e ? !0 : !1
}

function changeValidate(e) {
    var t = 0;
    return $("#" + e + " :input.required").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error"))
            if (null == e.val() || 0 == e.val().length) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else if (e.hasClass("minlength") && e.val().length < parseInt(e.attr("length"))) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters.</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("email") && !testEmail($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid email address</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("url") && !testURL($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid url (www.example.com)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("phone") && !testPhone($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid phone number</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("number") && !testNumber($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("to")) {
            var n = $(this).parent().parent().parent().find(".from").val(),
                r = $(this).val();
            if (parseInt(r) <= parseInt(n)) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid range</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            }
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        }
    }), $("#" + e + " :input.password").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error"))
            if (testPassword($(this).val()))
                if ($(this).hasClass("required") && 0 == $(this).val().length) {
                    e.addClass("parsley-error");
                    var i = e.attr("data-parsley-id");
                    $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
                } else {
                    e.removeClass("parsley-error");
                    var i = e.attr("data-parsley-id");
                    $("#parsley-id-satn-" + i).html("")
                } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if (0 == $(this).val().length && !testPassword($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.minlength").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error"))
            if (e.val().length < parseInt(e.attr("length"))) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else if ($(this).hasClass("required") && 0 == $(this).val().length) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        }
    }), $("#" + e + " :input.alphanum").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error"))
            if (testAlphanum($(this).val()))
                if ($(this).hasClass("required") && 0 == $(this).val().length) {
                    e.addClass("parsley-error");
                    var i = e.attr("data-parsley-id");
                    $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
                } else if ($(this).hasClass("minlength") && e.val().length < parseInt(e.attr("length"))) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">This value should be alphanumeric</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.url").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error"))
            if (testURL($(this).val()))
                if ($(this).hasClass("required") && 0 == $(this).val().length) {
                    e.addClass("parsley-error");
                    var i = e.attr("data-parsley-id");
                    $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
                } else {
                    e.removeClass("parsley-error");
                    var i = e.attr("data-parsley-id");
                    $("#parsley-id-satn-" + i).html("")
                } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid url (www.example.com)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.number").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error"))
            if (testNumber($(this).val()))
                if ($(this).hasClass("required") && 0 == $(this).val().length) {
                    e.addClass("parsley-error");
                    var i = e.attr("data-parsley-id");
                    $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
                } else if ($(this).hasClass("to") && 0 != $(this).val().length) {
            var n = $(this).parent().parent().parent().find(".from").val(),
                r = $(this).val();
            if (parseInt(r) <= parseInt(n)) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid range</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            }
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.to").each(function() {
        var e = $(this);
        if (e.hasClass("parsley-error")) {
            var i = $(this).parent().parent().parent().find(".from").val(),
                n = $(this).val();
            if (parseInt(n) <= parseInt(i)) {
                e.addClass("parsley-error");
                var r = e.attr("data-parsley-id");
                $("#parsley-id-" + r).html('<li id="parsley-id-satn-' + r + '">Please enter valid range</li>'), $("#parsley-id-" + r).addClass("parsley-errors-list filled"), t = 1
            } else {
                e.removeClass("parsley-error");
                var r = e.attr("data-parsley-id");
                $("#parsley-id-satn-" + r).html("")
            }
            if ($(this).hasClass("required") && 0 == $(this).val().length) {
                e.addClass("parsley-error");
                var r = e.attr("data-parsley-id");
                $("#parsley-id-" + r).html('<li id="parsley-id-satn-' + r + '">Please enter required field</li>'), $("#parsley-id-" + r).addClass("parsley-errors-list filled"), t = 1
            }
            if ($(this).hasClass("number") && !testNumber($(this).val())) {
                e.addClass("parsley-error");
                var r = e.attr("data-parsley-id");
                $("#parsley-id-" + r).html('<li id="parsley-id-satn-' + r + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + r).addClass("parsley-errors-list filled"), t = 1
            }
        }
    }), t
}

function validate(e) {
    var t = 0;
    return $("#" + e + " :input.required").each(function() {
        var e = $(this);
        if (null == e.val() || 0 == e.val().length) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if (e.hasClass("minlength") && e.val().length < parseInt(e.attr("length"))) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters.</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("email") && !testEmail($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid email address</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("url") && !testURL($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid url (www.example.com)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("phone") && !testPhone($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid phone number</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        }
    }), $("#" + e + " :input.alphanum").each(function() {
        var e = $(this);
        if (testAlphanum($(this).val()))
            if ($(this).hasClass("required") && 0 == $(this).val().length) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else if ($(this).hasClass("minlength") && e.val().length < parseInt(e.attr("length"))) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">This value should be alphanumeric</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :checkbox.require-one").each(function() {
        0 == $(".require-one:checked").size() ? ($("#parsley-id-progress-224").html("<li>Please select required field</li>"), $("#parsley-id-progress-224").addClass("filled"), t = 1) : ($("#parsley-id-progress-224").removeClass("filled"), $("#parsley-id-progress-224").html(""))
    }), $("#" + e + " :input.password").each(function() {
        var e = $(this);
        if (testPassword($(this).val())) {
            console.log("out"), e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        } else {
            console.log("in"), e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Spaces are Not Allowed</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.url").each(function() {
        var e = $(this);
        if (testURL($(this).val()))
            if ($(this).hasClass("required") && 0 == $(this).val().length) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else {
                e.removeClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-satn-" + i).html("")
            } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid url (www.example.com)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.number").each(function() {
        var e = $(this);
        if (testNumber($(this).val()))
            if ($(this).hasClass("required") && 0 == $(this).val().length) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else {
                e.removeClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-satn-" + i).html("")
            } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    }), $("#" + e + " :input.minlength").each(function() {
        var e = $(this);
        if (e.val().length < parseInt(e.attr("length"))) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("required") && 0 == $(this).val().length) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("alphanum") && !testAlphanum($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">This value should be alphanumeric</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        }
    }), $("#" + e + " :input.to").each(function() {
        var e = $(this),
            i = $(this).parent().parent().parent().find(".from").val(),
            n = $(this).val();
        if (parseInt(n) <= parseInt(i)) {
            e.addClass("parsley-error");
            var r = e.attr("data-parsley-id");
            $("#parsley-id-" + r).html('<li id="parsley-id-satn-' + r + '">Please enter validate range</li>'), $("#parsley-id-" + r).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var r = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + r).html("")
        }
        if ($(this).hasClass("required") && 0 == $(this).val().length) {
            e.addClass("parsley-error");
            var r = e.attr("data-parsley-id");
            $("#parsley-id-" + r).html('<li id="parsley-id-satn-' + r + '">Please enter required field</li>'), $("#parsley-id-" + r).addClass("parsley-errors-list filled"), t = 1
        }
        if ($(this).hasClass("number") && !testNumber($(this).val())) {
            e.addClass("parsley-error");
            var r = e.attr("data-parsley-id");
            $("#parsley-id-" + r).html('<li id="parsley-id-satn-' + r + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + r).addClass("parsley-errors-list filled"), t = 1
        }
    }), t
}

function filedValidater(e) {
    var t = 0;
    if (!e.hasClass("required") || null != e.val() && 0 != e.val().length)
        if (e.hasClass("minlength") && e.val().length < parseInt(e.attr("length")))
            if (e.val().length > 0) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter min ' + e.attr("length") + " characters.</li>"), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else if ($(this).hasClass("required") && 0 == $(this).val().length) {
        e.addClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
    } else {
        e.removeClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-satn-" + i).html("")
    } else if ($(this).hasClass("email") && !testEmail($(this).val())) {
        e.addClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid email address</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
    } else if ($(this).hasClass("url") && !testURL($(this).val())) {
        e.addClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid url (www.example.com)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
    } else if ($(this).hasClass("phone") && !testPhone($(this).val())) {
        e.addClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter valid phone number</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
    } else if (e.hasClass("alphanum") && !testAlphanum($(this).val())) {
        e.addClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">This value should be alphanumeric</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
    } else if (e.hasClass("require-one")) 0 == $(".require-one:checked").size() ? ($("#parsley-id-progress-224").html("<li>Please select required field</li>"), $("#parsley-id-progress-224").addClass("filled"), t = 1) : ($("#parsley-id-progress-224").removeClass("filled"), $("#parsley-id-progress-224").html(""));
    else if (e.hasClass("password")) {
        var e = $(this);
        if (testPassword($(this).val())) {
            console.log("out"), e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        } else {
            console.log("in"), e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Spaces are Not Allowed</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    } else if (e.hasClass("number")) {
        var e = $(this);
        if (testNumber($(this).val()))
            if ($(this).hasClass("required") && 0 == $(this).val().length) {
                e.addClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
            } else {
                e.removeClass("parsley-error");
                var i = e.attr("data-parsley-id");
                $("#parsley-id-satn-" + i).html("")
            } else {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        }
    } else if (e.hasClass("to")) {
        var e = $(this),
            n = $(this).parent().parent().parent().find(".from").val(),
            r = $(this).val();
        if (parseInt(r) <= parseInt(n)) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter validate range</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("required") && 0 == $(this).val().length) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else if ($(this).hasClass("number") && !testNumber($(this).val())) {
            e.addClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter number only(ex: 2 or 2.00)</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
        } else {
            e.removeClass("parsley-error");
            var i = e.attr("data-parsley-id");
            $("#parsley-id-satn-" + i).html("")
        }
    } else {
        e.removeClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-satn-" + i).html("")
    } else {
        e.addClass("parsley-error");
        var i = e.attr("data-parsley-id");
        $("#parsley-id-" + i).html('<li id="parsley-id-satn-' + i + '">Please enter required field</li>'), $("#parsley-id-" + i).addClass("parsley-errors-list filled"), t = 1
    }
    return console.log(t), t
}

function OpenFile(e, t, i) {
    window.open(e, "", "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=" + i + ",height=" + t)
}

function SaveToDisk(e, t) {
    var i = document.createElement("a");
    i.href = e, i.target = "_blank", i.download = t || e;
    var n = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !0
    });
    i.dispatchEvent(n), (window.URL || window.webkitURL).revokeObjectURL(i.href)
}

function custom_validate(e) {
    var t = !0;
    return e.find(":input:text").each(function() {
        validate_field($(this)) || (t = !1)
    }), console.log("Inside custome valid " + t), t
}

function validate_field(e) {
    var t = !0;
    return e.hasClass("c_required") && ("" == e.val().trim() ? (custom_validate_error(e, "c_required"), t = !1) : custom_validate_error(e, null)), e.hasClass("c_integer") && "" != e.val().trim() && (testNumber(e.val()) ? custom_validate_error(e, null) : (custom_validate_error(e, "c_integer"), t = !1)), e.hasClass("c_integer_coma_allowed") && "" != e.val().trim() && (testNumberWithComa(e.val()) ? custom_validate_error(e, null) : (custom_validate_error(e, "c_integer_coma_allowed"), t = !1)), t
}

function custom_validate_error(e, t) {
    var i = e.data("parsley-id-custom");
    if (null === t) $("#parsley-id-custom-" + i).html("").removeClass("filled");
    else {
        console.log("errId  " + i);
        var n = '<li class="parsley-required">' + err_list[t].msg + ".</li>";
        $("#parsley-id-custom-" + i).html(n).addClass("filled")
    }
    console.log("After processing for " + t + " : " + i + $("#parsley-id-custom-" + i).html())
}! function(e, t) {
    "function" == typeof define && define.amd ? define("sifter", t) : "object" == typeof exports ? module.exports = t() : e.Sifter = t()
}(this, function() {
    var e = function(e, t) {
        this.items = e, this.settings = t || {
            diacritics: !0
        }
    };
    e.prototype.tokenize = function(e) {
        if (e = n(String(e || "").toLowerCase()), !e || !e.length) return [];
        var t, i, a, s, l = [],
            u = e.split(/ +/);
        for (t = 0, i = u.length; i > t; t++) {
            if (a = r(u[t]), this.settings.diacritics)
                for (s in o) o.hasOwnProperty(s) && (a = a.replace(new RegExp(s, "g"), o[s]));
            l.push({
                string: u[t],
                regex: new RegExp(a, "i")
            })
        }
        return l
    }, e.prototype.iterator = function(e, t) {
        var i;
        i = a(e) ? Array.prototype.forEach || function(e) {
            for (var t = 0, i = this.length; i > t; t++) e(this[t], t, this)
        } : function(e) {
            for (var t in this) this.hasOwnProperty(t) && e(this[t], t, this)
        }, i.apply(e, [t])
    }, e.prototype.getScoreFunction = function(e, t) {
        var i, n, r, a;
        i = this, e = i.prepareSearch(e, t), r = e.tokens, n = e.options.fields, a = r.length;
        var o = function(e, t) {
                var i, n;
                return e ? (e = String(e || ""), n = e.search(t.regex), -1 === n ? 0 : (i = t.string.length / e.length, 0 === n && (i += .5), i)) : 0
            },
            s = function() {
                var e = n.length;
                return e ? 1 === e ? function(e, t) {
                    return o(t[n[0]], e)
                } : function(t, i) {
                    for (var r = 0, a = 0; e > r; r++) a += o(i[n[r]], t);
                    return a / e
                } : function() {
                    return 0
                }
            }();
        return a ? 1 === a ? function(e) {
            return s(r[0], e)
        } : "and" === e.options.conjunction ? function(e) {
            for (var t, i = 0, n = 0; a > i; i++) {
                if (t = s(r[i], e), 0 >= t) return 0;
                n += t
            }
            return n / a
        } : function(e) {
            for (var t = 0, i = 0; a > t; t++) i += s(r[t], e);
            return i / a
        } : function() {
            return 0
        }
    }, e.prototype.getSortFunction = function(e, i) {
        var n, r, a, o, s, l, u, c, d, p, f;
        if (a = this, e = a.prepareSearch(e, i), f = !e.query && i.sort_empty || i.sort, d = function(e, t) {
                return "$score" === e ? t.score : a.items[t.id][e]
            }, s = [], f)
            for (n = 0, r = f.length; r > n; n++)(e.query || "$score" !== f[n].field) && s.push(f[n]);
        if (e.query) {
            for (p = !0, n = 0, r = s.length; r > n; n++)
                if ("$score" === s[n].field) {
                    p = !1;
                    break
                }
            p && s.unshift({
                field: "$score",
                direction: "desc"
            })
        } else
            for (n = 0, r = s.length; r > n; n++)
                if ("$score" === s[n].field) {
                    s.splice(n, 1);
                    break
                } for (c = [], n = 0, r = s.length; r > n; n++) c.push("desc" === s[n].direction ? -1 : 1);
        return l = s.length, l ? 1 === l ? (o = s[0].field, u = c[0], function(e, i) {
            return u * t(d(o, e), d(o, i))
        }) : function(e, i) {
            var n, r, a;
            for (n = 0; l > n; n++)
                if (a = s[n].field, r = c[n] * t(d(a, e), d(a, i))) return r;
            return 0
        } : null
    }, e.prototype.prepareSearch = function(e, t) {
        if ("object" == typeof e) return e;
        t = i({}, t);
        var n = t.fields,
            r = t.sort,
            o = t.sort_empty;
        return n && !a(n) && (t.fields = [n]), r && !a(r) && (t.sort = [r]), o && !a(o) && (t.sort_empty = [o]), {
            options: t,
            query: String(e || "").toLowerCase(),
            tokens: this.tokenize(e),
            total: 0,
            items: []
        }
    }, e.prototype.search = function(e, t) {
        var i, n, r, a, o = this;
        return n = this.prepareSearch(e, t), t = n.options, e = n.query, a = t.score || o.getScoreFunction(n), e.length ? o.iterator(o.items, function(e, r) {
            i = a(e), (t.filter === !1 || i > 0) && n.items.push({
                score: i,
                id: r
            })
        }) : o.iterator(o.items, function(e, t) {
            n.items.push({
                score: 1,
                id: t
            })
        }), r = o.getSortFunction(n, t), r && n.items.sort(r), n.total = n.items.length, "number" == typeof t.limit && (n.items = n.items.slice(0, t.limit)), n
    };
    var t = function(e, t) {
            return "number" == typeof e && "number" == typeof t ? e > t ? 1 : t > e ? -1 : 0 : (e = s(String(e || "")), t = s(String(t || "")), e > t ? 1 : t > e ? -1 : 0)
        },
        i = function(e, t) {
            var i, n, r, a;
            for (i = 1, n = arguments.length; n > i; i++)
                if (a = arguments[i])
                    for (r in a) a.hasOwnProperty(r) && (e[r] = a[r]);
            return e
        },
        n = function(e) {
            return (e + "").replace(/^\s+|\s+$|/g, "")
        },
        r = function(e) {
            return (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        },
        a = Array.isArray || $ && $.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        o = {
            a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
            c: "[cÇçćĆčČ]",
            d: "[dđĐďĎ]",
            e: "[eÈÉÊËèéêëěĚĒēęĘ]",
            i: "[iÌÍÎÏìíîïĪī]",
            l: "[lłŁ]",
            n: "[nÑñňŇńŃ]",
            o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
            r: "[rřŘ]",
            s: "[sŠšśŚ]",
            t: "[tťŤ]",
            u: "[uÙÚÛÜùúûüůŮŪū]",
            y: "[yŸÿýÝ]",
            z: "[zŽžżŻźŹ]"
        },
        s = function() {
            var e, t, i, n, r = "",
                a = {};
            for (i in o)
                if (o.hasOwnProperty(i))
                    for (n = o[i].substring(2, o[i].length - 1), r += n, e = 0, t = n.length; t > e; e++) a[n.charAt(e)] = i;
            var s = new RegExp("[" + r + "]", "g");
            return function(e) {
                return e.replace(s, function(e) {
                    return a[e]
                }).toLowerCase()
            }
        }();
    return e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("microplugin", t) : "object" == typeof exports ? module.exports = t() : e.MicroPlugin = t()
}(this, function() {
    var e = {};
    e.mixin = function(e) {
        e.plugins = {}, e.prototype.initializePlugins = function(e) {
            var i, n, r, a = this,
                o = [];
            if (a.plugins = {
                    names: [],
                    settings: {},
                    requested: {},
                    loaded: {}
                }, t.isArray(e))
                for (i = 0, n = e.length; n > i; i++) "string" == typeof e[i] ? o.push(e[i]) : (a.plugins.settings[e[i].name] = e[i].options, o.push(e[i].name));
            else if (e)
                for (r in e) e.hasOwnProperty(r) && (a.plugins.settings[r] = e[r], o.push(r));
            for (; o.length;) a.require(o.shift())
        }, e.prototype.loadPlugin = function(t) {
            var i = this,
                n = i.plugins,
                r = e.plugins[t];
            if (!e.plugins.hasOwnProperty(t)) throw new Error('Unable to find "' + t + '" plugin');
            n.requested[t] = !0, n.loaded[t] = r.fn.apply(i, [i.plugins.settings[t] || {}]), n.names.push(t)
        }, e.prototype.require = function(e) {
            var t = this,
                i = t.plugins;
            if (!t.plugins.loaded.hasOwnProperty(e)) {
                if (i.requested[e]) throw new Error('Plugin has circular dependency ("' + e + '")');
                t.loadPlugin(e)
            }
            return i.loaded[e]
        }, e.define = function(t, i) {
            e.plugins[t] = {
                name: t,
                fn: i
            }
        }
    };
    var t = {
        isArray: Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    };
    return e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : e.Selectize = t(e.jQuery, e.Sifter, e.MicroPlugin)
}(this, function(e, t, i) {
    "use strict";
    var n = function(e, t) {
            if ("string" != typeof t || t.length) {
                var i = "string" == typeof t ? new RegExp(t, "i") : t,
                    n = function(e) {
                        var t = 0;
                        if (3 === e.nodeType) {
                            var r = e.data.search(i);
                            if (r >= 0 && e.data.length > 0) {
                                var a = e.data.match(i),
                                    o = document.createElement("span");
                                o.className = "highlight";
                                var s = e.splitText(r),
                                    l = (s.splitText(a[0].length), s.cloneNode(!0));
                                o.appendChild(l), s.parentNode.replaceChild(o, s), t = 1
                            }
                        } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName))
                            for (var u = 0; u < e.childNodes.length; ++u) u += n(e.childNodes[u]);
                        return t
                    };
                return e.each(function() {
                    n(this)
                })
            }
        },
        r = function() {};
    r.prototype = {
        on: function(e, t) {
            this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(t)
        },
        off: function(e, t) {
            var i = arguments.length;
            return 0 === i ? delete this._events : 1 === i ? delete this._events[e] : (this._events = this._events || {}, void(e in this._events != !1 && this._events[e].splice(this._events[e].indexOf(t), 1)))
        },
        trigger: function(e) {
            if (this._events = this._events || {}, e in this._events != !1)
                for (var t = 0; t < this._events[e].length; t++) this._events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, r.mixin = function(e) {
        for (var t = ["on", "off", "trigger"], i = 0; i < t.length; i++) e.prototype[t[i]] = r.prototype[t[i]]
    };
    var a = /Mac/.test(navigator.userAgent),
        o = 65,
        s = 13,
        l = 27,
        u = 37,
        c = 38,
        d = 80,
        p = 39,
        f = 40,
        h = 78,
        m = 8,
        v = 46,
        g = 16,
        y = a ? 91 : 17,
        b = a ? 18 : 17,
        w = 9,
        x = 1,
        C = 2,
        F = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity,
        k = function(e) {
            return "undefined" != typeof e
        },
        O = function(e) {
            return "undefined" == typeof e || null === e ? null : "boolean" == typeof e ? e ? "1" : "0" : e + ""
        },
        E = function(e) {
            return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        $ = function(e) {
            return (e + "").replace(/\$/g, "$$$$")
        },
        P = {};
    P.before = function(e, t, i) {
        var n = e[t];
        e[t] = function() {
            return i.apply(e, arguments), n.apply(e, arguments)
        }
    }, P.after = function(e, t, i) {
        var n = e[t];
        e[t] = function() {
            var t = n.apply(e, arguments);
            return i.apply(e, arguments), t
        }
    };
    var A = function(e) {
            var t = !1;
            return function() {
                t || (t = !0, e.apply(this, arguments))
            }
        },
        S = function(e, t) {
            var i;
            return function() {
                var n = this,
                    r = arguments;
                window.clearTimeout(i), i = window.setTimeout(function() {
                    e.apply(n, r)
                }, t)
            }
        },
        T = function(e, t, i) {
            var n, r = e.trigger,
                a = {};
            e.trigger = function() {
                var i = arguments[0];
                return -1 === t.indexOf(i) ? r.apply(e, arguments) : void(a[i] = arguments)
            }, i.apply(e, []), e.trigger = r;
            for (n in a) a.hasOwnProperty(n) && r.apply(e, a[n])
        },
        _ = function(e, t, i, n) {
            e.on(t, i, function(t) {
                for (var i = t.target; i && i.parentNode !== e[0];) i = i.parentNode;
                return t.currentTarget = i, n.apply(this, [t])
            })
        },
        I = function(e) {
            var t = {};
            if ("selectionStart" in e) t.start = e.selectionStart, t.length = e.selectionEnd - t.start;
            else if (document.selection) {
                e.focus();
                var i = document.selection.createRange(),
                    n = document.selection.createRange().text.length;
                i.moveStart("character", -e.value.length), t.start = i.text.length - n, t.length = n
            }
            return t
        },
        D = function(e, t, i) {
            var n, r, a = {};
            if (i)
                for (n = 0, r = i.length; r > n; n++) a[i[n]] = e.css(i[n]);
            else a = e.css();
            t.css(a)
        },
        N = function(t, i) {
            if (!t) return 0;
            var n = e("<test>").css({
                position: "absolute",
                top: -99999,
                left: -99999,
                width: "auto",
                padding: 0,
                whiteSpace: "pre"
            }).text(t).appendTo("body");
            D(i, n, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
            var r = n.width();
            return n.remove(), r
        },
        q = function(e) {
            var t = null,
                i = function(i, n) {
                    var r, a, o, s, l, u, c, d;
                    i = i || window.event || {}, n = n || {}, i.metaKey || i.altKey || (n.force || e.data("grow") !== !1) && (r = e.val(), i.type && "keydown" === i.type.toLowerCase() && (a = i.keyCode, o = a >= 97 && 122 >= a || a >= 65 && 90 >= a || a >= 48 && 57 >= a || 32 === a, a === v || a === m ? (d = I(e[0]), d.length ? r = r.substring(0, d.start) + r.substring(d.start + d.length) : a === m && d.start ? r = r.substring(0, d.start - 1) + r.substring(d.start + 1) : a === v && "undefined" != typeof d.start && (r = r.substring(0, d.start) + r.substring(d.start + 1))) : o && (u = i.shiftKey, c = String.fromCharCode(i.keyCode), c = u ? c.toUpperCase() : c.toLowerCase(), r += c)), s = e.attr("placeholder"), !r && s && (r = s), l = N(r, e) + 4, l !== t && (t = l, e.width(l), e.triggerHandler("resize")))
                };
            e.on("keydown keyup update blur", i), i()
        },
        z = function(i, n) {
            var r, a, o, s, l = this;
            s = i[0], s.selectize = l;
            var u = window.getComputedStyle && window.getComputedStyle(s, null);
            if (o = u ? u.getPropertyValue("direction") : s.currentStyle && s.currentStyle.direction, o = o || i.parents("[dir]:first").attr("dir") || "", e.extend(l, {
                    order: 0,
                    settings: n,
                    $input: i,
                    tabIndex: i.attr("tabindex") || "",
                    tagType: "select" === s.tagName.toLowerCase() ? x : C,
                    rtl: /rtl/i.test(o),
                    eventNS: ".selectize" + ++z.count,
                    highlightedValue: null,
                    isOpen: !1,
                    isDisabled: !1,
                    isRequired: i.is("[required]"),
                    isInvalid: !1,
                    isLocked: !1,
                    isFocused: !1,
                    isInputHidden: !1,
                    isSetup: !1,
                    isShiftDown: !1,
                    isCmdDown: !1,
                    isCtrlDown: !1,
                    ignoreFocus: !1,
                    ignoreBlur: !1,
                    ignoreHover: !1,
                    hasOptions: !1,
                    currentResults: null,
                    lastValue: "",
                    caretPos: 0,
                    loading: 0,
                    loadedSearches: {},
                    $activeOption: null,
                    $activeItems: [],
                    optgroups: {},
                    options: {},
                    userOptions: {},
                    items: [],
                    renderCache: {},
                    onSearchChange: null === n.loadThrottle ? l.onSearchChange : S(l.onSearchChange, n.loadThrottle)
                }), l.sifter = new t(this.options, {
                    diacritics: n.diacritics
                }), l.settings.options) {
                for (r = 0, a = l.settings.options.length; a > r; r++) l.registerOption(l.settings.options[r]);
                delete l.settings.options
            }
            if (l.settings.optgroups) {
                for (r = 0, a = l.settings.optgroups.length; a > r; r++) l.registerOptionGroup(l.settings.optgroups[r]);
                delete l.settings.optgroups
            }
            l.settings.mode = l.settings.mode || (1 === l.settings.maxItems ? "single" : "multi"), "boolean" != typeof l.settings.hideSelected && (l.settings.hideSelected = "multi" === l.settings.mode), l.initializePlugins(l.settings.plugins), l.setupCallbacks(), l.setupTemplates(), l.setup()
        };
    return r.mixin(z), i.mixin(z), e.extend(z.prototype, {
        setup: function() {
            var t, i, n, r, o, s, l, u, c, d = this,
                p = d.settings,
                f = d.eventNS,
                h = e(window),
                m = e(document),
                v = d.$input;
            if (l = d.settings.mode, u = v.attr("class") || "", t = e("<div>").addClass(p.wrapperClass).addClass(u).addClass(l), i = e("<div>").addClass(p.inputClass).addClass("items").appendTo(t), n = e('<input type="text" autocomplete="off" />').appendTo(i).attr("tabindex", v.is(":disabled") ? "-1" : d.tabIndex), s = e(p.dropdownParent || t), r = e("<div>").addClass(p.dropdownClass).addClass(l).hide().appendTo(s), o = e("<div>").addClass(p.dropdownContentClass).appendTo(r), d.settings.copyClassesToDropdown && r.addClass(u), t.css({
                    width: v[0].style.width
                }), d.plugins.names.length && (c = "plugin-" + d.plugins.names.join(" plugin-"), t.addClass(c), r.addClass(c)), (null === p.maxItems || p.maxItems > 1) && d.tagType === x && v.attr("multiple", "multiple"), d.settings.placeholder && n.attr("placeholder", p.placeholder), !d.settings.splitOn && d.settings.delimiter) {
                var w = d.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                d.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
            }
            v.attr("autocorrect") && n.attr("autocorrect", v.attr("autocorrect")), v.attr("autocapitalize") && n.attr("autocapitalize", v.attr("autocapitalize")), d.$wrapper = t, d.$control = i, d.$control_input = n, d.$dropdown = r, d.$dropdown_content = o, r.on("mouseenter", "[data-selectable]", function() {
                return d.onOptionHover.apply(d, arguments)
            }), r.on("mousedown click", "[data-selectable]", function() {
                return d.onOptionSelect.apply(d, arguments)
            }), _(i, "mousedown", "*:not(input)", function() {
                return d.onItemSelect.apply(d, arguments)
            }), q(n), i.on({
                mousedown: function() {
                    return d.onMouseDown.apply(d, arguments)
                },
                click: function() {
                    return d.onClick.apply(d, arguments)
                }
            }), n.on({
                mousedown: function(e) {
                    e.stopPropagation()
                },
                keydown: function() {
                    return d.onKeyDown.apply(d, arguments)
                },
                keyup: function() {
                    return d.onKeyUp.apply(d, arguments)
                },
                keypress: function() {
                    return d.onKeyPress.apply(d, arguments)
                },
                resize: function() {
                    d.positionDropdown.apply(d, [])
                },
                blur: function() {
                    return d.onBlur.apply(d, arguments)
                },
                focus: function() {
                    return d.ignoreBlur = !1, d.onFocus.apply(d, arguments)
                },
                paste: function() {
                    return d.onPaste.apply(d, arguments)
                }
            }), m.on("keydown" + f, function(e) {
                d.isCmdDown = e[a ? "metaKey" : "ctrlKey"], d.isCtrlDown = e[a ? "altKey" : "ctrlKey"], d.isShiftDown = e.shiftKey
            }), m.on("keyup" + f, function(e) {
                e.keyCode === b && (d.isCtrlDown = !1), e.keyCode === g && (d.isShiftDown = !1), e.keyCode === y && (d.isCmdDown = !1)
            }), m.on("mousedown" + f, function(e) {
                if (d.isFocused) {
                    if (e.target === d.$dropdown[0] || e.target.parentNode === d.$dropdown[0]) return !1;
                    d.$control.has(e.target).length || e.target === d.$control[0] || d.blur(e.target)
                }
            }), h.on(["scroll" + f, "resize" + f].join(" "), function() {
                d.isOpen && d.positionDropdown.apply(d, arguments)
            }), h.on("mousemove" + f, function() {
                d.ignoreHover = !1
            }), this.revertSettings = {
                $children: v.children().detach(),
                tabindex: v.attr("tabindex")
            }, v.attr("tabindex", -1).hide().after(d.$wrapper), e.isArray(p.items) && (d.setValue(p.items), delete p.items), F && v.on("invalid" + f, function(e) {
                e.preventDefault(), d.isInvalid = !0, d.refreshState()
            }), d.updateOriginalInput(), d.refreshItems(), d.refreshState(), d.updatePlaceholder(), d.isSetup = !0, v.is(":disabled") && d.disable(), d.on("change", this.onChange), v.data("selectize", d), v.addClass("selectized"), d.trigger("initialize"), p.preload === !0 && d.onSearchChange("")
        },
        setupTemplates: function() {
            var t = this,
                i = t.settings.labelField,
                n = t.settings.optgroupLabelField,
                r = {
                    optgroup: function(e) {
                        return '<div class="optgroup">' + e.html + "</div>"
                    },
                    optgroup_header: function(e, t) {
                        return '<div class="optgroup-header">' + t(e[n]) + "</div>"
                    },
                    option: function(e, t) {
                        return '<div class="option">' + t(e[i]) + "</div>"
                    },
                    item: function(e, t) {
                        return '<div class="item">' + t(e[i]) + "</div>"
                    },
                    option_create: function(e, t) {
                        return '<div class="create">Add <strong>' + t(e.input) + "</strong>&hellip;</div>"
                    }
                };
            t.settings.render = e.extend({}, r, t.settings.render)
        },
        setupCallbacks: function() {
            var e, t, i = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                optgroup_add: "onOptionGroupAdd",
                optgroup_remove: "onOptionGroupRemove",
                optgroup_clear: "onOptionGroupClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType",
                load: "onLoad",
                focus: "onFocus",
                blur: "onBlur"
            };
            for (e in i) i.hasOwnProperty(e) && (t = this.settings[i[e]], t && this.on(e, t))
        },
        onClick: function(e) {
            var t = this;
            t.isFocused || (t.focus(), e.preventDefault())
        },
        onMouseDown: function(t) {
            var i = this,
                n = t.isDefaultPrevented();
            e(t.target);
            if (i.isFocused) {
                if (t.target !== i.$control_input[0]) return "single" === i.settings.mode ? i.isOpen ? i.close() : i.open() : n || i.setActiveItem(null), !1
            } else n || window.setTimeout(function() {
                i.focus()
            }, 0)
        },
        onChange: function() {
            this.$input.trigger("change")
        },
        onPaste: function(t) {
            var i = this;
            i.isFull() || i.isInputHidden || i.isLocked ? t.preventDefault() : i.settings.splitOn && setTimeout(function() {
                for (var t = e.trim(i.$control_input.val() || "").split(i.settings.splitOn), n = 0, r = t.length; r > n; n++) i.createItem(t[n])
            }, 0)
        },
        onKeyPress: function(e) {
            if (this.isLocked) return e && e.preventDefault();
            var t = String.fromCharCode(e.keyCode || e.which);
            return this.settings.create && "multi" === this.settings.mode && t === this.settings.delimiter ? (this.createItem(), e.preventDefault(), !1) : void 0
        },
        onKeyDown: function(e) {
            var t = (e.target === this.$control_input[0], this);
            if (t.isLocked) return void(e.keyCode !== w && e.preventDefault());
            switch (e.keyCode) {
                case o:
                    if (t.isCmdDown) return void t.selectAll();
                    break;
                case l:
                    return void(t.isOpen && (e.preventDefault(), e.stopPropagation(), t.close()));
                case h:
                    if (!e.ctrlKey || e.altKey) break;
                case f:
                    if (!t.isOpen && t.hasOptions) t.open();
                    else if (t.$activeOption) {
                        t.ignoreHover = !0;
                        var i = t.getAdjacentOption(t.$activeOption, 1);
                        i.length && t.setActiveOption(i, !0, !0)
                    }
                    return void e.preventDefault();
                case d:
                    if (!e.ctrlKey || e.altKey) break;
                case c:
                    if (t.$activeOption) {
                        t.ignoreHover = !0;
                        var n = t.getAdjacentOption(t.$activeOption, -1);
                        n.length && t.setActiveOption(n, !0, !0)
                    }
                    return void e.preventDefault();
                case s:
                    return void(t.isOpen && t.$activeOption && (t.onOptionSelect({
                        currentTarget: t.$activeOption
                    }), e.preventDefault()));
                case u:
                    return void t.advanceSelection(-1, e);
                case p:
                    return void t.advanceSelection(1, e);
                case w:
                    return t.settings.selectOnTab && t.isOpen && t.$activeOption && (t.onOptionSelect({
                        currentTarget: t.$activeOption
                    }), t.isFull() || e.preventDefault()), void(t.settings.create && t.createItem() && e.preventDefault());
                case m:
                case v:
                    return void t.deleteSelection(e)
            }
            return !t.isFull() && !t.isInputHidden || (a ? e.metaKey : e.ctrlKey) ? void 0 : void e.preventDefault()
        },
        onKeyUp: function(e) {
            var t = this;
            if (t.isLocked) return e && e.preventDefault();
            var i = t.$control_input.val() || "";
            t.lastValue !== i && (t.lastValue = i, t.onSearchChange(i), t.refreshOptions(), t.trigger("type", i))
        },
        onSearchChange: function(e) {
            var t = this,
                i = t.settings.load;
            i && (t.loadedSearches.hasOwnProperty(e) || (t.loadedSearches[e] = !0, t.load(function(n) {
                i.apply(t, [e, n])
            })))
        },
        onFocus: function(e) {
            var t = this,
                i = t.isFocused;
            return t.isDisabled ? (t.blur(), e && e.preventDefault(), !1) : void(t.ignoreFocus || (t.isFocused = !0, "focus" === t.settings.preload && t.onSearchChange(""), i || t.trigger("focus"), t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions(!!t.settings.openOnFocus)), t.refreshState()))
        },
        onBlur: function(e, t) {
            var i = this;
            if (i.isFocused && (i.isFocused = !1, !i.ignoreFocus)) {
                if (!i.ignoreBlur && document.activeElement === i.$dropdown_content[0]) return i.ignoreBlur = !0, void i.onFocus(e);
                var n = function() {
                    i.close(), i.setTextboxValue(""), i.setActiveItem(null), i.setActiveOption(null), i.setCaret(i.items.length), i.refreshState(), (t || document.body).focus(), i.ignoreFocus = !1, i.trigger("blur")
                };
                i.ignoreFocus = !0, i.settings.create && i.settings.createOnBlur ? i.createItem(null, !1, n) : n()
            }
        },
        onOptionHover: function(e) {
            this.ignoreHover || this.setActiveOption(e.currentTarget, !1)
        },
        onOptionSelect: function(t) {
            var i, n, r = this;
            t.preventDefault && (t.preventDefault(), t.stopPropagation()), n = e(t.currentTarget), n.hasClass("create") ? r.createItem(null, function() {
                r.settings.closeAfterSelect && r.close()
            }) : (i = n.attr("data-value"), "undefined" != typeof i && (r.lastQuery = null, r.setTextboxValue(""), r.addItem(i), r.settings.closeAfterSelect ? r.close() : !r.settings.hideSelected && t.type && /mouse/.test(t.type) && r.setActiveOption(r.getOption(i))))
        },
        onItemSelect: function(e) {
            var t = this;
            t.isLocked || "multi" === t.settings.mode && (e.preventDefault(), t.setActiveItem(e.currentTarget, e))
        },
        load: function(e) {
            var t = this,
                i = t.$wrapper.addClass(t.settings.loadingClass);
            t.loading++, e.apply(t, [function(e) {
                t.loading = Math.max(t.loading - 1, 0), e && e.length && (t.addOption(e), t.refreshOptions(t.isFocused && !t.isInputHidden)), t.loading || i.removeClass(t.settings.loadingClass), t.trigger("load", e)
            }])
        },
        setTextboxValue: function(e) {
            var t = this.$control_input,
                i = t.val() !== e;
            i && (t.val(e).triggerHandler("update"), this.lastValue = e)
        },
        getValue: function() {
            return this.tagType === x && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
        },
        setValue: function(e, t) {
            var i = t ? [] : ["change"];
            T(this, i, function() {
                this.clear(), this.addItems(e, t)
            })
        },
        setActiveItem: function(t, i) {
            var n, r, a, o, s, l, u, c, d = this;
            if ("single" !== d.settings.mode) {
                if (t = e(t), !t.length) return e(d.$activeItems).removeClass("active"), d.$activeItems = [], void(d.isFocused && d.showInput());
                if (n = i && i.type.toLowerCase(), "mousedown" === n && d.isShiftDown && d.$activeItems.length) {
                    for (c = d.$control.children(".active:last"), o = Array.prototype.indexOf.apply(d.$control[0].childNodes, [c[0]]), s = Array.prototype.indexOf.apply(d.$control[0].childNodes, [t[0]]), o > s && (u = o, o = s, s = u), r = o; s >= r; r++) l = d.$control[0].childNodes[r], -1 === d.$activeItems.indexOf(l) && (e(l).addClass("active"), d.$activeItems.push(l));
                    i.preventDefault()
                } else "mousedown" === n && d.isCtrlDown || "keydown" === n && this.isShiftDown ? t.hasClass("active") ? (a = d.$activeItems.indexOf(t[0]), d.$activeItems.splice(a, 1), t.removeClass("active")) : d.$activeItems.push(t.addClass("active")[0]) : (e(d.$activeItems).removeClass("active"), d.$activeItems = [t.addClass("active")[0]]);
                d.hideInput(), this.isFocused || d.focus()
            }
        },
        setActiveOption: function(t, i, n) {
            var r, a, o, s, l, u = this;
            u.$activeOption && u.$activeOption.removeClass("active"), u.$activeOption = null, t = e(t), t.length && (u.$activeOption = t.addClass("active"), (i || !k(i)) && (r = u.$dropdown_content.height(), a = u.$activeOption.outerHeight(!0), i = u.$dropdown_content.scrollTop() || 0, o = u.$activeOption.offset().top - u.$dropdown_content.offset().top + i, s = o, l = o - r + a, o + a > r + i ? u.$dropdown_content.stop().animate({
                scrollTop: l
            }, n ? u.settings.scrollDuration : 0) : i > o && u.$dropdown_content.stop().animate({
                scrollTop: s
            }, n ? u.settings.scrollDuration : 0)))
        },
        selectAll: function() {
            var e = this;
            "single" !== e.settings.mode && (e.$activeItems = Array.prototype.slice.apply(e.$control.children(":not(input)").addClass("active")), e.$activeItems.length && (e.hideInput(), e.close()), e.focus())
        },
        hideInput: function() {
            var e = this;
            e.setTextboxValue(""), e.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: e.rtl ? 1e4 : -1e4
            }), e.isInputHidden = !0
        },
        showInput: function() {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            }), this.isInputHidden = !1
        },
        focus: function() {
            var e = this;
            e.isDisabled || (e.ignoreFocus = !0, e.$control_input[0].focus(), window.setTimeout(function() {
                e.ignoreFocus = !1, e.onFocus()
            }, 0))
        },
        blur: function(e) {
            this.$control_input[0].blur(), this.onBlur(null, e)
        },
        getScoreFunction: function(e) {
            return this.sifter.getScoreFunction(e, this.getSearchOptions())
        },
        getSearchOptions: function() {
            var e = this.settings,
                t = e.sortField;
            return "string" == typeof t && (t = [{
                field: t
            }]), {
                fields: e.searchField,
                conjunction: e.searchConjunction,
                sort: t
            }
        },
        search: function(t) {
            var i, n, r, a = this,
                o = a.settings,
                s = this.getSearchOptions();
            if (o.score && (r = a.settings.score.apply(this, [t]), "function" != typeof r)) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (t !== a.lastQuery ? (a.lastQuery = t, n = a.sifter.search(t, e.extend(s, {
                    score: r
                })), a.currentResults = n) : n = e.extend(!0, {}, a.currentResults), o.hideSelected)
                for (i = n.items.length - 1; i >= 0; i--) - 1 !== a.items.indexOf(O(n.items[i].id)) && n.items.splice(i, 1);
            return n
        },
        refreshOptions: function(t) {
            var i, r, a, o, s, l, u, c, d, p, f, h, m, v, g, y;
            "undefined" == typeof t && (t = !0);
            var b = this,
                w = e.trim(b.$control_input.val()),
                x = b.search(w),
                C = b.$dropdown_content,
                F = b.$activeOption && O(b.$activeOption.attr("data-value"));
            for (o = x.items.length, "number" == typeof b.settings.maxOptions && (o = Math.min(o, b.settings.maxOptions)), s = {}, l = [], i = 0; o > i; i++)
                for (u = b.options[x.items[i].id], c = b.render("option", u), d = u[b.settings.optgroupField] || "", p = e.isArray(d) ? d : [d], r = 0, a = p && p.length; a > r; r++) d = p[r], b.optgroups.hasOwnProperty(d) || (d = ""), s.hasOwnProperty(d) || (s[d] = [], l.push(d)), s[d].push(c);
            for (this.settings.lockOptgroupOrder && l.sort(function(e, t) {
                    var i = b.optgroups[e].$order || 0,
                        n = b.optgroups[t].$order || 0;
                    return i - n
                }), f = [], i = 0, o = l.length; o > i; i++) d = l[i], b.optgroups.hasOwnProperty(d) && s[d].length ? (h = b.render("optgroup_header", b.optgroups[d]) || "", h += s[d].join(""), f.push(b.render("optgroup", e.extend({}, b.optgroups[d], {
                html: h
            })))) : f.push(s[d].join(""));
            if (C.html(f.join("")), b.settings.highlight && x.query.length && x.tokens.length)
                for (i = 0, o = x.tokens.length; o > i; i++) n(C, x.tokens[i].regex);
            if (!b.settings.hideSelected)
                for (i = 0, o = b.items.length; o > i; i++) b.getOption(b.items[i]).addClass("selected");
            m = b.canCreate(w), m && (C.prepend(b.render("option_create", {
                input: w
            })), y = e(C[0].childNodes[0])), b.hasOptions = x.items.length > 0 || m, b.hasOptions ? (x.items.length > 0 ? (g = F && b.getOption(F), g && g.length ? v = g : "single" === b.settings.mode && b.items.length && (v = b.getOption(b.items[0])), v && v.length || (v = y && !b.settings.addPrecedence ? b.getAdjacentOption(y, 1) : C.find("[data-selectable]:first"))) : v = y, b.setActiveOption(v), t && !b.isOpen && b.open()) : (b.setActiveOption(null), t && b.isOpen && b.close())
        },
        addOption: function(t) {
            var i, n, r, a = this;
            if (e.isArray(t))
                for (i = 0, n = t.length; n > i; i++) a.addOption(t[i]);
            else(r = a.registerOption(t)) && (a.userOptions[r] = !0, a.lastQuery = null, a.trigger("option_add", r, t))
        },
        registerOption: function(e) {
            var t = O(e[this.settings.valueField]);
            return !t || this.options.hasOwnProperty(t) ? !1 : (e.$order = e.$order || ++this.order, this.options[t] = e, t)
        },
        registerOptionGroup: function(e) {
            var t = O(e[this.settings.optgroupValueField]);
            return t ? (e.$order = e.$order || ++this.order, this.optgroups[t] = e, t) : !1
        },
        addOptionGroup: function(e, t) {
            t[this.settings.optgroupValueField] = e, (e = this.registerOptionGroup(t)) && this.trigger("optgroup_add", e, t)
        },
        removeOptionGroup: function(e) {
            this.optgroups.hasOwnProperty(e) && (delete this.optgroups[e], this.renderCache = {}, this.trigger("optgroup_remove", e))
        },
        clearOptionGroups: function() {
            this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
        },
        updateOption: function(t, i) {
            var n, r, a, o, s, l, u, c = this;
            if (t = O(t), a = O(i[c.settings.valueField]), null !== t && c.options.hasOwnProperty(t)) {
                if ("string" != typeof a) throw new Error("Value must be set in option data");
                u = c.options[t].$order, a !== t && (delete c.options[t], o = c.items.indexOf(t), -1 !== o && c.items.splice(o, 1, a)), i.$order = i.$order || u, c.options[a] = i, s = c.renderCache.item, l = c.renderCache.option, s && (delete s[t], delete s[a]), l && (delete l[t], delete l[a]), -1 !== c.items.indexOf(a) && (n = c.getItem(t), r = e(c.render("item", i)), n.hasClass("active") && r.addClass("active"), n.replaceWith(r)), c.lastQuery = null, c.isOpen && c.refreshOptions(!1)
            }
        },
        removeOption: function(e, t) {
            var i = this;
            e = O(e);
            var n = i.renderCache.item,
                r = i.renderCache.option;
            n && delete n[e], r && delete r[e], delete i.userOptions[e], delete i.options[e], i.lastQuery = null, i.trigger("option_remove", e), i.removeItem(e, t)
        },
        clearOptions: function() {
            var e = this;
            e.loadedSearches = {}, e.userOptions = {}, e.renderCache = {}, e.options = e.sifter.items = {}, e.lastQuery = null, e.trigger("option_clear"), e.clear()
        },
        getOption: function(e) {
            return this.getElementWithValue(e, this.$dropdown_content.find("[data-selectable]"))
        },
        getAdjacentOption: function(t, i) {
            var n = this.$dropdown.find("[data-selectable]"),
                r = n.index(t) + i;
            return r >= 0 && r < n.length ? n.eq(r) : e()
        },
        getElementWithValue: function(t, i) {
            if (t = O(t), "undefined" != typeof t && null !== t)
                for (var n = 0, r = i.length; r > n; n++)
                    if (i[n].getAttribute("data-value") === t) return e(i[n]);
            return e()
        },
        getItem: function(e) {
            return this.getElementWithValue(e, this.$control.children())
        },
        addItems: function(t, i) {
            for (var n = e.isArray(t) ? t : [t], r = 0, a = n.length; a > r; r++) this.isPending = a - 1 > r, this.addItem(n[r], i)
        },
        addItem: function(t, i) {
            var n = i ? [] : ["change"];
            T(this, n, function() {
                var n, r, a, o, s, l = this,
                    u = l.settings.mode;
                return t = O(t), -1 !== l.items.indexOf(t) ? void("single" === u && l.close()) : void(l.options.hasOwnProperty(t) && ("single" === u && l.clear(), "multi" === u && l.isFull() || (n = e(l.render("item", l.options[t])), s = l.isFull(), l.items.splice(l.caretPos, 0, t), l.insertAtCaret(n), (!l.isPending || !s && l.isFull()) && l.refreshState(), l.isSetup && (a = l.$dropdown_content.find("[data-selectable]"), l.isPending || (r = l.getOption(t), o = l.getAdjacentOption(r, 1).attr("data-value"), l.refreshOptions(l.isFocused && "single" !== u), o && l.setActiveOption(l.getOption(o))), !a.length || l.isFull() ? l.close() : l.positionDropdown(), l.updatePlaceholder(), l.trigger("item_add", t, n), l.updateOriginalInput({
                    silent: i
                })))))
            })
        },
        removeItem: function(e, t) {
            var i, n, r, a = this;
            i = "object" == typeof e ? e : a.getItem(e), e = O(i.attr("data-value")), n = a.items.indexOf(e), -1 !== n && (i.remove(), i.hasClass("active") && (r = a.$activeItems.indexOf(i[0]), a.$activeItems.splice(r, 1)), a.items.splice(n, 1), a.lastQuery = null, !a.settings.persist && a.userOptions.hasOwnProperty(e) && a.removeOption(e, t), n < a.caretPos && a.setCaret(a.caretPos - 1), a.refreshState(), a.updatePlaceholder(), a.updateOriginalInput({
                silent: t
            }), a.positionDropdown(), a.trigger("item_remove", e, i))
        },
        createItem: function(t, i) {
            var n = this,
                r = n.caretPos;
            t = t || e.trim(n.$control_input.val() || "");
            var a = arguments[arguments.length - 1];
            if ("function" != typeof a && (a = function() {}), "boolean" != typeof i && (i = !0), !n.canCreate(t)) return a(), !1;
            n.lock();
            var o = "function" == typeof n.settings.create ? this.settings.create : function(e) {
                    var t = {};
                    return t[n.settings.labelField] = e, t[n.settings.valueField] = e, t
                },
                s = A(function(e) {
                    if (n.unlock(), !e || "object" != typeof e) return a();
                    var t = O(e[n.settings.valueField]);
                    return "string" != typeof t ? a() : (n.setTextboxValue(""), n.addOption(e), n.setCaret(r), n.addItem(t), n.refreshOptions(i && "single" !== n.settings.mode), void a(e))
                }),
                l = o.apply(this, [t, s]);
            return "undefined" != typeof l && s(l), !0
        },
        refreshItems: function() {
            this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
        },
        refreshState: function() {
            var e, t = this;
            t.isRequired && (t.items.length && (t.isInvalid = !1), t.$control_input.prop("required", e)), t.refreshClasses()
        },
        refreshClasses: function() {
            var t = this,
                i = t.isFull(),
                n = t.isLocked;
            t.$wrapper.toggleClass("rtl", t.rtl), t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", n).toggleClass("full", i).toggleClass("not-full", !i).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !e.isEmptyObject(t.options)).toggleClass("has-items", t.items.length > 0), t.$control_input.data("grow", !i && !n)
        },
        isFull: function() {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
        },
        updateOriginalInput: function(e) {
            var t, i, n, r, a = this;
            if (e = e || {}, a.tagType === x) {
                for (n = [], t = 0, i = a.items.length; i > t; t++) r = a.options[a.items[t]][a.settings.labelField] || "", n.push('<option value="' + E(a.items[t]) + '" selected="selected">' + E(r) + "</option>");
                n.length || this.$input.attr("multiple") || n.push('<option value="" selected="selected"></option>'), a.$input.html(n.join(""))
            } else a.$input.val(a.getValue()), a.$input.attr("value", a.$input.val());
            a.isSetup && (e.silent || a.trigger("change", a.$input.val()))
        },
        updatePlaceholder: function() {
            if (this.settings.placeholder) {
                var e = this.$control_input;
                this.items.length ? e.removeAttr("placeholder") : e.attr("placeholder", this.settings.placeholder), e.triggerHandler("update", {
                    force: !0
                })
            }
        },
        open: function() {
            var e = this;
            e.isLocked || e.isOpen || "multi" === e.settings.mode && e.isFull() || (e.focus(), e.isOpen = !0, e.refreshState(), e.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }), e.positionDropdown(), e.$dropdown.css({
                visibility: "visible"
            }), e.trigger("dropdown_open", e.$dropdown))
        },
        close: function() {
            var e = this,
                t = e.isOpen;
            "single" === e.settings.mode && e.items.length && e.hideInput(), e.isOpen = !1, e.$dropdown.hide(), e.setActiveOption(null), e.refreshState(), t && e.trigger("dropdown_close", e.$dropdown)
        },
        positionDropdown: function() {
            var e = this.$control,
                t = "body" === this.settings.dropdownParent ? e.offset() : e.position();
            t.top += e.outerHeight(!0), this.$dropdown.css({
                width: e.outerWidth(),
                top: t.top,
                left: t.left
            })
        },
        clear: function(e) {
            var t = this;
            t.items.length && (t.$control.children(":not(input)").remove(), t.items = [], t.lastQuery = null, t.setCaret(0), t.setActiveItem(null), t.updatePlaceholder(), t.updateOriginalInput({
                silent: e
            }), t.refreshState(), t.showInput(), t.trigger("clear"))
        },
        insertAtCaret: function(t) {
            var i = Math.min(this.caretPos, this.items.length);
            0 === i ? this.$control.prepend(t) : e(this.$control[0].childNodes[i]).before(t), this.setCaret(i + 1)
        },
        deleteSelection: function(t) {
            var i, n, r, a, o, s, l, u, c, d = this;
            if (r = t && t.keyCode === m ? -1 : 1, a = I(d.$control_input[0]), d.$activeOption && !d.settings.hideSelected && (l = d.getAdjacentOption(d.$activeOption, -1).attr("data-value")), o = [], d.$activeItems.length) {
                for (c = d.$control.children(".active:" + (r > 0 ? "last" : "first")), s = d.$control.children(":not(input)").index(c), r > 0 && s++, i = 0, n = d.$activeItems.length; n > i; i++) o.push(e(d.$activeItems[i]).attr("data-value"));
                t && (t.preventDefault(), t.stopPropagation())
            } else(d.isFocused || "single" === d.settings.mode) && d.items.length && (0 > r && 0 === a.start && 0 === a.length ? o.push(d.items[d.caretPos - 1]) : r > 0 && a.start === d.$control_input.val().length && o.push(d.items[d.caretPos]));
            if (!o.length || "function" == typeof d.settings.onDelete && d.settings.onDelete.apply(d, [o]) === !1) return !1;
            for ("undefined" != typeof s && d.setCaret(s); o.length;) d.removeItem(o.pop());
            return d.showInput(), d.positionDropdown(), d.refreshOptions(!0), l && (u = d.getOption(l), u.length && d.setActiveOption(u)), !0
        },
        advanceSelection: function(e, t) {
            var i, n, r, a, o, s, l = this;
            0 !== e && (l.rtl && (e *= -1), i = e > 0 ? "last" : "first", n = I(l.$control_input[0]), l.isFocused && !l.isInputHidden ? (a = l.$control_input.val().length, o = 0 > e ? 0 === n.start && 0 === n.length : n.start === a, o && !a && l.advanceCaret(e, t)) : (s = l.$control.children(".active:" + i), s.length && (r = l.$control.children(":not(input)").index(s), l.setActiveItem(null), l.setCaret(e > 0 ? r + 1 : r))))
        },
        advanceCaret: function(e, t) {
            var i, n, r = this;
            0 !== e && (i = e > 0 ? "next" : "prev", r.isShiftDown ? (n = r.$control_input[i](), n.length && (r.hideInput(), r.setActiveItem(n), t && t.preventDefault())) : r.setCaret(r.caretPos + e))
        },
        setCaret: function(t) {
            var i = this;
            if (t = "single" === i.settings.mode ? i.items.length : Math.max(0, Math.min(i.items.length, t)), !i.isPending) {
                var n, r, a, o;
                for (a = i.$control.children(":not(input)"), n = 0, r = a.length; r > n; n++) o = e(a[n]).detach(), t > n ? i.$control_input.before(o) : i.$control.append(o)
            }
            i.caretPos = t
        },
        lock: function() {
            this.close(), this.isLocked = !0, this.refreshState()
        },
        unlock: function() {
            this.isLocked = !1, this.refreshState()
        },
        disable: function() {
            var e = this;
            e.$input.prop("disabled", !0), e.$control_input.prop("disabled", !0).prop("tabindex", -1), e.isDisabled = !0, e.lock()
        },
        enable: function() {
            var e = this;
            e.$input.prop("disabled", !1), e.$control_input.prop("disabled", !1).prop("tabindex", e.tabIndex), e.isDisabled = !1, e.unlock()
        },
        destroy: function() {
            var t = this,
                i = t.eventNS,
                n = t.revertSettings;
            t.trigger("destroy"), t.off(), t.$wrapper.remove(), t.$dropdown.remove(), t.$input.html("").append(n.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: n.tabindex
            }).show(), t.$control_input.removeData("grow"), t.$input.removeData("selectize"), e(window).off(i), e(document).off(i), e(document.body).off(i), delete t.$input[0].selectize
        },
        render: function(e, t) {
            var i, n, r = "",
                a = !1,
                o = this,
                s = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
            return ("option" === e || "item" === e) && (i = O(t[o.settings.valueField]), a = !!i), a && (k(o.renderCache[e]) || (o.renderCache[e] = {}), o.renderCache[e].hasOwnProperty(i)) ? o.renderCache[e][i] : (r = o.settings.render[e].apply(this, [t, E]), ("option" === e || "option_create" === e) && (r = r.replace(s, "<$1 data-selectable")), "optgroup" === e && (n = t[o.settings.optgroupValueField] || "", r = r.replace(s, '<$1 data-group="' + $(E(n)) + '"')), ("option" === e || "item" === e) && (r = r.replace(s, '<$1 data-value="' + $(E(i || "")) + '"')), a && (o.renderCache[e][i] = r), r)
        },
        clearCache: function(e) {
            var t = this;
            "undefined" == typeof e ? t.renderCache = {} : delete t.renderCache[e]
        },
        canCreate: function(e) {
            var t = this;
            if (!t.settings.create) return !1;
            var i = t.settings.createFilter;
            return e.length && ("function" != typeof i || i.apply(t, [e])) && ("string" != typeof i || new RegExp(i).test(e)) && (!(i instanceof RegExp) || i.test(e))
        }
    }), z.count = 0, z.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
    }, e.fn.selectize = function(t) {
        var i = e.fn.selectize.defaults,
            n = e.extend({}, i, t),
            r = n.dataAttr,
            a = n.labelField,
            o = n.valueField,
            s = n.optgroupField,
            l = n.optgroupLabelField,
            u = n.optgroupValueField,
            c = {},
            d = function(t, i) {
                var s, l, u, c, d = t.attr(r);
                if (d)
                    for (i.options = JSON.parse(d), s = 0, l = i.options.length; l > s; s++) i.items.push(i.options[s][o]);
                else {
                    var p = e.trim(t.val() || "");
                    if (!n.allowEmptyOption && !p.length) return;
                    for (u = p.split(n.delimiter), s = 0, l = u.length; l > s; s++) c = {}, c[a] = u[s], c[o] = u[s], i.options.push(c);
                    i.items = u
                }
            },
            p = function(t, i) {
                var d, p, f, h, m = i.options,
                    v = function(e) {
                        var t = r && e.attr(r);
                        return "string" == typeof t && t.length ? JSON.parse(t) : null
                    },
                    g = function(t, r) {
                        t = e(t);
                        var l = O(t.attr("value"));
                        if (l || n.allowEmptyOption)
                            if (c.hasOwnProperty(l)) {
                                if (r) {
                                    var u = c[l][s];
                                    u ? e.isArray(u) ? u.push(r) : c[l][s] = [u, r] : c[l][s] = r
                                }
                            } else {
                                var d = v(t) || {};
                                d[a] = d[a] || t.text(), d[o] = d[o] || l, d[s] = d[s] || r, c[l] = d, m.push(d), t.is(":selected") && i.items.push(l)
                            }
                    },
                    y = function(t) {
                        var n, r, a, o, s;
                        for (t = e(t), a = t.attr("label"), a && (o = v(t) || {}, o[l] = a, o[u] = a, i.optgroups.push(o)), s = e("option", t), n = 0, r = s.length; r > n; n++) g(s[n], a)
                    };
                for (i.maxItems = t.attr("multiple") ? null : 1, h = t.children(), d = 0, p = h.length; p > d; d++) f = h[d].tagName.toLowerCase(), "optgroup" === f ? y(h[d]) : "option" === f && g(h[d])
            };
        return this.each(function() {
            if (!this.selectize) {
                var r, a = e(this),
                    o = this.tagName.toLowerCase(),
                    s = a.attr("placeholder") || a.attr("data-placeholder");
                s || n.allowEmptyOption || (s = a.children('option[value=""]').text());
                var l = {
                    placeholder: s,
                    options: [],
                    optgroups: [],
                    items: []
                };
                "select" === o ? p(a, l) : d(a, l), r = new z(a, e.extend(!0, {}, i, l, t))
            }
        })
    }, e.fn.selectize.defaults = z.defaults, e.fn.selectize.support = {
        validity: F
    }, z.define("drag_drop", function(t) {
        if (!e.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var i = this;
            i.lock = function() {
                var e = i.lock;
                return function() {
                    var t = i.$control.data("sortable");
                    return t && t.disable(), e.apply(i, arguments)
                }
            }(), i.unlock = function() {
                var e = i.unlock;
                return function() {
                    var t = i.$control.data("sortable");
                    return t && t.enable(), e.apply(i, arguments)
                }
            }(), i.setup = function() {
                var t = i.setup;
                return function() {
                    t.apply(this, arguments);
                    var n = i.$control.sortable({
                        items: "[data-value]",
                        forcePlaceholderSize: !0,
                        disabled: i.isLocked,
                        start: function(e, t) {
                            t.placeholder.css("width", t.helper.css("width")), n.css({
                                overflow: "visible"
                            })
                        },
                        stop: function() {
                            n.css({
                                overflow: "hidden"
                            });
                            var t = i.$activeItems ? i.$activeItems.slice() : null,
                                r = [];
                            n.children("[data-value]").each(function() {
                                r.push(e(this).attr("data-value"))
                            }), i.setValue(r), i.setActiveItem(t)
                        }
                    })
                }
            }()
        }
    }), z.define("dropdown_header", function(t) {
        var i = this;
        t = e.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function(e) {
                return '<div class="' + e.headerClass + '"><div class="' + e.titleRowClass + '"><span class="' + e.labelClass + '">' + e.title + '</span><a href="javascript:void(0)" class="' + e.closeClass + '">&times;</a></div></div>'
            }
        }, t), i.setup = function() {
            var n = i.setup;
            return function() {
                n.apply(i, arguments), i.$dropdown_header = e(t.html(t)), i.$dropdown.prepend(i.$dropdown_header)
            }
        }()
    }), z.define("optgroup_columns", function(t) {
        var i = this;
        t = e.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, t), this.getAdjacentOption = function(t, i) {
            var n = t.closest("[data-group]").find("[data-selectable]"),
                r = n.index(t) + i;
            return r >= 0 && r < n.length ? n.eq(r) : e()
        }, this.onKeyDown = function() {
            var e = i.onKeyDown;
            return function(t) {
                var n, r, a, o;
                return !this.isOpen || t.keyCode !== u && t.keyCode !== p ? e.apply(this, arguments) : (i.ignoreHover = !0, o = this.$activeOption.closest("[data-group]"), n = o.find("[data-selectable]").index(this.$activeOption), o = t.keyCode === u ? o.prev("[data-group]") : o.next("[data-group]"),
                    a = o.find("[data-selectable]"), r = a.eq(Math.min(a.length - 1, n)), void(r.length && this.setActiveOption(r)))
            }
        }();
        var n = function() {
                var e, t = n.width,
                    i = document;
                return "undefined" == typeof t && (e = i.createElement("div"), e.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', e = e.firstChild, i.body.appendChild(e), t = n.width = e.offsetWidth - e.clientWidth, i.body.removeChild(e)), t
            },
            r = function() {
                var r, a, o, s, l, u, c;
                if (c = e("[data-group]", i.$dropdown_content), a = c.length, a && i.$dropdown_content.width()) {
                    if (t.equalizeHeight) {
                        for (o = 0, r = 0; a > r; r++) o = Math.max(o, c.eq(r).height());
                        c.css({
                            height: o
                        })
                    }
                    t.equalizeWidth && (u = i.$dropdown_content.innerWidth() - n(), s = Math.round(u / a), c.css({
                        width: s
                    }), a > 1 && (l = u - s * (a - 1), c.eq(a - 1).css({
                        width: l
                    })))
                }
            };
        (t.equalizeHeight || t.equalizeWidth) && (P.after(this, "positionDropdown", r), P.after(this, "refreshOptions", r))
    }), z.define("remove_button", function(t) {
        if ("single" !== this.settings.mode) {
            t = e.extend({
                label: "&times;",
                title: "Remove",
                className: "remove",
                append: !0
            }, t);
            var i = this,
                n = '<a href="javascript:void(0)" class="' + t.className + '" tabindex="-1" title="' + E(t.title) + '">' + t.label + "</a>",
                r = function(e, t) {
                    var i = e.search(/(<\/[^>]+>\s*)$/);
                    return e.substring(0, i) + t + e.substring(i)
                };
            this.setup = function() {
                var a = i.setup;
                return function() {
                    if (t.append) {
                        var o = i.settings.render.item;
                        i.settings.render.item = function(e) {
                            return r(o.apply(this, arguments), n)
                        }
                    }
                    a.apply(this, arguments), this.$control.on("click", "." + t.className, function(t) {
                        if (t.preventDefault(), !i.isLocked) {
                            var n = e(t.currentTarget).parent();
                            i.setActiveItem(n), i.deleteSelection() && i.setCaret(i.items.length)
                        }
                    })
                }
            }()
        }
    }), z.define("restore_on_backspace", function(e) {
        var t = this;
        e.text = e.text || function(e) {
            return e[this.settings.labelField]
        }, this.onKeyDown = function() {
            var i = t.onKeyDown;
            return function(t) {
                var n, r;
                return t.keyCode === m && "" === this.$control_input.val() && !this.$activeItems.length && (n = this.caretPos - 1, n >= 0 && n < this.items.length) ? (r = this.options[this.items[n]], this.deleteSelection(t) && (this.setTextboxValue(e.text.apply(this, [r])), this.refreshOptions(!0)), void t.preventDefault()) : i.apply(this, arguments)
            }
        }()
    }), z
});
var err_list = {
    c_required: {
        msg: "This value is required"
    },
    c_integer: {
        msg: "Only Integer values allowed"
    },
    c_integer_coma_allowed: {
        msg: "Only Integer and ',' are allowed"
    }
};
$(window).load(function() {
        $("body").addClass("loaded"), $("h1").css("color", "#222222"), $("body").trigger("pageLoaderEnd")
    }), $(document).ready(function() {}), ! function(e) {
        e.fn.viewportChecker = function(t) {
            var i = {
                classToAdd: "visible",
                classToRemove: "invisible",
                classToAddForFullView: "full-visible",
                removeClassAfterAnimation: !1,
                offset: 100,
                repeat: !1,
                invertBottomOffset: !0,
                callbackFunction: function(e, t) {},
                scrollHorizontal: !1,
                scrollBox: window
            };
            e.extend(i, t);
            var n = this,
                r = {
                    height: e(i.scrollBox).height(),
                    width: e(i.scrollBox).width()
                },
                a = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") || -1 != navigator.userAgent.toLowerCase().indexOf("windows phone") ? "body" : "html";
            return this.checkElements = function() {
                var t, o;
                i.scrollHorizontal ? (t = e(a).scrollLeft(), o = t + r.width) : (t = e(a).scrollTop(), o = t + r.height), n.each(function() {
                    var n = e(this),
                        a = {},
                        s = {};
                    if (n.data("vp-add-class") && (s.classToAdd = n.data("vp-add-class")), n.data("vp-remove-class") && (s.classToRemove = n.data("vp-remove-class")), n.data("vp-add-class-full-view") && (s.classToAddForFullView = n.data("vp-add-class-full-view")), n.data("vp-keep-add-class") && (s.removeClassAfterAnimation = n.data("vp-remove-after-animation")), n.data("vp-offset") && (s.offset = n.data("vp-offset")), n.data("vp-repeat") && (s.repeat = n.data("vp-repeat")), n.data("vp-scrollHorizontal") && (s.scrollHorizontal = n.data("vp-scrollHorizontal")), n.data("vp-invertBottomOffset") && (s.scrollHorizontal = n.data("vp-invertBottomOffset")), e.extend(a, i), e.extend(a, s), !n.data("vp-animated") || a.repeat) {
                        String(a.offset).indexOf("%") > 0 && (a.offset = parseInt(a.offset) / 100 * r.height);
                        var l = a.scrollHorizontal ? n.offset().left : n.offset().top,
                            u = a.scrollHorizontal ? l + n.width() : l + n.height(),
                            c = Math.round(l) + a.offset,
                            d = a.scrollHorizontal ? c + n.width() : c + n.height();
                        a.invertBottomOffset && (d -= 2 * a.offset), o > c && d > t ? (n.removeClass(a.classToRemove), n.addClass(a.classToAdd), a.callbackFunction(n, "add"), o >= u && l >= t ? n.addClass(a.classToAddForFullView) : n.removeClass(a.classToAddForFullView), n.data("vp-animated", !0), a.removeClassAfterAnimation && n.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                            n.removeClass(a.classToAdd)
                        })) : n.hasClass(a.classToAdd) && a.repeat && (n.removeClass(a.classToAdd + " " + a.classToAddForFullView), a.callbackFunction(n, "remove"), n.data("vp-animated", !1))
                    }
                })
            }, ("ontouchstart" in window || "onmsgesturechange" in window) && e(document).bind("touchmove MSPointerMove pointermove", this.checkElements), e(i.scrollBox).bind("load scroll", this.checkElements), e(window).resize(function(t) {
                r = {
                    height: e(i.scrollBox).height(),
                    width: e(i.scrollBox).width()
                }, n.checkElements()
            }), this.checkElements(), this
        }
    }(jQuery), ! function(e, t, i, n) {
        function r(t, i, n, r) {
            var a = {
                duration: 1,
                animation: null,
                iterate: 1,
                delay: 0,
                timing: "linear",
                keep: !1
            };
            this.prefixes = ["", "-moz-", "-o-animation-", "-webkit-"], this.element = e(t), this.bare = t, this.queue = [], this.listening = !1;
            var o = "function" == typeof n ? n : r;
            switch (i) {
                case "blur":
                    a = {
                        amount: 3,
                        duration: .5,
                        focusAfter: null
                    }, this.options = e.extend(a, n), this._blur(o);
                    break;
                case "focus":
                    this._focus();
                    break;
                case "rotate":
                    a = {
                        degrees: 15,
                        duration: .5
                    }, this.options = e.extend(a, n), this._rotate(o);
                    break;
                case "cleanse":
                    this.cleanse();
                    break;
                default:
                    this.options = e.extend(a, i), this.init(o)
            }
        }
        r.prototype = {
            init: function(t) {
                var i = this;
                "[object Array]" === Object.prototype.toString.call(i.options.animation) ? e.merge(i.queue, i.options.animation) : i.queue.push(i.options.animation), i.cleanse(), i.animate(t)
            },
            animate: function(e) {
                this.element.addClass("animated"), this.element.addClass(this.queue[0]), this.element.data("animo", this.queue[0]);
                for (var t = this.prefixes.length; t--;) this.element.css(this.prefixes[t] + "animation-duration", this.options.duration + "s"), this.element.css(this.prefixes[t] + "animation-delay", this.options.delay + "s"), this.element.css(this.prefixes[t] + "animation-iteration-count", this.options.iterate), this.element.css(this.prefixes[t] + "animation-timing-function", this.options.timing);
                var i = this,
                    n = e;
                i.queue.length > 1 && (n = null), this._end("AnimationEnd", function() {
                    i.element.hasClass(i.queue[0]) && (i.options.keep || i.cleanse(), i.queue.shift(), i.queue.length && i.animate(e))
                }, n)
            },
            cleanse: function() {
                this.element.removeClass("animated"), this.element.removeClass(this.queue[0]), this.element.removeClass(this.element.data("animo"));
                for (var e = this.prefixes.length; e--;) this.element.css(this.prefixes[e] + "animation-duration", ""), this.element.css(this.prefixes[e] + "animation-delay", ""), this.element.css(this.prefixes[e] + "animation-iteration-count", ""), this.element.css(this.prefixes[e] + "animation-timing-function", ""), this.element.css(this.prefixes[e] + "transition", ""), this.element.css(this.prefixes[e] + "transform", ""), this.element.css(this.prefixes[e] + "filter", "")
            },
            _blur: function(i) {
                if (this.element.is("img")) {
                    var n = "svg_" + (16777216 * (1 + Math.random()) | 0).toString(16).substring(1),
                        r = "filter_" + (16777216 * (1 + Math.random()) | 0).toString(16).substring(1);
                    e("body").append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="' + n + '" style="height:0;position:absolute;top:-1000px;"><filter id="' + r + '"><feGaussianBlur stdDeviation="' + this.options.amount + '" /></filter></svg>');
                    for (var a = this.prefixes.length; a--;) this.element.css(this.prefixes[a] + "filter", "blur(" + this.options.amount + "px)"), this.element.css(this.prefixes[a] + "transition", this.options.duration + "s all linear");
                    this.element.css("filter", "url(#" + r + ")"), this.element.data("svgid", n)
                } else {
                    for (var o = this.element.css("color"), a = this.prefixes.length; a--;) this.element.css(this.prefixes[a] + "transition", "all " + this.options.duration + "s linear");
                    this.element.css("text-shadow", "0 0 " + this.options.amount + "px " + o), this.element.css("color", "transparent")
                }
                this._end("TransitionEnd", null, i);
                var s = this;
                if (this.options.focusAfter) var l = t.setTimeout(function() {
                    s._focus(), l = t.clearTimeout(l)
                }, 1e3 * this.options.focusAfter)
            },
            _focus: function() {
                var t = this.prefixes.length;
                if (this.element.is("img")) {
                    for (; t--;) this.element.css(this.prefixes[t] + "filter", ""), this.element.css(this.prefixes[t] + "transition", "");
                    var i = e("#" + this.element.data("svgid"));
                    i.remove()
                } else {
                    for (; t--;) this.element.css(this.prefixes[t] + "transition", "");
                    this.element.css("text-shadow", ""), this.element.css("color", "")
                }
            },
            _rotate: function(e) {
                for (var t = this.prefixes.length; t--;) this.element.css(this.prefixes[t] + "transition", "all " + this.options.duration + "s linear"), this.element.css(this.prefixes[t] + "transform", "rotate(" + this.options.degrees + "deg)");
                this._end("TransitionEnd", null, e)
            },
            _end: function(e, t, i) {
                var n = this,
                    r = e.toLowerCase() + " webkit" + e + " o" + e + " MS" + e;
                this.element.bind(r, function() {
                    n.element.unbind(r), "function" == typeof t && t(), "function" == typeof i && i(n)
                })
            }
        }, e.fn.animo = function(e, t, i) {
            return this.each(function() {
                new r(this, e, t, i)
            })
        }
    }(jQuery, window, document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, n, r) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
        },
        easeInQuad: function(e, t, i, n, r) {
            return n * (t /= r) * t + i
        },
        easeOutQuad: function(e, t, i, n, r) {
            return -n * (t /= r) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, n, r) {
            return n * (t /= r) * t * t + i
        },
        easeOutCubic: function(e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, n, r) {
            return n * (t /= r) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, n, r) {
            return -n * ((t = t / r - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, n, r) {
            return n * (t /= r) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, n, r) {
            return n * ((t = t / r - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, n, r) {
            return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(e, t, i, n, r) {
            return n * Math.sin(t / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
        },
        easeInExpo: function(e, t, i, n, r) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
        },
        easeOutExpo: function(e, t, i, n, r) {
            return t == r ? i + n : n * (-Math.pow(2, -10 * t / r) + 1) + i
        },
        easeInOutExpo: function(e, t, i, n, r) {
            return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function(e, t, i, n, r) {
            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, n, r) {
            return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, n, r) {
            var a = 1.70158,
                o = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (o || (o = .3 * r), s < Math.abs(n)) {
                s = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i
        },
        easeOutElastic: function(e, t, i, n, r) {
            var a = 1.70158,
                o = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= r)) return i + n;
            if (o || (o = .3 * r), s < Math.abs(n)) {
                s = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + n + i
        },
        easeInOutElastic: function(e, t, i, n, r) {
            var a = 1.70158,
                o = 0,
                s = n;
            if (0 == t) return i;
            if (2 == (t /= r / 2)) return i + n;
            if (o || (o = r * (.3 * 1.5)), s < Math.abs(n)) {
                s = n;
                var a = o / 4
            } else var a = o / (2 * Math.PI) * Math.asin(n / s);
            return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + i
        },
        easeInBack: function(e, t, i, n, r, a) {
            return void 0 == a && (a = 1.70158), n * (t /= r) * t * ((a + 1) * t - a) + i
        },
        easeOutBack: function(e, t, i, n, r, a) {
            return void 0 == a && (a = 1.70158), n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i
        },
        easeInOutBack: function(e, t, i, n, r, a) {
            return void 0 == a && (a = 1.70158), (t /= r / 2) < 1 ? n / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + i : n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + i
        },
        easeInBounce: function(e, t, i, n, r) {
            return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
        },
        easeOutBounce: function(e, t, i, n, r) {
            return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(e, t, i, n, r) {
            return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutMaterial: function(e, t, i, n, r) {
            return (t /= r / 2) < 1 ? n / 2 * t * t + i : n / 4 * ((t -= 2) * t * t + 2) + i
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" === n || i.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }
        if (!e.jQuery) {
            var i = function(e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function(e) {
                return null != e && e == e.window
            }, i.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function(e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                for (t in e);
                return void 0 === t || a.call(e, t)
            }, i.each = function(e, i, n) {
                var r, a = 0,
                    o = e.length,
                    s = t(e);
                if (n) {
                    if (s)
                        for (; o > a && (r = i.apply(e[a], n), r !== !1); a++);
                    else
                        for (a in e)
                            if (r = i.apply(e[a], n), r === !1) break
                } else if (s)
                    for (; o > a && (r = i.call(e[a], a, e[a]), r !== !1); a++);
                else
                    for (a in e)
                        if (r = i.call(e[a], a, e[a]), r === !1) break; return e
            }, i.data = function(e, t, r) {
                if (void 0 === r) {
                    var a = e[i.expando],
                        o = a && n[a];
                    if (void 0 === t) return o;
                    if (o && t in o) return o[t]
                } else if (void 0 !== t) {
                    var a = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][t] = r, r
                }
            }, i.removeData = function(e, t) {
                var r = e[i.expando],
                    a = r && n[r];
                a && i.each(t, function(e, t) {
                    delete a[t]
                })
            }, i.extend = function() {
                var e, t, n, r, a, o, s = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                    if (null != (a = arguments[l]))
                        for (r in a) e = s[r], n = a[r], s !== n && (c && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {}, s[r] = i.extend(c, o, n)) : void 0 !== n && (s[r] = n));
                return s
            }, i.queue = function(e, n, r) {
                function a(e, i) {
                    var n = i || [];
                    return null != e && (t(Object(e)) ? ! function(e, t) {
                        for (var i = +t.length, n = 0, r = e.length; i > n;) e[r++] = t[n++];
                        if (i !== i)
                            for (; void 0 !== t[n];) e[r++] = t[n++];
                        return e.length = r, e
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }
                if (e) {
                    n = (n || "fx") + "queue";
                    var o = i.data(e, n);
                    return r ? (!o || i.isArray(r) ? o = i.data(e, n, a(r)) : o.push(r), o) : o || []
                }
            }, i.dequeue = function(e, t) {
                i.each(e.nodeType ? [e] : e, function(e, n) {
                    t = t || "fx";
                    var r = i.queue(n, t),
                        a = r.shift();
                    "inprogress" === a && (a = r.shift()), a && ("fx" === t && r.unshift("inprogress"), a.call(n, function() {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        r = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - r.top,
                        left: n.left - r.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var r = {}, a = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) r["[object " + s[l] + "]"] = s[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, i, n) {
            function r(e) {
                for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                    var r = e[t];
                    r && n.push(r)
                }
                return n
            }

            function a(e) {
                return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e
            }

            function o(e) {
                var t = p.data(e, "velocity");
                return null === t ? n : t
            }

            function s(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }

            function l(e, i, n, r) {
                function a(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function o(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((a(t, i) * e + o(t, i)) * e + s(t)) * e
                }

                function u(e, t, i) {
                    return 3 * a(t, i) * e * e + 2 * o(t, i) * e + s(t)
                }

                function c(t, i) {
                    for (var r = 0; m > r; ++r) {
                        var a = u(i, e, n);
                        if (0 === a) return i;
                        var o = l(i, e, n) - t;
                        i -= o / a
                    }
                    return i
                }

                function d() {
                    for (var t = 0; b > t; ++t) F[t] = l(t * w, e, n)
                }

                function p(t, i, r) {
                    var a, o, s = 0;
                    do o = i + (r - i) / 2, a = l(o, e, n) - t, a > 0 ? r = o : i = o; while (Math.abs(a) > g && ++s < y);
                    return o
                }

                function f(t) {
                    for (var i = 0, r = 1, a = b - 1; r != a && F[r] <= t; ++r) i += w;
                    --r;
                    var o = (t - F[r]) / (F[r + 1] - F[r]),
                        s = i + o * w,
                        l = u(s, e, n);
                    return l >= v ? c(t, s) : 0 == l ? s : p(t, i, i + w)
                }

                function h() {
                    k = !0, (e != i || n != r) && d()
                }
                var m = 4,
                    v = .001,
                    g = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var F = x ? new Float32Array(b) : new Array(b),
                    k = !1,
                    O = function(t) {
                        return k || h(), e === i && n === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), i, r)
                    };
                O.getControlPoints = function() {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: r
                    }]
                };
                var E = "generateBezier(" + [e, i, n, r] + ")";
                return O.toString = function() {
                    return E
                }, O
            }

            function u(e, t) {
                var i = e;
                return m.isString(e) ? b.Easings[e] || (i = !1) : i = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
            }

            function c(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = r(b.State.calls));
                    for (var a = 0; i > a; a++)
                        if (b.State.calls[a]) {
                            var s = b.State.calls[a],
                                l = s[0],
                                u = s[2],
                                f = s[3],
                                h = !!f,
                                v = null;
                            f || (f = b.State.calls[a][3] = t - 16);
                            for (var g = Math.min((t - f) / u.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var C = l[y],
                                    k = C.element;
                                if (o(k)) {
                                    var O = !1;
                                    if (u.display !== n && null !== u.display && "none" !== u.display) {
                                        if ("flex" === u.display) {
                                            var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            p.each(E, function(e, t) {
                                                x.setPropertyValue(k, "display", t)
                                            })
                                        }
                                        x.setPropertyValue(k, "display", u.display)
                                    }
                                    u.visibility !== n && "hidden" !== u.visibility && x.setPropertyValue(k, "visibility", u.visibility);
                                    for (var $ in C)
                                        if ("element" !== $) {
                                            var P, A = C[$],
                                                S = m.isString(A.easing) ? b.Easings[A.easing] : A.easing;
                                            if (1 === g) P = A.endValue;
                                            else {
                                                var T = A.endValue - A.startValue;
                                                if (P = A.startValue + T * S(g, u, T), !h && P === A.currentValue) continue
                                            }
                                            if (A.currentValue = P, "tween" === $) v = P;
                                            else {
                                                if (x.Hooks.registered[$]) {
                                                    var _ = x.Hooks.getRoot($),
                                                        I = o(k).rootPropertyValueCache[_];
                                                    I && (A.rootPropertyValue = I)
                                                }
                                                var D = x.setPropertyValue(k, $, A.currentValue + (0 === parseFloat(P) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                x.Hooks.registered[$] && (o(k).rootPropertyValueCache[_] = x.Normalizations.registered[_] ? x.Normalizations.registered[_]("extract", null, D[1]) : D[1]), "transform" === D[0] && (O = !0)
                                            }
                                        }
                                    u.mobileHA && o(k).transformCache.translate3d === n && (o(k).transformCache.translate3d = "(0px, 0px, 0px)", O = !0), O && x.flushTransformCache(k)
                                }
                            }
                            u.display !== n && "none" !== u.display && (b.State.calls[a][2].display = !1), u.visibility !== n && "hidden" !== u.visibility && (b.State.calls[a][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], g, Math.max(0, f + u.duration - t), f, v), 1 === g && d(a)
                        }
                }
                b.State.isTicking && F(c)
            }

            function d(e, t) {
                if (!b.State.calls[e]) return !1;
                for (var i = b.State.calls[e][0], r = b.State.calls[e][1], a = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = i.length; c > u; u++) {
                    var d = i[u].element;
                    if (t || a.loop || ("none" === a.display && x.setPropertyValue(d, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(d, "visibility", a.visibility)), a.loop !== !0 && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && o(d)) {
                        o(d).isAnimating = !1, o(d).rootPropertyValueCache = {};
                        var f = !1;
                        p.each(x.Lists.transforms3D, function(e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                r = o(d).transformCache[t];
                            o(d).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (f = !0, delete o(d).transformCache[t])
                        }), a.mobileHA && (f = !0, delete o(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && u === c - 1) try {
                        a.complete.call(r, r)
                    } catch (h) {
                        setTimeout(function() {
                            throw h
                        }, 1)
                    }
                    s && a.loop !== !0 && s(r), o(d) && a.loop === !0 && !t && (p.each(o(d).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), b(d, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), a.queue !== !1 && p.dequeue(d, a.queue)
                }
                b.State.calls[e] = !1;
                for (var m = 0, v = b.State.calls.length; v > m; m++)
                    if (b.State.calls[m] !== !1) {
                        l = !0;
                        break
                    }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
            }
            var p, f = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                h = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                            t(n + i)
                        }, i)
                    }
                }(),
                m = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                v = !1;
            if (e.fn && e.fn.jquery ? (p = e, v = !0) : p = t.Velocity.Utilities, 8 >= f && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var g = 400,
                y = "swing",
                b = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: p,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: g,
                        easing: y,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        p.data(e, "velocity", {
                            isSVG: m.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== n ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, i, n) {
                    var r = {
                        x: t.x + n.dx * i,
                        v: t.v + n.dv * i,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: r.v,
                        dv: e(r)
                    }
                }

                function i(i, n) {
                    var r = {
                            dx: i.v,
                            dv: e(i)
                        },
                        a = t(i, .5 * n, r),
                        o = t(i, .5 * n, a),
                        s = t(i, n, o),
                        l = 1 / 6 * (r.dx + 2 * (a.dx + o.dx) + s.dx),
                        u = 1 / 6 * (r.dv + 2 * (a.dv + o.dv) + s.dv);
                    return i.x = i.x + l * n, i.v = i.v + u * n, i
                }
                return function n(e, t, r) {
                    var a, o, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        u = [0],
                        c = 0,
                        d = 1e-4,
                        p = .016;
                    for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, r = r || null, l.tension = e, l.friction = t, a = null !== r, a ? (c = n(e, t), o = c / r * p) : o = p; s = i(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > d && Math.abs(s.v) > d;);
                    return a ? function(e) {
                        return u[e * (u.length - 1) | 0]
                    } : c
                }
            }();
            b.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, p.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                b.Easings[t[0]] = l.apply(null, t[1])
            });
            var x = b.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < x.Lists.colors.length; e++) {
                            var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var i, n, r;
                        if (f)
                            for (i in x.Hooks.templates) {
                                n = x.Hooks.templates[i], r = n[0].split(" ");
                                var a = n[1].match(x.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()), a.push(a.shift()), x.Hooks.templates[i] = [r.join(" "), a.join(" ")])
                            }
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i], r = n[0].split(" ");
                            for (var e in r) {
                                var o = i + r[e],
                                    s = e;
                                x.Hooks.registered[o] = [i, s]
                            }
                        }
                    },
                    getRoot: function(e) {
                        var t = x.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var i = x.Hooks.registered[e];
                        if (i) {
                            var n = i[0],
                                r = i[1];
                            return t = x.Hooks.cleanRootPropertyValue(n, t), t.toString().match(x.RegEx.valueSplit)[r]
                        }
                        return t
                    },
                    injectValue: function(e, t, i) {
                        var n = x.Hooks.registered[e];
                        if (n) {
                            var r, a, o = n[0],
                                s = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(o, i), r = i.toString().match(x.RegEx.valueSplit), r[s] = t, a = r.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, i) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function(e, t, i) {
                            switch (e) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = r ? r[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(e, t, i) {
                            if (8 >= f) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function() {
                        9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var e = 0; e < x.Lists.transformsBase.length; e++) ! function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, i, r) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return o(i) === n || o(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : o(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var a = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && o(i).transformCache[t] === n && 1 > r && (r = 1), a = !/(\d)$/i.test(r);
                                                break;
                                            case "skew":
                                                a = !/(deg|\d)$/i.test(r);
                                                break;
                                            case "rotate":
                                                a = !/(deg|\d)$/i.test(r)
                                        }
                                        return a || (o(i).transformCache[t] = "(" + r + ")"), o(i).transformCache[t]
                                }
                            }
                        }();
                        for (var e = 0; e < x.Lists.colors.length; e++) ! function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, i, r) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var a;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(r)) a = r;
                                        else {
                                            var o, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? o = s[r] !== n ? s[r] : s.black : x.RegEx.isHex.test(r) ? o = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = s.black), a = (o || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= f || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= f ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                            var r;
                            if (r = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                    return e.toUpperCase()
                                }), m.isString(b.State.prefixElement.style[r])) return b.State.prefixMatches[e] = r, [r, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return e = e.replace(i, function(e, t, i, n) {
                            return t + t + i + i + n + n
                        }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, i, r, a) {
                    function s(e, i) {
                        function r() {
                            u && x.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= f) l = p.css(e, i);
                        else {
                            var u = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (u = !0,
                                    x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !a) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                    return r(), c
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                    return r(), d
                                }
                            }
                            var h;
                            h = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? h.getPropertyValue(i) : h[i], ("" === l || null === l) && (l = e.style[i]), r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var m = s(e, "position");
                            ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = p(e).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var u = i,
                            c = x.Hooks.getRoot(u);
                        r === n && (r = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])), x.Normalizations.registered[c] && (r = x.Normalizations.registered[c]("extract", e, r)), l = x.Hooks.extractValue(u, r)
                    } else if (x.Normalizations.registered[i]) {
                        var d, h;
                        d = x.Normalizations.registered[i]("name", e), "transform" !== d && (h = s(e, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[i] && (h = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", e, h)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(e) && o(e).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = e.getBBox()[i]
                            } catch (m) {
                                l = 0
                            } else l = e.getAttribute(i);
                            else l = s(e, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function(e, i, n, r, a) {
                    var s = i;
                    if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e)) x.Normalizations.registered[i]("inject", e, n), s = "transform", n = o(e).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                u = x.Hooks.getRoot(i);
                            r = r || x.getPropertyValue(e, u), n = x.Hooks.injectValue(l, n, r), i = u
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", e, n), i = x.Normalizations.registered[i]("name", e)), s = x.Names.prefixCheck(i)[0], 8 >= f) try {
                            e.style[s] = n
                        } catch (c) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        } else o(e) && o(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                    }
                    return [s, n]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(x.getPropertyValue(e, t))
                    }
                    var i = "";
                    if ((f || b.State.isAndroid && !b.State.isChrome) && o(e).isSVG) {
                        var n = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        p.each(o(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var r, a;
                        p.each(o(e).transformCache, function(t) {
                            return r = o(e).transformCache[t], "transformPerspective" === t ? (a = r, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(i += t + r + " "))
                        }), a && (i = "perspective" + a + " " + i)
                    }
                    x.setPropertyValue(e, "transform", i)
                }
            };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(e, t, i) {
                var r = n;
                return e = a(e), p.each(e, function(e, a) {
                    if (o(a) === n && b.init(a), i === n) r === n && (r = b.CSS.getPropertyValue(a, t));
                    else {
                        var s = b.CSS.setPropertyValue(a, t, i);
                        "transform" === s[0] && b.CSS.flushTransformCache(a), r = s
                    }
                }), r
            };
            var C = function() {
                function e() {
                    return s ? $.promise || null : l
                }

                function r() {
                    function e(e) {
                        function d(e, t) {
                            var i = n,
                                r = n,
                                o = n;
                            return m.isArray(e) ? (i = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (m.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration), e[2] !== n && (o = e[2]))) : i = e, t || (r = r || s.easing), m.isFunction(i) && (i = i.call(a, k, F)), m.isFunction(o) && (o = o.call(a, k, F)), [i || 0, r, o]
                        }

                        function f(e, t) {
                            var i, n;
                            return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return i = e, ""
                            }), i || (i = x.Values.getUnitType(e)), [n, i]
                        }

                        function g() {
                            var e = {
                                    myParent: a.parentNode || i.body,
                                    position: x.getPropertyValue(a, "position"),
                                    fontSize: x.getPropertyValue(a, "fontSize")
                                },
                                n = e.position === D.lastPosition && e.myParent === D.lastParent,
                                r = e.fontSize === D.lastFontSize;
                            D.lastParent = e.myParent, D.lastPosition = e.position, D.lastFontSize = e.fontSize;
                            var s = 100,
                                l = {};
                            if (r && n) l.emToPx = D.lastEmToPx, l.percentToPxWidth = D.lastPercentToPxWidth, l.percentToPxHeight = D.lastPercentToPxHeight;
                            else {
                                var u = o(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(u), e.myParent.appendChild(u), p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                    b.CSS.setPropertyValue(u, t, "hidden")
                                }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                    b.CSS.setPropertyValue(u, t, s + "%")
                                }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = D.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u)
                            }
                            return null === D.remToPx && (D.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(t.innerWidth) / 100, D.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = D.remToPx, l.vwToPx = D.vwToPx, l.vhToPx = D.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                        }
                        if (s.begin && 0 === k) try {
                            s.begin.call(h, h)
                        } catch (w) {
                            setTimeout(function() {
                                throw w
                            }, 1)
                        }
                        if ("scroll" === P) {
                            var C, O, E, A = /^x$/i.test(s.axis) ? "Left" : "Top",
                                S = parseFloat(s.offset) || 0;
                            s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, C = s.container["scroll" + A], E = C + p(a).position()[A.toLowerCase()] + S) : s.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + A]], O = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], E = p(a).offset()[A.toLowerCase()] + S), l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: C,
                                    currentValue: C,
                                    endValue: E,
                                    unitType: "",
                                    easing: s.easing,
                                    scrollData: {
                                        container: s.container,
                                        direction: A,
                                        alternateValue: O
                                    }
                                },
                                element: a
                            }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                        } else if ("reverse" === P) {
                            if (!o(a).tweensContainer) return void p.dequeue(a, s.queue);
                            "none" === o(a).opts.display && (o(a).opts.display = "auto"), "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"), o(a).opts.loop = !1, o(a).opts.begin = null, o(a).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, o(a).opts, s);
                            var T = p.extend(!0, {}, o(a).tweensContainer);
                            for (var _ in T)
                                if ("element" !== _) {
                                    var I = T[_].startValue;
                                    T[_].startValue = T[_].currentValue = T[_].endValue, T[_].endValue = I, m.isEmptyObject(y) || (T[_].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + _ + "): " + JSON.stringify(T[_]), a)
                                }
                            l = T
                        } else if ("start" === P) {
                            var T;
                            o(a).tweensContainer && o(a).isAnimating === !0 && (T = o(a).tweensContainer), p.each(v, function(e, t) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                    var i = d(t, !0),
                                        r = i[0],
                                        a = i[1],
                                        o = i[2];
                                    if (x.RegEx.isHex.test(r)) {
                                        for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(r), u = o ? x.Values.hexToRgb(o) : n, c = 0; c < s.length; c++) {
                                            var p = [l[c]];
                                            a && p.push(a), u !== n && p.push(u[c]), v[e + s[c]] = p
                                        }
                                        delete v[e]
                                    }
                                }
                            });
                            for (var q in v) {
                                var z = d(v[q]),
                                    j = z[0],
                                    M = z[1],
                                    L = z[2];
                                q = x.Names.camelCase(q);
                                var R = x.Hooks.getRoot(q),
                                    V = !1;
                                if (o(a).isSVG || "tween" === R || x.Names.prefixCheck(R)[1] !== !1 || x.Normalizations.registered[R] !== n) {
                                    (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(q) && !L && 0 !== j && (L = 0), s._cacheValues && T && T[q] ? (L === n && (L = T[q].endValue + T[q].unitType), V = o(a).rootPropertyValueCache[R]) : x.Hooks.registered[q] ? L === n ? (V = x.getPropertyValue(a, R), L = x.getPropertyValue(a, q, V)) : V = x.Hooks.templates[R][1] : L === n && (L = x.getPropertyValue(a, q));
                                    var H, W, Q, B = !1;
                                    if (H = f(q, L), L = H[0], Q = H[1], H = f(q, j), j = H[0].replace(/^([+-\/*])=/, function(e, t) {
                                            return B = t, ""
                                        }), W = H[1], L = parseFloat(L) || 0, j = parseFloat(j) || 0, "%" === W && (/^(fontSize|lineHeight)$/.test(q) ? (j /= 100, W = "em") : /^scale/.test(q) ? (j /= 100, W = "") : /(Red|Green|Blue)$/i.test(q) && (j = j / 100 * 255, W = "")), /[\/*]/.test(B)) W = Q;
                                    else if (Q !== W && 0 !== L)
                                        if (0 === j) W = Q;
                                        else {
                                            r = r || g();
                                            var U = /margin|padding|left|right|width|text|word|letter/i.test(q) || /X$/.test(q) || "x" === q ? "x" : "y";
                                            switch (Q) {
                                                case "%":
                                                    L *= "x" === U ? r.percentToPxWidth : r.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    L *= r[Q + "ToPx"]
                                            }
                                            switch (W) {
                                                case "%":
                                                    L *= 1 / ("x" === U ? r.percentToPxWidth : r.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    L *= 1 / r[W + "ToPx"]
                                            }
                                        }
                                    switch (B) {
                                        case "+":
                                            j = L + j;
                                            break;
                                        case "-":
                                            j = L - j;
                                            break;
                                        case "*":
                                            j = L * j;
                                            break;
                                        case "/":
                                            j = L / j
                                    }
                                    l[q] = {
                                        rootPropertyValue: V,
                                        startValue: L,
                                        currentValue: L,
                                        endValue: j,
                                        unitType: W,
                                        easing: M
                                    }, b.debug && console.log("tweensContainer (" + q + "): " + JSON.stringify(l[q]), a)
                                } else b.debug && console.log("Skipping [" + R + "] due to a lack of browser support.")
                            }
                            l.element = a
                        }
                        l.element && (x.Values.addClass(a, "velocity-animating"), N.push(l), "" === s.queue && (o(a).tweensContainer = l, o(a).opts = s), o(a).isAnimating = !0, k === F - 1 ? (b.State.calls.push([N, h, s, null, $.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : k++)
                    }
                    var r, a = this,
                        s = p.extend({}, b.defaults, y),
                        l = {};
                    switch (o(a) === n && b.init(a), parseFloat(s.delay) && s.queue !== !1 && p.queue(a, s.queue, function(e) {
                        b.velocityQueueEntryFlag = !0, o(a).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(s.delay)),
                            next: e
                        }
                    }), s.duration.toString().toLowerCase()) {
                        case "fast":
                            s.duration = 200;
                            break;
                        case "normal":
                            s.duration = g;
                            break;
                        case "slow":
                            s.duration = 600;
                            break;
                        default:
                            s.duration = parseFloat(s.duration) || 1
                    }
                    b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))), s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : p.queue(a, s.queue, function(t, i) {
                        return i === !0 ? ($.promise && $.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(a)[0] || p.dequeue(a)
                }
                var s, l, f, h, v, y, w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                if (m.isWrapped(this) ? (s = !1, f = 0, h = this, l = this) : (s = !0, f = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = a(h)) {
                    w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[f], y = arguments[f + 1]);
                    var F = h.length,
                        k = 0;
                    if (!/^(stop|finish)$/i.test(v) && !p.isPlainObject(y)) {
                        var O = f + 1;
                        y = {};
                        for (var E = O; E < arguments.length; E++) m.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? m.isString(arguments[E]) || m.isArray(arguments[E]) ? y.easing = arguments[E] : m.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                    }
                    var $ = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    s && b.Promise && ($.promise = new b.Promise(function(e, t) {
                        $.resolver = e, $.rejecter = t
                    }));
                    var P;
                    switch (v) {
                        case "scroll":
                            P = "scroll";
                            break;
                        case "reverse":
                            P = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            p.each(h, function(e, t) {
                                o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout), o(t).delayTimer.next && o(t).delayTimer.next(), delete o(t).delayTimer)
                            });
                            var A = [];
                            return p.each(b.State.calls, function(e, t) {
                                t && p.each(t[1], function(i, r) {
                                    var a = y === n ? "" : y;
                                    return a === !0 || t[2].queue === a || y === n && t[2].queue === !1 ? void p.each(h, function(i, n) {
                                        n === r && ((y === !0 || m.isString(y)) && (p.each(p.queue(n, m.isString(y) ? y : ""), function(e, t) {
                                            m.isFunction(t) && t(null, !0)
                                        }), p.queue(n, m.isString(y) ? y : "", [])), "stop" === v ? (o(n) && o(n).tweensContainer && a !== !1 && p.each(o(n).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), A.push(e)) : "finish" === v && (t[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === v && (p.each(A, function(e, t) {
                                d(t, !0)
                            }), $.promise && $.resolver(h)), e();
                        default:
                            if (!p.isPlainObject(v) || m.isEmptyObject(v)) {
                                if (m.isString(v) && b.Redirects[v]) {
                                    var S = p.extend({}, y),
                                        T = S.duration,
                                        _ = S.delay || 0;
                                    return S.backwards === !0 && (h = p.extend(!0, [], h).reverse()), p.each(h, function(e, t) {
                                        parseFloat(S.stagger) ? S.delay = _ + parseFloat(S.stagger) * e : m.isFunction(S.stagger) && (S.delay = _ + S.stagger.call(t, e, F)), S.drag && (S.duration = parseFloat(T) || (/^(callout|transition)/.test(v) ? 1e3 : g), S.duration = Math.max(S.duration * (S.backwards ? 1 - e / F : (e + 1) / F), .75 * S.duration, 200)), b.Redirects[v].call(t, t, S || {}, e, F, h, $.promise ? $ : n)
                                    }), e()
                                }
                                var I = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return $.promise ? $.rejecter(new Error(I)) : console.log(I), e()
                            }
                            P = "start"
                    }
                    var D = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        N = [];
                    p.each(h, function(e, t) {
                        m.isNode(t) && r.call(t)
                    });
                    var q, S = p.extend({}, b.defaults, y);
                    if (S.loop = parseInt(S.loop), q = 2 * S.loop - 1, S.loop)
                        for (var z = 0; q > z; z++) {
                            var j = {
                                delay: S.delay,
                                progress: S.progress
                            };
                            z === q - 1 && (j.display = S.display, j.visibility = S.visibility, j.complete = S.complete), C(h, "reverse", j)
                        }
                    return e()
                }
            };
            b = p.extend(C, b), b.animate = C;
            var F = t.requestAnimationFrame || h;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                i.hidden ? (F = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, c()) : F = t.requestAnimationFrame || h
            }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function(e, t) {
                b.Redirects["slide" + t] = function(e, i, r, a, o, s) {
                    var l = p.extend({}, i),
                        u = l.begin,
                        c = l.complete,
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        f = {};
                    l.display === n && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        u && u.call(o, o);
                        for (var i in d) {
                            f[i] = e.style[i];
                            var n = b.CSS.getPropertyValue(e, i);
                            d[i] = "Down" === t ? [n, 0] : [0, n]
                        }
                        f.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in f) e.style[t] = f[t];
                        c && c.call(o, o), s && s.resolver(o)
                    }, b(e, d, l)
                }
            }), p.each(["In", "Out"], function(e, t) {
                b.Redirects["fade" + t] = function(e, i, r, a, o, s) {
                    var l = p.extend({}, i),
                        u = {
                            opacity: "In" === t ? 1 : 0
                        },
                        c = l.complete;
                    l.complete = r !== a - 1 ? l.begin = null : function() {
                        c && c.call(o, o), s && s.resolver(o)
                    }, l.display === n && (l.display = "In" === t ? "auto" : "none"), b(this, u, l)
                }
            }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })), ! function(e, t, i, n) {
        "use strict";

        function r(e, t, i) {
            return setTimeout(c(e, i), t)
        }

        function a(e, t, i) {
            return Array.isArray(e) ? (o(e, i[t], i), !0) : !1
        }

        function o(e, t, i) {
            var r;
            if (e)
                if (e.forEach) e.forEach(t, i);
                else if (e.length !== n)
                for (r = 0; r < e.length;) t.call(i, e[r], r, e), r++;
            else
                for (r in e) e.hasOwnProperty(r) && t.call(i, e[r], r, e)
        }

        function s(e, t, i) {
            for (var r = Object.keys(t), a = 0; a < r.length;)(!i || i && e[r[a]] === n) && (e[r[a]] = t[r[a]]), a++;
            return e
        }

        function l(e, t) {
            return s(e, t, !0)
        }

        function u(e, t, i) {
            var n, r = t.prototype;
            n = e.prototype = Object.create(r), n.constructor = e, n._super = r, i && s(n, i)
        }

        function c(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function d(e, t) {
            return typeof e == ce ? e.apply(t ? t[0] || n : n, t) : e
        }

        function p(e, t) {
            return e === n ? t : e
        }

        function f(e, t, i) {
            o(g(t), function(t) {
                e.addEventListener(t, i, !1)
            })
        }

        function h(e, t, i) {
            o(g(t), function(t) {
                e.removeEventListener(t, i, !1)
            })
        }

        function m(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function v(e, t) {
            return e.indexOf(t) > -1
        }

        function g(e) {
            return e.trim().split(/\s+/g)
        }

        function y(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return -1
        }

        function b(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function w(e, t, i) {
            for (var n = [], r = [], a = 0; a < e.length;) {
                var o = t ? e[a][t] : e[a];
                y(r, o) < 0 && n.push(e[a]), r[a] = o, a++
            }
            return i && (n = t ? n.sort(function(e, i) {
                return e[t] > i[t]
            }) : n.sort()), n
        }

        function x(e, t) {
            for (var i, r, a = t[0].toUpperCase() + t.slice(1), o = 0; o < le.length;) {
                if (i = le[o], r = i ? i + a : t, r in e) return r;
                o++
            }
            return n
        }

        function C() {
            return he++
        }

        function F(e) {
            var t = e.ownerDocument;
            return t.defaultView || t.parentWindow
        }

        function k(e, t) {
            var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                d(e.options.enable, [e]) && i.handler(t)
            }, this.init()
        }

        function O(e) {
            var t, i = e.options.inputClass;
            return new(t = i ? i : ge ? M : ye ? V : ve ? W : j)(e, E)
        }

        function E(e, t, i) {
            var n = i.pointers.length,
                r = i.changedPointers.length,
                a = t & ke && 0 === n - r,
                o = t & (Ee | $e) && 0 === n - r;
            i.isFirst = !!a, i.isFinal = !!o, a && (e.session = {}), i.eventType = t, $(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
        }

        function $(e, t) {
            var i = e.session,
                n = t.pointers,
                r = n.length;
            i.firstInput || (i.firstInput = S(t)), r > 1 && !i.firstMultiple ? i.firstMultiple = S(t) : 1 === r && (i.firstMultiple = !1);
            var a = i.firstInput,
                o = i.firstMultiple,
                s = o ? o.center : a.center,
                l = t.center = T(n);
            t.timeStamp = fe(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = N(s, l), t.distance = D(s, l), P(i, t), t.offsetDirection = I(t.deltaX, t.deltaY), t.scale = o ? z(o.pointers, n) : 1, t.rotation = o ? q(o.pointers, n) : 0, A(i, t);
            var u = e.element;
            m(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
        }

        function P(e, t) {
            var i = t.center,
                n = e.offsetDelta || {},
                r = e.prevDelta || {},
                a = e.prevInput || {};
            (t.eventType === ke || a.eventType === Ee) && (r = e.prevDelta = {
                x: a.deltaX || 0,
                y: a.deltaY || 0
            }, n = e.offsetDelta = {
                x: i.x,
                y: i.y
            }), t.deltaX = r.x + (i.x - n.x), t.deltaY = r.y + (i.y - n.y)
        }

        function A(e, t) {
            var i, r, a, o, s = e.lastInterval || t,
                l = t.timeStamp - s.timeStamp;
            if (t.eventType != $e && (l > Fe || s.velocity === n)) {
                var u = s.deltaX - t.deltaX,
                    c = s.deltaY - t.deltaY,
                    d = _(l, u, c);
                r = d.x, a = d.y, i = pe(d.x) > pe(d.y) ? d.x : d.y, o = I(u, c), e.lastInterval = t
            } else i = s.velocity, r = s.velocityX, a = s.velocityY, o = s.direction;
            t.velocity = i, t.velocityX = r, t.velocityY = a, t.direction = o
        }

        function S(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: de(e.pointers[i].clientX),
                clientY: de(e.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: fe(),
                pointers: t,
                center: T(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function T(e) {
            var t = e.length;
            if (1 === t) return {
                x: de(e[0].clientX),
                y: de(e[0].clientY)
            };
            for (var i = 0, n = 0, r = 0; t > r;) i += e[r].clientX, n += e[r].clientY, r++;
            return {
                x: de(i / t),
                y: de(n / t)
            }
        }

        function _(e, t, i) {
            return {
                x: t / e || 0,
                y: i / e || 0
            }
        }

        function I(e, t) {
            return e === t ? Pe : pe(e) >= pe(t) ? e > 0 ? Ae : Se : t > 0 ? Te : _e
        }

        function D(e, t, i) {
            i || (i = qe);
            var n = t[i[0]] - e[i[0]],
                r = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + r * r)
        }

        function N(e, t, i) {
            i || (i = qe);
            var n = t[i[0]] - e[i[0]],
                r = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(r, n) / Math.PI
        }

        function q(e, t) {
            return N(t[1], t[0], ze) - N(e[1], e[0], ze)
        }

        function z(e, t) {
            return D(t[0], t[1], ze) / D(e[0], e[1], ze)
        }

        function j() {
            this.evEl = Me, this.evWin = Le, this.allow = !0, this.pressed = !1, k.apply(this, arguments)
        }

        function M() {
            this.evEl = He, this.evWin = We, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function L() {
            this.evTarget = Be, this.evWin = Ue, this.started = !1, k.apply(this, arguments)
        }

        function R(e, t) {
            var i = b(e.touches),
                n = b(e.changedTouches);
            return t & (Ee | $e) && (i = w(i.concat(n), "identifier", !0)), [i, n]
        }

        function V() {
            this.evTarget = Ke, this.targetIds = {}, k.apply(this, arguments)
        }

        function H(e, t) {
            var i = b(e.touches),
                n = this.targetIds;
            if (t & (ke | Oe) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var r, a, o = b(e.changedTouches),
                s = [],
                l = this.target;
            if (a = i.filter(function(e) {
                    return m(e.target, l)
                }), t === ke)
                for (r = 0; r < a.length;) n[a[r].identifier] = !0, r++;
            for (r = 0; r < o.length;) n[o[r].identifier] && s.push(o[r]), t & (Ee | $e) && delete n[o[r].identifier], r++;
            return s.length ? [w(a.concat(s), "identifier", !0), s] : void 0
        }

        function W() {
            k.apply(this, arguments);
            var e = c(this.handler, this);
            this.touch = new V(this.manager, e), this.mouse = new j(this.manager, e)
        }

        function Q(e, t) {
            this.manager = e, this.set(t)
        }

        function B(e) {
            if (v(e, tt)) return tt;
            var t = v(e, it),
                i = v(e, nt);
            return t && i ? it + " " + nt : t || i ? t ? it : nt : v(e, et) ? et : Ze
        }

        function U(e) {
            this.id = C(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = rt, this.simultaneous = {}, this.requireFail = []
        }

        function X(e) {
            return e & ut ? "cancel" : e & st ? "end" : e & ot ? "move" : e & at ? "start" : ""
        }

        function K(e) {
            return e == _e ? "down" : e == Te ? "up" : e == Ae ? "left" : e == Se ? "right" : ""
        }

        function Y(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }

        function G() {
            U.apply(this, arguments)
        }

        function J() {
            G.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Z() {
            G.apply(this, arguments)
        }

        function ee() {
            U.apply(this, arguments), this._timer = null, this._input = null
        }

        function te() {
            G.apply(this, arguments)
        }

        function ie() {
            G.apply(this, arguments)
        }

        function ne() {
            U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function re(e, t) {
            return t = t || {}, t.recognizers = p(t.recognizers, re.defaults.preset), new ae(e, t)
        }

        function ae(e, t) {
            t = t || {}, this.options = l(t, re.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = O(this), this.touchAction = new Q(this, this.options.touchAction), oe(this, !0), o(t.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function oe(e, t) {
            var i = e.element;
            o(e.options.cssProps, function(e, n) {
                i.style[x(i.style, n)] = t ? e : ""
            })
        }

        function se(e, i) {
            var n = t.createEvent("Event");
            n.initEvent(e, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
        }
        var le = ["", "webkit", "moz", "MS", "ms", "o"],
            ue = t.createElement("div"),
            ce = "function",
            de = Math.round,
            pe = Math.abs,
            fe = Date.now,
            he = 1,
            me = /mobile|tablet|ip(ad|hone|od)|android/i,
            ve = "ontouchstart" in e,
            ge = x(e, "PointerEvent") !== n,
            ye = ve && me.test(navigator.userAgent),
            be = "touch",
            we = "pen",
            xe = "mouse",
            Ce = "kinect",
            Fe = 25,
            ke = 1,
            Oe = 2,
            Ee = 4,
            $e = 8,
            Pe = 1,
            Ae = 2,
            Se = 4,
            Te = 8,
            _e = 16,
            Ie = Ae | Se,
            De = Te | _e,
            Ne = Ie | De,
            qe = ["x", "y"],
            ze = ["clientX", "clientY"];
        k.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(F(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(F(this.element), this.evWin, this.domHandler)
            }
        };
        var je = {
                mousedown: ke,
                mousemove: Oe,
                mouseup: Ee
            },
            Me = "mousedown",
            Le = "mousemove mouseup";
        u(j, k, {
            handler: function(e) {
                var t = je[e.type];
                t & ke && 0 === e.button && (this.pressed = !0), t & Oe && 1 !== e.which && (t = Ee), this.pressed && this.allow && (t & Ee && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: xe,
                    srcEvent: e
                }))
            }
        });
        var Re = {
                pointerdown: ke,
                pointermove: Oe,
                pointerup: Ee,
                pointercancel: $e,
                pointerout: $e
            },
            Ve = {
                2: be,
                3: we,
                4: xe,
                5: Ce
            },
            He = "pointerdown",
            We = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (He = "MSPointerDown", We = "MSPointerMove MSPointerUp MSPointerCancel"), u(M, k, {
            handler: function(e) {
                var t = this.store,
                    i = !1,
                    n = e.type.toLowerCase().replace("ms", ""),
                    r = Re[n],
                    a = Ve[e.pointerType] || e.pointerType,
                    o = a == be,
                    s = y(t, e.pointerId, "pointerId");
                r & ke && (0 === e.button || o) ? 0 > s && (t.push(e), s = t.length - 1) : r & (Ee | $e) && (i = !0), 0 > s || (t[s] = e, this.callback(this.manager, r, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: a,
                    srcEvent: e
                }), i && t.splice(s, 1))
            }
        });
        var Qe = {
                touchstart: ke,
                touchmove: Oe,
                touchend: Ee,
                touchcancel: $e
            },
            Be = "touchstart",
            Ue = "touchstart touchmove touchend touchcancel";
        u(L, k, {
            handler: function(e) {
                var t = Qe[e.type];
                if (t === ke && (this.started = !0), this.started) {
                    var i = R.call(this, e, t);
                    t & (Ee | $e) && 0 === i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: be,
                        srcEvent: e
                    })
                }
            }
        });
        var Xe = {
                touchstart: ke,
                touchmove: Oe,
                touchend: Ee,
                touchcancel: $e
            },
            Ke = "touchstart touchmove touchend touchcancel";
        u(V, k, {
            handler: function(e) {
                var t = Xe[e.type],
                    i = H.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: be,
                    srcEvent: e
                })
            }
        }), u(W, k, {
            handler: function(e, t, i) {
                var n = i.pointerType == be,
                    r = i.pointerType == xe;
                if (n) this.mouse.allow = !1;
                else if (r && !this.mouse.allow) return;
                t & (Ee | $e) && (this.mouse.allow = !0), this.callback(e, t, i)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ye = x(ue.style, "touchAction"),
            Ge = Ye !== n,
            Je = "compute",
            Ze = "auto",
            et = "manipulation",
            tt = "none",
            it = "pan-x",
            nt = "pan-y";
        Q.prototype = {
            set: function(e) {
                e == Je && (e = this.compute()), Ge && (this.manager.element.style[Ye] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return o(this.manager.recognizers, function(t) {
                    d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }), B(e.join(" "))
            },
            preventDefaults: function(e) {
                if (!Ge) {
                    var t = e.srcEvent,
                        i = e.offsetDirection;
                    if (this.manager.session.prevented) return void t.preventDefault();
                    var n = this.actions,
                        r = v(n, tt),
                        a = v(n, nt),
                        o = v(n, it);
                    return r || a && i & Ie || o && i & De ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var rt = 1,
            at = 2,
            ot = 4,
            st = 8,
            lt = st,
            ut = 16,
            ct = 32;
        U.prototype = {
            defaults: {},
            set: function(e) {
                return s(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (a(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = Y(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return a(e, "dropRecognizeWith", this) ? this : (e = Y(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (a(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = Y(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (a(e, "dropRequireFailure", this)) return this;
                e = Y(e, this);
                var t = y(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    i.manager.emit(i.options.event + (t ? X(n) : ""), e)
                }
                var i = this,
                    n = this.state;
                st > n && t(!0), t(), n >= st && t(!0)
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = ct)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (ct | rt))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = s({}, e);
                return d(this.options.enable, [this, t]) ? (this.state & (lt | ut | ct) && (this.state = rt), this.state = this.process(t), void(this.state & (at | ot | st | ut) && this.tryEmit(t))) : (this.reset(), void(this.state = ct))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, u(G, U, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    i = e.eventType,
                    n = t & (at | ot),
                    r = this.attrTest(e);
                return n && (i & $e || !r) ? t | ut : n || r ? i & Ee ? t | st : t & at ? t | ot : at : ct
            }
        }), u(J, G, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Ne
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & Ie && t.push(nt), e & De && t.push(it), t
            },
            directionTest: function(e) {
                var t = this.options,
                    i = !0,
                    n = e.distance,
                    r = e.direction,
                    a = e.deltaX,
                    o = e.deltaY;
                return r & t.direction || (t.direction & Ie ? (r = 0 === a ? Pe : 0 > a ? Ae : Se, i = a != this.pX, n = Math.abs(e.deltaX)) : (r = 0 === o ? Pe : 0 > o ? Te : _e, i = o != this.pY, n = Math.abs(e.deltaY))), e.direction = r, i && n > t.threshold && r & t.direction
            },
            attrTest: function(e) {
                return G.prototype.attrTest.call(this, e) && (this.state & at || !(this.state & at) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = K(e.direction);
                t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
            }
        }), u(Z, G, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [tt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & at)
            },
            emit: function(e) {
                if (this._super.emit.call(this, e), 1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + t, e)
                }
            }
        }), u(ee, U, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [Ze]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    a = e.deltaTime > t.time;
                if (this._input = e, !n || !i || e.eventType & (Ee | $e) && !a) this.reset();
                else if (e.eventType & ke) this.reset(), this._timer = r(function() {
                    this.state = lt, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & Ee) return lt;
                return ct
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === lt && (e && e.eventType & Ee ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = fe(), this.manager.emit(this.options.event, this._input)))
            }
        }), u(te, G, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [tt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & at)
            }
        }), u(ie, G, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: Ie | De,
                pointers: 1
            },
            getTouchAction: function() {
                return J.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return i & (Ie | De) ? t = e.velocity : i & Ie ? t = e.velocityX : i & De && (t = e.velocityY), this._super.attrTest.call(this, e) && i & e.direction && e.distance > this.options.threshold && pe(t) > this.options.velocity && e.eventType & Ee
            },
            emit: function(e) {
                var t = K(e.direction);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), u(ne, U, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [et]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    a = e.deltaTime < t.time;
                if (this.reset(), e.eventType & ke && 0 === this.count) return this.failTimeout();
                if (n && a && i) {
                    if (e.eventType != Ee) return this.failTimeout();
                    var o = this.pTime ? e.timeStamp - this.pTime < t.interval : !0,
                        s = !this.pCenter || D(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp, this.pCenter = e.center, s && o ? this.count += 1 : this.count = 1, this._input = e;
                    var l = this.count % t.taps;
                    if (0 === l) return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = lt, this.tryEmit()
                    }, t.interval, this), at) : lt
                }
                return ct
            },
            failTimeout: function() {
                return this._timer = r(function() {
                    this.state = ct
                }, this.options.interval, this), ct
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), re.VERSION = "2.0.4", re.defaults = {
            domEvents: !1,
            touchAction: Je,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [te, {
                    enable: !1
                }],
                [Z, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [ie, {
                    direction: Ie
                }],
                [J, {
                        direction: Ie
                    },
                    ["swipe"]
                ],
                [ne],
                [ne, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [ee]
            ],
            cssProps: {
                userSelect: "default",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var dt = 1,
            pt = 2;
        ae.prototype = {
            set: function(e) {
                return s(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? pt : dt
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var i, n = this.recognizers,
                        r = t.curRecognizer;
                    (!r || r && r.state & lt) && (r = t.curRecognizer = null);
                    for (var a = 0; a < n.length;) i = n[a], t.stopped === pt || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(e), !r && i.state & (at | ot | st) && (r = t.curRecognizer = i), a++
                }
            },
            get: function(e) {
                if (e instanceof U) return e;
                for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (a(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (a(e, "remove", this)) return this;
                var t = this.recognizers;
                return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
            },
            on: function(e, t) {
                var i = this.handlers;
                return o(g(e), function(e) {
                    i[e] = i[e] || [], i[e].push(t)
                }), this
            },
            off: function(e, t) {
                var i = this.handlers;
                return o(g(e), function(e) {
                    t ? i[e].splice(y(i[e], t), 1) : delete i[e]
                }), this
            },
            emit: function(e, t) {
                this.options.domEvents && se(e, t);
                var i = this.handlers[e] && this.handlers[e].slice();
                if (i && i.length) {
                    t.type = e, t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](t), n++
                }
            },
            destroy: function() {
                this.element && oe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, s(re, {
            INPUT_START: ke,
            INPUT_MOVE: Oe,
            INPUT_END: Ee,
            INPUT_CANCEL: $e,
            STATE_POSSIBLE: rt,
            STATE_BEGAN: at,
            STATE_CHANGED: ot,
            STATE_ENDED: st,
            STATE_RECOGNIZED: lt,
            STATE_CANCELLED: ut,
            STATE_FAILED: ct,
            DIRECTION_NONE: Pe,
            DIRECTION_LEFT: Ae,
            DIRECTION_RIGHT: Se,
            DIRECTION_UP: Te,
            DIRECTION_DOWN: _e,
            DIRECTION_HORIZONTAL: Ie,
            DIRECTION_VERTICAL: De,
            DIRECTION_ALL: Ne,
            Manager: ae,
            Input: k,
            TouchAction: Q,
            TouchInput: V,
            MouseInput: j,
            PointerEventInput: M,
            TouchMouseInput: W,
            SingleTouchInput: L,
            Recognizer: U,
            AttrRecognizer: G,
            Tap: ne,
            Pan: J,
            Swipe: ie,
            Pinch: Z,
            Rotate: te,
            Press: ee,
            on: f,
            off: h,
            each: o,
            merge: l,
            extend: s,
            inherit: u,
            bindFn: c,
            prefixed: x
        }), typeof define == ce && define.amd ? define(function() {
            return re
        }) : "undefined" != typeof module && module.exports ? module.exports = re : e[i] = re
    }(window, document, "Hammer"),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
    }(function(e, t) {
        function i(i, n) {
            var r = e(i);
            r.data("hammer") || r.data("hammer", new t(r[0], n))
        }
        e.fn.hammer = function(e) {
            return this.each(function() {
                i(this, e)
            })
        }, t.Manager.prototype.emit = function(t) {
            return function(i, n) {
                t.call(this, i, n), e(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(t.Manager.prototype.emit)
    }),
    function(e) {
        e.Package ? Materialize = {} : e.Materialize = {}
    }(window), Materialize.guid = function() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
        }
    }(), Materialize.elementOrParentIsFixed = function(e) {
        var t = $(e),
            i = t.add(t.parents()),
            n = !1;
        return i.each(function() {
            return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
        }), n
    };
var Vel;
Vel = $ ? $.Velocity : Velocity,
    function(e) {
        e.fn.collapsible = function(t) {
            var i = {
                accordion: void 0
            };
            return t = e.extend(i, t), this.each(function() {
                function i(t) {
                    s = o.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }), s.not(t).removeClass("active").parent().removeClass("active"), s.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    })
                }

                function n(t) {
                    t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    })
                }

                function r(e) {
                    var t = a(e);
                    return t.length > 0
                }

                function a(e) {
                    return e.closest("li > .collapsible-header")
                }
                var o = e(this),
                    s = e(this).find("> li > .collapsible-header"),
                    l = o.data("collapsible");
                o.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), o.on("click.collapse", "> li > .collapsible-header", function(o) {
                    var s = e(this),
                        u = e(o.target);
                    r(u) && (u = a(u)), u.toggleClass("active"), t.accordion || "accordion" === l || void 0 === l ? i(u) : (n(u), s.hasClass("active") && n(s))
                });
                var s = o.find("> li > .collapsible-header");
                t.accordion || "accordion" === l || void 0 === l ? i(s.filter(".active").first()) : s.filter(".active").each(function() {
                    n(e(this))
                })
            })
        }, e(document).ready(function() {
            e(".collapsible").collapsible()
        })
    }(jQuery),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function n() {
                    void 0 !== o.data("induration") && (s.inDuration = o.data("inDuration")), void 0 !== o.data("outduration") && (s.outDuration = o.data("outDuration")), void 0 !== o.data("constrainwidth") && (s.constrain_width = o.data("constrainwidth")), void 0 !== o.data("hover") && (s.hover = o.data("hover")), void 0 !== o.data("gutter") && (s.gutter = o.data("gutter")), void 0 !== o.data("beloworigin") && (s.belowOrigin = o.data("beloworigin")), void 0 !== o.data("alignment") && (s.alignment = o.data("alignment"))
                }

                function r(t) {
                    "focus" === t && (l = !0), n(), u.addClass("active"), o.addClass("active"), s.constrain_width === !0 ? u.css("width", o.outerWidth()) : u.css("white-space", "nowrap");
                    var i, r = window.innerHeight,
                        a = o.innerHeight(),
                        c = o.offset().left,
                        d = o.offset().top - e(window).scrollTop(),
                        p = s.alignment,
                        f = 0;
                    if (s.belowOrigin === !0 && (f = a), c + u.innerWidth() > e(window).width() ? p = "right" : c - u.innerWidth() + o.innerWidth() < 0 && (p = "left"), d + u.innerHeight() > r)
                        if (d + a - u.innerHeight() < 0) {
                            var h = r - d - f;
                            u.css("max-height", h)
                        } else f || (f += a), f -= u.innerHeight();
                    if ("left" === p) i = s.gutter, leftPosition = o.position().left + i;
                    else if ("right" === p) {
                        var m = o.position().left + o.outerWidth() - u.outerWidth();
                        i = -s.gutter, leftPosition = m + i
                    }
                    u.css({
                        position: "absolute",
                        top: o.position().top + f,
                        left: leftPosition
                    }), u.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: s.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function a() {
                    l = !1, u.fadeOut(s.outDuration), u.removeClass("active"), u.css("max-height", ""), o.removeClass("active")
                }
                var o = e(this),
                    s = e.extend({}, i, t),
                    l = !1,
                    u = e("#" + o.attr("data-activates"));
                if (n(), o.after(u), s.hover) {
                    var c = !1;
                    o.unbind("click." + o.attr("id")), o.on("mouseenter", function(e) {
                        c === !1 && (r(), c = !0)
                    }), o.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(u) || (u.stop(!0, !0), a(), c = !1)
                    }), u.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(o) || (u.stop(!0, !0), a(), c = !1)
                    })
                } else o.unbind("click." + o.attr("id")), o.bind("click." + o.attr("id"), function(t) {
                    l || (o[0] != t.currentTarget || o.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? o.hasClass("active") && (a(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id"))) : (t.preventDefault(), r("click")), u.hasClass("active") && e(document).bind("click." + u.attr("id") + " touchstart." + u.attr("id"), function(t) {
                        u.is(t.target) || o.is(t.target) || o.find(t.target).length || (a(), e(document).unbind("click." + u.attr("id") + " touchstart." + u.attr("id")))
                    }))
                });
                o.on("open", function(e, t) {
                    r(t)
                }), o.on("close", a)
            })
        }, e(document).ready(function() {
            e(".dropdown-button").dropdown()
        })
    }(jQuery),
    function(e) {
        var t = 0,
            i = 0,
            n = function() {
                return i++, "materialize-lean-overlay-" + i
            };
        e.fn.extend({
            openModal: function(i) {
                e("body").css("overflow", "hidden");
                var r = {
                        opacity: .5,
                        in_duration: 350,
                        out_duration: 250,
                        ready: void 0,
                        complete: void 0,
                        dismissible: !0,
                        starting_top: "4%"
                    },
                    a = n(),
                    o = e(this),
                    s = e('<div class="lean-overlay"></div>'),
                    l = ++t;
                s.attr("id", a).css("z-index", 1e3 + 2 * l), o.data("overlay-id", a).css("z-index", 1e3 + 2 * l + 1), e("body").append(s), i = e.extend(r, i), i.dismissible && (s.click(function() {
                    o.closeModal(i)
                }), e(document).on("keyup.leanModal" + a, function(e) {
                    27 === e.keyCode && o.closeModal(i)
                })), o.find(".modal-close").on("click.close", function(e) {
                    o.closeModal(i)
                }), s.css({
                    display: "block",
                    opacity: 0
                }), o.css({
                    display: "block",
                    opacity: 0
                }), s.velocity({
                    opacity: i.opacity
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic"
                }), o.data("associated-overlay", s[0]), o.hasClass("bottom-sheet") ? o.velocity({
                    bottom: "0",
                    opacity: 1
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof i.ready && i.ready()
                    }
                }) : (e.Velocity.hook(o, "scaleX", .7), o.css({
                    top: i.starting_top
                }), o.velocity({
                    top: "10%",
                    opacity: 1,
                    scaleX: "1"
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof i.ready && i.ready()
                    }
                }))
            }
        }), e.fn.extend({
            closeModal: function(i) {
                var n = {
                        out_duration: 250,
                        complete: void 0
                    },
                    r = e(this),
                    a = r.data("overlay-id"),
                    o = e("#" + a);
                i = e.extend(n, i), e("body").css("overflow", ""), r.find(".modal-close").off("click.close"), e(document).off("keyup.leanModal" + a), o.velocity({
                    opacity: 0
                }, {
                    duration: i.out_duration,
                    queue: !1,
                    ease: "easeOutQuart"
                }), r.hasClass("bottom-sheet") ? r.velocity({
                    bottom: "-100%",
                    opacity: 0
                }, {
                    duration: i.out_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        o.css({
                            display: "none"
                        }), "function" == typeof i.complete && i.complete(), o.remove(), t--
                    }
                }) : r.velocity({
                    top: i.starting_top,
                    opacity: 0,
                    scaleX: .7
                }, {
                    duration: i.out_duration,
                    complete: function() {
                        e(this).css("display", "none"), "function" == typeof i.complete && i.complete(), o.remove(), t--
                    }
                })
            }
        }), e.fn.extend({
            leanModal: function(t) {
                return this.each(function() {
                    var i = {
                            starting_top: "4%"
                        },
                        n = e.extend(i, t);
                    e(this).click(function(t) {
                        n.starting_top = (e(this).offset().top - e(window).scrollTop()) / 1.15;
                        var i = e(this).attr("href") || "#" + e(this).data("target");
                        e(i).openModal(n), t.preventDefault()
                    })
                })
            }
        })
    }(jQuery),
    function(e) {
        e.fn.materialbox = function() {
            return this.each(function() {
                function t() {
                    a = !1;
                    var t = l.parent(".material-placeholder"),
                        n = (window.innerWidth, window.innerHeight, l.data("width")),
                        o = l.data("height");
                    l.velocity("stop", !0), e("#materialbox-overlay").velocity("stop", !0), e(".materialbox-caption").velocity("stop", !0), e("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: s,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            r = !1, e(this).remove()
                        }
                    }), l.velocity({
                        width: n,
                        height: o,
                        left: 0,
                        top: 0
                    }, {
                        duration: s,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), e(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: s,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            t.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), l.css({
                                height: "",
                                top: "",
                                left: "",
                                width: "",
                                "max-width": "",
                                position: "",
                                "z-index": ""
                            }), l.removeClass("active"), a = !0, e(this).remove(), i.css("overflow", "")
                        }
                    })
                }
                if (!e(this).hasClass("initialized")) {
                    e(this).addClass("initialized");
                    var i, n, r = !1,
                        a = !0,
                        o = 275,
                        s = 200,
                        l = e(this),
                        u = e("<div></div>").addClass("material-placeholder");
                    l.wrap(u), l.on("click", function() {
                        var s = l.parent(".material-placeholder"),
                            u = window.innerWidth,
                            c = window.innerHeight,
                            d = l.width(),
                            p = l.height();
                        if (a === !1) return t(), !1;
                        if (r && a === !0) return t(), !1;
                        for (a = !1, l.addClass("active"), r = !0, s.css({
                                width: s[0].getBoundingClientRect().width,
                                height: s[0].getBoundingClientRect().height,
                                position: "relative",
                                top: 0,
                                left: 0
                            }), i = void 0, n = s[0].parentNode; null !== n && !e(n).is(document);) {
                            var f = e(n);
                            "hidden" === f.css("overflow") && (f.css("overflow", "visible"), i = void 0 === i ? f : i.add(f)), n = n.parentNode
                        }
                        l.css({
                            position: "absolute",
                            "z-index": 1e3
                        }).data("width", d).data("height", p);
                        var h = e('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click(function() {
                            a === !0 && t()
                        });
                        if (e("body").append(h), h.velocity({
                                opacity: 1
                            }, {
                                duration: o,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== l.data("caption")) {
                            var m = e('<div class="materialbox-caption"></div>');
                            m.text(l.data("caption")), e("body").append(m), m.css({
                                display: "inline"
                            }), m.velocity({
                                opacity: 1
                            }, {
                                duration: o,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var v = 0,
                            g = d / u,
                            y = p / c,
                            b = 0,
                            w = 0;
                        g > y ? (v = p / d, b = .9 * u, w = .9 * u * v) : (v = d / p, b = .9 * c * v, w = .9 * c), l.hasClass("responsive-img") ? l.velocity({
                            "max-width": b,
                            width: d
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function() {
                                l.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: w,
                                    width: b,
                                    left: e(document).scrollLeft() + u / 2 - l.parent(".material-placeholder").offset().left - b / 2,
                                    top: e(document).scrollTop() + c / 2 - l.parent(".material-placeholder").offset().top - w / 2
                                }, {
                                    duration: o,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        a = !0
                                    }
                                })
                            }
                        }) : l.css("left", 0).css("top", 0).velocity({
                            height: w,
                            width: b,
                            left: e(document).scrollLeft() + u / 2 - l.parent(".material-placeholder").offset().left - b / 2,
                            top: e(document).scrollTop() + c / 2 - l.parent(".material-placeholder").offset().top - w / 2
                        }, {
                            duration: o,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a = !0
                            }
                        })
                    }), e(window).scroll(function() {
                        r && t()
                    }), e(document).keyup(function(e) {
                        27 === e.keyCode && a === !0 && r && t()
                    })
                }
            })
        }, e(document).ready(function() {
            e(".materialboxed").materialbox()
        })
    }(jQuery),
    function(e) {
        e.fn.parallax = function() {
            var t = e(window).width();
            return this.each(function(i) {
                function n(i) {
                    var n;
                    n = 601 > t ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                    var a = r.children("img").first(),
                        o = a.height(),
                        s = o - n,
                        l = r.offset().top + n,
                        u = r.offset().top,
                        c = e(window).scrollTop(),
                        d = window.innerHeight,
                        p = c + d,
                        f = (p - u) / (n + d),
                        h = Math.round(s * f);
                    i && a.css("display", "block"), l > c && c + d > u && a.css("transform", "translate3D(-50%," + h + "px, 0)")
                }
                var r = e(this);
                r.addClass("parallax"), r.children("img").one("load", function() {
                    n(!0)
                }).each(function() {
                    this.complete && e(this).load()
                }), e(window).scroll(function() {
                    t = e(window).width(), n(!1)
                }), e(window).resize(function() {
                    t = e(window).width(), n(!1)
                })
            })
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function() {
                return this.each(function() {
                    var t = e(this);
                    e(window).width(), t.width("100%");
                    var i, n, r = t.find("li.tab a"),
                        a = t.width(),
                        o = t.find("li").first().outerWidth(),
                        s = parseInt(t.find("li").first().css("minWidth")),
                        l = 0;
                    i = e(r.filter('[href="' + location.hash + '"]')), 0 === i.length && (i = e(this).find("li.tab a.active").first()), 0 === i.length && (i = e(this).find("li.tab a").first()), i.addClass("active"), l = r.index(i), 0 > l && (l = 0), n = e(i[0].hash), t.append('<div class="indicator"></div>');
                    var u = t.find(".indicator");
                    if (t.is(":visible") && (u.css({
                            right: a - (l + 1) * o
                        }), u.css({
                            left: l * o
                        })), e(window).resize(function() {
                            a = t.width(), o = t.find("li").first().outerWidth(), 0 > l && (l = 0), 0 !== o && 0 !== a && (u.css({
                                right: a - (l + 1) * o
                            }), u.css({
                                left: l * o
                            }))
                        }), r.not(i).each(function() {
                            e(this.hash).hide()
                        }), t.on("click", "a", function(s) {
                            if (e(this).parent().hasClass("disabled")) return void s.preventDefault();
                            a = t.width(), o = t.find("li").first().outerWidth(), i.removeClass("active"), n.hide(), i = e(this), n = e(this.hash), r = t.find("li.tab a"), i.addClass("active");
                            var c = l;
                            l = r.index(e(this)), 0 > l && (l = 0), n.show(), l - c >= 0 ? (u.velocity({
                                right: a - (l + 1) * o
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), u.velocity({
                                left: l * o
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                delay: 90
                            })) : (u.velocity({
                                left: l * o
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), u.velocity({
                                right: a - (l + 1) * o
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                delay: 90
                            })), s.preventDefault()
                        }), s >= o) {
                        t.wrap('<div class="hide-tab-scrollbar"></div>');
                        var c = document.createElement("div");
                        c.className = "scrollbar-measure", document.body.appendChild(c);
                        var d = c.offsetHeight - c.clientHeight;
                        document.body.removeChild(c), 0 === d && (d = 15, t.find(".indicator").css("bottom", d)), t.height(e(this).height() + d)
                    }
                })
            },
            select_tab: function(e) {
                this.find('a[href="#' + e + '"]').trigger("click")
            }
        };
        e.fn.tabs = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
        }, e(document).ready(function() {
            e("ul.tabs").tabs()
        })
    }(jQuery),
    function(e) {
        e.fn.tooltip = function(i) {
            var n = null,
                r = !1,
                a = null,
                o = 5,
                s = {
                    delay: 350
                };
            return "remove" === i ? (this.each(function() {
                e("#" + e(this).attr("data-tooltip-id")).remove()
            }), !1) : (i = e.extend(s, i), this.each(function() {
                var s = Materialize.guid(),
                    l = e(this);
                l.attr("data-tooltip-id", s);
                var u = e("<span></span>").text(l.attr("data-tooltip")),
                    c = e("<div></div>");
                c.addClass("material-tooltip").append(u).appendTo(e("body")).attr("id", s);
                var d = e("<div></div>").addClass("backdrop");
                d.appendTo(c), d.css({
                    top: 0,
                    left: 0
                }), l.off("mouseenter.tooltip mouseleave.tooltip"), l.on({
                    "mouseenter.tooltip": function(e) {
                        var s = l.data("delay");
                        s = void 0 === s || "" === s ? i.delay : s, n = 0, a = setInterval(function() {
                            if (n += 10, n >= s && r === !1) {
                                r = !0, c.css({
                                    display: "block",
                                    left: "0px",
                                    top: "0px"
                                }), c.children("span").text(l.attr("data-tooltip"));
                                var e, i, a, u = l.outerWidth(),
                                    p = l.outerHeight(),
                                    f = l.attr("data-position"),
                                    h = c.outerHeight(),
                                    m = c.outerWidth(),
                                    v = "0px",
                                    g = "0px",
                                    y = 8;
                                "top" === f ? (e = l.offset().top - h - o, i = l.offset().left + u / 2 - m / 2, a = t(i, e, m, h), v = "-10px", d.css({
                                    borderRadius: "14px 14px 0 0",
                                    transformOrigin: "50% 90%",
                                    marginTop: h,
                                    marginLeft: m / 2 - d.width() / 2
                                })) : "left" === f ? (e = l.offset().top + p / 2 - h / 2, i = l.offset().left - m - o, a = t(i, e, m, h), g = "-10px", d.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "14px 0 0 14px",
                                    transformOrigin: "95% 50%",
                                    marginTop: h / 2,
                                    marginLeft: m
                                })) : "right" === f ? (e = l.offset().top + p / 2 - h / 2, i = l.offset().left + u + o, a = t(i, e, m, h), g = "+10px", d.css({
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "0 14px 14px 0",
                                    transformOrigin: "5% 50%",
                                    marginTop: h / 2,
                                    marginLeft: "0px"
                                })) : (e = l.offset().top + l.outerHeight() + o, i = l.offset().left + u / 2 - m / 2, a = t(i, e, m, h), v = "+10px", d.css({
                                    marginLeft: m / 2 - d.width() / 2
                                })), c.css({
                                    top: a.y,
                                    left: a.x
                                }), y = m / 8, 8 > y && (y = 8), ("right" === f || "left" === f) && (y = m / 10, 6 > y && (y = 6)), c.velocity({
                                    marginTop: v,
                                    marginLeft: g
                                }, {
                                    duration: 350,
                                    queue: !1
                                }).velocity({
                                    opacity: 1
                                }, {
                                    duration: 300,
                                    delay: 50,
                                    queue: !1
                                }), d.css({
                                    display: "block"
                                }).velocity({
                                    opacity: 1
                                }, {
                                    duration: 55,
                                    delay: 0,
                                    queue: !1
                                }).velocity({
                                    scale: y
                                }, {
                                    duration: 300,
                                    delay: 0,
                                    queue: !1,
                                    easing: "easeInOutQuad"
                                })
                            }
                        }, 10)
                    },
                    "mouseleave.tooltip": function() {
                        clearInterval(a), n = 0, c.velocity({
                            opacity: 0,
                            marginTop: 0,
                            marginLeft: 0
                        }, {
                            duration: 225,
                            queue: !1,
                            delay: 225
                        }), d.velocity({
                            opacity: 0,
                            scale: 1
                        }, {
                            duration: 225,
                            delay: 275,
                            queue: !1,
                            complete: function() {
                                d.css("display", "none"), c.css("display", "none"), r = !1
                            }
                        })
                    }
                })
            }))
        };
        var t = function(t, i, n, r) {
            var a = t,
                o = i;
            return 0 > a ? a = 4 : a + n > window.innerWidth && (a -= a + n - window.innerWidth), 0 > o ? o = 4 : o + r > window.innerHeight + e(window).scrollTop && (o -= o + r - window.innerHeight), {
                x: a,
                y: o
            }
        };
        e(document).ready(function() {
            e(".tooltipped").tooltip()
        })
    }(jQuery),
    function(e) {
        "use strict";

        function t(e) {
            return null !== e && e === e.window
        }

        function i(e) {
            return t(e) ? e : 9 === e.nodeType && e.defaultView
        }

        function n(e) {
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                a = e && e.ownerDocument;
            return t = a.documentElement, "undefined" != typeof e.getBoundingClientRect && (r = e.getBoundingClientRect()), n = i(a), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }
        }

        function r(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }

        function a(e) {
            if (c.allowEvent(e) === !1) return null;
            for (var t = null, i = e.target || e.srcElement; null !== i.parentElement;) {
                if (!(i instanceof SVGElement || -1 === i.className.indexOf("waves-effect"))) {
                    t = i;
                    break
                }
                if (i.classList.contains("waves-effect")) {
                    t = i;
                    break
                }
                i = i.parentElement
            }
            return t
        }

        function o(t) {
            var i = a(t);
            null !== i && (u.show(t, i), "ontouchstart" in e && (i.addEventListener("touchend", u.hide, !1), i.addEventListener("touchcancel", u.hide, !1)), i.addEventListener("mouseup", u.hide, !1), i.addEventListener("mouseleave", u.hide, !1))
        }
        var s = s || {},
            l = document.querySelectorAll.bind(document),
            u = {
                duration: 750,
                show: function(e, t) {
                    if (2 === e.button) return !1;
                    var i = t || this,
                        a = document.createElement("div");
                    a.className = "waves-ripple", i.appendChild(a);
                    var o = n(i),
                        s = e.pageY - o.top,
                        l = e.pageX - o.left,
                        c = "scale(" + i.clientWidth / 100 * 10 + ")";
                    "touches" in e && (s = e.touches[0].pageY - o.top, l = e.touches[0].pageX - o.left), a.setAttribute("data-hold", Date.now()), a.setAttribute("data-scale", c), a.setAttribute("data-x", l), a.setAttribute("data-y", s);
                    var d = {
                        top: s + "px",
                        left: l + "px"
                    };
                    a.className = a.className + " waves-notransition", a.setAttribute("style", r(d)), a.className = a.className.replace("waves-notransition", ""), d["-webkit-transform"] = c, d["-moz-transform"] = c, d["-ms-transform"] = c, d["-o-transform"] = c, d.transform = c, d.opacity = "1", d["-webkit-transition-duration"] = u.duration + "ms", d["-moz-transition-duration"] = u.duration + "ms", d["-o-transition-duration"] = u.duration + "ms", d["transition-duration"] = u.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", a.setAttribute("style", r(d))
                },
                hide: function(e) {
                    c.touchup(e);
                    var t = this,
                        i = (1.4 * t.clientWidth, null),
                        n = t.getElementsByClassName("waves-ripple");
                    if (!(n.length > 0)) return !1;
                    i = n[n.length - 1];
                    var a = i.getAttribute("data-x"),
                        o = i.getAttribute("data-y"),
                        s = i.getAttribute("data-scale"),
                        l = Date.now() - Number(i.getAttribute("data-hold")),
                        d = 350 - l;
                    0 > d && (d = 0), setTimeout(function() {
                        var e = {
                            top: o + "px",
                            left: a + "px",
                            opacity: "0",
                            "-webkit-transition-duration": u.duration + "ms",
                            "-moz-transition-duration": u.duration + "ms",
                            "-o-transition-duration": u.duration + "ms",
                            "transition-duration": u.duration + "ms",
                            "-webkit-transform": s,
                            "-moz-transform": s,
                            "-ms-transform": s,
                            "-o-transform": s,
                            transform: s
                        };
                        i.setAttribute("style", r(e)), setTimeout(function() {
                            try {
                                t.removeChild(i)
                            } catch (e) {
                                return !1
                            }
                        }, u.duration)
                    }, d)
                },
                wrapInput: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if ("input" === i.tagName.toLowerCase()) {
                            var n = i.parentNode;
                            if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
                            var r = document.createElement("i");
                            r.className = i.className + " waves-input-wrapper";
                            var a = i.getAttribute("style");
                            a || (a = ""), r.setAttribute("style", a), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(r, i), r.appendChild(i)
                        }
                    }
                }
            },
            c = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return "touchstart" === e.type ? c.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                        c.touches > 0 && (c.touches -= 1)
                    }, 500) : "mousedown" === e.type && c.touches > 0 && (t = !1), t
                },
                touchup: function(e) {
                    c.allowEvent(e)
                }
            };
        s.displayEffect = function(t) {
            t = t || {}, "duration" in t && (u.duration = t.duration), u.wrapInput(l(".waves-effect")), "ontouchstart" in e && document.body.addEventListener("touchstart", o, !1), document.body.addEventListener("mousedown", o, !1)
        }, s.attach = function(t) {
            "input" === t.tagName.toLowerCase() && (u.wrapInput([t]), t = t.parentElement), "ontouchstart" in e && t.addEventListener("touchstart", o, !1), t.addEventListener("mousedown", o, !1)
        }, e.Waves = s, document.addEventListener("DOMContentLoaded", function() {
            s.displayEffect()
        }, !1)
    }(window), Materialize.toast = function(e, t, i, n) {
        function r(e) {
            var t = document.createElement("div");
            if (t.classList.add("toast"), i)
                for (var r = i.split(" "), a = 0, o = r.length; o > a; a++) t.classList.add(r[a]);
            ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e): e instanceof jQuery ? t.appendChild(e[0]) : t.innerHTML = e;
            var s = new Hammer(t, {
                prevent_default: !1
            });
            return s.on("pan", function(e) {
                var i = e.deltaX,
                    n = 80;
                t.classList.contains("panning") || t.classList.add("panning");
                var r = 1 - Math.abs(i / n);
                0 > r && (r = 0), Vel(t, {
                    left: i,
                    opacity: r
                }, {
                    duration: 50,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), s.on("panend", function(e) {
                var i = e.deltaX,
                    r = 80;
                Math.abs(i) > r ? Vel(t, {
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof n && n(), t.parentNode.removeChild(t)
                    }
                }) : (t.classList.remove("panning"), Vel(t, {
                    left: 0,
                    opacity: 1
                }, {
                    duration: 300,
                    easing: "easeOutExpo",
                    queue: !1
                }))
            }), t
        }
        i = i || "";
        var a = document.getElementById("toast-container");
        null === a && (a = document.createElement("div"), a.id = "toast-container", document.body.appendChild(a));
        var o = r(e);
        e && a.appendChild(o), o.style.top = "35px", o.style.opacity = 0, Vel(o, {
            top: "0px",
            opacity: 1
        }, {
            duration: 300,
            easing: "easeOutCubic",
            queue: !1
        });
        var s = t,
            l = setInterval(function() {
                null === o.parentNode && window.clearInterval(l), o.classList.contains("panning") || (s -= 20), 0 >= s && (Vel(o, {
                    opacity: 0,
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof n && n(), this[0].parentNode.removeChild(this[0])
                    }
                }), window.clearInterval(l))
            }, 20)
    },
    function(e) {
        var t = {
            init: function(t) {
                var i = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                t = e.extend(i, t), e(this).each(function() {
                    function i(i) {
                        o = !1, s = !1, e("body").css("overflow", ""), e("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }), "left" === t.edge ? (a.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), r.velocity({
                            left: -1 * (t.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                i === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth))
                            }
                        })) : (a.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), r.velocity({
                            right: -1 * (t.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                i === !0 && (r.removeAttr("style"), r.css("width", t.menuWidth))
                            }
                        }))
                    }
                    var n = e(this),
                        r = e("#" + n.attr("data-activates"));
                    240 != t.menuWidth && r.css("width", t.menuWidth);
                    var a = e('<div class="drag-target"></div>');
                    e("body").append(a), "left" == t.edge ? (r.css("left", -1 * (t.menuWidth + 10)), a.css({
                        left: 0
                    })) : (r.addClass("right-aligned").css("right", -1 * (t.menuWidth + 10)).css("left", ""), a.css({
                        right: 0
                    })), r.hasClass("fixed") && window.innerWidth > 992 && r.css("left", 0), r.hasClass("fixed") && e(window).resize(function() {
                        window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").css("opacity") && s ? i(!0) : (r.removeAttr("style"), r.css("width", t.menuWidth)) : s === !1 && ("left" === t.edge ? r.css("left", -1 * (t.menuWidth + 10)) : r.css("right", -1 * (t.menuWidth + 10)))
                    }), t.closeOnClick === !0 && r.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        i()
                    });
                    var o = !1,
                        s = !1;
                    a.on("click", function() {
                        i()
                    }), a.hammer({
                        prevent_default: !1
                    }).bind("pan", function(n) {
                        if ("touch" == n.gesture.pointerType) {
                            var a = (n.gesture.direction, n.gesture.center.x);
                            if (n.gesture.center.y, n.gesture.velocityX, e("body").css("overflow", "hidden"), 0 === e("#sidenav-overlay").length) {
                                var o = e('<div id="sidenav-overlay"></div>');
                                o.css("opacity", 0).click(function() {
                                    i()
                                }), e("body").append(o)
                            }
                            if ("left" === t.edge && (a > t.menuWidth ? a = t.menuWidth : 0 > a && (a = 0)), "left" === t.edge) a < t.menuWidth / 2 ? s = !1 : a >= t.menuWidth / 2 && (s = !0), r.css("left", a - t.menuWidth);
                            else {
                                a < window.innerWidth - t.menuWidth / 2 ? s = !0 : a >= window.innerWidth - t.menuWidth / 2 && (s = !1);
                                var l = -1 * (a - t.menuWidth / 2);
                                l > 0 && (l = 0), r.css("right", l)
                            }
                            var u;
                            "left" === t.edge ? (u = a / t.menuWidth, e("#sidenav-overlay").velocity({
                                opacity: u
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (u = Math.abs((a - window.innerWidth) / t.menuWidth), e("#sidenav-overlay").velocity({
                                opacity: u
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var n = i.gesture.velocityX;
                            o = !1, "left" === t.edge ? s && .3 >= n || -.5 > n ? (r.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!s || n > .3) && (e("body").css("overflow", ""), r.velocity({
                                left: -1 * (t.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            }), a.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : s && n >= -.3 || n > .5 ? (r.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), a.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!s || -.3 > n) && (e("body").css("overflow", ""), r.velocity({
                                right: -1 * (t.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), e("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            }), a.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), n.click(function() {
                        if (s === !0) s = !1, o = !1, i();
                        else {
                            e("body").css("overflow", "hidden"), e("body").append(a), "left" === t.edge ? (a.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), r.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (a.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), r.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), r.css("left", ""));
                            var n = e('<div id="sidenav-overlay"></div>');
                            n.css("opacity", 0).click(function() {
                                s = !1, o = !1, i(), n.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        e(this).remove()
                                    }
                                })
                            }), e("body").append(n), n.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    s = !0, o = !1
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                e("#sidenav-overlay").trigger("click")
            }
        };
        e.fn.sideNav = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        function t(t, i, n, r) {
            var a = e();
            return e.each(o, function(e, o) {
                if (o.height() > 0) {
                    var s = o.offset().top,
                        l = o.offset().left,
                        u = l + o.width(),
                        c = s + o.height(),
                        d = !(l > i || r > u || s > n || t > c);
                    d && a.push(o)
                }
            }), a
        }

        function i() {
            ++u;
            var i = a.scrollTop(),
                n = a.scrollLeft(),
                r = n + a.width(),
                o = i + a.height(),
                l = t(i + c.top + 200, r + c.right, o + c.bottom, n + c.left);
            e.each(l, function(e, t) {
                var i = t.data("scrollSpy:ticks");
                "number" != typeof i && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", u)
            }), e.each(s, function(e, t) {
                var i = t.data("scrollSpy:ticks");
                "number" == typeof i && i !== u && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
            }), s = l
        }

        function n() {
            a.trigger("scrollSpy:winSize")
        }

        function r(e, t, i) {
            var n, r, a, o = null,
                s = 0;
            i || (i = {});
            var l = function() {
                s = i.leading === !1 ? 0 : d(), o = null, a = e.apply(n, r), n = r = null
            };
            return function() {
                var u = d();
                s || i.leading !== !1 || (s = u);
                var c = t - (u - s);
                return n = this, r = arguments, 0 >= c ? (clearTimeout(o), o = null, s = u, a = e.apply(n, r), n = r = null) : o || i.trailing === !1 || (o = setTimeout(l, c)), a
            }
        }
        var a = e(window),
            o = [],
            s = [],
            l = !1,
            u = 0,
            c = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            d = Date.now || function() {
                return (new Date).getTime()
            };
        e.scrollSpy = function(t, n) {
            var s = [];
            t = e(t), t.each(function(t, i) {
                o.push(e(i)), e(i).data("scrollSpy:id", t), e("a[href=#" + e(i).attr("id") + "]").click(function(t) {
                    t.preventDefault();
                    var i = e(this.hash).offset().top + 1;
                    e("html, body").animate({
                        scrollTop: i - 200
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                })
            }), n = n || {
                throttle: 100
            }, c.top = n.offsetTop || 0, c.right = n.offsetRight || 0, c.bottom = n.offsetBottom || 0, c.left = n.offsetLeft || 0;
            var u = r(i, n.throttle || 100),
                d = function() {
                    e(document).ready(u)
                };
            return l || (a.on("scroll", d), a.on("resize", d), l = !0), setTimeout(d, 0), t.on("scrollSpy:enter", function() {
                s = e.grep(s, function(e) {
                    return 0 != e.height()
                });
                var t = e(this);
                s[0] ? (e("a[href=#" + s[0].attr("id") + "]").removeClass("active"), t.data("scrollSpy:id") < s[0].data("scrollSpy:id") ? s.unshift(e(this)) : s.push(e(this))) : s.push(e(this)), e("a[href=#" + s[0].attr("id") + "]").addClass("active")
            }), t.on("scrollSpy:exit", function() {
                if (s = e.grep(s, function(e) {
                        return 0 != e.height()
                    }), s[0]) {
                    e("a[href=#" + s[0].attr("id") + "]").removeClass("active");
                    var t = e(this);
                    s = e.grep(s, function(e) {
                        return e.attr("id") != t.attr("id")
                    }), s[0] && e("a[href=#" + s[0].attr("id") + "]").addClass("active")
                }
            }), t
        }, e.winSizeSpy = function(t) {
            return e.winSizeSpy = function() {
                return a
            }, t = t || {
                throttle: 100
            }, a.on("resize", r(n, t.throttle || 100))
        }, e.fn.scrollSpy = function(t) {
            return e.scrollSpy(e(this), t)
        }
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            function t(t) {
                var i = t.css("font-family"),
                    r = t.css("font-size");
                r && n.css("font-size", r), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(t.val() + "\n");
                var a = n.html().replace(/\n/g, "<br>");
                n.html(a), t.is(":visible") ? n.css("width", t.width()) : n.css("width", e(window).width() / 2), t.css("height", n.height())
            }
            Materialize.updateTextFields = function() {
                var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                e(t).each(function(t, i) {
                    e(i).val().length > 0 || void 0 !== e(this).attr("placeholder") || e(i)[0].validity.badInput === !0 ? e(this).siblings("label").addClass("active") : e(this).siblings("label, i").removeClass("active")
                })
            };
            var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("change", i, function() {
                (0 !== e(this).val().length || void 0 !== e(this).attr("placeholder")) && e(this).siblings("label").addClass("active"), validate_field(e(this))
            }), e(document).ready(function() {
                Materialize.updateTextFields()
            }), e(document).on("reset", function(t) {
                var n = e(t.target);
                n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"), n.find(i).each(function() {
                    "" === e(this).attr("value") && e(this).siblings("label, i").removeClass("active");
                }), n.find("select.initialized").each(function() {
                    var e = n.find("option[selected]").text();
                    n.siblings("input.select-dropdown").val(e)
                }))
            }), e(document).on("focus", i, function() {
                e(this).siblings("label, i").addClass("active")
            }), e(document).on("blur", i, function() {
                var t = e(this);
                0 === t.val().length && t[0].validity.badInput !== !0 && void 0 === t.attr("placeholder") && t.siblings("label, i").removeClass("active"), 0 === t.val().length && t[0].validity.badInput !== !0 && void 0 !== t.attr("placeholder") && t.siblings("i").removeClass("active"), validate_field(t)
            }), window.validate_field = function(e) {
                var t = void 0 !== e.attr("length"),
                    i = parseInt(e.attr("length")),
                    n = e.val().length;
                0 === e.val().length && e[0].validity.badInput === !1 ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && i >= n || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")))
            };
            var n = e(".hiddendiv").first();
            n.length || (n = e('<div class="hiddendiv common"></div>'), e("body").append(n));
            var r = ".materialize-textarea";
            e(r).each(function() {
                var i = e(this);
                i.val().length && t(i)
            }), e("body").on("keyup keydown autoresize", r, function() {
                t(e(this))
            }), e(document).on("change", '.file-field input[type="file"]', function() {
                for (var t = e(this).closest(".file-field"), i = t.find("input.file-path"), n = e(this)[0].files, r = [], a = 0; a < n.length; a++) r.push(n[a].name);
                i.val(r.join(", ")), i.trigger("change")
            });
            var a, o = "input[type=range]",
                s = !1;
            e(o).each(function() {
                var t = e('<span class="thumb"><span class="value"></span></span>');
                e(this).after(t)
            });
            var l = ".range-field";
            e(document).on("change", o, function(t) {
                var i = e(this).siblings(".thumb");
                i.find(".value").html(e(this).val())
            }), e(document).on("input mousedown touchstart", o, function(t) {
                var i = e(this).siblings(".thumb"),
                    n = e(this).outerWidth();
                i.length <= 0 && (i = e('<span class="thumb"><span class="value"></span></span>'), e(this).append(i)), i.find(".value").html(e(this).val()), s = !0, e(this).addClass("active"), i.hasClass("active") || i.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== t.type && (a = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left, 0 > a ? a = 0 : a > n && (a = n), i.addClass("active").css("left", a)), i.find(".value").html(e(this).val())
            }), e(document).on("mouseup touchend", l, function() {
                s = !1, e(this).removeClass("active")
            }), e(document).on("mousemove touchmove", l, function(t) {
                var i, n = e(this).children(".thumb");
                if (s) {
                    n.hasClass("active") || n.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), i = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                    var r = e(this).outerWidth();
                    0 > i ? i = 0 : i > r && (i = r), n.addClass("active").css("left", i), n.find(".value").html(n.siblings(o).val())
                }
            }), e(document).on("mouseout touchleave", l, function() {
                if (!s) {
                    var t = e(this).children(".thumb");
                    t.hasClass("active") && t.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), t.removeClass("active")
                }
            })
        }), e.fn.material_select = function(t) {
            function i(e, t, i) {
                var r = e.indexOf(t); - 1 === r ? e.push(t) : e.splice(r, 1), i.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", !0), n(e, i)
            }

            function n(e, t) {
                for (var i = "", n = 0, r = e.length; r > n; n++) {
                    var a = t.find("option").eq(e[n]).text();
                    i += 0 === n ? a : ", " + a
                }
                "" === i && (i = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(i)
            }
            e(this).each(function() {
                var n = e(this);
                if (!n.hasClass("browser-default")) {
                    var r = n.attr("multiple") ? !0 : !1,
                        a = n.data("select-id");
                    if (a && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), e("ul#select-options-" + a).remove()), "destroy" === t) return void n.data("select-id", null).removeClass("initialized");
                    var o = Materialize.guid();
                    n.data("select-id", o);
                    var s = e('<div class="select-wrapper"></div>');
                    s.addClass(n.attr("class"));
                    var l = e('<ul id="select-options-' + o + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>'),
                        u = n.children("option"),
                        c = n.children("optgroup"),
                        d = [],
                        p = !1;
                    n.find("option:selected").length > 0 ? label = n.find("option:selected") : label = u.first();
                    var f = function(t, i, n) {
                        var r = i.is(":disabled") ? "disabled " : "",
                            a = i.data("icon"),
                            o = i.attr("class");
                        if (a) {
                            var s = "";
                            return o && (s = ' class="' + o + '"'), "multiple" === n ? l.append(e('<li class="' + r + '"><img src="' + a + '"' + s + '><span><input type="checkbox"' + r + "/><label></label>" + i.html() + "</span></li>")) : l.append(e('<li class="' + r + '"><img src="' + a + '"' + s + "><span>" + i.html() + "</span></li>")), !0
                        }
                        "multiple" === n ? l.append(e('<li class="' + r + '"><span><input type="checkbox"' + r + "/><label></label>" + i.html() + "</span></li>")) : l.append(e('<li class="' + r + '"><span>' + i.html() + "</span></li>"))
                    };
                    c.length ? c.each(function() {
                        u = e(this).children("option"), l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), u.each(function() {
                            f(n, e(this))
                        })
                    }) : u.each(function() {
                        e(this).is(":disabled") ? "disabled " : "", r ? f(n, e(this), "multiple") : f(n, e(this))
                    }), l.find("li:not(.optgroup)").each(function(a) {
                        var o = n;
                        e(this).click(function(n) {
                            e(this).hasClass("disabled") || e(this).hasClass("optgroup") || (r ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                return !t
                            }), i(d, e(this).index(), o), v.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), o.siblings("input.select-dropdown").val(e(this).text())), activateOption(l, e(this)), o.find("option").eq(a).prop("selected", !0), o.trigger("change"), "undefined" != typeof t && t()), n.stopPropagation()
                        })
                    }), n.wrap(s);
                    var h = e('<span class="caret">&#9660;</span>');
                    n.is(":disabled") && h.addClass("disabled");
                    var m = label.html() && label.html().replace(/"/g, "&quot;"),
                        v = e('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + o + '" value="' + m + '"/>');
                    n.before(v), v.before(h), v.after(l), n.is(":disabled") || v.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), n.attr("tabindex") && e(v[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), v.on({
                        focus: function() {
                            if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                                e(this).trigger("open", ["focus"]);
                                var t = e(this).val(),
                                    i = l.find("li").filter(function() {
                                        return e(this).text().toLowerCase() === t.toLowerCase()
                                    })[0];
                                activateOption(l, i)
                            }
                        },
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }), v.on("blur", function() {
                        r || e(this).trigger("close"), l.find("li.selected").removeClass("selected")
                    }), l.hover(function() {
                        p = !0
                    }, function() {
                        p = !1
                    }), e(window).on({
                        click: function(e) {
                            r && (p || v.trigger("close"))
                        }
                    }), activateOption = function(t, i) {
                        t.find("li.selected").removeClass("selected"), e(i).addClass("selected")
                    };
                    var g = [],
                        y = function(t) {
                            if (9 == t.which) return void v.trigger("close");
                            if (40 == t.which && !l.is(":visible")) return void v.trigger("open");
                            if (13 != t.which || l.is(":visible")) {
                                t.preventDefault();
                                var i = String.fromCharCode(t.which).toLowerCase(),
                                    n = [9, 13, 27, 38, 40];
                                if (i && -1 === n.indexOf(t.which)) {
                                    g.push(i);
                                    var a = g.join(""),
                                        o = l.find("li").filter(function() {
                                            return 0 === e(this).text().toLowerCase().indexOf(a)
                                        })[0];
                                    o && activateOption(l, o)
                                }
                                if (13 == t.which) {
                                    var s = l.find("li.selected:not(.disabled)")[0];
                                    s && (e(s).trigger("click"), r || v.trigger("close"))
                                }
                                40 == t.which && (o = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], activateOption(l, o)), 27 == t.which && v.trigger("close"), 38 == t.which && (o = l.find("li.selected").prev("li:not(.disabled)")[0], o && activateOption(l, o)), setTimeout(function() {
                                    g = []
                                }, 1e3)
                            }
                        };
                    v.on("keydown", y)
                }
            })
        }
    }(jQuery),
    function(e) {
        var t = {
            init: function(t) {
                var i = {
                    indicators: !0,
                    height: 400,
                    transition: 500,
                    interval: 6e3
                };
                return t = e.extend(i, t), this.each(function() {
                    function i(e, t) {
                        e.hasClass("center-align") ? e.velocity({
                            opacity: 0,
                            translateY: -100
                        }, {
                            duration: t,
                            queue: !1
                        }) : e.hasClass("right-align") ? e.velocity({
                            opacity: 0,
                            translateX: 100
                        }, {
                            duration: t,
                            queue: !1
                        }) : e.hasClass("left-align") && e.velocity({
                            opacity: 0,
                            translateX: -100
                        }, {
                            duration: t,
                            queue: !1
                        })
                    }

                    function n(e) {
                        e >= u.length ? e = 0 : 0 > e && (e = u.length - 1), c = l.find(".active").index(), c != e && (r = u.eq(c), $caption = r.find(".caption"), r.removeClass("active"), r.velocity({
                            opacity: 0
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                u.not(".active").velocity({
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        }), i($caption, t.transition), t.indicators && a.eq(c).removeClass("active"), u.eq(e).velocity({
                            opacity: 1
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), u.eq(e).find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: t.transition,
                            delay: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), u.eq(e).addClass("active"), t.indicators && a.eq(e).addClass("active"))
                    }
                    var r, a, o, s = e(this),
                        l = s.find("ul.slides").first(),
                        u = l.find("li"),
                        c = l.find(".active").index(); - 1 != c && (r = u.eq(c)), s.hasClass("fullscreen") || (t.indicators ? s.height(t.height + 40) : s.height(t.height), l.height(t.height)), u.find(".caption").each(function() {
                        i(e(this), 0)
                    }), u.find("img").each(function() {
                        var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        e(this).attr("src") !== t && (e(this).css("background-image", "url(" + e(this).attr("src") + ")"), e(this).attr("src", t))
                    }), t.indicators && (a = e('<ul class="indicators"></ul>'), u.each(function(i) {
                        var r = e('<li class="indicator-item"></li>');
                        r.click(function() {
                            var i = l.parent(),
                                r = i.find(e(this)).index();
                            n(r), clearInterval(o), o = setInterval(function() {
                                c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, n(c)
                            }, t.transition + t.interval)
                        }), a.append(r)
                    }), s.append(a), a = s.find("ul.indicators").find("li.indicator-item")), r ? r.show() : (u.first().addClass("active").velocity({
                        opacity: 1
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), c = 0, r = u.eq(c), t.indicators && a.eq(c).addClass("active")), r.find("img").each(function() {
                        r.find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: t.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }), o = setInterval(function() {
                        c = l.find(".active").index(), n(c + 1)
                    }, t.transition + t.interval);
                    var d = !1,
                        p = !1,
                        f = !1;
                    s.hammer({
                        prevent_default: !1
                    }).bind("pan", function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            clearInterval(o);
                            var t = e.gesture.direction,
                                i = e.gesture.deltaX,
                                n = e.gesture.velocityX;
                            $curr_slide = l.find(".active"), $curr_slide.velocity({
                                translateX: i
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), 4 === t && (i > s.innerWidth() / 2 || -.65 > n) ? f = !0 : 2 === t && (i < -1 * s.innerWidth() / 2 || n > .65) && (p = !0);
                            var r;
                            p && (r = $curr_slide.next(), 0 === r.length && (r = u.first()), r.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })), f && (r = $curr_slide.prev(), 0 === r.length && (r = u.last()), r.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(e) {
                        "touch" === e.gesture.pointerType && ($curr_slide = l.find(".active"), d = !1, curr_index = l.find(".active").index(), f || p ? p ? (n(curr_index + 1), $curr_slide.velocity({
                            translateX: -1 * s.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })) : f && (n(curr_index - 1), $curr_slide.velocity({
                            translateX: s.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })) : $curr_slide.velocity({
                            translateX: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), p = !1, f = !1, clearInterval(o), o = setInterval(function() {
                            c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, n(c)
                        }, t.transition + t.interval))
                    }), s.on("sliderPause", function() {
                        clearInterval(o)
                    }), s.on("sliderStart", function() {
                        clearInterval(o), o = setInterval(function() {
                            c = l.find(".active").index(), u.length == c + 1 ? c = 0 : c += 1, n(c)
                        }, t.transition + t.interval)
                    }), s.on("sliderNext", function() {
                        c = l.find(".active").index(), n(c + 1)
                    }), s.on("sliderPrev", function() {
                        c = l.find(".active").index(), n(c - 1)
                    })
                })
            },
            pause: function() {
                e(this).trigger("sliderPause")
            },
            start: function() {
                e(this).trigger("sliderStart")
            },
            next: function() {
                e(this).trigger("sliderNext")
            },
            prev: function() {
                e(this).trigger("sliderPrev")
            }
        };
        e.fn.slider = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
        }
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e(document).on("click.card", ".card", function(t) {
                e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        e(this).css({
                            display: "none"
                        })
                    }
                }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (e(t.target).closest(".card").css("overflow", "hidden"), e(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))), e(".card-reveal").closest(".card").css("overflow", "hidden")
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e(document).on("click.chip", ".chip .material-icons", function(t) {
                e(this).parent().remove()
            })
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e.fn.pushpin = function(t) {
                var i = {
                    top: 0,
                    bottom: 1 / 0,
                    offset: 0
                };
                return t = e.extend(i, t), $index = 0, this.each(function() {
                    function i(e) {
                        e.removeClass("pin-top"), e.removeClass("pinned"), e.removeClass("pin-bottom")
                    }

                    function n(n, r) {
                        n.each(function() {
                            t.top <= r && t.bottom >= r && !e(this).hasClass("pinned") && (i(e(this)), e(this).css("top", t.offset), e(this).addClass("pinned")), r < t.top && !e(this).hasClass("pin-top") && (i(e(this)), e(this).css("top", 0), e(this).addClass("pin-top")), r > t.bottom && !e(this).hasClass("pin-bottom") && (i(e(this)), e(this).addClass("pin-bottom"), e(this).css("top", t.bottom - o))
                        })
                    }
                    var r = Materialize.guid(),
                        a = e(this),
                        o = e(this).offset().top;
                    n(a, e(window).scrollTop()), e(window).on("scroll." + r, function() {
                        var i = e(window).scrollTop() + t.offset;
                        n(a, i)
                    })
                })
            }
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(i) {
                var n = e(this);
                t(n)
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(t) {
                var n = e(this);
                i(n)
            }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(n) {
                var r = e(this),
                    a = r.parent();
                a.hasClass("active") ? i(a) : t(a)
            })
        }), e.fn.extend({
            openFAB: function() {
                var i = e(this);
                t(i)
            },
            closeFAB: function() {
                i($this)
            }
        });
        var t = function(t) {
                if ($this = t, $this.hasClass("active") === !1) {
                    var i, n, r = $this.hasClass("horizontal");
                    r === !0 ? n = 40 : i = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: i + "px",
                        translateX: n + "px"
                    }, {
                        duration: 0
                    });
                    var a = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: a
                        }), a += 40
                    })
                }
            },
            i = function(e) {
                $this = e;
                var t, i, n = $this.hasClass("horizontal");
                n === !0 ? i = 40 : t = 40, $this.removeClass("active"), $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: t + "px",
                    translateX: i + "px"
                }, {
                    duration: 80
                })
            }
    }(jQuery),
    function(e) {
        Materialize.fadeInImage = function(t) {
            var i = e(t);
            i.css({
                opacity: 0
            }), e(i).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), e(i).velocity({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(t, i) {
                    i.start = 100;
                    var n = t / 100,
                        r = 150 - (100 - t) / 1.75;
                    100 > r && (r = 100), t >= 0 && e(this).css({
                        "-webkit-filter": "grayscale(" + n + ")brightness(" + r + "%)",
                        filter: "grayscale(" + n + ")brightness(" + r + "%)"
                    })
                }
            })
        }, Materialize.showStaggeredList = function(t) {
            var i = 0;
            e(t).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), e(t).find("li").each(function() {
                e(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: i,
                    easing: [60, 10]
                }), i += 120
            })
        }, e(document).ready(function() {
            var t = !1,
                i = !1;
            e(".dismissable").each(function() {
                e(this).hammer({
                    prevent_default: !1
                }).bind("pan", function(n) {
                    if ("touch" === n.gesture.pointerType) {
                        var r = e(this),
                            a = n.gesture.direction,
                            o = n.gesture.deltaX,
                            s = n.gesture.velocityX;
                        r.velocity({
                            translateX: o
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === a && (o > r.innerWidth() / 2 || -.75 > s) && (t = !0), 2 === a && (o < -1 * r.innerWidth() / 2 || s > .75) && (i = !0)
                    }
                }).bind("panend", function(n) {
                    if (Math.abs(n.gesture.deltaX) < e(this).innerWidth() / 2 && (i = !1, t = !1), "touch" === n.gesture.pointerType) {
                        var r = e(this);
                        if (t || i) {
                            var a;
                            a = t ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({
                                translateX: a
                            }, {
                                duration: 100,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    r.css("border", "none"), r.velocity({
                                        height: 0,
                                        padding: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            r.remove()
                                        }
                                    })
                                }
                            })
                        } else r.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                        t = !1, i = !1
                    }
                })
            })
        })
    }(jQuery),
    function(e) {
        Materialize.scrollFire = function(e) {
            var t = !1;
            window.addEventListener("scroll", function() {
                t = !0
            }), setInterval(function() {
                if (t) {
                    t = !1;
                    for (var i = window.pageYOffset + window.innerHeight, n = 0; n < e.length; n++) {
                        var r = e[n],
                            a = r.selector,
                            o = r.offset,
                            s = r.callback,
                            l = document.querySelector(a);
                        if (null !== l) {
                            var u = l.getBoundingClientRect().top + window.pageYOffset;
                            if (i > u + o && r.done !== !0) {
                                var c = new Function(s);
                                c(), r.done = !0
                            }
                        }
                    }
                }
            }, 100)
        }
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function(e) {
        function t(a, o, l, d) {
            function p() {
                return t._.node("div", t._.node("div", t._.node("div", t._.node("div", k.component.nodes(b.open), x.box), x.wrap), x.frame), x.holder)
            }

            function f() {
                C.data(o, k).addClass(x.input).attr("tabindex", -1).val(C.data("value") ? k.get("select", w.format) : a.value), w.editable || C.on("focus." + b.id + " click." + b.id, function(e) {
                    e.preventDefault(), k.$root[0].focus()
                }).on("keydown." + b.id, v), r(a, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: a.id + "_root"
                })
            }

            function h() {
                k.$root.on({
                    keydown: v,
                    focusin: function(e) {
                        k.$root.removeClass(x.focused), e.stopPropagation()
                    },
                    "mousedown click": function(t) {
                        var i = t.target;
                        i != k.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(), k.$root[0].focus()))
                    }
                }).on({
                    focus: function() {
                        C.addClass(x.target)
                    },
                    blur: function() {
                        C.removeClass(x.target)
                    }
                }).on("focus.toOpen", g).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var t = e(this),
                        i = t.data(),
                        n = t.hasClass(x.navDisabled) || t.hasClass(x.disabled),
                        r = s();
                    r = r && (r.type || r.href), (n || r && !e.contains(k.$root[0], r)) && k.$root[0].focus(), !n && i.nav ? k.set("highlight", k.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? k.set("select", i.pick) : i.clear ? k.clear().close(!0) : i.close && k.close(!0)
                }), r(k.$root[0], "hidden", !0)
            }

            function m() {
                var t;
                w.hiddenName === !0 ? (t = a.name, a.name = "") : (t = ["string" == typeof w.hiddenPrefix ? w.hiddenPrefix : "", "string" == typeof w.hiddenSuffix ? w.hiddenSuffix : "_submit"], t = t[0] + a.name + t[1]), k._hidden = e('<input type=hidden name="' + t + '"' + (C.data("value") || a.value ? ' value="' + k.get("select", w.formatSubmit) + '"' : "") + ">")[0], C.on("change." + b.id, function() {
                    k._hidden.value = a.value ? k.get("select", w.formatSubmit) : ""
                }), w.container ? e(w.container).append(k._hidden) : C.after(k._hidden)
            }

            function v(e) {
                var t = e.keyCode,
                    i = /^(8|46)$/.test(t);
                return 27 == t ? (k.close(), !1) : void((32 == t || i || !b.open && k.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? k.clear().close() : k.open()))
            }

            function g(e) {
                e.stopPropagation(), "focus" == e.type && k.$root.addClass(x.focused), k.open()
            }
            if (!a) return t;
            var y = !1,
                b = {
                    id: a.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                w = l ? e.extend(!0, {}, l.defaults, d) : d || {},
                x = e.extend({}, t.klasses(), w.klass),
                C = e(a),
                F = function() {
                    return this.start()
                },
                k = F.prototype = {
                    constructor: F,
                    $node: C,
                    start: function() {
                        return b && b.start ? k : (b.methods = {}, b.start = !0, b.open = !1, b.type = a.type, a.autofocus = a == s(), a.readOnly = !w.editable, a.id = a.id || b.id, "text" != a.type && (a.type = "text"), k.component = new l(k, w), k.$root = e(t._.node("div", p(), x.picker, 'id="' + a.id + '_root" tabindex="0"')), h(), w.formatSubmit && m(), f(), w.container ? e(w.container).append(k.$root) : C.after(k.$root), k.on({
                            start: k.component.onStart,
                            render: k.component.onRender,
                            stop: k.component.onStop,
                            open: k.component.onOpen,
                            close: k.component.onClose,
                            set: k.component.onSet
                        }).on({
                            start: w.onStart,
                            render: w.onRender,
                            stop: w.onStop,
                            open: w.onOpen,
                            close: w.onClose,
                            set: w.onSet
                        }), y = i(k.$root.children()[0]), a.autofocus && k.open(), k.trigger("start").trigger("render"))
                    },
                    render: function(e) {
                        return e ? k.$root.html(p()) : k.$root.find("." + x.box).html(k.component.nodes(b.open)), k.trigger("render")
                    },
                    stop: function() {
                        return b.start ? (k.close(), k._hidden && k._hidden.parentNode.removeChild(k._hidden), k.$root.remove(), C.removeClass(x.input).removeData(o), setTimeout(function() {
                            C.off("." + b.id)
                        }, 0), a.type = b.type, a.readOnly = !1, k.trigger("stop"), b.methods = {}, b.start = !1, k) : k
                    },
                    open: function(i) {
                        return b.open ? k : (C.addClass(x.active), r(a, "expanded", !0), setTimeout(function() {
                            k.$root.addClass(x.opened), r(k.$root[0], "hidden", !1)
                        }, 0), i !== !1 && (b.open = !0, y && c.css("overflow", "hidden").css("padding-right", "+=" + n()), k.$root[0].focus(), u.on("click." + b.id + " focusin." + b.id, function(e) {
                            var t = e.target;
                            t != a && t != document && 3 != e.which && k.close(t === k.$root.children()[0])
                        }).on("keydown." + b.id, function(i) {
                            var n = i.keyCode,
                                r = k.component.key[n],
                                a = i.target;
                            27 == n ? k.close(!0) : a != k.$root[0] || !r && 13 != n ? e.contains(k.$root[0], a) && 13 == n && (i.preventDefault(), a.click()) : (i.preventDefault(), r ? t._.trigger(k.component.key.go, k, [t._.trigger(r)]) : k.$root.find("." + x.highlighted).hasClass(x.disabled) || k.set("select", k.component.item.highlight).close())
                        })), k.trigger("open"))
                    },
                    close: function(e) {
                        return e && (k.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                            k.$root.on("focus.toOpen", g)
                        }, 0)), C.removeClass(x.active), r(a, "expanded", !1), setTimeout(function() {
                            k.$root.removeClass(x.opened + " " + x.focused), r(k.$root[0], "hidden", !0)
                        }, 0), b.open ? (b.open = !1, y && c.css("overflow", "").css("padding-right", "-=" + n()), u.off("." + b.id), k.trigger("close")) : k
                    },
                    clear: function(e) {
                        return k.set("clear", null, e)
                    },
                    set: function(t, i, n) {
                        var r, a, o = e.isPlainObject(t),
                            s = o ? t : {};
                        if (n = o && e.isPlainObject(i) ? i : n || {}, t) {
                            o || (s[t] = i);
                            for (r in s) a = s[r], r in k.component.item && (void 0 === a && (a = null), k.component.set(r, a, n)), ("select" == r || "clear" == r) && C.val("clear" == r ? "" : k.get(r, w.format)).trigger("change");
                            k.render()
                        }
                        return n.muted ? k : k.trigger("set", s)
                    },
                    get: function(e, i) {
                        if (e = e || "value", null != b[e]) return b[e];
                        if ("valueSubmit" == e) {
                            if (k._hidden) return k._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return a.value;
                        if (e in k.component.item) {
                            if ("string" == typeof i) {
                                var n = k.component.get(e);
                                return n ? t._.trigger(k.component.formats.toString, k.component, [i, n]) : ""
                            }
                            return k.component.get(e)
                        }
                    },
                    on: function(t, i, n) {
                        var r, a, o = e.isPlainObject(t),
                            s = o ? t : {};
                        if (t) {
                            o || (s[t] = i);
                            for (r in s) a = s[r], n && (r = "_" + r), b.methods[r] = b.methods[r] || [], b.methods[r].push(a)
                        }
                        return k
                    },
                    off: function() {
                        var e, t, i = arguments;
                        for (e = 0, namesCount = i.length; e < namesCount; e += 1) t = i[e], t in b.methods && delete b.methods[t];
                        return k
                    },
                    trigger: function(e, i) {
                        var n = function(e) {
                            var n = b.methods[e];
                            n && n.map(function(e) {
                                t._.trigger(e, k, [i])
                            })
                        };
                        return n("_" + e), n(e), k
                    }
                };
            return new F
        }

        function i(e) {
            var t, i = "position";
            return e.currentStyle ? t = e.currentStyle[i] : window.getComputedStyle && (t = getComputedStyle(e)[i]), "fixed" == t
        }

        function n() {
            if (c.height() <= l.height()) return 0;
            var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                i = t[0].offsetWidth;
            t.css("overflow", "scroll");
            var n = e('<div style="width:100%" />').appendTo(t),
                r = n[0].offsetWidth;
            return t.remove(), i - r
        }

        function r(t, i, n) {
            if (e.isPlainObject(i))
                for (var r in i) a(t, r, i[r]);
            else a(t, i, n)
        }

        function a(e, t, i) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, i)
        }

        function o(t, i) {
            e.isPlainObject(t) || (t = {
                attribute: i
            }), i = "";
            for (var n in t) {
                var r = ("role" == n ? "" : "aria-") + n,
                    a = t[n];
                i += null == a ? "" : r + '="' + t[n] + '"'
            }
            return i
        }

        function s() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        var l = e(window),
            u = e(document),
            c = e(document.documentElement);
        return t.klasses = function(e) {
            return e = e || "picker", {
                picker: e,
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, t._ = {
            group: function(e) {
                for (var i, n = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i) i = t._.trigger(e.item, e, [r]), n += t._.node(e.node, i[0], i[1], i[2]);
                return n
            },
            node: function(t, i, n, r) {
                return i ? (i = e.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", r = r ? " " + r : "", "<" + t + n + r + ">" + i + "</" + t + ">") : ""
            },
            lead: function(e) {
                return (10 > e ? "0" : "") + e
            },
            trigger: function(e, t, i) {
                return "function" == typeof e ? e.apply(t, i || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
            },
            ariaAttr: o
        }, t.extend = function(i, n) {
            e.fn[i] = function(r, a) {
                var o = this.data(i);
                return "picker" == r ? o : o && "string" == typeof r ? t._.trigger(o[r], o, [a]) : this.each(function() {
                    var a = e(this);
                    a.data(i) || new t(this, i, n, r)
                })
            }, e.fn[i].defaults = n.defaults
        }, t
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function(e, t) {
        function i(e, t) {
            var i = this,
                n = e.$node[0],
                r = n.value,
                a = e.$node.data("value"),
                o = a || r,
                s = a ? t.formatSubmit : t.format,
                l = function() {
                    return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            i.settings = t, i.$node = e.$node, i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, i.item = {}, i.item.clear = null, i.item.disable = (t.disable || []).slice(0), i.item.enable = - function(e) {
                return e[0] === !0 ? e.shift() : -1
            }(i.item.disable), i.set("min", t.min).set("max", t.max).set("now"), o ? i.set("select", o, {
                format: s
            }) : i.set("select", null).set("highlight", i.item.now), i.key = {
                40: 7,
                38: -7,
                39: function() {
                    return l() ? -1 : 1
                },
                37: function() {
                    return l() ? 1 : -1
                },
                go: function(e) {
                    var t = i.item.highlight,
                        n = new Date(t.year, t.month, t.date + e);
                    i.set("highlight", n, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + n + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var n = 7,
            r = 6,
            a = e._;
        i.prototype.set = function(e, t, i) {
            var n = this,
                r = n.item;
            return null === t ? ("clear" == e && (e = "select"), r[e] = t, n) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function(r) {
                return t = n[r](e, t, i)
            }).pop(), "select" == e ? n.set("highlight", r.select, i) : "highlight" == e ? n.set("view", r.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && n.disabled(r.select) && n.set("select", r.select, i), r.highlight && n.disabled(r.highlight) && n.set("highlight", r.highlight, i)), n)
        }, i.prototype.get = function(e) {
            return this.item[e]
        }, i.prototype.create = function(e, i, n) {
            var r, o = this;
            return i = void 0 === i ? e : i, i == -(1 / 0) || i == 1 / 0 ? r = i : t.isPlainObject(i) && a.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = a.isDate(i) ? i : o.create().obj) : i = a.isInteger(i) || a.isDate(i) ? o.normalize(new Date(i), n) : o.now(e, i, n), {
                year: r || i.getFullYear(),
                month: r || i.getMonth(),
                date: r || i.getDate(),
                day: r || i.getDay(),
                obj: r || i,
                pick: r || i.getTime()
            }
        }, i.prototype.createRange = function(e, i) {
            var n = this,
                r = function(e) {
                    return e === !0 || t.isArray(e) || a.isDate(e) ? n.create(e) : e
                };
            return a.isInteger(e) || (e = r(e)), a.isInteger(i) || (i = r(i)), a.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : a.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
                from: r(e),
                to: r(i)
            }
        }, i.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, i.prototype.overlapRanges = function(e, t) {
            var i = this;
            return e = i.createRange(e.from, e.to), t = i.createRange(t.from, t.to), i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
        }, i.prototype.now = function(e, t, i) {
            return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        }, i.prototype.navigate = function(e, i, n) {
            var r, a, o, s, l = t.isArray(i),
                u = t.isPlainObject(i),
                c = this.item.view;
            if (l || u) {
                for (u ? (a = i.year, o = i.month, s = i.date) : (a = +i[0], o = +i[1], s = +i[2]), n && n.nav && c && c.month !== o && (a = c.year, o = c.month), r = new Date(a, o + (n && n.nav ? n.nav : 0), 1), a = r.getFullYear(), o = r.getMonth(); new Date(a, o, s).getMonth() !== o;) s -= 1;
                i = [a, o, s]
            }
            return i
        }, i.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, i.prototype.measure = function(e, t) {
            var i = this;
            return t ? "string" == typeof t ? t = i.parse(e, t) : a.isInteger(t) && (t = i.now(e, t, {
                rel: t
            })) : t = "min" == e ? -(1 / 0) : 1 / 0, t
        }, i.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, i.prototype.validate = function(e, i, n) {
            var r, o, s, l, u = this,
                c = i,
                d = n && n.interval ? n.interval : 1,
                p = -1 === u.item.enable,
                f = u.item.min,
                h = u.item.max,
                m = p && u.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var n = u.create(e).pick;
                        n < i.pick ? r = !0 : n > i.pick && (o = !0)
                    }
                    return a.isInteger(e)
                }).length;
            if ((!n || !n.nav) && (!p && u.disabled(i) || p && u.disabled(i) && (m || r || o) || !p && (i.pick <= f.pick || i.pick >= h.pick)))
                for (p && !m && (!o && d > 0 || !r && 0 > d) && (d *= -1); u.disabled(i) && (Math.abs(d) > 1 && (i.month < c.month || i.month > c.month) && (i = c, d = d > 0 ? 1 : -1), i.pick <= f.pick ? (s = !0, d = 1, i = u.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= h.pick && (l = !0, d = -1, i = u.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : 1)])), !s || !l);) i = u.create([i.year, i.month, i.date + d]);
            return i
        }, i.prototype.disabled = function(e) {
            var i = this,
                n = i.item.disable.filter(function(n) {
                    return a.isInteger(n) ? e.day === (i.settings.firstDay ? n : n - 1) % 7 : t.isArray(n) || a.isDate(n) ? e.pick === i.create(n).pick : t.isPlainObject(n) ? i.withinRange(n, e) : void 0
                });
            return n = n.length && !n.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === i.item.enable ? !n : n || e.pick < i.item.min.pick || e.pick > i.item.max.pick
        }, i.prototype.parse = function(e, t, i) {
            var n = this,
                r = {};
            return t && "string" == typeof t ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function(e) {
                var i = n.formats[e],
                    o = i ? a.trigger(i, n, [t, r]) : e.replace(/^!/, "").length;
                i && (r[e] = t.substr(0, o)), t = t.substr(o)
            }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
        }, i.prototype.formats = function() {
            function e(e, t, i) {
                var n = e.match(/\w+/)[0];
                return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? a.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : a.lead(t.date)
                },
                ddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysFull[i.day]
                },
                m: function(e, t) {
                    return e ? a.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : a.lead(t.month + 1)
                },
                mmm: function(t, i) {
                    var n = this.settings.monthsShort;
                    return t ? e(t, n, i) : n[i.month]
                },
                mmmm: function(t, i) {
                    var n = this.settings.monthsFull;
                    return t ? e(t, n, i) : n[i.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var i = this;
                    return i.formats.toArray(e).map(function(e) {
                        return a.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), i.prototype.isDateExact = function(e, i) {
            var n = this;
            return a.isInteger(e) && a.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (a.isDate(e) || t.isArray(e)) && (a.isDate(i) || t.isArray(i)) ? n.create(e).pick === n.create(i).pick : t.isPlainObject(e) && t.isPlainObject(i) ? n.isDateExact(e.from, i.from) && n.isDateExact(e.to, i.to) : !1
        }, i.prototype.isDateOverlap = function(e, i) {
            var n = this,
                r = n.settings.firstDay ? 1 : 0;
            return a.isInteger(e) && (a.isDate(i) || t.isArray(i)) ? (e = e % 7 + r,
                e === n.create(i).day + 1) : a.isInteger(i) && (a.isDate(e) || t.isArray(e)) ? (i = i % 7 + r, i === n.create(e).day + 1) : t.isPlainObject(e) && t.isPlainObject(i) ? n.overlapRanges(e, i) : !1
        }, i.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, i.prototype.deactivate = function(e, i) {
            var n = this,
                r = n.item.disable.slice(0);
            return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), r = []) : i === !0 ? (n.flipEnable(-1), r = []) : i.map(function(e) {
                for (var i, o = 0; o < r.length; o += 1)
                    if (n.isDateExact(e, r[o])) {
                        i = !0;
                        break
                    }
                i || (a.isInteger(e) || a.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
            }), r
        }, i.prototype.activate = function(e, i) {
            var n = this,
                r = n.item.disable,
                o = r.length;
            return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), r = []) : i === !1 ? (n.flipEnable(-1), r = []) : i.map(function(e) {
                var i, s, l, u;
                for (l = 0; o > l; l += 1) {
                    if (s = r[l], n.isDateExact(s, e)) {
                        i = r[l] = null, u = !0;
                        break
                    }
                    if (n.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e, i[3] || i.push("inverted")) : a.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; o > l; l += 1)
                        if (n.isDateExact(r[l], e)) {
                            r[l] = null;
                            break
                        }
                if (u)
                    for (l = 0; o > l; l += 1)
                        if (n.isDateOverlap(r[l], e)) {
                            r[l] = null;
                            break
                        }
                i && r.push(i)
            }), r.filter(function(e) {
                return null != e
            })
        }, i.prototype.nodes = function(e) {
            var t = this,
                i = t.settings,
                o = t.item,
                s = o.now,
                l = o.select,
                u = o.highlight,
                c = o.view,
                d = o.disable,
                p = o.min,
                f = o.max,
                h = function(e, t) {
                    return i.firstDay && (e.push(e.shift()), t.push(t.shift())), a.node("thead", a.node("tr", a.group({
                        min: 0,
                        max: n - 1,
                        i: 1,
                        node: "th",
                        item: function(n) {
                            return [e[n], i.klass.weekdays, 'scope=col title="' + t[n] + '"']
                        }
                    })))
                }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysLetter).slice(0), i.weekdaysFull.slice(0)),
                m = function(e) {
                    return a.node("div", " ", i.klass["nav" + (e ? "Next" : "Prev")] + (e && c.year >= f.year && c.month >= f.month || !e && c.year <= p.year && c.month <= p.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + a.ariaAttr({
                        role: "button",
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + (e ? i.labelMonthNext : i.labelMonthPrev) + '"')
                },
                v = function(n) {
                    var r = i.showMonthsShort ? i.monthsShort : i.monthsFull;
                    return "short_months" == n && (r = i.monthsShort), i.selectMonths && void 0 == n ? a.node("select", a.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [r[e], 0, "value=" + e + (c.month == e ? " selected" : "") + (c.year == p.year && e < p.month || c.year == f.year && e > f.month ? " disabled" : "")]
                        }
                    }), i.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + a.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + i.labelMonthSelect + '"') : "short_months" == n ? null != l ? a.node("div", r[l.month]) : a.node("div", r[c.month]) : a.node("div", r[c.month], i.klass.month)
                },
                g = function(n) {
                    var r = c.year,
                        o = i.selectYears === !0 ? 5 : ~~(i.selectYears / 2);
                    if (o) {
                        var s = p.year,
                            l = f.year,
                            u = r - o,
                            d = r + o;
                        if (s > u && (d += s - u, u = s), d > l) {
                            var h = u - s,
                                m = d - l;
                            u -= h > m ? m : h, d = l
                        }
                        if (i.selectYears && void 0 == n) return a.node("select", a.group({
                            min: u,
                            max: d,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (r == e ? " selected" : "")]
                            }
                        }), i.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + a.ariaAttr({
                            controls: t.$node[0].id + "_table"
                        }) + ' title="' + i.labelYearSelect + '"')
                    }
                    return "raw" == n ? a.node("div", r) : a.node("div", r, i.klass.year)
                };
            return createDayLabel = function() {
                return null != l ? a.node("div", l.date) : a.node("div", s.date)
            }, createWeekdayLabel = function() {
                var e;
                e = null != l ? l.day : s.day;
                var t = i.weekdaysFull[e];
                return t
            }, a.node("div", a.node("div", createWeekdayLabel(), "picker__weekday-display") + a.node("div", v("short_months"), i.klass.month_display) + a.node("div", createDayLabel(), i.klass.day_display) + a.node("div", g("raw"), i.klass.year_display), i.klass.date_display) + a.node("div", a.node("div", (i.selectYears ? v() + g() : v() + g()) + m() + m(1), i.klass.header) + a.node("table", h + a.node("tbody", a.group({
                min: 0,
                max: r - 1,
                i: 1,
                node: "tr",
                item: function(e) {
                    var r = i.firstDay && 0 === t.create([c.year, c.month, 1]).day ? -7 : 0;
                    return [a.group({
                        min: n * e - c.day + r + 1,
                        max: function() {
                            return this.min + n - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = t.create([c.year, c.month, e + (i.firstDay ? 1 : 0)]);
                            var n = l && l.pick == e.pick,
                                r = u && u.pick == e.pick,
                                o = d && t.disabled(e) || e.pick < p.pick || e.pick > f.pick,
                                h = a.trigger(t.formats.toString, t, [i.format, e]);
                            return [a.node("div", e.date, function(t) {
                                return t.push(c.month == e.month ? i.klass.infocus : i.klass.outfocus), s.pick == e.pick && t.push(i.klass.now), n && t.push(i.klass.selected), r && t.push(i.klass.highlighted), o && t.push(i.klass.disabled), t.join(" ")
                            }([i.klass.day]), "data-pick=" + e.pick + " " + a.ariaAttr({
                                role: "gridcell",
                                label: h,
                                selected: n && t.$node.val() === h ? !0 : null,
                                activedescendant: r ? !0 : null,
                                disabled: o ? !0 : null
                            })), "", a.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), i.klass.table, 'id="' + t.$node[0].id + '_table" ' + a.ariaAttr({
                role: "grid",
                controls: t.$node[0].id,
                readonly: !0
            })), i.klass.calendar_container) + a.node("div", a.node("button", i.today, "btn-flat picker__today", "type=button data-pick=" + s.pick + (e && !t.disabled(s) ? "" : " disabled") + " " + a.ariaAttr({
                controls: t.$node[0].id
            })) + a.node("button", i.clear, "btn-flat picker__clear", "type=button data-clear=1" + (e ? "" : " disabled") + " " + a.ariaAttr({
                controls: t.$node[0].id
            })) + a.node("button", i.close, "btn-flat picker__close", "type=button data-close=true " + (e ? "" : " disabled") + " " + a.ariaAttr({
                controls: t.$node[0].id
            })), i.klass.footer)
        }, i.defaults = function(e) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                format: "d mmmm, yyyy",
                klass: {
                    table: e + "table",
                    header: e + "header",
                    date_display: e + "date-display",
                    day_display: e + "day-display",
                    month_display: e + "month-display",
                    year_display: e + "year-display",
                    calendar_container: e + "calendar-container",
                    navPrev: e + "nav--prev",
                    navNext: e + "nav--next",
                    navDisabled: e + "nav--disabled",
                    month: e + "month",
                    year: e + "year",
                    selectMonth: e + "select--month",
                    selectYear: e + "select--year",
                    weekdays: e + "weekday",
                    day: e + "day",
                    disabled: e + "day--disabled",
                    selected: e + "day--selected",
                    highlighted: e + "day--highlighted",
                    now: e + "day--today",
                    infocus: e + "day--infocus",
                    outfocus: e + "day--outfocus",
                    footer: e + "footer",
                    buttonClear: e + "button--clear",
                    buttonToday: e + "button--today",
                    buttonClose: e + "button--close"
                }
            }
        }(e.klasses().picker + "__"), e.extend("pickadate", i)
    }),
    function(e) {
        function t() {
            var t = +e(this).attr("length"),
                i = +e(this).val().length,
                n = t >= i;
            e(this).parent().find('span[class="character-counter"]').html(i + "/" + t), r(n, e(this))
        }

        function i(t) {
            var i = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            t.parent().append(i)
        }

        function n() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }

        function r(e, t) {
            var i = t.hasClass("invalid");
            e && i ? t.removeClass("invalid") : e || i || (t.removeClass("valid"), t.addClass("invalid"))
        }
        e.fn.characterCounter = function() {
            return this.each(function() {
                var r = void 0 !== e(this).attr("length");
                r && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", n), i(e(this)))
            })
        }, e(document).ready(function() {
            e("input, textarea").characterCounter()
        })
    }(jQuery), ! function(e) {
        function t(e) {
            return "undefined" == typeof e.which ? !0 : "number" == typeof e.which && e.which > 0 ? !e.ctrlKey && !e.metaKey && !e.altKey && 8 != e.which && 9 != e.which : !1
        }

        function i(t) {
            e(t).closest(".form-group").addClass("is-focused")
        }

        function n(t) {
            e(t).closest(".form-group").removeClass("is-focused")
        }
        e.expr[":"].notmdproc = function(t) {
            return e(t).data("mdproc") ? !1 : !0
        }, e.material = {
            options: {
                input: !0,
                ripples: !0,
                checkbox: !0,
                togglebutton: !0,
                radio: !0,
                arrive: !0,
                autofill: !1,
                withRipples: [".btn:not(.btn-link)", ".card-image", ".navbar a:not(.withoutripple)", ".dropdown-menu a", ".nav-tabs a:not(.withoutripple)", ".withripple", ".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),
                inputElements: "input.form-control, textarea.form-control, select.form-control",
                checkboxElements: ".checkbox > label > input[type=checkbox]",
                togglebuttonElements: ".togglebutton > label > input[type=checkbox]",
                radioElements: ".radio > label > input[type=radio]"
            },
            checkbox: function(t) {
                e(t ? t : this.options.checkboxElements).filter(":notmdproc").data("mdproc", !0).after("<span class='checkbox-material'><span class='check'></span></span>")
            },
            togglebutton: function(t) {
                e(t ? t : this.options.togglebuttonElements).filter(":notmdproc").data("mdproc", !0).after("<span class='toggle'></span>")
            },
            radio: function(t) {
                e(t ? t : this.options.radioElements).filter(":notmdproc").data("mdproc", !0).after("<span class='circle'></span><span class='check'></span>")
            },
            input: function(t) {
                e(t ? t : this.options.inputElements).filter(":notmdproc").data("mdproc", !0).each(function() {
                    var t = e(this),
                        i = t.closest(".form-group");
                    0 === i.length && (t.wrap("<div class='form-group'></div>"), i = t.closest(".form-group")), t.attr("data-hint") && (t.after("<p class='help-block'>" + t.attr("data-hint") + "</p>"), t.removeAttr("data-hint"));
                    var n = {
                        "input-lg": "form-group-lg",
                        "input-sm": "form-group-sm"
                    };
                    if (e.each(n, function(e, n) {
                            t.hasClass(e) && (t.removeClass(e), i.addClass(n))
                        }), t.hasClass("floating-label")) {
                        var r = t.attr("placeholder");
                        t.attr("placeholder", null).removeClass("floating-label");
                        var a = t.attr("id"),
                            o = "";
                        a && (o = "for='" + a + "'"), i.addClass("label-floating"), t.after("<label " + o + "class='control-label'>" + r + "</label>")
                    }(null === t.val() || "undefined" == t.val() || "" === t.val()) && i.addClass("is-empty"), i.append("<span class='material-input'></span>"), i.find("input[type=file]").length > 0 && i.addClass("is-fileinput")
                })
            },
            attachInputEventHandlers: function() {
                e(".form-group .checkbox label").hover(function() {
                    i(this)
                }, function() {
                    n(this)
                }), e(document).on("change", ".checkbox input[type=checkbox]", function() {
                    e(this).blur()
                }).on("keydown paste", ".form-control", function(i) {
                    t(i) && e(this).closest(".form-group").removeClass("is-empty")
                }).on("keyup change", ".form-control", function() {
                    var t = e(this),
                        i = t.closest(".form-group"),
                        n = "undefined" == typeof t[0].checkValidity || t[0].checkValidity();
                    "" === t.val() && n ? i.addClass("is-empty") : i.removeClass("is-empty"), n ? i.removeClass("has-error") : i.addClass("has-error")
                }).on("focus", ".form-control, .form-group.is-fileinput", function() {
                    i(this)
                }).on("blur", ".form-control, .form-group.is-fileinput", function() {
                    n(this)
                }).on("change", ".form-group input", function() {
                    var t = e(this);
                    if ("file" != t.attr("type")) {
                        var i = t.closest(".form-group"),
                            n = t.val();
                        n ? i.removeClass("is-empty") : i.addClass("is-empty")
                    }
                }).on("change", ".form-group.is-fileinput input[type='file']", function() {
                    var t = e(this),
                        i = t.closest(".form-group"),
                        n = "";
                    e.each(this.files, function(e, t) {
                        n += t.name + ", "
                    }), n = n.substring(0, n.length - 2), n ? i.removeClass("is-empty") : i.addClass("is-empty"), i.find("input.form-control[readonly]").val(n)
                })
            },
            ripples: function(t) {
                e(t ? t : this.options.withRipples).ripples()
            },
            autofill: function() {
                var t = setInterval(function() {
                    e("input[type!=checkbox]").each(function() {
                        var t = e(this);
                        t.val() && t.val() !== t.attr("value") && t.trigger("change")
                    })
                }, 100);
                setTimeout(function() {
                    clearInterval(t)
                }, 1e4)
            },
            attachAutofillEventHandlers: function() {
                var t;
                e(document).on("focus", "input", function() {
                    var i = e(this).parents("form").find("input").not("[type=file]");
                    t = setInterval(function() {
                        i.each(function() {
                            var t = e(this);
                            t.val() !== t.attr("value") && t.trigger("change")
                        })
                    }, 100)
                }).on("blur", ".form-group input", function() {
                    clearInterval(t)
                })
            },
            init: function() {
                var t = e(document);
                e.fn.ripples && this.options.ripples && this.ripples(), this.options.input && (this.input(), this.attachInputEventHandlers()), this.options.checkbox && this.checkbox(), this.options.togglebutton && this.togglebutton(), this.options.radio && this.radio(), this.options.autofill && (this.autofill(), this.attachAutofillEventHandlers()), document.arrive && this.options.arrive && (e.fn.ripples && this.options.ripples && t.arrive(this.options.withRipples, function() {
                    e.material.ripples(e(this))
                }), this.options.input && t.arrive(this.options.inputElements, function() {
                    e.material.input(e(this))
                }), this.options.checkbox && t.arrive(this.options.checkboxElements, function() {
                    e.material.checkbox(e(this))
                }), this.options.radio && t.arrive(this.options.radioElements, function() {
                    e.material.radio(e(this))
                }), this.options.togglebutton && t.arrive(this.options.togglebuttonElements, function() {
                    e.material.togglebutton(e(this))
                }))
            }
        }
    }(jQuery), ! function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : e.bootbox = t(e.jQuery)
    }(this, function e(t, i) {
        "use strict";

        function n(e) {
            var t = v[h.locale];
            return t ? t[e] : v.en[e]
        }

        function r(e, i, n) {
            e.stopPropagation(), e.preventDefault();
            var r = t.isFunction(n) && n(e) === !1;
            r || i.modal("hide")
        }

        function a(e) {
            var t, i = 0;
            for (t in e) i++;
            return i
        }

        function o(e, i) {
            var n = 0;
            t.each(e, function(e, t) {
                i(e, t, n++)
            })
        }

        function s(e) {
            var i, n;
            if ("object" != typeof e) throw new Error("Please supply an object of options");
            if (!e.message) throw new Error("Please specify a message");
            return e = t.extend({}, h, e), e.buttons || (e.buttons = {}), e.backdrop = e.backdrop ? "static" : !1, i = e.buttons, n = a(i), o(i, function(e, r, a) {
                if (t.isFunction(r) && (r = i[e] = {
                        callback: r
                    }), "object" !== t.type(r)) throw new Error("button with key " + e + " must be an object");
                r.label || (r.label = e), r.className || (r.className = 2 >= n && a === n - 1 ? "btn-primary" : "btn-default")
            }), e
        }

        function l(e, t) {
            var i = e.length,
                n = {};
            if (1 > i || i > 2) throw new Error("Invalid argument length");
            return 2 === i || "string" == typeof e[0] ? (n[t[0]] = e[0], n[t[1]] = e[1]) : n = e[0], n
        }

        function u(e, i, n) {
            return t.extend(!0, {}, e, l(i, n))
        }

        function c(e, t, i, n) {
            var r = {
                className: "bootbox-" + e,
                buttons: d.apply(null, t)
            };
            return p(u(r, n, i), t)
        }

        function d() {
            for (var e = {}, t = 0, i = arguments.length; i > t; t++) {
                var r = arguments[t],
                    a = r.toLowerCase(),
                    o = r.toUpperCase();
                e[a] = {
                    label: n(o)
                }
            }
            return e
        }

        function p(e, t) {
            var n = {};
            return o(t, function(e, t) {
                n[t] = !0
            }), o(e.buttons, function(e) {
                if (n[e] === i) throw new Error("button key " + e + " is not allowed (options are " + t.join("\n") + ")")
            }), e
        }
        var f = {
                dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
                header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
                footer: "<div class='modal-footer'></div>",
                closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
                form: "<form class='bootbox-form'></form>",
                inputs: {
                    text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
                    textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
                    email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
                    select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
                    checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
                    date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
                    time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
                    number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
                    password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
                }
            },
            h = {
                locale: "en",
                backdrop: !0,
                animate: !0,
                className: null,
                closeButton: !0,
                show: !0,
                container: "body"
            },
            m = {};
        m.alert = function() {
            var e;
            if (e = c("alert", ["ok"], ["message", "callback"], arguments), e.callback && !t.isFunction(e.callback)) throw new Error("alert requires callback property to be a function when provided");
            return e.buttons.ok.callback = e.onEscape = function() {
                return t.isFunction(e.callback) ? e.callback() : !0
            }, m.dialog(e)
        }, m.confirm = function() {
            var e;
            if (e = c("confirm", ["cancel", "confirm"], ["message", "callback"], arguments), e.buttons.cancel.callback = e.onEscape = function() {
                    return e.callback(!1)
                }, e.buttons.confirm.callback = function() {
                    return e.callback(!0)
                }, !t.isFunction(e.callback)) throw new Error("confirm requires a callback");
            return m.dialog(e)
        }, m.prompt = function() {
            var e, n, r, a, s, l, c;
            if (a = t(f.form), n = {
                    className: "bootbox-prompt",
                    buttons: d("cancel", "confirm"),
                    value: "",
                    inputType: "text"
                }, e = p(u(n, arguments, ["title", "callback"]), ["cancel", "confirm"]), l = e.show === i ? !0 : e.show, e.message = a, e.buttons.cancel.callback = e.onEscape = function() {
                    return e.callback(null)
                }, e.buttons.confirm.callback = function() {
                    var i;
                    switch (e.inputType) {
                        case "text":
                        case "textarea":
                        case "email":
                        case "select":
                        case "date":
                        case "time":
                        case "number":
                        case "password":
                            i = s.val();
                            break;
                        case "checkbox":
                            var n = s.find("input:checked");
                            i = [], o(n, function(e, n) {
                                i.push(t(n).val())
                            })
                    }
                    return e.callback(i)
                }, e.show = !1, !e.title) throw new Error("prompt requires a title");
            if (!t.isFunction(e.callback)) throw new Error("prompt requires a callback");
            if (!f.inputs[e.inputType]) throw new Error("invalid prompt type");
            switch (s = t(f.inputs[e.inputType]), e.inputType) {
                case "text":
                case "textarea":
                case "email":
                case "date":
                case "time":
                case "number":
                case "password":
                    s.val(e.value);
                    break;
                case "select":
                    var h = {};
                    if (c = e.inputOptions || [], !c.length) throw new Error("prompt with select requires options");
                    o(c, function(e, n) {
                        var r = s;
                        if (n.value === i || n.text === i) throw new Error("given options in wrong format");
                        n.group && (h[n.group] || (h[n.group] = t("<optgroup/>").attr("label", n.group)), r = h[n.group]), r.append("<option value='" + n.value + "'>" + n.text + "</option>")
                    }), o(h, function(e, t) {
                        s.append(t)
                    }), s.val(e.value);
                    break;
                case "checkbox":
                    var v = t.isArray(e.value) ? e.value : [e.value];
                    if (c = e.inputOptions || [], !c.length) throw new Error("prompt with checkbox requires options");
                    if (!c[0].value || !c[0].text) throw new Error("given options in wrong format");
                    s = t("<div/>"), o(c, function(i, n) {
                        var r = t(f.inputs[e.inputType]);
                        r.find("input").attr("value", n.value), r.find("label").append(n.text), o(v, function(e, t) {
                            t === n.value && r.find("input").prop("checked", !0)
                        }), s.append(r)
                    })
            }
            return e.placeholder && s.attr("placeholder", e.placeholder), e.pattern && s.attr("pattern", e.pattern), a.append(s), a.on("submit", function(e) {
                e.preventDefault(), e.stopPropagation(), r.find(".btn-primary").click()
            }), r = m.dialog(e), r.off("shown.bs.modal"), r.on("shown.bs.modal", function() {
                s.focus()
            }), l === !0 && r.modal("show"), r
        }, m.dialog = function(e) {
            e = s(e);
            var i = t(f.dialog),
                n = i.find(".modal-dialog"),
                a = i.find(".modal-body"),
                l = e.buttons,
                u = "",
                c = {
                    onEscape: e.onEscape
                };
            if (o(l, function(e, t) {
                    u += "<button data-bb-handler='" + e + "' type='button' class='btn " + t.className + "'>" + t.label + "</button>", c[e] = t.callback
                }), a.find(".bootbox-body").html(e.message), e.animate === !0 && i.addClass("fade"), e.className && i.addClass(e.className), "large" === e.size && n.addClass("modal-lg"), "small" === e.size && n.addClass("modal-sm"), e.title && a.before(f.header), e.closeButton) {
                var d = t(f.closeButton);
                e.title ? i.find(".modal-header").prepend(d) : d.css("margin-top", "-10px").prependTo(a)
            }
            return e.title && i.find(".modal-title").html(e.title), u.length && (a.after(f.footer), i.find(".modal-footer").html(u)), i.on("hidden.bs.modal", function(e) {
                e.target === this && i.remove()
            }), i.on("shown.bs.modal", function() {
                i.find(".btn-primary:first").focus()
            }), i.on("escape.close.bb", function(e) {
                c.onEscape && r(e, i, c.onEscape)
            }), i.on("click", ".modal-footer button", function(e) {
                var n = t(this).data("bb-handler");
                r(e, i, c[n])
            }), i.on("click", ".bootbox-close-button", function(e) {
                r(e, i, c.onEscape)
            }), i.on("keyup", function(e) {
                27 === e.which && i.trigger("escape.close.bb")
            }), t(e.container).append(i), i.modal({
                backdrop: e.backdrop,
                keyboard: !1,
                show: !1
            }), e.show && i.modal("show"), i
        }, m.setDefaults = function() {
            var e = {};
            2 === arguments.length ? e[arguments[0]] = arguments[1] : e = arguments[0], t.extend(h, e)
        }, m.hideAll = function() {
            return t(".bootbox").modal("hide"), m
        };
        var v = {
            br: {
                OK: "OK",
                CANCEL: "Cancelar",
                CONFIRM: "Sim"
            },
            cs: {
                OK: "OK",
                CANCEL: "Zrušit",
                CONFIRM: "Potvrdit"
            },
            da: {
                OK: "OK",
                CANCEL: "Annuller",
                CONFIRM: "Accepter"
            },
            de: {
                OK: "OK",
                CANCEL: "Abbrechen",
                CONFIRM: "Akzeptieren"
            },
            el: {
                OK: "Εντάξει",
                CANCEL: "Ακύρωση",
                CONFIRM: "Επιβεβαίωση"
            },
            en: {
                OK: "OK",
                CANCEL: "Cancel",
                CONFIRM: "OK"
            },
            es: {
                OK: "OK",
                CANCEL: "Cancelar",
                CONFIRM: "Aceptar"
            },
            et: {
                OK: "OK",
                CANCEL: "Katkesta",
                CONFIRM: "OK"
            },
            fi: {
                OK: "OK",
                CANCEL: "Peruuta",
                CONFIRM: "OK"
            },
            fr: {
                OK: "OK",
                CANCEL: "Annuler",
                CONFIRM: "D'accord"
            },
            he: {
                OK: "אישור",
                CANCEL: "ביטול",
                CONFIRM: "אישור"
            },
            id: {
                OK: "OK",
                CANCEL: "Batal",
                CONFIRM: "OK"
            },
            it: {
                OK: "OK",
                CANCEL: "Annulla",
                CONFIRM: "Conferma"
            },
            ja: {
                OK: "OK",
                CANCEL: "キャンセル",
                CONFIRM: "確認"
            },
            lt: {
                OK: "Gerai",
                CANCEL: "Atšaukti",
                CONFIRM: "Patvirtinti"
            },
            lv: {
                OK: "Labi",
                CANCEL: "Atcelt",
                CONFIRM: "Apstiprināt"
            },
            nl: {
                OK: "OK",
                CANCEL: "Annuleren",
                CONFIRM: "Accepteren"
            },
            no: {
                OK: "OK",
                CANCEL: "Avbryt",
                CONFIRM: "OK"
            },
            pl: {
                OK: "OK",
                CANCEL: "Anuluj",
                CONFIRM: "Potwierdź"
            },
            pt: {
                OK: "OK",
                CANCEL: "Cancelar",
                CONFIRM: "Confirmar"
            },
            ru: {
                OK: "OK",
                CANCEL: "Отмена",
                CONFIRM: "Применить"
            },
            sv: {
                OK: "OK",
                CANCEL: "Avbryt",
                CONFIRM: "OK"
            },
            tr: {
                OK: "Tamam",
                CANCEL: "İptal",
                CONFIRM: "Onayla"
            },
            zh_CN: {
                OK: "OK",
                CANCEL: "取消",
                CONFIRM: "确认"
            },
            zh_TW: {
                OK: "OK",
                CANCEL: "取消",
                CONFIRM: "確認"
            }
        };
        return m.init = function(i) {
            return e(i || t)
        }, m
    }),
    function() {
        var e = function() {
            var e = {},
                t = function(t, i, n) {
                    for (var r = t.split("."), a = 0; a < r.length - 1; a++) n[r[a]] || (n[r[a]] = {}), n = n[r[a]];
                    "function" == typeof i ? i.isClass ? n[r[a]] = i : n[r[a]] = function() {
                        return i.apply(e, arguments)
                    } : n[r[a]] = i
                },
                i = function(i, n, r) {
                    t(i, n, e), r && t(i, n, window.filepicker)
                },
                n = function(t, n, r) {
                    "function" == typeof t && (r = n, n = t, t = ""), t && (t += ".");
                    var a = n.call(e);
                    for (var o in a) i(t + o, a[o], r)
                },
                r = function(t) {
                    t.apply(e, arguments)
                };
            return {
                extend: n,
                internal: r
            }
        }();
        if (window.filepicker)
            for (attr in e) window.filepicker[attr] = e[attr];
        else window.filepicker = e
    }(), filepicker.extend("ajax", function() {
        var e = this,
            t = function(e, t) {
                t.method = "GET", a(e, t)
            },
            i = function(t, i) {
                i.method = "POST", t += (t.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + e.util.getId(), a(t, i)
            },
            n = function(t, i) {
                var r = [];
                for (var a in t) {
                    var o = t[a];
                    i && (a = i + "[" + a + "]");
                    var s;
                    switch (e.util.typeOf(o)) {
                        case "object":
                            s = n(o, a);
                            break;
                        case "array":
                            for (var l = {}, u = 0; u < o.length; u++) l[u] = o[u];
                            s = n(l, a);
                            break;
                        default:
                            s = a + "=" + encodeURIComponent(o)
                    }
                    null !== o && r.push(s)
                }
                return r.join("&")
            },
            r = function() {
                try {
                    return new window.XMLHttpRequest
                } catch (e) {
                    try {
                        return new window.ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {
                        try {
                            return new window.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (e) {
                            return null
                        }
                    }
                }
            },
            a = function(t, i) {
                t = t || "";
                var a = i.method ? i.method.toUpperCase() : "POST",
                    s = i.success || function() {},
                    l = i.error || function() {},
                    u = void 0 === i.async ? !0 : i.async,
                    c = i.data || null,
                    d = void 0 === i.processData ? !0 : i.processData,
                    p = i.headers || {},
                    f = e.util.parseUrl(t),
                    h = window.location.protocol + "//" + window.location.host,
                    m = h !== f.origin,
                    v = !1;
                c && d && (c = n(i.data));
                var g;
                if (i.xhr) g = i.xhr;
                else if (g = r(), !g) return i.error("Ajax not allowed"), g;
                if (m && window.XDomainRequest && !("withCredentials" in g)) return o(t, i);
                i.progress && g.upload && g.upload.addEventListener("progress", function(e) {
                    e.lengthComputable && i.progress(Math.round(95 * e.loaded / e.total))
                }, !1);
                var y = function() {
                    if (4 == g.readyState && !v)
                        if (i.progress && i.progress(100), g.status >= 200 && g.status < 300) {
                            var t = g.responseText;
                            if (i.json) try {
                                t = e.json.decode(t)
                            } catch (n) {
                                return void b.call(g, "Invalid json: " + t)
                            }
                            s(t, g.status, g), v = !0
                        } else b.call(g, g.responseText), v = !0
                };
                g.onreadystatechange = y;
                var b = function(e) {
                    return v ? void 0 : (i.progress && i.progress(100), v = !0, 400 == this.status ? void l("bad_params", this.status, this) : 403 == this.status ? void l("not_authorized", this.status, this) : 404 == this.status ? void l("not_found", this.status, this) : m ? 4 == this.readyState && 0 === this.status ? void l("CORS_not_allowed", this.status, this) : void l("CORS_error", this.status, this) : void l(e, this.status, this))
                };
                g.onerror = b, c && "GET" == a && (t += (-1 != t.indexOf("?") ? "&" : "?") + c, c = null), g.open(a, t, u), i.json ? g.setRequestHeader("Accept", "application/json, text/javascript") : g.setRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
                var w = p["Content-Type"] || p["content-type"];
                if (c && d && ("POST" == a || "PUT" == a) && void 0 == w && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8"), p)
                    for (var x in p) g.setRequestHeader(x, p[x]);
                return g.send(c), g
            },
            o = function(t, i) {
                if (!window.XDomainRequest) return null;
                var r = i.method ? i.method.toUpperCase() : "POST",
                    a = i.success || function() {},
                    o = i.error || function() {},
                    s = i.data || {};
                if ("http:" == window.location.protocol ? t = t.replace("https:", "http:") : "https:" == window.location.protocol && (t = t.replace("http:", "https:")), i.async) throw new e.FilepickerException("Asyncronous Cross-domain requests are not supported");
                "GET" != r && "POST" != r && (s._method = r, r = "POST"), i.processData !== !1 && (s = s ? n(s) : null), s && "GET" == r && (t += (t.indexOf("?") >= 0 ? "&" : "?") + s, s = null), t += (t.indexOf("?") >= 0 ? "&" : "?") + "_xdr=true&_cacheBust=" + e.util.getId();
                var l = new window.XDomainRequest;
                return l.onload = function() {
                    var t = l.responseText;
                    if (i.progress && i.progress(100), i.json) try {
                        t = e.json.decode(t)
                    } catch (n) {
                        return void o("Invalid json: " + t, 200, l)
                    }
                    a(t, 200, l)
                }, l.onerror = function() {
                    i.progress && i.progress(100), o(l.responseText || "CORS_error", this.status || 500, this)
                }, l.onprogress = function() {}, l.ontimeout = function() {}, l.timeout = 3e4, l.open(r, t, !0), l.send(s), l
            };
        return {
            get: t,
            post: i,
            request: a
        }
    }), filepicker.extend("base64", function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            t = function(t, i) {
                i = i || void 0 === i;
                var r, a, o, s, l, u, c, d = "",
                    p = 0;
                for (i && (t = n(t)); p < t.length;) r = t.charCodeAt(p), a = t.charCodeAt(p + 1), o = t.charCodeAt(p + 2), p += 3, s = r >> 2, l = (3 & r) << 4 | a >> 4, u = (15 & a) << 2 | o >> 6, c = 63 & o, isNaN(a) ? u = c = 64 : isNaN(o) && (c = 64), d = d + e.charAt(s) + e.charAt(l) + e.charAt(u) + e.charAt(c);
                return d
            },
            i = function(t, i) {
                i = i || void 0 === i;
                var n, a, o, s, l, u, c, d = "",
                    p = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); p < t.length;) s = e.indexOf(t.charAt(p)), l = e.indexOf(t.charAt(p + 1)), u = e.indexOf(t.charAt(p + 2)), c = e.indexOf(t.charAt(p + 3)), p += 4, n = s << 2 | l >> 4, a = (15 & l) << 4 | u >> 2, o = (3 & u) << 6 | c, d += String.fromCharCode(n), 64 != u && (d += String.fromCharCode(a)), 64 != c && (d += String.fromCharCode(o));
                return i && (d = r(d)), d
            },
            n = function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", i = 0; i < e.length; i++) {
                    var n = e.charCodeAt(i);
                    128 > n ? t += String.fromCharCode(n) : n > 127 && 2048 > n ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
                }
                return t
            },
            r = function(e) {
                for (var t = "", i = 0, n = c1 = c2 = 0; i < e.length;) n = e.charCodeAt(i), 128 > n ? (t += String.fromCharCode(n), i++) : n > 191 && 224 > n ? (c2 = e.charCodeAt(i + 1), t += String.fromCharCode((31 & n) << 6 | 63 & c2), i += 2) : (c2 = e.charCodeAt(i + 1), c3 = e.charCodeAt(i + 2), t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
                return t
            };
        return {
            encode: t,
            decode: i
        }
    }, !0), filepicker.extend("browser", function() {
        var e = function() {
                return !!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i))
            },
            t = function() {
                return !!navigator.userAgent.match(/Android/i)
            },
            i = function() {
                return !!navigator.userAgent.match(/MSIE 7\.0/i)
            };
        return {
            isIOS: e,
            isAndroid: t,
            isIE7: i
        }
    }), filepicker.extend("comm", function() {
        var e = this,
            t = "filepicker_comm_iframe",
            i = "fpapi_comm_iframe",
            n = function() {
                if (void 0 === window.frames[t]) {
                    o();
                    var n;
                    n = document.createElement("iframe"), n.id = n.name = t, n.src = e.urls.COMM, n.style.display = "none", document.body.appendChild(n)
                }
                if (void 0 === window.frames[i]) {
                    o();
                    var r;
                    r = document.createElement("iframe"), r.id = r.name = i, r.src = e.urls.API_COMM, r.style.display = "none", document.body.appendChild(r)
                }
            },
            r = function(t) {
                if (t.origin == e.urls.BASE || t.origin == e.urls.DIALOG_BASE) {
                    var i = e.json.parse(t.data);
                    e.handlers.run(i)
                }
            },
            a = !1,
            o = function() {
                if (!a)
                    if (a = !0, window.addEventListener) window.addEventListener("message", r, !1);
                    else {
                        if (!window.attachEvent) throw new e.FilepickerException("Unsupported browser");
                        window.attachEvent("onmessage", r)
                    }
            },
            s = function() {
                if (window.removeEventListener) window.removeEventListener("message", r, !1);
                else {
                    if (!window.attachEvent) throw new e.FilepickerException("Unsupported browser");
                    window.detachEvent("onmessage", r)
                }
                if (a) {
                    a = !1;
                    for (var n = document.getElementsByName(t), o = 0; o < n.length; o++) n[o].parentNode.removeChild(n[o]);
                    try {
                        delete window.frames[t]
                    } catch (s) {}
                    for (var l = document.getElementsByName(i), u = 0; u < l.length; u++) l[u].parentNode.removeChild(l[u]);
                    try {
                        delete window.frames[i]
                    } catch (s) {}
                }
            };
        return {
            openChannel: n,
            closeChannel: s
        }
    }), filepicker.extend("comm_fallback", function() {
        var e, t = this,
            i = "filepicker_comm_iframe",
            n = "host_comm_iframe",
            r = "",
            a = 200,
            o = function() {
                s()
            },
            s = function() {
                if (void 0 === window.frames[n]) {
                    var e;
                    e = document.createElement("iframe"), e.id = e.name = n, r = e.src = t.urls.constructHostCommFallback(), e.style.display = "none";
                    var i = function() {
                        r = e.contentWindow.location.href, l()
                    };
                    e.attachEvent ? e.attachEvent("onload", i) : e.onload = i, document.body.appendChild(e)
                }
            },
            l = function() {
                if (void 0 === window.frames[i]) {
                    var e;
                    e = document.createElement("iframe"), e.id = e.name = i, e.src = t.urls.FP_COMM_FALLBACK + "?host_url=" + encodeURIComponent(r), e.style.display = "none", document.body.appendChild(e)
                }
                f()
            },
            u = !1,
            c = void 0,
            d = "",
            p = function() {
                var e = window.frames[i];
                if (e) {
                    var r = e.frames[n];
                    if (r) {
                        var a = r.location.hash;
                        if (a && "#" == a.charAt(0) && (a = a.substr(1)), a !== d && (d = a)) {
                            var o;
                            try {
                                o = t.json.parse(a)
                            } catch (s) {}
                            o && t.handlers.run(o)
                        }
                    }
                }
            },
            f = function() {
                u || (u = !0, c = window.setInterval(p, a))
            },
            h = function() {
                if (window.clearInterval(c), u) {
                    u = !1;
                    for (var e = document.getElementsByName(i), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t]);
                    try {
                        delete window.frames[i]
                    } catch (r) {}
                    for (e = document.getElementsByName(n), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t]);
                    try {
                        delete window.frames[n]
                    } catch (r) {}
                }
            },
            m = !("postMessage" in window),
            v = function() {
                e = t.comm, t.comm = {
                    openChannel: o,
                    closeChannel: h
                }
            };
        return m && v(), {
            openChannel: o,
            closeChannel: h,
            isEnabled: m
        }
    }), filepicker.extend("conversions", function() {
        var e = this,
            t = {
                width: "number",
                height: "number",
                fit: "string",
                format: "string",
                watermark: "string",
                watermark_size: "number",
                watermark_position: "string",
                align: "string",
                crop: "string or array",
                quality: "number",
                text: "string",
                text_font: "string",
                text_size: "number",
                text_color: "string",
                text_align: "string",
                text_padding: "number",
                policy: "string",
                signature: "string",
                storeLocation: "string",
                storePath: "string",
                storeContainer: "string",
                storeAccess: "string",
                rotate: "string or number"
            },
            i = function(i) {
                var n;
                for (var r in i) {
                    n = !1;
                    for (var a in t)
                        if (r == a && (n = !0, -1 === t[a].indexOf(e.util.typeOf(i[r])))) throw new e.FilepickerException("Conversion parameter " + r + " is not the right type: " + i[r] + ". Should be a " + t[a]);
                    if (!n) throw new e.FilepickerException("Conversion parameter " + r + " is not a valid parameter.")
                }
            },
            n = function(t, n, r, a, o) {
                i(n), n.crop && e.util.isArray(n.crop) && (n.crop = n.crop.join(",")), e.ajax.post(t + "/convert", {
                    data: n,
                    json: !0,
                    success: function(t) {
                        r(e.util.standardizeFPFile(t))
                    },
                    error: function(t, i, n) {
                        a("not_found" == t ? new e.errors.FPError(141) : "bad_params" == t ? new e.errors.FPError(142) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(143))
                    },
                    progress: o
                })
            };
        return {
            convert: n
        }
    }), filepicker.extend("cookies", function() {
        var e = this,
            t = function(t) {
                var i = function(i) {
                    "ThirdPartyCookies" === i.type && (e.cookies.THIRD_PARTY_COOKIES = !!i.payload, t && "function" == typeof t && t(!!i.payload))
                };
                return i
            },
            i = function(i) {
                var n = t(i);
                e.handlers.attach("cookies", n), e.comm.openChannel()
            };
        return {
            checkThirdParty: i
        }
    }), filepicker.extend("dragdrop", function() {
        var e = this,
            t = function() {
                return (!!window.FileReader || navigator.userAgent.indexOf("Safari") >= 0) && "draggable" in document.createElement("span")
            },
            i = function(i, n) {
                var r = "No DOM element found to create drop pane";
                if (!i) throw new e.FilepickerException(r);
                if (i.jquery) {
                    if (0 === i.length) throw new e.FilepickerException(r);
                    i = i[0]
                }
                if (!t()) return e.util.console.error("Your browser doesn't support drag-drop functionality"), !1;
                n = n || {};
                var a = n.dragEnter || function() {},
                    o = n.dragLeave || function() {},
                    s = n.onStart || function() {},
                    l = n.onSuccess || function() {},
                    u = n.onError || function() {},
                    c = n.onProgress || function() {},
                    d = n.mimetypes;
                d || (d = n.mimetype ? [n.mimetype] : ["*/*"]), "string" == e.util.typeOf(d) && (d = d.split(","));
                var p = n.extensions;
                p || n.extension && (p = [n.extension]), "string" == e.util.typeOf(p) && (p = p.replace(/ /g, "").split(","));
                var f = {
                        location: n.location,
                        path: n.path,
                        container: n.container,
                        access: n.access,
                        policy: n.policy,
                        signature: n.signature
                    },
                    h = function() {
                        return i && "disabled" != (i.getAttribute("disabled") || "enabled")
                    };
                i.addEventListener("dragenter", function(e) {
                    return h() && a(), e.stopPropagation(), e.preventDefault(), !1
                }, !1), i.addEventListener("dragleave", function(e) {
                    return h() && o(), e.stopPropagation(), e.preventDefault(), !1
                }, !1), i.addEventListener("dragover", function(e) {
                    return e.preventDefault(), !1
                }, !1), i.addEventListener("drop", function(t) {
                    if (t.stopPropagation(), t.preventDefault(), !h()) return !1;
                    var n, r, a;
                    if (t.dataTransfer.items)
                        for (r = t.dataTransfer.items, n = 0; n < r.length; n++)
                            if (a = r[n] && r[n].webkitGetAsEntry ? r[n].webkitGetAsEntry() : void 0, a && a.isDirectory) return u("WrongType", "Uploading a folder is not allowed"), !1;
                    var o = t.dataTransfer.files,
                        l = o.length;
                    if (x(o))
                        for (s(o), i.setAttribute("disabled", "disabled"), n = 0; n < o.length; n++) e.store(o[n], f, g(n, l), y, b(n, l));
                    return !1
                });
                var m = {},
                    v = [],
                    g = function(e, t) {
                        return function(r) {
                            n.multiple ? (v.push(r), v.length == t ? (l(v), v = [], m = {}, i.setAttribute("disabled", "enabled")) : (m[e] = 100, w(t))) : l([r])
                        }
                    },
                    y = function(e) {
                        u("UploadError", e.toString()), i.setAttribute("disabled", "enabled")
                    },
                    b = function(e, t) {
                        return function(i) {
                            m[e] = i, w(t)
                        }
                    },
                    w = function(e) {
                        var t = 0;
                        for (var i in m) t += m[i];
                        var n = t / e;
                        c(n)
                    },
                    x = function(t) {
                        if (t.length > 0) {
                            if (t.length > 1 && !n.multiple) return u("TooManyFiles", "Only one file at a time"), !1;
                            if (n.maxFiles > 0 && t.length > n.maxFiles) return u("TooManyFiles", "Only " + n.maxFiles + " files at a time"), !1;
                            for (var i, r, a, o = 0; o < t.length; o++) {
                                i = !1, r = t[o], a = r.name || r.fileName || '"Unknown file"';
                                for (var s = 0; s < d.length; s++) {
                                    var l = e.mimetypes.getMimetype(r);
                                    i = i || e.mimetypes.matchesMimetype(l, d[s])
                                }
                                if (!i) return u("WrongType", a + " isn't the right type of file"), !1;
                                if (p) {
                                    for (i = !1, s = 0; s < p.length; s++) i = i || e.util.endsWith(a, p[s]);
                                    if (!i) return u("WrongType", a + " isn't the right type of file"), !1
                                }
                                if (r.size && n.maxSize && r.size > n.maxSize) return u("WrongSize", a + " is too large (" + r.size + " Bytes)"), !1
                            }
                            return !0
                        }
                        return u("NoFilesFound", "No files uploaded"), !1
                    };
                return !0
            };
        return {
            enabled: t,
            makeDropPane: i
        }
    }), filepicker.extend("errors", function() {
        var e = this,
            t = function(e) {
                if (this === window) return new t(e);
                if (this.code = e, filepicker.debug) {
                    var i = filepicker.error_map[this.code];
                    this.message = i.message, this.moreInfo = i.moreInfo, this.toString = function() {
                        return "FPError " + this.code + ": " + this.message + ". For help, see " + this.moreInfo
                    }
                } else this.toString = function() {
                    return "FPError " + this.code + ". Include filepicker_debug.js for more info"
                };
                return this
            };
        t.isClass = !0;
        var i = function(t) {
            filepicker.debug && e.util.console.error(t.toString())
        };
        return {
            FPError: t,
            handleError: i
        }
    }, !0), filepicker.extend("exporter", function() {
        var e = this,
            t = function(t) {
                var i = function(i, n, r) {
                    t[n] && !e.util.isArray(t[n]) ? t[n] = [t[n]] : t[i] ? t[n] = [t[i]] : r && (t[n] = r)
                };
                if (t.mimetype && t.extension) throw e.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the export function");
                if (i("service", "services"), t.services)
                    for (var n = 0; n < t.services.length; n++) {
                        var r = ("" + t.services[n]).replace(" ", ""),
                            a = e.services[r];
                        t.services[n] = void 0 === a ? r : a
                    }
                t.openTo && (t.openTo = e.services[t.openTo] || t.openTo), e.util.setDefault(t, "container", "modal")
            },
            i = function(t, i) {
                var n = function(n) {
                    if ("filepickerUrl" === n.type) {
                        if (n.error) e.util.console.error(n.error), i(e.errors.FPError(132));
                        else {
                            var r = {};
                            r.url = n.payload.url, r.filename = n.payload.data.filename, r.mimetype = n.payload.data.type, r.size = n.payload.data.size, r.isWriteable = !0, t(r)
                        }
                        e.modal.close()
                    }
                };
                return n
            },
            n = function(r, a, o, s) {
                if (t(a), a.debug) return void setTimeout(function() {
                    o({
                        url: "https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",
                        filename: "test.png",
                        mimetype: "image/png",
                        size: 58979
                    })
                }, 1);
                if (void 0 === e.cookies.THIRD_PARTY_COOKIES) {
                    var l = !1;
                    return void e.cookies.checkThirdParty(function() {
                        l || (n(r, a, o, s), l = !0)
                    })
                }
                var u = e.util.getId(),
                    c = !1,
                    d = function(e) {
                        c = !0, o(e)
                    },
                    p = function(e) {
                        c = !0, s(e)
                    },
                    f = function() {
                        c || (c = !0, s(e.errors.FPError(131)))
                    };
                "modal" == a.container && (a.mobile || e.window.shouldForce()) && (a.container = "window"), e.window.open(a.container, e.urls.constructExportUrl(r, a, u), f), e.handlers.attach(u, i(d, p))
            };
        return {
            createExporter: n
        }
    }), filepicker.extend("files", function() {
        var e = this,
            t = function(t, n, r, a, o) {
                var s = void 0 === n.base64encode;
                s && (n.base64encode = !0), n.base64encode = n.base64encode !== !1;
                var l = function(t) {
                    s && (t = e.base64.decode(t, !!n.asText)), r(t)
                };
                i.call(this, t, n, l, a, o)
            },
            i = function(t, i, n, r, a) {
                i.cache !== !0 && (i._cacheBust = e.util.getId()), e.ajax.get(t, {
                    data: i,
                    headers: {
                        "X-NO-STREAM": !0
                    },
                    success: n,
                    error: function(t, i, n) {
                        r("CORS_not_allowed" == t ? new e.errors.FPError(113) : "CORS_error" == t ? new e.errors.FPError(114) : "not_found" == t ? new e.errors.FPError(115) : "bad_params" == t ? new e.errors.FPError(400) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(118))
                    },
                    progress: a
                })
            },
            n = function(t, i, n, r, a) {
                if (!(window.File && window.FileReader && window.FileList && window.Blob)) return a(10), void e.files.storeFile(t, {}, function(t) {
                    a(50), e.files.readFromFPUrl(t.url, i, n, r, function(e) {
                        a(50 + e / 2)
                    })
                }, r, function(e) {
                    a(e / 2)
                });
                var o = !!i.base64encode,
                    s = !!i.asText,
                    l = new FileReader;
                l.onprogress = function(e) {
                    e.lengthComputable && a(Math.round(e.loaded / e.total * 100))
                }, l.onload = function(t) {
                    a(100), n(o ? e.base64.encode(t.target.result, s) : t.target.result)
                }, l.onerror = function(t) {
                    switch (t.target.error.code) {
                        case t.target.error.NOT_FOUND_ERR:
                            r(new e.errors.FPError(115));
                            break;
                        case t.target.error.NOT_READABLE_ERR:
                            r(new e.errors.FPError(116));
                            break;
                        case t.target.error.ABORT_ERR:
                            r(new e.errors.FPError(117));
                            break;
                        default:
                            r(new e.errors.FPError(118))
                    }
                }, s || !l.readAsBinaryString ? l.readAsText(t) : l.readAsBinaryString(t)
            },
            r = function(t, i, n, r, a, o) {
                var s = n.mimetype || "text/plain";
                e.ajax.post(e.urls.constructWriteUrl(t, n), {
                    headers: {
                        "Content-Type": s
                    },
                    data: i,
                    processData: !1,
                    json: !0,
                    success: function(t) {
                        r(e.util.standardizeFPFile(t))
                    },
                    error: function(t, i, n) {
                        a("not_found" == t ? new e.errors.FPError(121) : "bad_params" == t ? new e.errors.FPError(122) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    progress: o
                })
            },
            a = function(t, i, n, r, a, o) {
                var s = function(t, i, n) {
                        a("not_found" == t ? new e.errors.FPError(121) : "bad_params" == t ? new e.errors.FPError(122) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    l = function(t) {
                        r(e.util.standardizeFPFile(t))
                    };
                c(i, e.urls.constructWriteUrl(t, n), l, s, o)
            },
            o = function(t, i, n, r, a, o) {
                var s = function(t, i, n) {
                        a("not_found" == t ? new e.errors.FPError(121) : "bad_params" == t ? new e.errors.FPError(122) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    l = function(t) {
                        r(e.util.standardizeFPFile(t))
                    };
                n.mimetype = i.type, c(i, e.urls.constructWriteUrl(t, n), l, s, o)
            },
            s = function(t, i, n, r, a, o) {
                e.ajax.post(e.urls.constructWriteUrl(t, n), {
                    data: {
                        url: i
                    },
                    json: !0,
                    success: function(t) {
                        r(e.util.standardizeFPFile(t))
                    },
                    error: function(t, i, n) {
                        a("not_found" == t ? new e.errors.FPError(121) : "bad_params" == t ? new e.errors.FPError(122) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    progress: o
                })
            },
            l = function(t, i, n, r, a) {
                if (t.files) return void(0 === t.files.length ? r(new e.errors.FPError(115)) : u(t.files[0], i, n, r, a));
                e.util.setDefault(i, "location", "S3"), i.filename || (i.filename = t.value.replace("C:\\fakepath\\", "") || t.name);
                var o = t.name;
                t.name = "fileUpload", e.iframeAjax.post(e.urls.constructStoreUrl(i), {
                    data: t,
                    processData: !1,
                    json: !0,
                    success: function(i) {
                        t.name = o, n(e.util.standardizeFPFile(i))
                    },
                    error: function(t, i, n) {
                        r("not_found" == t ? new e.errors.FPError(121) : "bad_params" == t ? new e.errors.FPError(122) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    }
                })
            },
            u = function(t, i, n, r, a) {
                e.util.setDefault(i, "location", "S3");
                var o = function(t, i, n) {
                        "not_found" == t ? r(new e.errors.FPError(121)) : "bad_params" == t ? r(new e.errors.FPError(122)) : "not_authorized" == t ? r(new e.errors.FPError(403)) : (e.util.console.error(t), r(new e.errors.FPError(123)))
                    },
                    s = function(t) {
                        n(e.util.standardizeFPFile(t))
                    };
                i.filename || (i.filename = t.name || t.fileName), c(t, e.urls.constructStoreUrl(i), s, o, a)
            },
            c = function(t, i, n, r, a) {
                t.files && (t = t.files[0]);
                var o = !!window.FormData && !!window.XMLHttpRequest;
                o ? (data = new FormData, data.append("fileUpload", t), e.ajax.post(i, {
                    json: !0,
                    processData: !1,
                    data: data,
                    success: n,
                    error: r,
                    progress: a
                })) : e.iframeAjax.post(i, {
                    data: t,
                    json: !0,
                    success: n,
                    error: r
                })
            },
            d = function(t, i, n, r, a) {
                e.util.setDefault(i, "location", "S3"), e.util.setDefault(i, "mimetype", "text/plain"), e.ajax.post(e.urls.constructStoreUrl(i), {
                    headers: {
                        "Content-Type": i.mimetype
                    },
                    data: t,
                    processData: !1,
                    json: !0,
                    success: function(t) {
                        n(e.util.standardizeFPFile(t))
                    },
                    error: function(t, i, n) {
                        r("not_found" == t ? new e.errors.FPError(121) : "bad_params" == t ? new e.errors.FPError(122) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(123))
                    },
                    progress: a
                })
            },
            p = function(t, i, n, r, a) {
                e.util.setDefault(i, "location", "S3"), e.ajax.post(e.urls.constructStoreUrl(i), {
                    data: {
                        url: t
                    },
                    json: !0,
                    success: function(t) {
                        n(e.util.standardizeFPFile(t))
                    },
                    error: function(t, i, n) {
                        r("not_found" == t ? new e.errors.FPError(151) : "bad_params" == t ? new e.errors.FPError(152) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(153))
                    },
                    progress: a
                })
            },
            f = function(t, i, n, r) {
                var a = ["uploaded", "modified", "created"];
                i.cache !== !0 && (i._cacheBust = e.util.getId()), e.ajax.get(t + "/metadata", {
                    json: !0,
                    data: i,
                    success: function(e) {
                        for (var t = 0; t < a.length; t++) e[a[t]] && (e[a[t]] = new Date(e[a[t]]));
                        n(e)
                    },
                    error: function(t, i, n) {
                        r("not_found" == t ? new e.errors.FPError(161) : "bad_params" == t ? new e.errors.FPError(400) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(162))
                    }
                })
            },
            h = function(t, i, n, r) {
                i.key = e.apikey, e.ajax.post(t + "/remove", {
                    data: i,
                    success: function(e) {
                        n()
                    },
                    error: function(t, i, n) {
                        r("not_found" == t ? new e.errors.FPError(171) : "bad_params" == t ? new e.errors.FPError(400) : "not_authorized" == t ? new e.errors.FPError(403) : new e.errors.FPError(172))
                    }
                })
            };
        return {
            readFromUrl: i,
            readFromFile: n,
            readFromFPUrl: t,
            writeDataToFPUrl: r,
            writeFileToFPUrl: o,
            writeFileInputToFPUrl: a,
            writeUrlToFPUrl: s,
            storeFileInput: l,
            storeFile: u,
            storeUrl: p,
            storeData: d,
            stat: f,
            remove: h
        }
    }), filepicker.extend("handlers", function() {
        var e = {},
            t = function(t, i) {
                return e.hasOwnProperty(t) ? e[t].push(i) : e[t] = [i], i
            },
            i = function(t, i) {
                var n = e[t];
                if (n)
                    if (i) {
                        for (var r = 0; r < n.length; r++)
                            if (n[r] === i) {
                                n.splice(r, 1);
                                break
                            }
                        0 === n.length && delete e[t]
                    } else delete e[t]
            },
            n = function(t) {
                var i = t.id;
                if (e.hasOwnProperty(i)) {
                    for (var n = e[i], r = 0; r < n.length; r++) n[r](t);
                    return !0
                }
                return !1
            };
        return {
            attach: t,
            detach: i,
            run: n
        }
    }), filepicker.extend("iframeAjax", function() {
        var e = this,
            t = "ajax_iframe",
            i = [],
            n = !1,
            r = function(e, t) {
                t.method = "GET", s(e, t)
            },
            a = function(t, i) {
                i.method = "POST", t += (t.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + e.util.getId(), s(t, i)
            },
            o = function() {
                if (i.length > 0) {
                    var e = i.shift();
                    s(e.url, e.options)
                }
            },
            s = function(r, a) {
                if (n) return void i.push({
                    url: r,
                    options: a
                });
                r += (r.indexOf("?") >= 0 ? "&" : "?") + "_cacheBust=" + e.util.getId(), r += "&Content-Type=text%2Fhtml", e.comm.openChannel();
                var o;
                try {
                    o = document.createElement('<iframe name="' + t + '">')
                } catch (s) {
                    o = document.createElement("iframe")
                }
                o.id = o.name = t, o.style.display = "none";
                var c = function() {
                    n = !1
                };
                o.attachEvent ? (o.attachEvent("onload", c), o.attachEvent("onerror", c)) : o.onerror = o.onload = c, o.id = t, o.name = t, o.style.display = "none", o.onerror = o.onload = function() {
                    n = !1
                }, document.body.appendChild(o), e.handlers.attach("upload", l(a));
                var d = document.createElement("form");
                d.method = a.method || "GET", d.action = r, d.target = t;
                var p = a.data;
                if ((e.util.isFileInputElement(p) || e.util.isFile(p)) && (d.encoding = d.enctype = "multipart/form-data"), document.body.appendChild(d), e.util.isFile(p)) {
                    var f = u(p);
                    if (!f) throw e.FilepickerException("Couldn't find corresponding file input.");
                    p = {
                        fileUpload: f
                    }
                } else if (e.util.isFileInputElement(p)) {
                    var h = p;
                    p = {}, p.fileUpload = h
                } else p && e.util.isElement(p) && "INPUT" == p.tagName ? (h = p, p = {}, p[h.name] = h) : a.processData !== !1 && (p = {
                    data: p
                });
                p.format = "iframe";
                var m = {};
                for (var v in p) {
                    var g = p[v];
                    if (e.util.isElement(g) && "INPUT" == g.tagName) m[v] = {
                        par: g.parentNode,
                        sib: g.nextSibling,
                        name: g.name,
                        input: g,
                        focused: g == document.activeElement
                    }, g.name = v, d.appendChild(g);
                    else {
                        var y = document.createElement("input");
                        y.name = v, y.value = g, d.appendChild(y)
                    }
                }
                n = !0, window.setTimeout(function() {
                    d.submit();
                    for (var e in m) {
                        var t = m[e];
                        t.par.insertBefore(t.input, t.sib), t.input.name = t.name, t.focused && t.input.focus()
                    }
                    d.parentNode.removeChild(d)
                }, 1)
            },
            l = function(t) {
                var i = t.success || function() {},
                    r = t.error || function() {},
                    a = function(t) {
                        if ("Upload" === t.type) {
                            n = !1;
                            var a = t.payload;
                            a.error ? r(a.error) : i(a), e.handlers.detach("upload"), o()
                        }
                    };
                return a
            },
            u = function(e) {
                for (var t = document.getElementsByTagName("input"), i = 0; i < t.length; i++) {
                    var n = t[0];
                    if ("file" == n.type && n.files && n.files.length)
                        for (var r = 0; r < n.files.length; r++)
                            if (n.files[r] === e) return n
                }
                return null
            };
        return {
            get: r,
            post: a,
            request: s
        }
    }), filepicker.extend("json", function() {
        var a = this,
            b = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            c = function(e) {
                return b[e] || "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            },
            d = function(e) {
                return e = e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""), /^[\],:{}\s]*$/.test(e)
            },
            e = function(t) {
                if (window.JSON && window.JSON.stringify) return window.JSON.stringify(t);
                t && t.toJSON && (t = t.toJSON());
                var i = [];
                switch (a.util.typeOf(t)) {
                    case "string":
                        return '"' + t.replace(/[\x00-\x1f\\"]/g, c) + '"';
                    case "array":
                        for (var n = 0; n < t.length; n++) i.push(e(t[n]));
                        return "[" + i + "]";
                    case "object":
                    case "hash":
                        var r, o;
                        for (o in t) r = e(t[o]), r && i.push(e(o) + ":" + r), r = null;
                        return "{" + i + "}";
                    case "number":
                    case "boolean":
                        return "" + t;
                    case "null":
                        return "null";
                    default:
                        return "null"
                }
                return null
            },
            f = function(b, c) {
                if (!b || "string" != a.util.typeOf(b)) return null;
                if (window.JSON && window.JSON.parse) return window.JSON.parse(b);
                if (c && !d(b)) throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");
                return eval("(" + b + ")")
            };
        return {
            validate: d,
            encode: e,
            stringify: e,
            decode: f,
            parse: f
        }
    }), filepicker.extend(function() {
        var e = this;
        e.API_VERSION = "v1";
        var t = function(t) {
                e.apikey = t
            },
            i = function(e) {
                return this.text = e, this.toString = function() {
                    return "FilepickerException: " + this.text
                }, this
            };
        i.isClass = !0;
        var n = function() {
                if (!e.apikey) throw new e.FilepickerException("API Key not found")
            },
            r = function(t, i, r) {
                n(), "function" == typeof t && (r = i, i = t, t = {}), t = t || {}, i = i || function() {}, r = r || e.errors.handleError, e.picker.createPicker(t, i, r, !1)
            },
            a = function(t, i, r, a) {
                n(), "function" == typeof t && (a = r, r = i, i = t, t = {}), t = t || {}, i = i || function() {}, r = r || e.errors.handleError, e.picker.createPicker(t, i, r, !0, !1, a)
            },
            o = function(t, i, r, a, o) {
                if (n(), !t || !i || "function" == typeof t || "function" == typeof t) throw new e.FilepickerException("Not all required parameters given, missing picker or store options");
                a = a || e.errors.handleError;
                var s = !!t.multiple,
                    l = t ? e.util.clone(t) : {};
                if (l.storeLocation = i.location || "S3", l.storePath = i.path, l.storeContainer = i.container, l.storeAccess = i.access || "private", s && l.storePath && "/" != l.storePath.charAt(l.storePath.length - 1)) throw new e.FilepickerException("pickAndStore with multiple files requires a path that ends in '/'");
                var u = r;
                s || (u = function(e) {
                    r([e])
                }), e.picker.createPicker(l, u, a, s, !1, o)
            },
            s = function(t, i, r) {
                n(), "function" == typeof t && (r = i, i = t, t = {}), t = t || {}, i = i || function() {}, r = r || e.errors.handleError, e.picker.createPicker(t, i, r, !1, !0)
            },
            l = function(t, i, r, a, o) {
                if (n(), !t) throw new e.FilepickerException("No input given - nothing to read!");
                if ("function" == typeof i && (o = a, a = r, r = i, i = {}), i = i || {}, r = r || function() {}, a = a || e.errors.handleError, o = o || function() {}, "string" == typeof t) e.util.isFPUrl(t) ? e.files.readFromFPUrl(t, i, r, a, o) : e.files.readFromUrl(t, i, r, a, o);
                else if (e.util.isFileInputElement(t)) t.files ? 0 === t.files.length ? a(new e.errors.FPError(115)) : e.files.readFromFile(t.files[0], i, r, a, o) : u(t, i, r, a, o);
                else if (e.util.isFile(t)) e.files.readFromFile(t, i, r, a, o);
                else {
                    if (!t.url) throw new e.FilepickerException("Cannot read given input: " + t + ". Not a url, file input, DOM File, or FPFile object.");
                    e.files.readFromFPUrl(t.url, i, r, a, o)
                }
            },
            u = function(t, i, n, r, a) {
                a(10), e.store(t, function(t) {
                    a(50), e.read(t, i, n, r, function(e) {
                        a(50 + e / 2)
                    })
                }, r)
            },
            c = function(t, i, r, a, o, s) {
                if (n(), !t) throw new e.FilepickerException("No fpfile given - nothing to write to!");
                if (void 0 === i || null === i) throw new e.FilepickerException("No input given - nothing to write!");
                "function" == typeof r && (s = o, o = a, a = r, r = {}), r = r || {}, a = a || function() {}, o = o || e.errors.handleError, s = s || function() {};
                var l;
                if (e.util.isFPUrl(t)) l = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to write to: " + t + ". Not a filepicker url or FPFile object.");
                    l = t.url
                }
                if ("string" == typeof i) e.files.writeDataToFPUrl(l, i, r, a, o, s);
                else if (e.util.isFileInputElement(i)) i.files ? 0 === i.files.length ? o(new e.errors.FPError(115)) : e.files.writeFileToFPUrl(l, i.files[0], r, a, o, s) : e.files.writeFileInputToFPUrl(l, i, r, a, o, s);
                else if (e.util.isFile(i)) e.files.writeFileToFPUrl(l, i, r, a, o, s);
                else {
                    if (!i.url) throw new e.FilepickerException("Cannot read from given input: " + i + ". Not a string, file input, DOM File, or FPFile object.");
                    e.files.writeUrlToFPUrl(l, i.url, r, a, o, s)
                }
            },
            d = function(t, i, r, a, o, s) {
                if (n(), !t) throw new e.FilepickerException("No fpfile given - nothing to write to!");
                if (void 0 === i || null === i) throw new e.FilepickerException("No input given - nothing to write!");
                "function" == typeof r && (s = o, o = a, a = r, r = {}), r = r || {}, a = a || function() {}, o = o || e.errors.handleError, s = s || function() {};
                var l;
                if (e.util.isFPUrl(t)) l = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to write to: " + t + ". Not a filepicker url or FPFile object.");
                    l = t.url
                }
                e.files.writeUrlToFPUrl(l, i, r, a, o, s)
            },
            p = function(t, i, r, a) {
                n(), "function" == typeof i && (a = r, r = i, i = {}), i = i ? e.util.clone(i) : {}, r = r || function() {}, a = a || e.errors.handleError;
                var o;
                if ("string" == typeof t && e.util.isUrl(t)) o = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to export: " + t + ". Not a valid url or FPFile object. You may want to use filepicker.store() to get an FPFile to export");
                    o = t.url, i.mimetype || i.extension || (i.mimetype = t.mimetype), i.suggestedFilename || (i.suggestedFilename = t.filename)
                }
                i.suggestedFilename && (i.suggestedFilename = encodeURI(i.suggestedFilename)), e.exporter.createExporter(o, i, r, a)
            },
            f = function(t, i, r, a, o) {
                if (n(), "function" == typeof i && (o = a, a = r, r = i, i = {}), i = i ? e.util.clone(i) : {}, r = r || function() {}, a = a || e.errors.handleError, o = o || function() {}, "string" == typeof t) e.files.storeData(t, i, r, a, o);
                else if (e.util.isFileInputElement(t)) t.files ? 0 === t.files.length ? a(new e.errors.FPError(115)) : e.files.storeFile(t.files[0], i, r, a, o) : e.files.storeFileInput(t, i, r, a, o);
                else if (e.util.isFile(t)) e.files.storeFile(t, i, r, a, o);
                else {
                    if (!t.url) throw new e.FilepickerException("Cannot store given input: " + t + ". Not a string, file input, DOM File, or FPFile object.");
                    i.filename || (i.filename = t.filename), e.files.storeUrl(t.url, i, r, a, o)
                }
            },
            h = function(t, i, r, a, o) {
                n(), "function" == typeof i && (o = a, a = r, r = i, i = {}), i = i || {}, r = r || function() {}, a = a || e.errors.handleError, o = o || function() {}, e.files.storeUrl(t, i, r, a, o)
            },
            m = function(t, i, r, a) {
                n(), "function" == typeof i && (a = r, r = i, i = {}), i = i || {}, r = r || function() {}, a = a || e.errors.handleError;
                var o;
                if (e.util.isFPUrl(t)) o = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to get metadata for: " + t + ". Not a filepicker url or FPFile object.");
                    o = t.url
                }
                e.files.stat(o, i, r, a)
            },
            v = function(t, i, r, a) {
                n(), "function" == typeof i && (a = r, r = i, i = {}), i = i || {}, r = r || function() {}, a = a || e.errors.handleError;
                var o;
                if (e.util.isFPUrl(t)) o = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to remove: " + t + ". Not a filepicker url or FPFile object.");
                    o = t.url
                }
                e.files.remove(o, i, r, a)
            },
            g = function(t, i, r, a, o, s) {
                if (n(), !t) throw new e.FilepickerException("No fpfile given - nothing to convert!");
                "function" == typeof r && (s = o, o = a, a = r, r = {}), options = i ? e.util.clone(i) : {}, r = r || {}, a = a || function() {}, o = o || e.errors.handleError, s = s || function() {}, r.location && (options.storeLocation = r.location), r.path && (options.storePath = r.path), r.container && (options.storeContainer = r.container), options.storeAccess = r.access || "private";
                var l;
                if (e.util.isFPUrl(t)) l = t;
                else {
                    if (!t.url) throw new e.FilepickerException("Invalid file to convert: " + t + ". Not a filepicker url or FPFile object.");
                    if (l = t.url, !e.mimetypes.matchesMimetype(t.mimetype, "image/*")) return void o(new e.errors.FPError(142))
                }
                e.conversions.convert(l, options, a, o, s)
            },
            y = function(t) {
                return e.widgets.constructWidget(t)
            },
            b = function(t, i) {
                return e.dragdrop.makeDropPane(t, i)
            };
        return {
            setKey: t,
            pick: r,
            pickFolder: s,
            pickMultiple: a,
            pickAndStore: o,
            read: l,
            write: c,
            writeUrl: d,
            "export": p,
            exportFile: p,
            store: f,
            storeUrl: h,
            stat: m,
            metadata: m,
            remove: v,
            convert: g,
            constructWidget: y,
            makeDropPane: b,
            FilepickerException: i
        }
    }, !0), filepicker.extend("mimetypes", function() {
        var e = this,
            t = {
                ".stl": "application/sla",
                ".hbs": "text/html",
                ".pdf": "application/pdf",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".jpe": "image/jpeg",
                ".imp": "application/x-impressionist"
            },
            i = ["application/octet-stream", "application/download", "application/force-download", "octet/stream", "application/unknown", "application/x-download", "application/x-msdownload", "application/x-secure-download"],
            n = function(e) {
                if (e.type) {
                    var n = e.type;
                    n = n.toLowerCase();
                    for (var r = !1, a = 0; a < i.length; a++) r = r || n == i[a];
                    if (!r) return e.type
                }
                var o = e.name || e.fileName,
                    s = o.match(/\.\w*$/);
                return s ? t[s[0].toLowerCase()] || "" : e.type ? e.type : ""
            },
            r = function(t, n) {
                if (!t) return "*/*" == n;
                t = e.util.trim(t).toLowerCase(), n = e.util.trim(n).toLowerCase();
                for (var r = 0; r < i.length; r++)
                    if (t == i[r]) return !0;
                return test_parts = t.split("/"), against_parts = n.split("/"), "*" == against_parts[0] ? !0 : against_parts[0] != test_parts[0] ? !1 : "*" == against_parts[1] ? !0 : against_parts[1] == test_parts[1]
            };
        return {
            getMimetype: n,
            matchesMimetype: r
        }
    }), filepicker.extend("modal", function() {
        var e = this,
            t = "filepicker_shade",
            i = "filepicker_dialog_container",
            n = function(t, i) {
                var n = r(i),
                    s = a(),
                    l = o(i),
                    u = document.createElement("iframe");
                u.name = e.window.WINDOW_NAME, u.id = e.window.WINDOW_NAME;
                var c = e.window.getSize(),
                    d = Math.min(c[1] - 40, 500);
                return u.style.width = "100%", u.style.height = d - 32 + "px", u.style.border = "none", u.style.position = "relative", u.setAttribute("border", 0), u.setAttribute("frameborder", 0), u.setAttribute("frameBorder", 0), u.setAttribute("marginwidth", 0), u.setAttribute("marginheight", 0), u.src = t, document.body.appendChild(n), s.appendChild(l), s.appendChild(u), document.body.appendChild(s), u
            },
            r = function(e) {
                var i = document.createElement("div");
                return i.id = t, i.style.position = "fixed", i.style.top = 0, i.style.bottom = 0, i.style.right = 0, i.style.left = 0, i.style.backgroundColor = "#000000", i.style.opacity = "0.5", i.style.filter = "alpha(opacity=50)", i.style.zIndex = 1e4, i.onclick = s(e), i
            },
            a = function() {
                var t = document.createElement("div");
                t.id = i, t.style.position = "fixed", t.style.padding = "10px", t.style.background = '#ffffff url("https://www.filepicker.io/static/img/spinner.gif") no-repeat 50% 50%', t.style.top = "10px", t.style.bottom = "auto", t.style.right = "auto";
                var n = e.window.getSize(),
                    r = Math.min(n[1] - 40, 500),
                    a = Math.max(Math.min(n[0] - 40, 800), 620),
                    o = (n[0] - a - 40) / 2;
                return t.style.left = o + "px", t.style.height = r + "px", t.style.width = a + "px", t.style.overflow = "hidden", t.style.webkitOverflowScrolling = "touch", t.style.border = "1px solid #999", t.style.webkitBorderRadius = "3px", t.style.borderRadius = "3px", t.style.margin = "0", t.style.webkitBoxShadow = "0 3px 7px rgba(0, 0, 0, 0.3)", t.style.boxShadow = "0 3px 7px rgba(0, 0, 0, 0.3)", t.style.zIndex = 10001, t.style.boxSizing = "content-box", t.style.webkitBoxSizing = "content-box", t.style.mozBoxSizing = "content-box", t
            },
            o = function(e) {
                var t = document.createElement("a");
                return t.appendChild(document.createTextNode("×")), t.onclick = s(e), t.style.cssFloat = "right", t.style.styleFloat = "right", t.style.cursor = "default", t.style.padding = "0 5px 0 0px", t.style.fontSize = "1.5em", t.style.color = "#555555", t.style.textDecoration = "none", t
            },
            s = function(n, r) {
                return r = !!r,
                    function() {
                        if (!e.uploading || r || window.confirm("You are currently uploading. If you choose 'OK', the window will close and your upload will not finish. Do you want to stop uploading and close the window?")) {
                            e.uploading = !1;
                            var a = document.getElementById(t);
                            a && document.body.removeChild(a);
                            var o = document.getElementById(i);
                            o && document.body.removeChild(o);
                            try {
                                delete window.frames[e.window.WINDOW_NAME]
                            } catch (s) {}
                            n && n()
                        }
                    }
            },
            l = s(function() {});
        return {
            generate: n,
            close: l
        }
    }), filepicker.extend("picker", function() {
        var e = this,
            t = function(t) {
                var i = function(i, n, r) {
                    t[n] ? e.util.isArray(t[n]) || (t[n] = [t[n]]) : t[i] ? t[n] = [t[i]] : r && (t[n] = r)
                };
                if (i("service", "services"), i("mimetype", "mimetypes"), i("extension", "extensions"), t.services)
                    for (var n = 0; n < t.services.length; n++) {
                        var r = ("" + t.services[n]).replace(" ", "");
                        void 0 !== e.services[r] && (r = e.services[r]), t.services[n] = r
                    }
                if (t.mimetypes && t.extensions) throw e.FilepickerException("Error: Cannot pass in both mimetype and extension parameters to the pick function");
                t.mimetypes || t.extensions || (t.mimetypes = ["*/*"]), t.openTo && (t.openTo = e.services[t.openTo] || t.openTo), e.util.setDefault(t, "container", "modal")
            },
            i = function(t, i) {
                var n = function(n) {
                    if ("filepickerUrl" === n.type) {
                        if (e.uploading = !1, n.error) e.util.console.error(n.error), i(e.errors.FPError(102));
                        else {
                            var r = {};
                            r.url = n.payload.url, r.filename = n.payload.data.filename, r.mimetype = n.payload.data.type, r.size = n.payload.data.size, n.payload.data.key && (r.key = n.payload.data.key), n.payload.data.container && (r.container = n.payload.data.container), n.payload.data.path && (r.path = n.payload.data.path), r.isWriteable = !0, t(r)
                        }
                        e.modal.close()
                    }
                };
                return n
            },
            n = function(t, i) {
                var n = function(n) {
                    "filepickerUrl" === n.type && (e.uploading = !1, n.error ? (e.util.console.error(n.error), i(e.errors.FPError(102))) : (n.payload.data.url = n.payload.url, t(n.payload.data)), e.modal.close())
                };
                return n
            },
            r = function(t) {
                t = t || function() {};
                var i = function(i) {
                    "uploading" === i.type && (e.uploading = !!i.payload, t(e.uploading))
                };
                return i
            },
            a = function(e) {
                var t = {},
                    i = e.url;
                i.url && (i = i.url), t.url = i;
                var n = e.url.data || e.data;
                return t.filename = n.filename, t.mimetype = n.type, t.size = n.size, n.key && (t.key = n.key), n.container && (t.container = n.container), n.path && (t.path = n.path), t.isWriteable = !0, t
            },
            o = function(t, i, n) {
                var r = function(r) {
                    if ("filepickerProgress" == r.type) return void(n && (fpfile = a(r.payload), n(fpfile)));
                    if ("filepickerUrl" === r.type) {
                        if (e.uploading = !1, r.error) e.util.console.error(r.error), i(e.errors.FPError(102));
                        else {
                            var o = [];
                            e.util.isArray(r.payload) || (r.payload = [r.payload]);
                            for (var s = 0; s < r.payload.length; s++) fpfile = a(r.payload[s]), o.push(fpfile);
                            t(o)
                        }
                        e.modal.close()
                    }
                };
                return r
            },
            s = function(a, l, u, c, d, p) {
                if (t(a), a.debug) return void setTimeout(function() {
                    l({
                        url: "https://www.filepicker.io/api/file/-nBq2onTSemLBxlcBWn1",
                        filename: "test.png",
                        mimetype: "image/png",
                        size: 58979
                    })
                }, 1);
                if (void 0 === e.cookies.THIRD_PARTY_COOKIES) {
                    var f = !1;
                    return void e.cookies.checkThirdParty(function() {
                        f || (s(a, l, u, !!c, d, p), f = !0)
                    })
                }
                var h = e.util.getId(),
                    m = !1,
                    v = function(e) {
                        m = !0, l(e)
                    },
                    g = function(e) {
                        m = !0, u(e)
                    },
                    y = function() {
                        m || (m = !0, u(e.errors.FPError(101)))
                    };
                "modal" == a.container && (a.mobile || e.window.shouldForce()) && (a.container = "window");
                var b, w;
                c ? (b = e.urls.constructPickUrl(a, h, !0), w = o(v, g, p)) : d ? (b = e.urls.constructPickFolderUrl(a, h), w = n(v, g)) : (b = e.urls.constructPickUrl(a, h, !1), w = i(v, g)), e.window.open(a.container, b, y), e.handlers.attach(h, w);
                var x = h + "-upload";
                e.handlers.attach(x, r(function() {
                    e.handlers.detach(x)
                }))
            };
        return {
            createPicker: s
        }
    }), filepicker.extend("services", function() {
        return {
            COMPUTER: 1,
            DROPBOX: 2,
            FACEBOOK: 3,
            GITHUB: 4,
            GMAIL: 5,
            IMAGE_SEARCH: 6,
            URL: 7,
            WEBCAM: 8,
            GOOGLE_DRIVE: 9,
            SEND_EMAIL: 10,
            INSTAGRAM: 11,
            FLICKR: 12,
            VIDEO: 13,
            EVERNOTE: 14,
            PICASA: 15,
            WEBDAV: 16,
            FTP: 17,
            ALFRESCO: 18,
            BOX: 19,
            SKYDRIVE: 20
        }
    }, !0), filepicker.extend("util", function() {
        var e = function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            t = /^(http|https)\:.*\/\//i,
            i = function(e) {
                return !!e.match(t)
            },
            n = function(e) {
                e && "/" != e.charAt(0) || (e = window.location.protocol + "//" + window.location.host + e);
                var t = document.createElement("a");
                t.href = e;
                var i = -1 == t.hostname.indexOf(":") ? t.hostname : t.host,
                    n = {
                        source: e,
                        protocol: t.protocol.replace(":", ""),
                        host: i,
                        port: t.port,
                        query: t.search,
                        params: function() {
                            for (var e, i = {}, n = t.search.replace(/^\?/, "").split("&"), r = n.length, a = 0; r > a; a++) n[a] && (e = n[a].split("="), i[e[0]] = e[1]);
                            return i
                        }(),
                        file: (t.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
                        hash: t.hash.replace("#", ""),
                        path: t.pathname.replace(/^([^\/])/, "/$1"),
                        relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
                        segments: t.pathname.replace(/^\//, "").split("/")
                    };
                return n.origin = n.protocol + "://" + n.host + (n.port ? ":" + n.port : ""), n
            },
            r = function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            };
        return {
            trim: e,
            parseUrl: n,
            isUrl: i,
            endsWith: r
        }
    }), filepicker.extend("urls", function() {
        var e = this,
            t = "https://www.filepicker.io";
        window.filepicker.hostname && (t = window.filepicker.hostname);
        var i = t.replace("www", "dialog"),
            n = i + "/dialog/open/",
            r = i + "/dialog/save/",
            a = i + "/dialog/folder/",
            o = t + "/api/store/",
            s = function(t, i, r) {
                return n + "?key=" + e.apikey + "&id=" + i + "&referrer=" + window.location.hostname + "&iframe=" + ("window" != t.container) + "&version=" + e.API_VERSION + (t.services ? "&s=" + t.services.join(",") : "") + (r ? "&multi=" + !!r : "") + (void 0 !== t.mimetypes ? "&m=" + t.mimetypes.join(",") : "") + (void 0 !== t.extensions ? "&ext=" + t.extensions.join(",") : "") + (void 0 !== t.openTo ? "&loc=" + t.openTo : "") + (t.maxSize ? "&maxSize=" + t.maxSize : "") + (t.maxFiles ? "&maxFiles=" + t.maxFiles : "") + (t.signature ? "&signature=" + t.signature : "") + (t.policy ? "&policy=" + t.policy : "") + (void 0 !== t.mobile ? "&mobile=" + t.mobile : "") + (void 0 !== t.folders ? "&folders=" + t.folders : "") + (t.storeLocation ? "&storeLocation=" + t.storeLocation : "") + (t.storePath ? "&storePath=" + t.storePath : "") + (t.storeContainer ? "&storeContainer=" + t.storeContainer : "") + (t.storeAccess ? "&storeAccess=" + t.storeAccess : "")
            },
            l = function(t, i) {
                return a + "?key=" + e.apikey + "&id=" + i + "&referrer=" + window.location.hostname + "&iframe=" + ("window" != t.container) + "&version=" + e.API_VERSION + (t.services ? "&s=" + t.services.join(",") : "") + (void 0 !== t.openTo ? "&loc=" + t.openTo : "") + (t.signature ? "&signature=" + t.signature : "") + (t.policy ? "&policy=" + t.policy : "") + (void 0 !== t.mobile ? "&mobile=" + t.mobile : "")
            },
            u = function(t, i, n) {
                return (t.indexOf("&") >= 0 || t.indexOf("?") >= 0) && (t = encodeURIComponent(t)), r + "?url=" + t + "&key=" + e.apikey + "&id=" + n + "&referrer=" + window.location.hostname + "&iframe=" + ("window" != i.container) + "&version=" + e.API_VERSION + (i.services ? "&s=" + i.services.join(",") : "") + (void 0 !== i.openTo ? "&loc=" + i.openTo : "") + (void 0 !== i.mimetype ? "&m=" + i.mimetype : "") + (void 0 !== i.extension ? "&ext=" + i.extension : "") + (void 0 !== i.mobile ? "&mobile=" + i.mobile : "") + (void 0 !== i.suggestedFilename ? "&defaultSaveasName=" + i.suggestedFilename : "") + (i.signature ? "&signature=" + i.signature : "") + (i.policy ? "&policy=" + i.policy : "")
            },
            c = function(t) {
                return o + t.location + "?key=" + e.apikey + (t.base64decode ? "&base64decode=true" : "") + (t.mimetype ? "&mimetype=" + t.mimetype : "") + (t.filename ? "&filename=" + encodeURIComponent(t.filename) : "") + (t.path ? "&path=" + t.path : "") + (t.container ? "&container=" + t.container : "") + (t.access ? "&access=" + t.access : "") + (t.signature ? "&signature=" + t.signature : "") + (t.policy ? "&policy=" + t.policy : "")
            },
            d = function(e, t) {
                return e + "?nonce=fp" + (t.base64decode ? "&base64decode=true" : "") + (t.mimetype ? "&mimetype=" + t.mimetype : "") + (t.signature ? "&signature=" + t.signature : "") + (t.policy ? "&policy=" + t.policy : "")
            },
            p = function() {
                var t = e.util.parseUrl(window.location.href);
                return t.origin + "/404"
            };
        return {
            BASE: t,
            DIALOG_BASE: i,
            API_COMM: t + "/dialog/comm_iframe/",
            COMM: i + "/dialog/comm_iframe/",
            FP_COMM_FALLBACK: i + "/dialog/comm_hash_iframe/",
            STORE: o,
            PICK: n,
            EXPORT: r,
            constructPickUrl: s,
            constructPickFolderUrl: l,
            constructExportUrl: u,
            constructWriteUrl: d,
            constructStoreUrl: c,
            constructHostCommFallback: p
        }
    }), filepicker.extend("util", function() {
        var e = function(e) {
                return e && "[object Array]" === Object.prototype.toString.call(e)
            },
            t = function(e) {
                return e && "[object File]" === Object.prototype.toString.call(e)
            },
            i = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            n = function(e) {
                return i(e) && "INPUT" == e.tagName && "file" == e.type
            },
            r = function(i) {
                return null === i ? "null" : e(i) ? "array" : t(i) ? "file" : typeof i
            },
            a = function() {
                var e = new Date;
                return e.getTime().toString()
            },
            o = function(e, t, i) {
                void 0 === e[t] && (e[t] = i)
            },
            s = function(e) {
                if (window.jQuery) window.jQuery(function() {
                    e()
                });
                else {
                    var t = "load";
                    if (window.addEventListener) window.addEventListener(t, e, !1);
                    else if (window.attachEvent) window.attachEvent("on" + t, e);
                    else if (window.onload) {
                        var i = window.onload;
                        window.onload = function() {
                            i(), e()
                        }
                    } else window.onload = e
                }
            },
            l = function(e) {
                return "string" == typeof e && e.match("www.filepicker.io/api/file/")
            },
            u = function(e) {
                return function() {
                    if (window.console && "function" == typeof window.console[e]) try {
                        window.console[e].apply(window.console, arguments);
                    } catch (t) {
                        alert(Array.prototype.join.call(arguments, ","))
                    }
                }
            },
            c = {};
        c.log = u("log"), c.error = u("error");
        var d = function(e) {
                var t = {};
                for (key in e) t[key] = e[key];
                return t
            },
            p = function(e) {
                var t = {};
                return t.url = e.url, t.filename = e.filename || e.name, t.mimetype = e.mimetype || e.type, t.size = e.size, t.key = e.key || e.s3_key, t.isWriteable = !(!e.isWriteable && !e.writeable), t
            };
        return {
            isArray: e,
            isFile: t,
            isElement: i,
            isFileInputElement: n,
            getId: a,
            setDefault: o,
            typeOf: r,
            addOnLoad: s,
            isFPUrl: l,
            console: c,
            clone: d,
            standardizeFPFile: p
        }
    }), filepicker.extend("widgets", function() {
        var e = this,
            t = function(e, t, i, n) {
                var r = n.getAttribute(i);
                r && (t[e] = r)
            },
            i = function(e, t) {
                var i;
                document.createEvent ? (i = document.createEvent("Event"), i.initEvent("change", !0, !1), i.fpfile = t ? t[0] : void 0, i.fpfiles = t, e.dispatchEvent(i)) : document.createEventObject ? (i = document.createEventObject("Event"), i.eventPhase = 2, i.currentTarget = i.srcElement = i.target = e, i.fpfile = t ? t[0] : void 0, i.fpfiles = t, e.fireEvent("onchange", i)) : e.onchange && e.onchange(t)
            },
            n = function(n) {
                var r = document.createElement("button");
                r.setAttribute("type", "button"), r.innerHTML = n.getAttribute("data-fp-button-text") || n.getAttribute("data-fp-text") || "Pick File", r.className = n.getAttribute("data-fp-button-class") || n.getAttribute("data-fp-class") || n.className, n.style.display = "none";
                var a = {};
                t("container", a, "data-fp-option-container", n), t("maxSize", a, "data-fp-option-maxsize", n), t("mimetype", a, "data-fp-mimetype", n), t("mimetypes", a, "data-fp-mimetypes", n), t("extension", a, "data-fp-extension", n), t("extensions", a, "data-fp-extensions", n), t("container", a, "data-fp-container", n), t("maxSize", a, "data-fp-maxSize", n), t("maxFiles", a, "data-fp-maxFiles", n), t("openTo", a, "data-fp-openTo", n), t("debug", a, "data-fp-debug", n), t("signature", a, "data-fp-signature", n), t("policy", a, "data-fp-policy", n), t("storeLocation", a, "data-fp-store-location", n), t("storePath", a, "data-fp-store-path", n), t("storeContainer", a, "data-fp-store-container", n), t("storeAccess", a, "data-fp-store-access", n);
                var o = n.getAttribute("data-fp-services");
                if (o || (o = n.getAttribute("data-fp-option-services")), o) {
                    o = o.split(",");
                    for (var s = 0; s < o.length; s++) o[s] = e.services[o[s].replace(" ", "")];
                    a.services = o
                }
                var l = n.getAttribute("data-fp-service");
                l && (a.service = e.services[l.replace(" ", "")]), a.mimetypes && (a.mimetypes = a.mimetypes.split(",")), a.extensions && (a.extensions = a.extensions.split(","));
                var u = n.getAttribute("data-fp-apikey");
                u && e.setKey(u), a.folders = "true" == (n.getAttribute("data-fp-folders") || "false");
                var c = "true" == (n.getAttribute("data-fp-multiple") || n.getAttribute("data-fp-option-multiple") || "false");
                c ? r.onclick = function() {
                    return r.blur(), e.pickMultiple(a, function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(e[r].url);
                        n.value = t.join(), i(n, e)
                    }), !1
                } : r.onclick = function() {
                    return r.blur(), e.pick(a, function(e) {
                        n.value = e.url, i(n, [e])
                    }), !1
                }, n.parentNode.insertBefore(r, n.nextSibling)
            },
            r = function(n) {
                var r = document.createElement("div");
                r.className = n.getAttribute("data-fp-class") || n.className, r.style.padding = "1px", n.style.display = "none", n.parentNode.insertBefore(r, n.nextSibling);
                var l = document.createElement("button");
                l.setAttribute("type", "button"), l.innerHTML = n.getAttribute("data-fp-button-text") || "Pick File", l.className = n.getAttribute("data-fp-button-class") || "", r.appendChild(l);
                var u = document.createElement("div");
                o(u), u.innerHTML = n.getAttribute("data-fp-drag-text") || "Or drop files here", u.className = n.getAttribute("data-fp-drag-class") || "", r.appendChild(u);
                var c = {};
                t("container", c, "data-fp-option-container", n), t("maxSize", c, "data-fp-option-maxsize", n), t("mimetype", c, "data-fp-mimetype", n), t("mimetypes", c, "data-fp-mimetypes", n), t("extension", c, "data-fp-extension", n), t("extensions", c, "data-fp-extensions", n), t("container", c, "data-fp-container", n), t("maxSize", c, "data-fp-maxSize", n), t("openTo", c, "data-fp-openTo", n), t("debug", c, "data-fp-debug", n), t("signature", c, "data-fp-signature", n), t("policy", c, "data-fp-policy", n), t("storeLocation", c, "data-fp-store-location", n), t("storePath", c, "data-fp-store-path", n), t("storeContainer", c, "data-fp-store-container", n), t("storeAccess", c, "data-fp-store-access", n);
                var d = n.getAttribute("data-fp-services");
                if (d || (d = n.getAttribute("data-fp-option-services")), d) {
                    d = d.split(",");
                    for (var p = 0; p < d.length; p++) d[p] = e.services[d[p].replace(" ", "")];
                    c.services = d
                }
                var f = n.getAttribute("data-fp-service");
                f && (c.service = e.services[f.replace(" ", "")]), c.mimetypes && (c.mimetypes = c.mimetypes.split(",")), c.extensions && (c.extensions = c.extensions.split(","));
                var h = n.getAttribute("data-fp-apikey");
                h && e.setKey(h);
                var m = "true" == (n.getAttribute("data-fp-multiple") || n.getAttribute("data-fp-option-multiple") || "false");
                e.dragdrop.enabled() ? s(u, m, c, n) : u.innerHTML = "&nbsp;", m ? u.onclick = l.onclick = function() {
                    return l.blur(), e.pickMultiple(c, function(e) {
                        for (var t = [], r = [], o = 0; o < e.length; o++) t.push(e[o].url), r.push(e[o].filename);
                        n.value = t.join(), a(n, u, r.join(", ")), i(n, e)
                    }), !1
                } : u.onclick = l.onclick = function() {
                    return l.blur(), e.pick(c, function(e) {
                        n.value = e.url, a(n, u, e.filename), i(n, [e])
                    }), !1
                }
            },
            a = function(t, n, r) {
                n.innerHTML = r, n.style.padding = "2px 4px", n.style.cursor = "default", n.style.width = "";
                var a = document.createElement("span");
                a.innerHTML = "X", a.style.borderRadius = "8px", a.style.fontSize = "14px", a.style.cssFloat = "right", a.style.padding = "0 3px", a.style.color = "#600", a.style.cursor = "pointer";
                var s = function(r) {
                    return r || (r = window.event), r.cancelBubble = !0, r.stopPropagation && r.stopPropagation(), o(n), e.dragdrop.enabled ? n.innerHTML = t.getAttribute("data-fp-drag-text") || "Or drop files here" : n.innerHTML = "&nbsp;", t.value = "", i(t), !1
                };
                a.addEventListener ? a.addEventListener("click", s, !1) : a.attachEvent && a.attachEvent("onclick", s), n.appendChild(a)
            },
            o = function(e) {
                e.style.border = "1px dashed #AAA", e.style.display = "inline-block", e.style.margin = "0 0 0 4px", e.style.borderRadius = "3px", e.style.backgroundColor = "#F3F3F3", e.style.color = "#333", e.style.fontSize = "14px", e.style.lineHeight = "22px", e.style.padding = "2px 4px", e.style.verticalAlign = "middle", e.style.cursor = "pointer", e.style.overflow = "hidden"
            },
            s = function(t, n, r, o) {
                var s, u = t.innerHTML;
                e.dragdrop.makeDropPane(t, {
                    multiple: n,
                    maxSize: r.maxSize,
                    mimetypes: r.mimetypes,
                    mimetype: r.mimetype,
                    extensions: r.extensions,
                    extension: r.extension,
                    location: r.storeLocation,
                    path: r.storePath,
                    container: r.storeContainer,
                    access: r.storeAccess,
                    policy: r.policy,
                    signature: r.signature,
                    dragEnter: function() {
                        t.innerHTML = "Drop to upload", t.style.backgroundColor = "#E0E0E0", t.style.border = "1px solid #000"
                    },
                    dragLeave: function() {
                        t.innerHTML = u, t.style.backgroundColor = "#F3F3F3", t.style.border = "1px dashed #AAA"
                    },
                    onError: function(e, i) {
                        "TooManyFiles" == e ? t.innerHTML = i : "WrongType" == e ? t.innerHTML = i : "NoFilesFound" == e ? t.innerHTML = i : "UploadError" == e && (t.innerHTML = "Oops! Had trouble uploading.")
                    },
                    onStart: function(e) {
                        s = l(t)
                    },
                    onProgress: function(e) {
                        s && (s.style.width = e + "%")
                    },
                    onSuccess: function(e) {
                        for (var n = [], r = [], s = 0; s < e.length; s++) n.push(e[s].url), r.push(e[s].filename);
                        o.value = n.join(), a(o, t, r.join(", ")), i(o, e)
                    }
                })
            },
            l = function(e) {
                var t = document.createElement("div"),
                    i = e.offsetHeight - 2;
                return t.style.height = i + "px", t.style.backgroundColor = "#0E90D2", t.style.width = "2%", t.style.borderRadius = "3px", e.style.width = e.offsetWidth + "px", e.style.padding = "0", e.style.border = "1px solid #AAA", e.style.backgroundColor = "#F3F3F3", e.style.boxShadow = "inset 0 1px 2px rgba(0, 0, 0, 0.1)", e.innerHTML = "", e.appendChild(t), t
            },
            u = function(i) {
                i.onclick = function() {
                    var n = i.getAttribute("data-fp-url");
                    if (!n) return !0;
                    var r = {};
                    t("container", r, "data-fp-option-container", i), t("suggestedFilename", r, "data-fp-option-defaultSaveasName", i), t("container", r, "data-fp-container", i), t("suggestedFilename", r, "data-fp-suggestedFilename", i), t("mimetype", r, "data-fp-mimetype", i), t("extension", r, "data-fp-extension", i);
                    var a = i.getAttribute("data-fp-services");
                    if (a || (a = i.getAttribute("data-fp-option-services")), a) {
                        a = a.split(",");
                        for (var o = 0; o < a.length; o++) a[o] = e.services[a[o].replace(" ", "")];
                        r.services = a
                    }
                    var s = i.getAttribute("data-fp-service");
                    return s && (r.service = e.services[s.replace(" ", "")]), apikey = i.getAttribute("data-fp-apikey"), apikey && e.setKey(apikey), e.exportFile(n, r), !1
                }
            },
            c = function() {
                if (document.querySelectorAll) {
                    var e, t = document.querySelectorAll('input[type="filepicker"]');
                    for (e = 0; e < t.length; e++) n(t[e]);
                    var i = document.querySelectorAll('input[type="filepicker-dragdrop"]');
                    for (e = 0; e < i.length; e++) r(i[e]);
                    var a = [],
                        o = document.querySelectorAll("button[data-fp-url]");
                    for (e = 0; e < o.length; e++) a.push(o[e]);
                    for (o = document.querySelectorAll("a[data-fp-url]"), e = 0; e < o.length; e++) a.push(o[e]);
                    for (o = document.querySelectorAll('input[type="button"][data-fp-url]'), e = 0; e < o.length; e++) a.push(o[e]);
                    for (e = 0; e < a.length; e++) u(a[e])
                }
            },
            d = function(e) {
                e.jquery && (e = e[0]);
                var t = e.getAttribute("type");
                "filepicker" == t ? n(e) : "filepicker-dragdrop" == t ? r(e) : u(e)
            };
        return {
            constructPickWidget: n,
            constructDragWidget: r,
            constructExportWidget: u,
            buildWidgets: c,
            constructWidget: d
        }
    }), filepicker.extend("window", function() {
        var e = this,
            t = "filepicker_dialog",
            i = "left=100,top=100,height=600,width=800,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=yes,dependent=yes,dialog=yes",
            n = 1e3,
            r = function() {
                return document.body && document.body.offsetWidth && (winW = document.body.offsetWidth, winH = document.body.offsetHeight), "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth && (winW = document.documentElement.offsetWidth, winH = document.documentElement.offsetHeight), window.innerWidth && window.innerHeight && (winW = window.innerWidth, winH = window.innerHeight), [winW, winH]
            },
            a = function() {
                var t = r()[0] < 768,
                    i = e.cookies.THIRD_PARTY_COOKIES === !1;
                return e.browser.isIOS() || e.browser.isAndroid() || t || i
            },
            o = function(r, o, s) {
                if (s = s || function() {}, r || (r = "modal"), "modal" == r && a() && (r = "window"), "window" == r) var l = t + e.util.getId(),
                    u = window.open(o, l, i),
                    c = window.setInterval(function() {
                        (!u || u.closed) && (window.clearInterval(c), s())
                    }, n);
                else if ("modal" == r) e.modal.generate(o, s);
                else {
                    var d = document.getElementById(r);
                    if (!d) throw new e.FilepickerException("Container '" + r + "' not found. This should either be set to 'window','modal', or the ID of an iframe that is currently in the document.");
                    d.src = o
                }
            };
        return {
            open: o,
            WINDOW_NAME: t,
            getSize: r,
            shouldForce: a
        }
    }),
    function() {
        filepicker.internal(function() {
            var e = this;
            e.util.addOnLoad(e.cookies.checkThirdParty), e.util.addOnLoad(e.widgets.buildWidgets)
        }), delete filepicker.internal, delete filepicker.extend;
        var e, t = filepicker._queue || [],
            i = t.length;
        if (i)
            for (var n = 0; i > n; n++) e = t[n], filepicker[e[0]].apply(filepicker, e[1]);
        filepicker._queue && delete filepicker._queue
    }();

	// simple slider js 	
	!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,i){function s(e){return Math.floor(e)}function n(){b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?i.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},b.params.autoplay)}function o(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var i;return r.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}if(0!==r.length)return r[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),b.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents(".swiper-slide").length>0&&0===b.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,s=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=r.left&&p[0]<=r.left+i&&p[1]>=r.top&&p[1]<=r.top+s&&(t=!0)}if(!t)return}b.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=b.mousewheel.event,t=0,r=b.rtl?-1:1;if("mousewheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*r}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*r:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*r}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*r:-e.deltaY;if(0!==t){if(b.params.mousewheelInvert&&(t=-t),b.params.freeMode){var i=b.getWrapperTranslate()+t*b.params.mousewheelSensitivity,s=b.isBeginning,n=b.isEnd;if(i>=b.minTranslate()&&(i=b.minTranslate()),i<=b.maxTranslate()&&(i=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(i),b.updateProgress(),b.updateActiveIndex(),(!s&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),0===i||i===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(0>t)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext();else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev();b.mousewheel.lastScrollTime=(new window.Date).getTime()}return b.params.autoplay&&b.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e,t){e=a(e);var r,i,s,n=b.rtl?-1:1;r=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),s=e.attr("data-swiper-parallax-y"),i||s?(i=i||"0",s=s||"0"):b.isHorizontal()?(i=r,s="0"):(s=r,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",e.transform("translate3d("+i+", "+s+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var m={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=i&&i.virtualTranslate;i=i||{};var f={};for(var g in i)if("object"!=typeof i[g]||null===i[g]||(i[g].nodeType||i[g]===window||i[g]===document||"undefined"!=typeof r&&i[g]instanceof r||"undefined"!=typeof jQuery&&i[g]instanceof jQuery))f[g]=i[g];else{f[g]={};for(var v in i[g])f[g][v]=i[g][v]}for(var w in m)if("undefined"==typeof i[w])i[w]=m[w];else if("object"==typeof i[w])for(var y in m[w])"undefined"==typeof i[w][y]&&(i[w][y]=m[w][y]);var b=this;if(b.params=i,b.originalParams=f,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)e=t[r],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams,t=b.params.loop&&a.slidesPerView!==b.params.slidesPerView;for(var r in a)b.params[r]=a[r];b.currentBreakpoint=e,t&&b.destroyLoop&&b.reLoop(!0)}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1){var x=[];return b.container.each(function(){x.push(new t(this,i))}),x}b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push("swiper-container-"+b.params.direction),b.params.freeMode&&b.classNames.push("swiper-container-free-mode"),b.support.flexbox||(b.classNames.push("swiper-container-no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push("swiper-container-autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push("swiper-container-3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push("swiper-container-"+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),("fade"===b.params.effect||"flip"===b.params.effect)&&(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof h&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),b.params.uniqueNavElements&&"string"==typeof b.params.pagination&&b.paginationContainer.length>1&&1===b.container.find(b.params.pagination).length&&(b.paginationContainer=b.container.find(b.params.pagination)),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass("swiper-pagination-clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass("swiper-pagination-"+b.params.paginationType)),(b.params.nextButton||b.params.prevButton)&&(b.params.nextButton&&(b.nextButton=a(b.params.nextButton),b.params.uniqueNavElements&&"string"==typeof b.params.nextButton&&b.nextButton.length>1&&1===b.container.find(b.params.nextButton).length&&(b.nextButton=b.container.find(b.params.nextButton))),b.params.prevButton&&(b.prevButton=a(b.params.prevButton),b.params.uniqueNavElements&&"string"==typeof b.params.prevButton&&b.prevButton.length>1&&1===b.container.find(b.params.prevButton).length&&(b.prevButton=b.container.find(b.params.prevButton)))),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push("swiper-container-rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push("swiper-container-multirow"),b.device.android&&b.classNames.push("swiper-container-android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0},b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab"),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,r,i){function s(){i&&i()}var n;e.complete&&r?s():a?(n=new window.Image,n.onload=s,n.onerror=s,t&&(n.srcset=t),a&&(n.src=a)):s()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"!=typeof b.autoplayTimeoutId?!1:b.params.autoplay?b.autoplaying?!1:(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n()):!1},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e=b.slides.eq(b.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&b.wrapper.css("height",a+"px")}},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,r=0,i=0;if("undefined"!=typeof b.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,h;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css({"margin-top":0!==h&&b.params.spaceBetween&&b.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=s(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=s(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+r/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,r=o,i++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var f;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),(!b.support.flexbox||b.params.setWrapperSize)&&(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&f.push(b.snapGrid[e]);b.snapGrid=f}if(!b.params.centeredSlides){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&f.push(b.snapGrid[e]);b.snapGrid=f,Math.floor(b.virtualSize-b.size)-Math.floor(b.snapGrid[b.snapGrid.length-1])>1&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()}},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var r=b.slides[t],i=(a-r.swiperSlideOffset)/(r.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var s=-(a-r.swiperSlideOffset),n=s+b.slidesSizesGrid[t],o=s>=0&&s<b.size||n>0&&n<=b.size||0>=s&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}r.progress=b.rtl?-i:i}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,r=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!r&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,r=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]&&(e=a+1):r>=b.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses())},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass);var e=b.slides.eq(b.activeIndex);e.addClass(b.params.slideActiveClass);var t=e.next("."+b.params.slideClass).addClass(b.params.slideNextClass);b.params.loop&&0===t.length&&b.slides.eq(0).addClass(b.params.slideNextClass);var r=e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass);if(b.params.loop&&0===r.length&&b.slides.eq(-1).addClass(b.params.slidePrevClass),b.paginationContainer&&b.paginationContainer.length>0){var i,s=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(i=Math.ceil((b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup),i>b.slides.length-1-2*b.loopedSlides&&(i-=b.slides.length-2*b.loopedSlides),i>s-1&&(i-=s),0>i&&"bullets"!==b.params.paginationType&&(i=s+i)):i="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===i&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(i).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(i+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(s)),"progress"===b.params.paginationType){var n=(i+1)/s,o=n,l=1;b.isHorizontal()||(l=n,o=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&(b.paginationContainer.html(b.params.paginationCustomRender(b,i+1,s)),b.emit("onPaginationRendered",b,b.paginationContainer[0]))}b.params.loop||(b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.isBeginning?(b.prevButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.prevButton)):(b.prevButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.prevButton))),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.isEnd?(b.nextButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.nextButton)):(b.nextButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.nextButton))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;a>t;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e)),"custom"!==b.params.paginationType&&b.emit("onPaginationRendered",b,b.paginationContainer[0])}},b.update=function(e){function a(){r=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(r),b.updateActiveIndex(),b.updateClasses()}if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,r;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},b.onResize=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0);var r=!1;if(b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),r=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.lazyLoading&&!r&&b.lazy&&b.lazy.load(),b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t};var T=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?T=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(T=["MSPointerDown","MSPointerMove","MSPointerUp"]),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":T[0],move:b.support.touch||!b.params.simulateTouch?"touchmove":T[1],end:b.support.touch||!b.params.simulateTouch?"touchend":T[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],s=b.support.touch?r:document,n=b.params.nested?!0:!1;b.browser.ie?(r[t](b.touchEvents.start,b.onTouchStart,!1),s[t](b.touchEvents.move,b.onTouchMove,n),s[t](b.touchEvents.end,b.onTouchEnd,!1)):(b.support.touch&&(r[t](b.touchEvents.start,b.onTouchStart,!1),r[t](b.touchEvents.move,b.onTouchMove,n),r[t](b.touchEvents.end,b.onTouchEnd,!1)),!i.simulateTouch||b.device.ios||b.device.android||(r[t]("mousedown",b.onTouchStart,!1),document[t]("mousemove",b.onTouchMove,n),document[t]("mouseup",b.onTouchEnd,!1))),window[t]("resize",b.onResize),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.nextButton[a]("click",b.onClickNext),b.params.a11y&&b.a11y&&b.nextButton[a]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.prevButton[a]("click",b.onClickPrev),b.params.a11y&&b.a11y&&b.prevButton[a]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(b.paginationContainer[a]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&b.paginationContainer[a]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&r[t]("click",b.preventClicks,!0)},b.attachEvents=function(){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),(!b.isEnd||b.params.loop)&&b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),(!b.isBeginning||b.params.loop)&&b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),r=!1;if(t)for(var i=0;i<b.slides.length;i++)b.slides[i]===t&&(r=!0);if(!t||!r)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var s,n=b.clickedIndex;if(b.params.loop){if(b.animating)return;s=a(b.clickedSlide).attr("data-swiper-slide-index"),b.params.centeredSlides?n<b.loopedSlides-b.params.slidesPerView/2||n>b.slides.length-b.loopedSlides+b.params.slidesPerView/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-b.params.slidesPerView?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var S,C,z,M,E,P,k,I,L,B,D="input, select, textarea, button",H=Date.now(),A=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,O;if(b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,O=void 0,b.touches.startX=t,b.touches.startY=r,M=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(I=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(D)&&(i=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),i&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return b.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(b.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(b.params.onlyExternal)return b.allowClick=!1,void(S&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,M=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return C=!0,void(b.allowClick=!1);if(z&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof E){var t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI;E=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle}if(E&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof O&&b.browser.ieTouch&&(b.touches.currentX!==b.touches.startX||b.touches.currentY!==b.touches.startY)&&(O=!0),S){if(E)return void(S=!1);if(O||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),C||(i.loop&&b.fixLoop(),k=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),B=!1,b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grabbing",b.container[0].style.cursor="-moz-grabbin",b.container[0].style.cursor="grabbing")),C=!0;var r=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;r*=b.params.touchRatio,b.rtl&&(r=-r),b.swipeDirection=r>0?"prev":"next",P=r+k;var s=!0;if(r>0&&P>b.minTranslate()?(s=!1,b.params.resistance&&(P=b.minTranslate()-1+Math.pow(-b.minTranslate()+k+r,b.params.resistanceRatio))):0>r&&P<b.maxTranslate()&&(s=!1,b.params.resistance&&(P=b.maxTranslate()+1-Math.pow(b.maxTranslate()-k-r,b.params.resistanceRatio))),
	s&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&k>P&&(P=k),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&P>k&&(P=k),b.params.followFinger){if(b.params.threshold>0){if(!(Math.abs(r)>b.params.threshold||I))return void(P=k);if(!I)return I=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,P=k,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}(b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===A.length&&A.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:M}),A.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(P),b.setWrapperTranslate(P)}}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),z&&b.emit("onTouchEnd",b,e),z=!1,S){b.params.grabCursor&&C&&S&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab");var t=Date.now(),r=t-M;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),300>r&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),b.emit("onClick",b,e))},300)),300>r&&300>t-H&&(L&&clearTimeout(L),b.emit("onDoubleTap",b,e))),H=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!S||!C||!b.swipeDirection||0===b.touches.diff||P===k)return void(S=C=!1);S=C=!1;var i;if(i=b.params.followFinger?b.rtl?b.translate:-b.translate:-P,b.params.freeMode){if(i<-b.minTranslate())return void b.slideTo(b.activeIndex);if(i>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(A.length>1){var s=A.pop(),n=A.pop(),o=s.position-n.position,l=s.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-s.time>300)&&(b.velocity=0)}else b.velocity=0;A.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-h&&(u=b.maxTranslate()-h),c=b.maxTranslate(),m=!0,B=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>h&&(u=b.minTranslate()+h),c=b.minTranslate(),m=!0,B=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var f,g=0;for(g=0;g<b.snapGrid.length;g+=1)if(b.snapGrid[g]>-u){f=g;break}u=Math.abs(b.snapGrid[f]-u)<Math.abs(b.snapGrid[f-1]-u)||"next"===b.swipeDirection?b.snapGrid[f]:b.snapGrid[f-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&B&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||r>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?i>=b.slidesGrid[v]&&i<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):i>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var x=(i-b.slidesGrid[w])/y;if(r>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(x>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(x>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var i=-b.snapGrid[b.snapIndex];b.params.autoplay&&b.autoplaying&&(r||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(i);for(var s=0;s<b.slidesGrid.length;s++)-Math.floor(100*i)>=Math.floor(100*b.slidesGrid[s])&&(e=s);return!b.params.allowSwipeToNext&&i<b.translate&&i<b.minTranslate()?!1:!b.params.allowSwipeToPrev&&i>b.translate&&i>b.maxTranslate()&&(b.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.rtl&&-i===b.translate||!b.rtl&&i===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(i),!1):(b.updateClasses(),b.onTransitionStart(t),0===a?(b.setWrapperTranslate(i),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(i),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var r=0,i=0,n=0;b.isHorizontal()?r=b.rtl?-e:e:i=e,b.params.roundLengths&&(r=s(r),i=s(i)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+r+"px, "+i+"px, "+n+"px)"):b.wrapper.transform("translate("+r+"px, "+i+"px)")),b.translate=b.isHorizontal()?r:i;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,r,i,s;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=i.transform||i.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new window.WebKitCSSMatrix("none"===r?"":r)):(s=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=s.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?s.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?s.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&r&&(r=-r),r||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,r=[],i=[];for(e.each(function(t,s){var n=a(this);t<b.loopedSlides&&i.push(s),t<e.length&&t>=e.length-b.loopedSlides&&r.push(s),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.reLoop=function(e){var a=b.activeIndex-b.loopedSlides;b.destroyLoop(),b.createLoop(),b.updateSlidesSize(),e&&b.slideTo(a+b.loopedSlides,0,!1)},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;b.params.virtualTranslate||(r-=b.translate);var i=0;b.isHorizontal()||(i=r,r=0);var s=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:s}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),r=t[0].progress;b.params.flip.limitRotation&&(r=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,s=-180*r,n=s,o=0,l=-i,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(r))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=0;r<e.length;r++)b.wrapper.trigger(e[r])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var r=0;r<b.slides.length;r++){var i=b.slides.eq(r),s=90*r,n=Math.floor(s/360);b.rtl&&(s=-s,n=Math.floor(-s/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;r%4===0?(l=4*-n*b.size,d=0):(r-1)%4===0?(l=0,d=4*-n*b.size):(r-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(r-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-s)+"deg) rotateY("+(b.isHorizontal()?s:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*r+90*o,b.rtl&&(t=90*-r-90*o)),i.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),f=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),g=b.params.cube.shadowScale,v=b.params.cube.shadowScale/f,w=b.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,r=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,i=b.params.coverflow.depth,s=0,n=b.slides.length;n>s;s++){var o=b.slides.eq(s),l=b.slidesSizesGrid[s],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?r*d:0,c=b.isHorizontal()?0:r*d,m=-i*Math.abs(d),h=b.isHorizontal()?0:b.params.coverflow.stretch*d,f=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+f+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var r=b.slides.eq(e),i=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(i=i.add(r[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var i=e.attr("data-background"),s=e.attr("data-src"),n=e.attr("data-srcset");b.loadImage(e[0],s||i,n,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),s&&(e.attr("src",s),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),b.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(b.params.slideDuplicateClass)){var o=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(o.index(),!1)}else{var l=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(l.index(),!1)}}b.emit("onLazyImageReady",b,r[0],e[0])}),b.emit("onLazyImageLoad",b,r[0],e[0])})}},load:function(){var e;if(b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(b.params.slidesPerView>1)for(e=b.activeIndex;e<b.activeIndex+b.params.slidesPerView;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(b.params.slidesPerView>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var t=b.params.lazyLoadingInPrevNextAmount,r=b.params.slidesPerView,i=Math.min(b.activeIndex+r+Math.max(t,r),b.slides.length),s=Math.max(b.activeIndex-Math.max(r,t),0);for(e=b.activeIndex+b.params.slidesPerView;i>e;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=s;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var n=b.wrapper.children("."+b.params.slideNextClass);n.length>0&&b.lazy.loadImageInSlide(n.index());var o=b.wrapper.children("."+b.params.slidePrevClass);o.length>0&&b.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,i=-b.minTranslate()*a.moveDivider,s=-b.maxTranslate()*a.moveDivider;i>r?r=i:r>s&&(r=s),r=-r/a.moveDivider,b.updateProgress(r),b.setWrapperTranslate(r,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(b.touchEvents.start,e.dragStart),a(t).on(b.touchEvents.move,e.dragMove),a(t).on(b.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(b.touchEvents.start,e.dragStart),a(t).off(b.touchEvents.move,e.dragMove),a(t).off(b.touchEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),b.params.uniqueNavElements&&"string"==typeof b.params.scrollbar&&e.track.length>1&&1===b.container.find(b.params.scrollbar).length&&(e.track=b.container.find(b.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=i(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(r,i){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),s=-b.controller.spline.interpolate(-e)),s&&"container"!==b.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),s=(e-b.minTranslate())*i+a.minTranslate()),b.params.controlInverse&&(s=a.maxTranslate()-s),a.updateProgress(s),a.setWrapperTranslate(s,!1,b),a.updateActiveIndex()}var i,s,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){s&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,s=b.params.control;if(b.isArray(s))for(i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof t&&r(s[i]);else s instanceof t&&a!==s&&r(s)}},b.hashnav={init:function(){if(b.params.hashnav){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=b.slides.length;r>t;t++){var i=b.slides.eq(t),s=i.attr("data-hash");if(s===e&&!i.hasClass(b.params.slideDuplicateClass)){var n=i.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}}},setHash:function(){b.hashnav.initialized&&b.params.hashnav&&(document.location.hash=b.slides.eq(b.activeIndex).attr("data-hash")||"")}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl){try{new window.WheelEvent("wheel"),b.mousewheel.event="wheel"}catch(N){(window.WheelEvent||b.container[0]&&"wheel"in b.container[0])&&(b.mousewheel.event="wheel")}!b.mousewheel.event&&window.WheelEvent,b.mousewheel.event||void 0===document.onmousewheel||(b.mousewheel.event="mousewheel"),b.mousewheel.event||(b.mousewheel.event="DOMMouseScroll")}b.disableMousewheelControl=function(){return b.mousewheel.event?(b.container.off(b.mousewheel.event,d),!0):!1},b.enableMousewheelControl=function(){return b.mousewheel.event?(b.container.on(b.mousewheel.event,d),!0):!1},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);u(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},b._plugins=[];for(var R in b.plugins){var W=b.plugins[R](b,b.params[R]);W&&b._plugins.push(W)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=c(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.a11y.makeFocusable(b.nextButton),b.a11y.addRole(b.nextButton,"button"),b.a11y.addLabel(b.nextButton,b.params.nextSlideMessage)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.a11y.makeFocusable(b.prevButton),b.a11y.addRole(b.prevButton,"button"),b.a11y.addLabel(b.prevButton,b.params.prevSlideMessage)),a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.autoplay&&b.startAutoplay(),b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),
	b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||i||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var s,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)r.push(n.childNodes[i])}else for(s=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<s.length;i++)s[i]&&r.push(s[i])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)r.push(a[i]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var r=this[t];r.dom7ElementDataStorage||(r.dom7ElementDataStorage={}),r.dom7ElementDataStorage[e]=a}return this}if(this[0]){var i=this[0].getAttribute("data-"+e);return i?i:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,i){function s(e){var i=e.target;if(a(i).is(t))r.call(i,e);else for(var s=a(i).parents(),n=0;n<s.length;n++)a(s[n]).is(t)&&r.call(s[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:s}),this[n].addEventListener(l[o],s,i);return this},off:function(e,a,t,r){for(var i=e.split(" "),s=0;s<i.length;s++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(i[s],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[s],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function i(n){t(n),s.off(e,a,i,r)}var s=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),s.on(e,a,i,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(i){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,s=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+s-r,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var r,i;if("string"==typeof t){var s=this[0];if(s===document)return t===document;if(s===window)return t===window;if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.mozMatchesSelector)return s.mozMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(r=a(t),i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,r=i.childNodes.length-1;r>=0;r--)this[t].insertBefore(i.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].querySelectorAll(a),s=0;s<i.length;s++)t.push(i[s]);return new e(t)},children:function(t){for(var r=[],i=0;i<this.length;i++)for(var s=this[i].childNodes,n=0;n<s.length;n++)t?1===s[n].nodeType&&a(s[n]).is(t)&&r.push(s[n]):1===s[n].nodeType&&r.push(s[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)r[r.length]=i[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],s=0;s<i.length;s++)window[i[s]]&&e(window[i[s]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
	//# sourceMappingURL=maps/swiper.min.js.map
	
})(jQuery); 
