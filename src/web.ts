import { WebPlugin, Capacitor } from '@capacitor/core';

import type { CapacitorVoipIosPlugin } from './definitions';

export class CapacitorVoipIosWeb extends WebPlugin implements CapacitorVoipIosPlugin {
  async register(): Promise<void> {
    if (Capacitor.getPlatform() !== 'ios') {
      throw new Error('CapacitorVoipIos plugin is not implemented on this platform');
    }
    return;
  }

  async incomingCall({ from }: { from: string }): Promise<void> {
    console.log(from);
    return;
  }
}
