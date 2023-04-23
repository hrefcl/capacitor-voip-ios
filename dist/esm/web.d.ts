import { WebPlugin } from '@capacitor/core';
import type { CapacitorVoipIosPlugin } from './definitions';
export declare class CapacitorVoipIosWeb extends WebPlugin implements CapacitorVoipIosPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
