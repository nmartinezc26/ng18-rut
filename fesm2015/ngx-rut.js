import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefinePipe, Pipe, EventEmitter, ɵɵdefineDirective, ɵɵlistener, Directive, Output, ɵɵProvidersFeature, forwardRef, ɵɵdirectiveInject, Renderer2, ElementRef, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

class NgxRutService {
    constructor() { }
}
NgxRutService.ɵfac = function NgxRutService_Factory(t) { return new (t || NgxRutService)(); };
NgxRutService.ɵprov = ɵɵdefineInjectable({ token: NgxRutService, factory: NgxRutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxRutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function rutClean(value) {
    if (typeof value === 'string') {
        return value
            .replace(/[^0-9kK]+/g, '')
            .replace(/^0+/, '')
            .toUpperCase();
    }
    return '';
}
function rutValidate(value) {
    if (typeof value !== 'string') {
        return false;
    }
    const rut = rutClean(value);
    let rutDigits = parseInt(rut.slice(0, -1), 10);
    let m = 0;
    let s = 1;
    while (rutDigits > 0) {
        s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11;
        rutDigits = Math.floor(rutDigits / 10);
    }
    const checkDigit = (s > 0) ? String((s - 1)) : 'K';
    return (checkDigit === rut.slice(-1));
}
function rutFormat(value) {
    const rut = rutClean(value);
    if (rut.length <= 1) {
        return rut;
    }
    let result = `${rut.slice(-4, -1)}-${rut.substr(rut.length - 1)}`;
    for (let i = 4; i < rut.length; i += 3) {
        result = `${rut.slice(-3 - i, -i)}.${result}`;
    }
    return result;
}

class RutPipe {
    transform(value) {
        return rutFormat(value);
    }
}
RutPipe.ɵfac = function RutPipe_Factory(t) { return new (t || RutPipe)(); };
RutPipe.ɵpipe = ɵɵdefinePipe({ name: "rut", type: RutPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RutPipe, [{
        type: Pipe,
        args: [{
                name: 'rut',
            }]
    }], null, null); })();

class RutDirective {
    constructor() {
        this.rutChange = new EventEmitter();
    }
    onFocus(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutClean(htmlInputElement.value);
    }
    onBlur(ev) {
        let htmlInputElement = ev.target;
        htmlInputElement.value = rutFormat(htmlInputElement.value) || '';
    }
    onChange(ev) {
        let htmlInputElement = ev.target;
        this.rutChange.emit(rutClean(htmlInputElement.value));
    }
}
RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
RutDirective.ɵdir = ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
    } }, outputs: { rutChange: "rutChange" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RutDirective, [{
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

function validateRutFactory(rutValidate) {
    return (c) => {
        if (!c.value) {
            return null;
        }
        return rutValidate(c.value) ? null : { invalidRut: true };
    };
}
class RutValidator {
    constructor() {
        this.validator = validateRutFactory(rutValidate);
    }
    validate(c) {
        return this.validator(c);
    }
}
RutValidator.ɵfac = function RutValidator_Factory(t) { return new (t || RutValidator)(); };
RutValidator.ɵdir = ɵɵdefineDirective({ type: RutValidator, selectors: [["", "validateRut", "", "ngModel", ""], ["", "validateRut", "", "formControl", ""]], features: [ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
        ])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RutValidator, [{
        type: Directive,
        args: [{
                selector: '[validateRut][ngModel],[validateRut][formControl]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RutValidator), multi: true },
                ],
            }]
    }], function () { return []; }, null); })();

const RUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RutValueAccessor),
    multi: true,
};
class RutValueAccessor {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        let normalizedValue = rutFormat(value) || '';
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
    }
    registerOnChange(fn) { this.onChange = fn; }
    registerOnTouched(fn) { this.onTouched = fn; }
}
RutValueAccessor.ɵfac = function RutValueAccessor_Factory(t) { return new (t || RutValueAccessor)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
RutValueAccessor.ɵdir = ɵɵdefineDirective({ type: RutValueAccessor, selectors: [["input", "formatRut", ""]], hostBindings: function RutValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("rutChange", function RutValueAccessor_rutChange_HostBindingHandler($event) { return ctx.onChange($event); })("blur", function RutValueAccessor_blur_HostBindingHandler($event) { return ctx.onTouched($event); });
    } }, features: [ɵɵProvidersFeature([RUT_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RutValueAccessor, [{
        type: Directive,
        args: [{
                selector: 'input[formatRut]',
                host: {
                    '(rutChange)': 'onChange($event)',
                    '(blur)': 'onTouched($event)',
                },
                providers: [RUT_VALUE_ACCESSOR],
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, null); })();

class NgxRutModule {
}
NgxRutModule.ɵmod = ɵɵdefineNgModule({ type: NgxRutModule });
NgxRutModule.ɵinj = ɵɵdefineInjector({ factory: function NgxRutModule_Factory(t) { return new (t || NgxRutModule)(); }, providers: [
        RutValidator,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxRutModule, { declarations: [RutPipe,
        RutDirective,
        RutValidator,
        RutValueAccessor], exports: [RutPipe,
        RutDirective,
        RutValidator,
        RutValueAccessor] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxRutModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RutPipe,
                    RutDirective,
                    RutValidator,
                    RutValueAccessor,
                ],
                providers: [
                    RutValidator,
                ],
                exports: [
                    RutPipe,
                    RutDirective,
                    RutValidator,
                    RutValueAccessor,
                ],
            }]
    }], null, null); })();

class Ng2Rut {
}
Ng2Rut.ɵmod = ɵɵdefineNgModule({ type: Ng2Rut });
Ng2Rut.ɵinj = ɵɵdefineInjector({ factory: function Ng2Rut_Factory(t) { return new (t || Ng2Rut)(); }, imports: [[
            NgxRutModule
        ], NgxRutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Ng2Rut, { imports: [NgxRutModule], exports: [NgxRutModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2Rut, [{
        type: NgModule,
        args: [{
                imports: [
                    NgxRutModule
                ],
                exports: [
                    NgxRutModule
                ],
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-rut
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Ng2Rut, NgxRutModule, NgxRutService, RutDirective, RutPipe, RutValidator, RutValueAccessor, rutClean, rutFormat, rutValidate, validateRutFactory };
//# sourceMappingURL=ngx-rut.js.map
