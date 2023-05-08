import { WebPlugin, Capacitor } from '@capacitor/core';
export class CapacitorVoipIosWeb extends WebPlugin {
    async register() {
        if (Capacitor.getPlatform() !== 'ios') {
            console.info('CapacitorVoipIos plugin is not implemented on this platform');
        }
        else
            return;
    }
    async incomingCall({ from }) {
        console.log(from);
        return;
    }
}
//# sourceMappingURL=web.js.map