var
    esPhinx;

(function ($) {
    "use strict";

    $.extend({

        prototype: {

            observe: function (options, callback) {
                var
                    observer;

                if (!callback && typeof options == "function") {
                    callback = options;
                }

                if (options) {
                    if (!options.childList ||
                        typeof options.childList !== "boolean") {
                        options.childList = true;
                    }

                    if (!options.subtree ||
                        typeof options.subtree !== "boolean") {
                        options.subtree = true;
                    }

                    if (!options.characterData ||
                        typeof options.characterData !== "boolean") {
                        options.characterData = true;
                    }

                    // if (!options.attributes ||
                    //     typeof options.attributes !== "boolean") {
                    //     options.attributes = false;
                    // }

                }

                this.select(function (node) {
                    observer = new MutationObserver(function (mutations) {
                        callback.call(observer, mutations);
                    });

                    observer.observe(node, options);
                });

                return this;
            }
        }

    });

}(esPhinx));