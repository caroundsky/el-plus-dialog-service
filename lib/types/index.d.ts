import type { AppContext } from 'vue';
import { DialogConfig } from './props';
declare const service: (options?: DialogConfig, appContext?: AppContext | undefined) => {
    [x: string]: any;
};
export default service;
