import { WebPlugin } from '@capacitor/core';
import type { CapacitorVoipIosPlugin } from './definitions';
export declare class CapacitorVoipIosWeb extends WebPlugin implements CapacitorVoipIosPlugin {
    register(): Promise<void>;
    incomingCall({ from }: {
        from: string;
    }): Promise<void>;
}
