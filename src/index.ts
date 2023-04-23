import { registerPlugin } from '@capacitor/core';

import type { CapacitorVoipIosPlugin } from './definitions';

const CapacitorVoipIos = registerPlugin<CapacitorVoipIosPlugin>(
  'CapacitorVoipIos',
  {
    web: () => import('./web').then(m => new m.CapacitorVoipIosWeb()),
  },
);

export * from './definitions';
export { CapacitorVoipIos };
