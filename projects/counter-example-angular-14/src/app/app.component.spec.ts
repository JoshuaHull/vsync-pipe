import { ComponentFixture, TestBed } from "@angular/core/testing";
import { VsyncPipeModule } from "vsync-pipe";
import { AppComponent } from "./app.component";

describe("counter example angular 14 app component", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  const selectCurrentValueSpan = () => compiled.querySelector("[data-test-id='current-value']") as HTMLSpanElement;
  const selectMultipliedValueSpan = () => compiled.querySelector("[data-test-id='multiplied-value']") as HTMLSpanElement;
  const selectPlusButton = () => compiled.querySelector("[data-test-id='plus-button']") as HTMLButtonElement;
  const selectMinusButton = () => compiled.querySelector("[data-test-id='minus-button']") as HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        VsyncPipeModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it("should create", () => {
    // Arrange
    fixture.detectChanges();

    // Assert
    expect(component).toBeTruthy();
  });

  it("should have values of 1 and 2 by default", () => {
    // Arrange
    fixture.detectChanges();
    const currentValueSpan = selectCurrentValueSpan();
    const multipliedValueSpan = selectMultipliedValueSpan();

    // Assert
    expect(currentValueSpan.textContent).toContain(": 1");
    expect(multipliedValueSpan.textContent).toContain(": 2");
  });

  it("should increase the current value and multiplied value with every click of the plus button", () => {
    // Arrange
    fixture.detectChanges();
    const currentValueSpan = selectCurrentValueSpan();
    const multipliedValueSpan = selectMultipliedValueSpan();
    const plusButton = selectPlusButton();

    // Act
    plusButton.click();
    fixture.detectChanges();

    // Assert
    expect(currentValueSpan.textContent).toContain(": 2");
    expect(multipliedValueSpan.textContent).toContain(": 4");

    // Act
    plusButton.click();
    fixture.detectChanges();

    // Assert
    expect(currentValueSpan.textContent).toContain(": 3");
    expect(multipliedValueSpan.textContent).toContain(": 6");
  });

  it("should decrease the current value and multiplied value with every click of the minus button", () => {
    // Arrange
    fixture.detectChanges();
    const currentValueSpan = selectCurrentValueSpan();
    const multipliedValueSpan = selectMultipliedValueSpan();
    const minusButton = selectMinusButton();

    // Act
    minusButton.click();
    fixture.detectChanges();

    // Assert
    expect(currentValueSpan.textContent).toContain(": 0");
    expect(multipliedValueSpan.textContent).toContain(": 0");

    // Act
    minusButton.click();
    fixture.detectChanges();

    // Assert
    expect(currentValueSpan.textContent).toContain(": -1");
    expect(multipliedValueSpan.textContent).toContain(": -2");
  });
});
