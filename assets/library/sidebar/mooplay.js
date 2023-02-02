$(function () {
    var bar = '';

    bar += '<header class="header">';
        bar += '<div class="header__content">';

            bar += '<nav class="header__nav">';
                bar += '<a href="/m/profile">Profile</a>';
                bar += '<a href="/m/about">About</a>';
                bar += '<a href="/m/contacts">Contacts</a>';
            bar += '</nav>';

            bar += '<form action="#" class="header__search">';
                bar += '<input type="text" id="MooPlay" placeholder="Artist, track or podcast">';
                bar += '<button type="button">';
                    bar += '<i class="ax-search"></i>';
                bar += '</button>';
                bar += '<button type="button" class="close">';
                    bar += '<i class="ax-x"></i>';
                bar += '</button>';
            bar += '</form>';

            bar += '<div class="header__actions">';
                bar += '<div class="header__action header__action--search">';
                    bar += '<button class="header__action-btn" type="button">';
                        bar += '<i class="ax-search"></i>';
                    bar += '</button>';
                bar += '</div>';

                bar += '<div class="header__action header__action--signin">';
                    bar += '<a class="header__action-btn" href="mooplay.apk">';
                        bar += '<span>Download App</span>';
                        bar += '<i class="ax-download"></i>';
                    bar += '</a>';
                bar += '</div>';
            bar += '</div>';

            bar += '<button class="header__btn" type="button">';
                bar += '<span></span>';
                bar += '<span></span>';
                bar += '<span></span>';
            bar += '</button>';
        bar += '</div>';
    bar += '</header>';

    bar += '<div class="sidebar">';
        bar += '<div class="sidebar__logo">';
            bar += '<img src="/assets/img/test.png" alt="MooPlay">';
        bar += '</div>';

        bar += '<ul class="sidebar__nav">';

            bar += '<li class="sidebar__nav-item">';
                bar += '<a href="/" class="sidebar__nav-link sidebar__nav-link--active">';
                    bar += '<i class="ax-home"></i>';
                    bar += '<span>Home</span>';
                bar += '</a>';
            bar += '</li>';

            bar += '<li class="sidebar__nav-item">';
                bar += '<a href="/m/artists/" class="sidebar__nav-link">';
                    bar += '<i class="ax-users"></i>';
                    bar += '<span>Artists</span>';
                bar += '</a>';
            bar += '</li>';

            bar += '<li class="sidebar__nav-item">';
                bar += '<a href="releases.html" class="sidebar__nav-link">';
                    bar += '<i class="ax-music"></i>';
                    bar += '<span class="nav-text">Releases</span>';
                bar += '</a>';
            bar += '</li>';

            bar += '<a href="mooplay.apk" class="main__download">Download App</a>';


        bar += '</ul>';
    bar += '</div>';

    bar += '<div class="player">';
        bar += '<div class="player__cover">';
            bar += '<img src="/assets/img/covers/cover.svg" alt="MooPlay">';
        bar += '</div>';

        bar += '<div class="player__content">';
            bar += '<span class="player__track"><b class="player__title">Welcome</b> – ';
            bar += '<span class="player__artist">MooPlay</span></span>';
            bar += '<audio src="http://blast.volkovdesign.com/audio/12071151_epic-cinematic-trailer_by_audiopizza_preview.mp3" id="audio" controls></audio>';
            bar += '</div>';
        bar += '</div>';

    bar += '<button class="player__btn" type="button">';
        bar += '<i class="ax-play"></i> Player';
    bar += '</button>';

    bar += '<script src="/assets/js/bootstrap.bundle.min.js"></script>';
    bar += '<script src="/assets/js/owl.carousel.min.js"></script>';
    bar += '<script src="/assets/js/jquery.magnific-popup.min.js"></script>';
    bar += '<script src="/assets/js/smooth-scrollbar.js"></script>';
    bar += '<script src="/assets/js/select2.min.js"></script>';
    bar += '<script src="/assets/js/slider-radio.js"></script>';
    bar += '<script src="/assets/js/jquery.inputmask.min.js"></script>';
    bar += '<script src="/assets/js/plyr.min.js"></script>';
    bar += '<script src="/assets/js/main.js"></script>';

    $("#sidebar").html(bar);
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