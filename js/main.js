// Must load sines only when fonts are ready as
// using custom webfonts which take some time to load.
// Otherwise waves get painted before text does
// and leads to misflowed page
document.fonts.ready.then(function() {
    var waves = new SineWaves({
        el: document.getElementById('waves'),
        speed: 6,
        width: function() {
            return $(window).width();
        },
        height: function() {
            return this.el.parentElement.offsetHeight;
        },
        ease: 'SineInOut',
        wavesWidth: '100%',
        waves: [{
                timeModifier: 4,
                lineWidth: 2,
                wavelength: 25,
                amplitudeFactor: 0.06,
                // chai-blue
                strokeStyle: 'rgba(81, 1, 254, 1)'
            },
            {
                timeModifier: 2,
                lineWidth: 2,
                amplitudeFactor: 0.12,
                wavelength: 50,
                // chai-mauve
                strokeStyle: 'rgba(165, 2, 252, 1)'
            },
            {
                timeModifier: 1,
                lineWidth: 2,
                amplitudeFactor: 0.25,
                wavelength: 100,
                // chai-rose
                strokeStyle: 'rgba(253, 87, 173, 1)'
            },
            {
                timeModifier: 0.5,
                lineWidth: 2,
                amplitudeFactor: 0.5,
                wavelength: 200,
                // chai-pink
                strokeStyle: 'rgba(255, 0, 253, 1)'
            },
            {
                timeModifier: 0.25,
                lineWidth: 2,
                amplitudeFactor: 0.38,
                wavelength: 400,
                // chai-yellow
                strokeStyle: 'rgba(253, 171, 85, 1)'
            },
            {
                timeModifier: 0.5,
                lineWidth: 2,
                amplitudeFactor: 0.5,
                wavelength: 300,
                // chai-white
                strokeStyle: 'rgba(255, 255,255, 1)'
            }
        ],
        resizeEvent: function() {
            this.waves.forEach(wave => {
                wave.amplitude = wave.amplitudeFactor * this.el.height;
            });
        }
    });
    // waves.running = false;
});

// Scroll to block element + check the hidden input
(function($) {
    $.fn.scroll = function() {
        this.find("input").prop("checked", true);
        $(window).scrollTop(this.offset().top);
    };
})(jQuery);

// Nav back to block from another page
$(document).ready(function() {
    var tag = sessionStorage.getItem("nav_location");
    if (tag) {
        sessionStorage.removeItem("nav_location");
        $(tag).scroll()
    }
});