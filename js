// disabled enter
onkeydown="return (event.keyCode!=13);"
// /disabled enter

// on change
$('#type_coupon').on('change', function() {
            if(this.value == 0){
                $("#products").addClass('d-none');
                $("#cats").removeClass('d-none');
            }else{
                $("#products").removeClass('d-none');
                $("#cats").addClass('d-none');
            }
        });
// /on change

// translate in js with laravel
var translatePhone = {!! json_encode(__('The number should be 11 digits !')) !!};
alert(translatePhone);
// /translate in js with laravel







// print form data
$("#admin_settings_update").validate({
            rules: {
                maximum_phone_number_length: {
                    required: true,
                    min: function() {
                        if ($("#minimum_phone_number_length").val() !== "") {
                            return Number($("#minimum_phone_number_length").val());
                        }
                    }
                },
                minimum_phone_number_length: {
                    required: true,
                    max: function() {
                        if ($("#maximum_phone_number_length").val() !== "") {
                            return Number($("#maximum_phone_number_length").val());
                        }
                    }
                }
            },
            submitHandler: function(updateform) {
                if ($("#arrive_distance_available").val() === "") {
                    $("#arrive_distance_available").val(0);
                }

                // print form data in console
                var formData = new FormData(updateform);
                for (var pair of formData.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]);
                }
                // updateform.submit();
            }
        });
// /print form data




************************************************ dynamic
$('.rowCount').each(function(i, obj) {
                let meta_desc = $(this).find('.meta_desc').val();
                var division = $(this).find('.division').val();
                // division
                $($(this).find('.used')).on('input', function() {
                    var divId = $(this).attr('id');
                    var used = $(this).val();
                    console.log(used, 'used');console.log(meta_desc, 'meta_desc');
                    var calc = used/meta_desc;
                    $('.division' + divId).val(calc);
                });
            });
*************************************************** dynamic
