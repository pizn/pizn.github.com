/**
 * @desc:   公用js
 * @author: zhanxin.lin
 * @depend: jQuery, jQuery scrollTo
 */
$(document).ready(function() {
    /**
     *  scrollTo Top
     */
    var scrollTo = {
            nodeName: "J-backTop",
            scrollHeight: "100",
            linkBottom: "110px",
            linkRight: "1em",
            _scrollTop: function() {
            if(jQuery.scrollTo) {
                jQuery.scrollTo(0, 800, {queue:true});
            }
        },
        _scrollScreen: function() {
            var that = this, topLink = $('#' + that.nodeName);

            if(jQuery(document).scrollTop() <= that.scrollHeight) {
                topLink.hide();
                return true;
            }  else {
                topLink.fadeIn();
            }
        },
        _resizeWindow: function() {
            var that = this, topLink = $('#' + that.nodeName);
            if($(window).width() > 1024) {
                var leftSize = $(window).width() / 2 + 400;
                topLink.css({
                    'right' : '',
                    'left': leftSize + 'px',
                    'bottom': that.linkBottom
                });
            } else {
                topLink.css({
                    'left': '',
                    'right' : that.linkRight,
                    'bottom': that.linkBottom
                });
            }


        },
        run: function() {
            var that = this, topLink = $('<a id="' + that.nodeName + '" href="#" class="toTop"><i class="fa fa-chevron-up"></i></a>');
            topLink.appendTo($('body'));

            topLink.css({
                'display': 'none',
                'position': 'fixed',
                'left': '',
                'right': that.linkRight,
                'bottom': that.linkBottom
            });

            that._resizeWindow();

            if(jQuery.scrollTo) {
                topLink.click(function() {
                    that._scrollTop();
                    return false;
                });
            }
            jQuery(window).resize(function() {
                that._scrollScreen();
                that._resizeWindow();
            });
            jQuery(window).scroll(function() {
                that._scrollScreen();
            });
        }
    }
    scrollTo.run();
});