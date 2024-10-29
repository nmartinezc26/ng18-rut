import { ControlValueAccessor } from '@angular/forms';
import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RutValueAccessor implements ControlValueAccessor {
    private renderer;
    private elementRef;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    onChange: any;
    onTouched: any;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDef<RutValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<RutValueAccessor, "input[formatRut]", never, {}, {}, never>;
}
//# sourceMappingURL=rut-value-accessor.d.ts.map