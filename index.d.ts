import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Autostart
 * @description
 * This plugin plugin will start automatically your Android app or service after the every boot or the auto-update of your application.
 * @usage
 * ```typescript
 * import { Autostart } from '@awesome-cordova-plugins/autostart';
 *
 *
 * constructor(private autostart: Autostart) { }
 *
 * ...
 *
 *
 * this.autostart.enable()
 *   .then(() => console.log('autostart enabled'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AutostartOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Enable the automatic startup of your app after the boot
     *
     * @returns {Promise<any>} Promise
     */
    enable(): Promise<any>;
    /**
     * Enable the automatic startup of your service after the boot
     *
     * @param {string} name Your service class name
     * @returns {Promise<any>} Promise
     */
    enableService(name: string): Promise<any>;
    /**
     * Disable the automatic startup of your app and service after the boot
     *
     * @returns {Promise<any>} Promise
     */
    disable(): Promise<any>;
}

export declare const Autostart: AutostartOriginal;
