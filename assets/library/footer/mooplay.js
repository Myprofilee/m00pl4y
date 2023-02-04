$(function () {
    var bar = '';

    bar += '<footer class="footer">';
        bar += '<div class="container-fluid">';
            bar += '<div class="row">';
                bar += '<div class="col-12 col-sm-8 col-md-6 col-lg-6 col-xl-4 order-4 order-md-1 order-lg-4 order-xl-1">';
                    bar += '<div class="footer__logo">';
                        bar += '<img src="/assets/img/mooplay.png" alt="MooPlay">';
                    bar += '</div>';
                    bar += '<p class="footer__tagline">';
                        bar += 'Download Aplikasi MooPlay Beserta<br>';
                        bar += 'Musik Dan Lirik Yang Telah Disediakan.';
                    bar += '</p>';
                    bar += '<div class="footer__links">';
                        bar += '<a href="mailto:mooplay.id@gmail.com">';
                            bar += '<i class="ax-mail"></i> mooplay.id@gmail.com';
                        bar += '</a>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<div class="col-6 col-md-4 col-lg-3 col-xl-2 order-1 order-md-2 order-lg-1 order-xl-2 offset-md-2 offset-lg-0">';
                    bar += '<h6 class="footer__title">The Blast</h6>';
                    bar += '<div class="footer__nav">';
                        bar += '<a href="/m/about">About</a>';
                        bar += '<a href="/m/profile">My profile</a>';
                        bar += '<a href="/m/pricing">Pricing plans</a>';
                        bar += '<a href="/m/contacts">Contacts</a>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<div class="col-12 col-md-8 col-lg-6 col-xl-4 order-3 order-lg-2 order-md-3 order-xl-3">';
                    bar += '<div class="row">';
                        bar += '<div class="col-12">';
                            bar += '<h6 class="footer__title">Browse</h6>';
                        bar += '</div>';

                        bar += '<div class="col-6">';
                            bar += '<div class="footer__nav">';
                                bar += '<a href="/m/artists">Artists</a>';
                                bar += '<a href="/m/releases">Releases</a>';
                                bar += '<a href="/m/events">Events</a>';
                                bar += '<a href="/m/podcasts">Podcasts</a>';
                            bar += '</div>';
                        bar += '</div>';

                        bar += '<div class="col-6">';
                            bar += '<div class="footer__nav">';
                                bar += '<a href="/m/news">News</a>';
                                bar += '<a href="store.html">Store</a>';
                                bar += '<a href="/m/music">Music</a>';
                                bar += '<a href="/m/video">Video</a>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';

                bar += '<div class="col-6 col-md-4 col-lg-3 col-xl-2 order-2 order-lg-3 order-md-4 order-xl-4">';
                    bar += '<h6 class="footer__title">Help</h6>';
                    bar += '<div class="footer__nav">';
                                bar += '<a href="/m/profile">Account & Billing</a>';
                                bar += '<a href="/m/pricing">Plans & Pricing</a>';
                                bar += '<a href="/m/faq">Supported devices</a>';
                                bar += '<a href="/m/privacy">Accessibility</a>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';

                    bar += '<div class="row">';
                        bar += '<div class="col-12">';
                            bar += '<div class="footer__content">';
                                bar += '<div class="footer__social">';
                                    bar += '<a href="https://www.instagram.com/mooplay.id/" target="_blank">';
                                        bar += '<i class="ax-instagram"></i>';
                                    bar += '</a>';
                                bar += '</div>';
                                bar += '<small class="footer__copyright">© <span id="year-mooplay"></span> MooPlay</small>';
                            bar += '</div>';
                        bar += '</div>';
                    bar += '</div>';
                bar += '</div>';
            bar += '</footer>';

    bar += '<script src="/assets/js/bootstrap.bundle.min.js"></script>';
    bar += '<script src="/assets/js/owl.carousel.min.js"></script>';
    bar += '<script src="/assets/js/jquery.magnific-popup.min.js"></script>';
    bar += '<script src="/assets/js/smooth-scrollbar.js"></script>';
    bar += '<script src="/assets/js/select2.min.js"></script>';
    bar += '<script src="/assets/js/slider-radio.js"></script>';
    bar += '<script src="/assets/js/jquery.inputmask.min.js"></script>';
    bar += '<script src="/assets/js/plyr.min.js"></script>';
    bar += '<script src="/assets/js/main.js"></script>';

    $("#footer").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('MooPlay').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}