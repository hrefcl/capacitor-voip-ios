var capacitorCapacitorVoipIos = (function (exports, core) {
    'use strict';

    const CapacitorVoipIos = core.registerPlugin('CapacitorVoipIos', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorVoipIosWeb()),
    });

    class CapacitorVoipIosWeb extends core.WebPlugin {
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        CapacitorVoipIosWeb: CapacitorVoipIosWeb
    });

    exports.CapacitorVoipIos = CapacitorVoipIos;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
