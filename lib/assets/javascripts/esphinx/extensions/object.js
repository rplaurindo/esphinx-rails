// require ./singleton
// require ./array

"use strict";

var
    Singleton;

// Object: javascript literal object
(function ($) {

    // Object.compare();
    if (!Object.prototype.isEqualTo) {
        $.defineProperty($.prototype, "isEqualTo", {
            value: function () {
                var
                    self = this,
                    primitiveTypes =
                        /(number|string|boolean|null|undefined|symbol)/,
                    i;

                if ((arguments[0]).constructor === self.constructor) {
                    if (self instanceof Object &&
                        !(self instanceof Function)) {
                        if (self instanceof Node) {
                            if (self.isEqualNode(arguments[0])) {
                                return true;
                            }
                        } else {
                            for (i in self) {
                                if (self.hasOwnProperty(i)) {
                                    if (typeof self[i] !== "function") {
                                        if ((self[i]).constructor ===
                                            (arguments[0][i]).constructor) {
                                            if (self[i].constructor ===
                                                Object) {
                                                if (self[i]
                                                    .isEqualTo(arguments[0][i])
                                                    ) {
                                                    return true;
                                                }
                                            } else {
                                                if (self[i] === arguments[0][i]
                                                    ) {
                                                    return true;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (primitiveTypes.test(typeof self)) {
                            if (self === arguments[0]) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        });
    }

    if (!Object.prototype.deleteSingleton) {
        $.defineProperty($.prototype, "deleteSingleton", {
            value: function () {
                var
                    self = this;

                Singleton.destroy.apply(self, Array.flatten(arguments));

                return Singleton.instances();
            }
        });
    }

}(Object));