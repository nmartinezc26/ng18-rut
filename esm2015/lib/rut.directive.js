import { Directive, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from './rut-helpers';
import * as i0 from "@angular/core";
export class RutDirective {
    constructor() {
        this.rutChange = new EventEmitter();
    }
    onFocus(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
    }
    onBlur(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
    }
    onChange(ev) {
        let htmlInputElement = ev.target;
        this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
    }
}
RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
RutDirective.ɵdir = i0.ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, outputs: { rutChange: "rutChange" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RutDirective, [{
        type: Directive,
        args: [{
                selector: '[formatRut]',
                host: {
                    '(blur)': 'onBlur($event)',
                    '(focus)': 'onFocus($event)',
                    '(input)': 'onChange($event)',
                },
            }]
    }], function () { return []; }, { rutChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFubWVkaWNhL0RvY3VtZW50cy9saWJyZXJpYXMvbmcxOC1ydXQvcHJvamVjdHMvbmd4LXJ1dC9zcmMvIiwic291cmNlcyI6WyJsaWIvcnV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxLQUFLLFVBQVUsTUFBTSxlQUFlLENBQUM7O0FBVTVDLE1BQU0sT0FBTyxZQUFZO0lBR3ZCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxPQUFPLENBQUMsRUFBUztRQUN0QixJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3RFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBUztRQUNyQixJQUFJLGdCQUFnQixHQUF3QyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3RFLGdCQUFnQixDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5RSxDQUFDO0lBRU0sUUFBUSxDQUFDLEVBQVM7UUFDdkIsSUFBSSxnQkFBZ0IsR0FBd0MsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7d0VBcEJVLFlBQVk7aURBQVosWUFBWTs2RkFBWixrQkFBYyw4RUFBZCxtQkFDYiw4RUFEYSxvQkFDWjs7a0RBRFksWUFBWTtjQVJ4QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLElBQUksRUFBRTtvQkFDSixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixTQUFTLEVBQUUsaUJBQWlCO29CQUM1QixTQUFTLEVBQUUsa0JBQWtCO2lCQUM5QjthQUNGO3NDQUVrQixTQUFTO2tCQUF6QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHJ1dEhlbHBlcnMgZnJvbSAnLi9ydXQtaGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmb3JtYXRSdXRdJyxcbiAgaG9zdDoge1xuICAgICcoYmx1ciknOiAnb25CbHVyKCRldmVudCknLFxuICAgICcoZm9jdXMpJzogJ29uRm9jdXMoJGV2ZW50KScsXG4gICAgJyhpbnB1dCknOiAnb25DaGFuZ2UoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1dERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBwdWJsaWMgcnV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJ1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3VzKGV2OiBFdmVudCkge1xuICAgIGxldCBodG1sSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGV2LnRhcmdldDtcbiAgICBodG1sSW5wdXRFbGVtZW50LnZhbHVlID0gcnV0SGVscGVycy5ydXRDbGVhbihodG1sSW5wdXRFbGVtZW50LnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkJsdXIoZXY6IEV2ZW50KSB7XG4gICAgbGV0IGh0bWxJbnB1dEVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZXYudGFyZ2V0O1xuICAgIGh0bWxJbnB1dEVsZW1lbnQudmFsdWUgPSBydXRIZWxwZXJzLnJ1dEZvcm1hdChodG1sSW5wdXRFbGVtZW50LnZhbHVlKSB8fCAnJztcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShldjogRXZlbnQpIHtcbiAgICBsZXQgaHRtbElucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PiBldi50YXJnZXQ7XG4gICAgdGhpcy5ydXRDaGFuZ2UuZW1pdChydXRIZWxwZXJzLnJ1dENsZWFuKGh0bWxJbnB1dEVsZW1lbnQudmFsdWUpKTtcbiAgfVxufVxuIl19