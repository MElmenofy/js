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
