'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorVoipIos = core.registerPlugin('CapacitorVoipIos', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorVoipIosWeb()),
});

class CapacitorVoipIosWeb extends core.WebPlugin {
    async register() {
        if (core.Capacitor.getPlatform() !== 'ios') {
            console.error('CapacitorVoipIos plugin is not implemented on this platform');
        }
        else
            return;
    }
    async incomingCall({ from }) {
        console.log(from);
        return;
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorVoipIosWeb: CapacitorVoipIosWeb
});

exports.CapacitorVoipIos = CapacitorVoipIos;
//# sourceMappingURL=plugin.cjs.js.map
