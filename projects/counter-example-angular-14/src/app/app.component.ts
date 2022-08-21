import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { ref, Ref, computed, ComputedRef } from "@vue/reactivity";

@Component({
  selector: "app-root",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<style>
.app {
  max-width: 20rem;
  margin: auto;
}

h1, p {
  text-align: center;
}

.buttons-container {
  display: grid;
  grid-auto-flow: column;
  column-gap: 1rem;
}
</style>
<div class="app">
  <h1>Vsync Counter App</h1>
  <p>
    <span data-test-id="current-value">
      Current value: {{ currentValue | vsync }}
    </span>
    <br />
    <br />
    <span data-test-id="multiplied-value">
      2x multiplier: {{ multiplier | vsync }}
    </span>
  </p>
  <div class="buttons-container">
    <button
      (click)="handleClickIncrease()"
      data-test-id="plus-button"
    >
      +
    </button>
    <button
      (click)="handleClickDecrease()"
      data-test-id="minus-button"
    >
      -
    </button>
  </div>
</div>
`,
})
export class AppComponent implements DoCheck {
  currentValue: Ref<number>;
  multiplier: ComputedRef<number>;

  constructor() {
    this.currentValue = ref(1);
    this.multiplier = computed(() => this.currentValue.value * 2);
  }

  handleClickIncrease() {
    this.currentValue.value += 1;
  }

  handleClickDecrease() {
    this.currentValue.value -= 1;
  }

  ngDoCheck() {
    console.debug("running change detection...");
  }
}
