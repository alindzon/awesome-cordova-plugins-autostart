var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AutostartOriginal = /** @class */ (function (_super) {
    __extends(AutostartOriginal, _super);
    function AutostartOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutostartOriginal.prototype.enable = function () { return cordova(this, "enable", {}, arguments); };
    AutostartOriginal.prototype.enableService = function (name) { return cordova(this, "enableService", {}, arguments); };
    AutostartOriginal.prototype.disable = function () { return cordova(this, "disable", {}, arguments); };
    AutostartOriginal.pluginName = "Autostart";
    AutostartOriginal.plugin = "cordova-plugin-autostart";
    AutostartOriginal.pluginRef = "cordova.plugins.autoStart";
    AutostartOriginal.repo = "https://github.com/ToniKorin/cordova-plugin-autostart";
    AutostartOriginal.platforms = ["Android", "macOS"];
    return AutostartOriginal;
}(AwesomeCordovaNativePlugin));
var Autostart = new AutostartOriginal();
export { Autostart };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXV0b3N0YXJ0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCN0QsNkJBQTBCOzs7O0lBT3ZELDBCQUFNO0lBV0wsaUNBQWEsYUFBQyxJQUFZO0lBVTFCLDJCQUFPOzs7Ozs7b0JBM0RWO0VBK0IrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQXV0b3N0YXJ0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHBsdWdpbiB3aWxsIHN0YXJ0IGF1dG9tYXRpY2FsbHkgeW91ciBBbmRyb2lkIGFwcCBvciBzZXJ2aWNlIGFmdGVyIHRoZSBldmVyeSBib290IG9yIHRoZSBhdXRvLXVwZGF0ZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBBdXRvc3RhcnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXV0b3N0YXJ0JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvc3RhcnQ6IEF1dG9zdGFydCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYXV0b3N0YXJ0LmVuYWJsZSgpXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdhdXRvc3RhcnQgZW5hYmxlZCcpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBdXRvc3RhcnQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hdXRvc3RhcnQnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYXV0b1N0YXJ0JyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Ub25pS29yaW4vY29yZG92YS1wbHVnaW4tYXV0b3N0YXJ0JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnbWFjT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0b3N0YXJ0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogRW5hYmxlIHRoZSBhdXRvbWF0aWMgc3RhcnR1cCBvZiB5b3VyIGFwcCBhZnRlciB0aGUgYm9vdFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuYWJsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGF1dG9tYXRpYyBzdGFydHVwIG9mIHlvdXIgc2VydmljZSBhZnRlciB0aGUgYm9vdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBZb3VyIHNlcnZpY2UgY2xhc3MgbmFtZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlXG4gICAqL1xuICAgQENvcmRvdmEoKVxuICAgZW5hYmxlU2VydmljZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICByZXR1cm47XG4gICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGF1dG9tYXRpYyBzdGFydHVwIG9mIHlvdXIgYXBwIGFuZCBzZXJ2aWNlIGFmdGVyIHRoZSBib290XG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2VcbiAgICovXG4gICBAQ29yZG92YSgpXG4gICBkaXNhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgIHJldHVybjtcbiAgIH1cbn1cbiJdfQ==