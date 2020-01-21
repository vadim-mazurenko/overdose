define([
    'jquery',
    'underscore',
    'Magento_Ui/js/modal/modal'
], function ($, _) {
    'use strict';

    $.widget('Overdose.autoModal', {
        options: {
            buttons: false
        },
        delay: 2000,
        buttons: false,

        /**
         * Create widget
         * @private
         */
        _create: function () {
            $(this.element).modal(this.options);

            setTimeout(_.bind(function () {
                $(this.element).modal('openModal');
            }, this), this.delay);
        },
    });

    return $.Overdose.autoModal;
});
