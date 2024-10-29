(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng2-rut', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng2-rut'] = {}, global.ng.core, global.ng.forms));
}(this, (function (exports, i0, forms) { 'use strict';

    var NgxRutService = /** @class */ (function () {
        function NgxRutService() {
        }
        return NgxRutService;
    }());
    NgxRutService.ɵfac = function NgxRutService_Factory(t) { return new (t || NgxRutService)(); };
    NgxRutService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxRutService, factory: NgxRutService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxRutService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

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
        var rut = rutClean(value);
        var rutDigits = parseInt(rut.slice(0, -1), 10);
        var m = 0;
        var s = 1;
        while (rutDigits > 0) {
            s = (s + rutDigits % 10 * (9 - m++ % 6)) % 11;
            rutDigits = Math.floor(rutDigits / 10);
        }
        var checkDigit = (s > 0) ? String((s - 1)) : 'K';
        return (checkDigit === rut.slice(-1));
    }
    function rutFormat(value) {
        var rut = rutClean(value);
        if (rut.length <= 1) {
            return rut;
        }
        var result = rut.slice(-4, -1) + "-" + rut.substr(rut.length - 1);
        for (var i = 4; i < rut.length; i += 3) {
            result = rut.slice(-3 - i, -i) + "." + result;
        }
        return result;
    }

    var RutPipe = /** @class */ (function () {
        function RutPipe() {
        }
        RutPipe.prototype.transform = function (value) {
            return rutFormat(value);
        };
        return RutPipe;
    }());
    RutPipe.ɵfac = function RutPipe_Factory(t) { return new (t || RutPipe)(); };
    RutPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "rut", type: RutPipe, pure: true });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RutPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'rut',
                    }]
            }], null, null);
    })();

    var RutDirective = /** @class */ (function () {
        function RutDirective() {
            this.rutChange = new i0.EventEmitter();
        }
        RutDirective.prototype.onFocus = function (ev) {
            var htmlInputElement = ev.target;
            htmlInputElement.value = rutClean(htmlInputElement.value);
        };
        RutDirective.prototype.onBlur = function (ev) {
            var htmlInputElement = ev.target;
            htmlInputElement.value = rutFormat(htmlInputElement.value) || '';
        };
        RutDirective.prototype.onChange = function (ev) {
            var htmlInputElement = ev.target;
            this.rutChange.emit(rutClean(htmlInputElement.value));
        };
        return RutDirective;
    }());
    RutDirective.ɵfac = function RutDirective_Factory(t) { return new (t || RutDirective)(); };
    RutDirective.ɵdir = i0.ɵɵdefineDirective({ type: RutDirective, selectors: [["", "formatRut", ""]], hostBindings: function RutDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("blur", function RutDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); })("focus", function RutDirective_focus_HostBindingHandler($event) { return ctx.onFocus($event); })("input", function RutDirective_input_HostBindingHandler($event) { return ctx.onChange($event); });
            }
        }, outputs: { rutChange: "rutChange" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RutDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[formatRut]',
                        host: {
                            '(blur)': 'onBlur($event)',
                            '(focus)': 'onFocus($event)',
                            '(input)': 'onChange($event)',
                        },
                    }]
            }], function () { return []; }, { rutChange: [{
                    type: i0.Output
                }] });
    })();

    function validateRutFactory(rutValidate) {
        return function (c) {
            if (!c.value) {
                return null;
            }
            return rutValidate(c.value) ? null : { invalidRut: true };
        };
    }
    var RutValidator = /** @class */ (function () {
        function RutValidator() {
            this.validator = validateRutFactory(rutValidate);
        }
        RutValidator.prototype.validate = function (c) {
            return this.validator(c);
        };
        return RutValidator;
    }());
    RutValidator.ɵfac = function RutValidator_Factory(t) { return new (t || RutValidator)(); };
    RutValidator.ɵdir = i0.ɵɵdefineDirective({ type: RutValidator, selectors: [["", "validateRut", "", "ngModel", ""], ["", "validateRut", "", "formControl", ""]], features: [i0.ɵɵProvidersFeature([
                { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return RutValidator; }), multi: true },
            ])] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RutValidator, [{
                type: i0.Directive,
                args: [{
                        selector: '[validateRut][ngModel],[validateRut][formControl]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: i0.forwardRef(function () { return RutValidator; }), multi: true },
                        ],
                    }]
            }], function () { return []; }, null);
    })();

    var RUT_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return RutValueAccessor; }),
        multi: true,
    };
    var RutValueAccessor = /** @class */ (function () {
        function RutValueAccessor(renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        RutValueAccessor.prototype.writeValue = function (value) {
            var normalizedValue = rutFormat(value) || '';
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', normalizedValue);
        };
        RutValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
        RutValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
        return RutValueAccessor;
    }());
    RutValueAccessor.ɵfac = function RutValueAccessor_Factory(t) { return new (t || RutValueAccessor)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    RutValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: RutValueAccessor, selectors: [["input", "formatRut", ""]], hostBindings: function RutValueAccessor_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("rutChange", function RutValueAccessor_rutChange_HostBindingHandler($event) { return ctx.onChange($event); })("blur", function RutValueAccessor_blur_HostBindingHandler($event) { return ctx.onTouched($event); });
            }
        }, features: [i0.ɵɵProvidersFeature([RUT_VALUE_ACCESSOR])] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(RutValueAccessor, [{
                type: i0.Directive,
                args: [{
                        selector: 'input[formatRut]',
                        host: {
                            '(rutChange)': 'onChange($event)',
                            '(blur)': 'onTouched($event)',
                        },
                        providers: [RUT_VALUE_ACCESSOR],
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, null);
    })();

    var NgxRutModule = /** @class */ (function () {
        function NgxRutModule() {
        }
        return NgxRutModule;
    }());
    NgxRutModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxRutModule });
    NgxRutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxRutModule_Factory(t) { return new (t || NgxRutModule)(); }, providers: [
            RutValidator,
        ] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxRutModule, { declarations: [RutPipe,
                RutDirective,
                RutValidator,
                RutValueAccessor], exports: [RutPipe,
                RutDirective,
                RutValidator,
                RutValueAccessor] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxRutModule, [{
                type: i0.NgModule,
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
            }], null, null);
    })();

    var Ng2Rut = /** @class */ (function () {
        function Ng2Rut() {
        }
        return Ng2Rut;
    }());
    Ng2Rut.ɵmod = i0.ɵɵdefineNgModule({ type: Ng2Rut });
    Ng2Rut.ɵinj = i0.ɵɵdefineInjector({ factory: function Ng2Rut_Factory(t) { return new (t || Ng2Rut)(); }, imports: [[
                NgxRutModule
            ], NgxRutModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Ng2Rut, { imports: [NgxRutModule], exports: [NgxRutModule] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(Ng2Rut, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            NgxRutModule
                        ],
                        exports: [
                            NgxRutModule
                        ],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ng2-rut
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Ng2Rut = Ng2Rut;
    exports.NgxRutModule = NgxRutModule;
    exports.NgxRutService = NgxRutService;
    exports.RutDirective = RutDirective;
    exports.RutPipe = RutPipe;
    exports.RutValidator = RutValidator;
    exports.RutValueAccessor = RutValueAccessor;
    exports.rutClean = rutClean;
    exports.rutFormat = rutFormat;
    exports.rutValidate = rutValidate;
    exports.validateRutFactory = validateRutFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-rut.umd.js.map
