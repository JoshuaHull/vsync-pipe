import * as i0 from '@angular/core';
import { Pipe, NgModule } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { watchEffect } from '@vue/runtime-core';
import { BehaviorSubject } from 'rxjs';

class VsyncPipe {
    constructor(_) {
        this._ = _;
        this.out = new BehaviorSubject(undefined);
        this.asyncPipe = new AsyncPipe(_);
    }
    transform(ref) {
        if (!this.stop && ref) {
            this.stop = watchEffect(() => {
                this.out.next(ref.value);
            });
        }
        return this.asyncPipe.transform(this.out);
    }
    ngOnDestroy() {
        var _a;
        this.out.complete();
        (_a = this.stop) === null || _a === void 0 ? void 0 : _a.call(this);
        this.asyncPipe.ngOnDestroy();
    }
}
VsyncPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipe, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Pipe });
VsyncPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipe, name: "vsync", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "vsync",
                    pure: false,
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; } });

class VsyncPipeModule {
}
VsyncPipeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VsyncPipeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipeModule, declarations: [VsyncPipe], exports: [VsyncPipe] });
VsyncPipeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: VsyncPipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        VsyncPipe,
                    ],
                    exports: [
                        VsyncPipe,
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VsyncPipe, VsyncPipeModule };
//# sourceMappingURL=vsync-pipe.mjs.map
