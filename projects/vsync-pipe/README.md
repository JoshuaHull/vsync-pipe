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

## Why?

It's no secret that RXJS has a steep learning curve. In my opinion, depending on RXJS
makes it a chore to develop high performance Angular apps. Don't get me wrong, I like
RXJS, but the developer experience with Vue and its reactivity API far outweighs that
of Angular + RXJS.

The vsync pipe allows you to use Vue's ref objects in place of behaviour subjects,
and computed functions in favour of map, tap, slap.

Its code is short and sweet, and your code will be too :)

## License

MIT
