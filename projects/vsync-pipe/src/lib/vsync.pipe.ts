import { AsyncPipe } from "@angular/common";
import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from "@angular/core";
import {
  ComputedRef,
  Ref,
  watchEffect,
  WatchStopHandle,
  WritableComputedRef,
} from "@vue/runtime-core";
import { BehaviorSubject } from "rxjs";

@Pipe({
  name: "vsync",
  pure: false,
})
export class VsyncPipe implements OnDestroy, PipeTransform {
  private out = new BehaviorSubject<any>(undefined);
  private asyncPipe: AsyncPipe;
  private stop: WatchStopHandle | undefined;

  constructor(private _: ChangeDetectorRef) {
    this.asyncPipe = new AsyncPipe(_);
  }

  transform(ref: Ref<any> | ComputedRef<any> | WritableComputedRef<any>) {
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
