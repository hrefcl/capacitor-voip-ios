import { registerPlugin } from '@capacitor/core';
const CapacitorVoipIos = registerPlugin('CapacitorVoipIos', {
    web: () => import('./web').then(m => new m.CapacitorVoipIosWeb()),
});
export * from './definitions';
export { CapacitorVoipIos };
//# sourceMappingURL=index.js.map