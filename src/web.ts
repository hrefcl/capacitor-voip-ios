import { WebPlugin } from '@capacitor/core';

import type { CapacitorVoipIosPlugin } from './definitions';

export class CapacitorVoipIosWeb extends WebPlugin implements CapacitorVoipIosPlugin {
  async register(): Promise<void> {
    return;
  }

  async incomingCall({from}:{from:string}):Promise<void>{
    console.log(from)
    return;
  }
}
