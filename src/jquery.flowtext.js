// Flowtext jQuery Plugin
// jQuery plugin for responsive font-size

(function($) {
    var Flowtext = function(element, options) {
        this.flowtext = $(element);

        // Default module configuration
        this.defaults = {
            minFontSize: 16,
            maxFontSize: 20,
            minScreenWidth: 320,
            maxScreenWidth: 1024
        };

        // Merge default classes with window.project.classes
        this.classes = $.extend(true, this.defaults.classes, (window.project ? window.project.classes : {}));

        // Merge default labels with window.project.labels
        this.labels = $.extend(true, this.defaults.labels, (window.project ? window.project.labels : {}));

        // Merge default config with custom config
        this.config = $.extend(true, this.defaults, options || {});

        this.$window = $(window);

        this.publicMethods = {
            methodName: $.proxy(function() {
                console.log('methodName function called');
            }, this)
        }

        this.bindEvents();
    };

    $.extend(Flowtext.prototype, {

        bindEvents: function() {
            this.$window.on('resize', $.proxy(this.flow, this)).trigger('resize');
        },

        flow: function() {
            var windowWidth = this.$window.width();

            if (windowWidth < this.config.minScreenWidth) {
                this.flowtext.css('font-size', this.config.minFontSize);
            } else if (windowWidth > this.config.maxScreenWidth) {
                this.flowtext.css('font-size', this.config.maxFontSize);
            } else {
                var ratio = (windowWidth - this.config.minScreenWidth) / (this.config.maxScreenWidth - this.config.minScreenWidth),
                    fontsize = this.config.minFontSize + ((this.config.maxFontSize - this.config.minFontSize) * ratio);
                this.flowtext.css('font-size', fontsize);
            }
        }

    });

    $.fn.flowtext = function(options) {
        this.each($.proxy(function(index, element) {
            var $element = $(element);

            // Return early if this $element already has a plugin instance
            if ($element.data('flowtext')) return;

            // Pass options to plugin constructor
            var flowtext = new Flowtext(element, options);

            // Add every public methods to plugin
            for (var key in flowtext.publicMethods) {
                this[key] = flowtext.publicMethods[key];
            }

            // Store plugin object in this $element's data
            $element.data('flowtext', flowtext);
        }, this));

        return this;
    };
})(jQuery);
