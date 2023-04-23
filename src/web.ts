import { WebPlugin } from '@capacitor/core';

import type { CapacitorVoipIosPlugin } from './definitions';

export class CapacitorVoipIosWeb
  extends WebPlugin
  implements CapacitorVoipIosPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
