import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rutValidate } from './rut-helpers';
import * as i0 from "@angular/core";
export function validateRutFactory(rutValidate) {
    return (c) => {
        if (!c.value) {
            return null;
        }
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
export class RutValidator {
    constructor() {
        this.validator = validateRutFactory(rutValidate);
    }
    validate(c) {
        return this.validator(c);
    }
}
RutValidator.ɵfac = function RutValidator_Factory(t) { return new (t || RutValidator)(); };
RutValidator.ɵdir = i0.ɵɵdefineDirective({ type: RutValidator, selectors: [["", "validateRut", "", "ngModel", ""], ["", "validateRut", "", "formControl", ""]], features: [i0.ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
        ])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RutValidator, [{
        type: Directive,
        args: [{
                selector: '[validateRut][ngModel],[validateRut][formControl]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
                ],
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmFubWVkaWNhL0RvY3VtZW50cy9saWJyZXJpYXMvbmcxOC1ydXQvcHJvamVjdHMvbmd4LXJ1dC9zcmMvIiwic291cmNlcyI6WyJsaWIvcnV0LnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFlLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFNUMsTUFBTSxVQUFVLGtCQUFrQixDQUFDLFdBQXFCO0lBQ3RELE9BQU8sQ0FBQyxDQUFjLEVBQUUsRUFBRTtRQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVFELE1BQU0sT0FBTyxZQUFZO0lBR3ZCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sUUFBUSxDQUFDLENBQWM7UUFDNUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7O3dFQVRVLFlBQVk7aURBQVosWUFBWSxvSUFKWjtZQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDckY7a0RBRVUsWUFBWTtjQU54QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1EQUFtRDtnQkFDN0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ3JGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgcnV0VmFsaWRhdGUgfSBmcm9tICcuL3J1dC1oZWxwZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUnV0RmFjdG9yeShydXRWYWxpZGF0ZTogRnVuY3Rpb24pIHtcbiAgcmV0dXJuIChjOiBGb3JtQ29udHJvbCkgPT4geyAgICBcbiAgICBpZiAoIWMudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcnV0VmFsaWRhdGUoYy52YWx1ZSkgPyBudWxsIDogeyBpbnZhbGlkUnV0OiB0cnVlIH07XG4gIH07XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t2YWxpZGF0ZVJ1dF1bbmdNb2RlbF0sW3ZhbGlkYXRlUnV0XVtmb3JtQ29udHJvbF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJ1dFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1dFZhbGlkYXRvciB7XG4gIHByaXZhdGUgdmFsaWRhdG9yOiBGdW5jdGlvbjtcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gdmFsaWRhdGVSdXRGYWN0b3J5KHJ1dFZhbGlkYXRlKTtcbiAgfVxuICBcbiAgcHVibGljIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG59XG4iXX0=