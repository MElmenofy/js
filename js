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
