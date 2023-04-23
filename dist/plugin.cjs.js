'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

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
//# sourceMappingURL=plugin.cjs.js.map