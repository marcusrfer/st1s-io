(function () {
    'use strict';
    /**
    * @ngdoc object
    * @name st.1.s.present
    **/
    angular.module('st.1.s.present', [
        //module dependencies goes here
    ]);
})();
/**
 * @ngdoc object
 * @name appfy.theme.component:coverTyping
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('coverTyping', {
        bindings: {
            strings: '='
        },
        templateUrl: "app/modules/st1s-present/components/coverTyping/coverTyping.html",
        controller: /*@ngInject*/ function ($scope, setting) { 
            var vm = this;
            vm.strings = $scope.$ctrl.strings;
        }
    });
})();
/**
 * @ngdoc object
 * @name appfy.presentation.component:downArrow
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('downArrow', {
        bindings: {
            place: '='
        },
        templateUrl: "app/modules/st1s-present/components/downArrow/downArrow.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;
        }
    });
})();
/**
 * @ngdoc object
 * @name st.1.s.present.component:heroTyping
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('heroTyping', {
        bindings: {
            strings: '=',
            social: '=' //social object
        },
        templateUrl: "app/modules/st1s-present/components/heroTyping/heroTyping.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;          
            vm.strings = $scope.$ctrl.strings;
        }
    });
})();
/**
 * @ngdoc object
 * @name st.1.s.present.component:socialShare
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').component('socialShare', {
        bindings: {
            sectionClass: '=',
            url: '=',
            text: '=',
            media: '='
        },
        templateUrl: "app/modules/st1s-present/components/socialShare/socialShare.html",
        controller: /*@ngInject*/ function ($scope) {
            var vm = this;

        }
    });
})();
/**
 * @ngdoc object
 * @name appfy.theme.directive:coverTypingTyped
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').directive('coverTypingTyped', /*@ngInject*/ function ($rootScope, $timeout) {
        return {
            scope: {
                strings: '='
            },
            templateUrl: "app/modules/st1s-present/directives/coverTypingTyped/coverTypingTyped.html",
            bindToController: true,
            controllerAs: 'vm',
            controller: /*@ngInject*/ function ($scope) {
                var vm = this;
            },
            link: function ($scope, $elem, $attr) {
                $(function () {
                    $($elem).typed({
                        strings: $scope.vm.strings || ['enter', 'your', 'awesome', 'text'],
                        typeSpeed: 100,
                        backDelay: 1000,
                        loop: true
                    });
                });
            }
        }
    });
})();
/**
 * @ngdoc object
 * @name appfy.presentation.directive:scrollTo
 **/
(function () {
    'use strict';
    angular.module('st.1.s.present').directive('scrollTo', /*@ngInject*/ function ($rootScope, $timeout) {
        return {
            scope: {
            },
            controller: /*@ngInject*/ function ($scope) {
                var vm = this;
                //ctrl code
            },
            link: function ($scope, $elem, $attr) {

                //link code
                $($elem).click(function () {
                    var scrollTo = $attr.scrollTo || '.hero';
                    $("html, body").animate({ scrollTop: $(scrollTo).offset().top }, 1000);
                })
            }
        }
    });
})();
angular.module('st.1.s.present').run(['$templateCache', function($templateCache) {$templateCache.put('app/modules/st1s-present/components/coverTyping/coverTyping.html','<div class=cover-typing><span class=bash>$</span><cover-typing-typed strings=$ctrl.strings></cover-typing-typed></div>');
$templateCache.put('app/modules/st1s-present/components/downArrow/downArrow.html','<div class=down-arrow scroll-to={{$ctrl.place}}><div class=bounce><i class="fa fa-angle-double-down"></i></div></div>');
$templateCache.put('app/modules/st1s-present/components/heroTyping/heroTyping.html','<div class=hero-typing><section class="hero is-medium is-light is-bold is-fullheight"><div class=hero-body><div class="container has-text-centered"><cover-typing strings=$ctrl.strings></cover-typing></div></div><div class=hero-foot><div class=nav-center><a class=nav-item href={{$ctrl.social.github.profile}}><span class="icon is-medium"><i class="fa fa-github"></i> </span></a><a class=nav-item href={{$ctrl.social.live.profile}}><span class="icon is-medium"><i class="fa fa-youtube-play"></i> </span></a><a class=nav-item href={{$ctrl.social.twitter.profile}}><span class="icon is-medium"><i class="fa fa-twitter"></i> </span></a><a class=nav-item href={{$ctrl.social.google.profile}}><span class="icon is-medium"><i class="fa fa-google-plus"></i> </span></a><a class=nav-item href={{$ctrl.social.facebook.profile}}><span class="icon is-medium"><i class="fa fa-facebook-official"></i></span></a></div></div></section></div>');
$templateCache.put('app/modules/st1s-present/components/socialShare/socialShare.html','<div class=social-share><section class="hero {{$ctrl.sectionClass||\'is-primary\'}}"><div class=hero-body><div class="container has-text-centered"><h3 class=subtitle>Spread the world</h3><ul class=nav-center><li class=nav-item><a href=# socialshare socialshare-provider=twitter socialshare-url="{{$ctrl.url||\'https://st1s.io\'}}" socialshare-text={{$ctrl.text}} socialshare-media={{$ctrl.media}}><i class="fa fa-twitter"></i></a></li><li class=nav-item><a href=# socialshare socialshare-provider=google socialshare-url="{{$ctrl.url||\'https://st1s.io\'}}" socialshare-text={{$ctrl.text}} socialshare-media={{$ctrl.media}}><i class="fa fa-google-plus"></i></a></li><li class=nav-item><a href=# socialshare socialshare-provider=facebook socialshare-url="{{$ctrl.url||\'https://st1s.io\'}}" socialshare-text={{$ctrl.text}} socialshare-media={{$ctrl.media}}><i class="fa fa-facebook"></i></a></li><li class=nav-item><a href=# socialshare socialshare-provider=linkedin socialshare-url="{{$ctrl.url||\'https://st1s.io\'}}" socialshare-text={{$ctrl.text}} socialshare-media={{$ctrl.media}}><i class="fa fa-linkedin"></i></a></li><li class=nav-item><a href=# socialshare socialshare-provider=pinterest socialshare-url="{{$ctrl.url||\'https://st1s.io\'}}" socialshare-text={{$ctrl.text}} socialshare-media={{$ctrl.media}}><i class="fa fa-pinterest"></i></a></li></ul></div></div></section></div>');
$templateCache.put('app/modules/st1s-present/directives/coverTypingTyped/coverTypingTyped.html','<div class=cover-typing-typed></div>');
$templateCache.put('app/modules/st1s-present/directives/scrollTo/scrollTo.html','<div class=scroll-to><!-- //template code go here --></div>');}]);