/**
* @file jquery.formvalidation.js
* @desc Please DO NOT copy this code to production! This is 'quick & ugly, just make it work!' code.
* @author Ian McBurnie <ianmcburnie@hotmail.com>
*/
(function ( $ ) {

    $.fn.formvalidation = function formValidation() {

        // this plugin is intentionally not reusable!
        // the validation routine and error messages are hardcoded.

        var $form = $(this),
            $regionnotice = $('<div class="regionnotice" tabindex="-1">'),
            $errorHeading = $('<h3>Error! The form could not be submitted due to invalid entries.</h3><p>Please fix the following fields:</p>'),
            $listOfErrors = $('<ol>'),
            $elementnotice1 = $('<p class="elementnotice" id="age_error">Please enter a valid age (for example, 35)</p>'),
            $elementnotice2 = $('<p class="elementnotice" id="shoesize_error">Please enter a valid shoe size (for example, 8.5)</p>'),
            $firstError = $('<li><a href="#age_container">Age - please enter a valid age (for example, 35)</a></li>'),
            $secondError = $('<li><a href="#shoesize_container">Shoe-size - please enter a valid shoe size (for example, 8.5)</a></li>');
            $ageInput = $('#age');
            $shoeSizeInput = $('#shoesize');

        // prevent built-in validation (it conflicts with our custom validation)
        $form.attr('novalidate', 'novalidate');

        $regionnotice.append($errorHeading);
        $regionnotice.append($listOfErrors);

        $form.on('submit', function onSubmit(e) {
            e.preventDefault();

            // insert hardcoded errors
            $listOfErrors.append($firstError).append($secondError);
            $form.find('input[type=text]').attr('aria-invalid', 'true');
            $('#age_container').append($elementnotice1);
            $('#shoesize_container').append($elementnotice2);
            $form.prepend($regionnotice);
            $ageInput.attr('aria-describedby', 'age_error');
            $shoeSizeInput.attr('aria-describedby', 'shoesize_error');

            $regionnotice.focus();
        });
    };
}( jQuery ));
