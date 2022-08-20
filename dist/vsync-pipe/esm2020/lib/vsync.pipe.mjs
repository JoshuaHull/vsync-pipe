import { AsyncPipe } from "@angular/common";
import { Pipe } from "@angular/core";
import { watchEffect, } from "@vue/runtime-core";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export class VsyncPipe {
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
        this.out.complete();
        this.stop?.();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnN5bmMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3ZzeW5jLXBpcGUvc3JjL2xpYi92c3luYy5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQWdDLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUdMLFdBQVcsR0FHWixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBTXZDLE1BQU0sT0FBTyxTQUFTO0lBS3BCLFlBQW9CLENBQW9CO1FBQXBCLE1BQUMsR0FBRCxDQUFDLENBQW1CO1FBSmhDLFFBQUcsR0FBRyxJQUFJLGVBQWUsQ0FBTSxTQUFTLENBQUMsQ0FBQztRQUtoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBMkQ7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O3NHQXZCVSxTQUFTO29HQUFULFNBQVM7MkZBQVQsU0FBUztrQkFKckIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsT0FBTztvQkFDYixJQUFJLEVBQUUsS0FBSztpQkFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29tcHV0ZWRSZWYsXHJcbiAgUmVmLFxyXG4gIHdhdGNoRWZmZWN0LFxyXG4gIFdhdGNoU3RvcEhhbmRsZSxcclxuICBXcml0YWJsZUNvbXB1dGVkUmVmLFxyXG59IGZyb20gXCJAdnVlL3J1bnRpbWUtY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6IFwidnN5bmNcIixcclxuICBwdXJlOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFZzeW5jUGlwZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB7XHJcbiAgcHJpdmF0ZSBvdXQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcclxuICBwcml2YXRlIGFzeW5jUGlwZTogQXN5bmNQaXBlO1xyXG4gIHByaXZhdGUgc3RvcDogV2F0Y2hTdG9wSGFuZGxlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF86IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICB0aGlzLmFzeW5jUGlwZSA9IG5ldyBBc3luY1BpcGUoXyk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0ocmVmOiBSZWY8YW55PiB8IENvbXB1dGVkUmVmPGFueT4gfCBXcml0YWJsZUNvbXB1dGVkUmVmPGFueT4pIHtcclxuICAgIGlmICghdGhpcy5zdG9wICYmIHJlZikge1xyXG4gICAgICB0aGlzLnN0b3AgPSB3YXRjaEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vdXQubmV4dChyZWYudmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5hc3luY1BpcGUudHJhbnNmb3JtKHRoaXMub3V0KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5vdXQuY29tcGxldGUoKTtcclxuICAgIHRoaXMuc3RvcD8uKCk7XHJcbiAgICB0aGlzLmFzeW5jUGlwZS5uZ09uRGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=