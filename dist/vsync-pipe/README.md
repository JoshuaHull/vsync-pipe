# vsync pipe

Efficient reactivity in Angular without Observables. Combines Vue's reactivity API with the async pipe.

## Installation

> npm install vsync-pipe

With peer dependencies:
  * @angular/common
  * @vue/reactivity
  * @vue/runtime-core
  * rxjs

## Usage

**component.html**

```html
<p>
    Current value: {{ currentValue | vsync }}<br />
    Computed value: {{ computedValue | vsync }}
</p>
```

**component.ts**

```ts
import { ref, Ref, computed, ComputedRef } from "@vue/reactivity";

currentValue: Ref<number>;
computedValue: ComputedRef<number>;

ngOnInit() {
  this.currentValue = ref(1);
  this.computedValue = computed(() => this.currentValue.value * 2);
}
```

**component.module.ts**

```ts
import { VsyncPipeModule } from "vsync-pipe";

imports: [
  VsyncPipeModule,
],
```

## License

MIT
