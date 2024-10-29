import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare function validateRutFactory(rutValidate: Function): (c: FormControl) => {
    invalidRut: boolean;
};
export declare class RutValidator {
    private validator;
    constructor();
    validate(c: FormControl): any;
    static ɵfac: i0.ɵɵFactoryDef<RutValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RutValidator, "[validateRut][ngModel],[validateRut][formControl]", never, {}, {}, never>;
}
//# sourceMappingURL=rut.validator.d.ts.map