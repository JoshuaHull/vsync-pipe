import { ChangeDetectorRef, OnDestroy, PipeTransform } from "@angular/core";
import { ComputedRef, Ref, WritableComputedRef } from "@vue/runtime-core";
import * as i0 from "@angular/core";
export declare class VsyncPipe implements OnDestroy, PipeTransform {
    private _;
    private out;
    private asyncPipe;
    private stop;
    constructor(_: ChangeDetectorRef);
    transform(ref: Ref<any> | ComputedRef<any> | WritableComputedRef<any>): any;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VsyncPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<VsyncPipe, "vsync", false>;
}
