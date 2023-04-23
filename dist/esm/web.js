import { WebPlugin } from '@capacitor/core';
export class CapacitorVoipIosWeb extends WebPlugin {
    async register() {
        return;
    }
    async incomingCall({ from }) {
        console.log(from);
        return;
    }
}
//# sourceMappingURL=web.js.map