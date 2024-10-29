import { NgModule } from '@angular/core';
import { RutPipe } from './rut.pipe';
import { RutDirective } from './rut.directive';
import { RutValidator } from './rut.validator';
import { RutValueAccessor } from './rut-value-accessor';
import * as i0 from "@angular/core";
export class NgxRutModule {
}
NgxRutModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxRutModule });
NgxRutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxRutModule_Factory(t) { return new (t || NgxRutModule)(); }, providers: [
        RutValidator,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxRutModule, { declarations: [RutPipe,
        RutDirective,
        RutValidator,
        RutValueAccessor], exports: [RutPipe,
        RutDirective,
        RutValidator,
        RutValueAccessor] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxRutModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJ1dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jhbm1lZGljYS9Eb2N1bWVudHMvbGlicmVyaWFzL25nMTgtcnV0L3Byb2plY3RzL25neC1ydXQvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1ydXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQXFCeEQsTUFBTSxPQUFPLFlBQVk7O2dEQUFaLFlBQVk7dUdBQVosWUFBWSxtQkFWWjtRQUNULFlBQVk7S0FDYjt3RkFRVSxZQUFZLG1CQWZyQixPQUFPO1FBQ1AsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0IsYUFNaEIsT0FBTztRQUNQLFlBQVk7UUFDWixZQUFZO1FBQ1osZ0JBQWdCO2tEQUdQLFlBQVk7Y0FqQnhCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osT0FBTztvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsT0FBTztvQkFDUCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJ1dFBpcGUgfSBmcm9tICcuL3J1dC5waXBlJztcbmltcG9ydCB7IFJ1dERpcmVjdGl2ZSB9IGZyb20gJy4vcnV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSdXRWYWxpZGF0b3IgfSBmcm9tICcuL3J1dC52YWxpZGF0b3InO1xuaW1wb3J0IHsgUnV0VmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vcnV0LXZhbHVlLWFjY2Vzc29yJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJ1dFBpcGUsXG4gICAgUnV0RGlyZWN0aXZlLFxuICAgIFJ1dFZhbGlkYXRvcixcbiAgICBSdXRWYWx1ZUFjY2Vzc29yLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBSdXRWYWxpZGF0b3IsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSdXRQaXBlLFxuICAgIFJ1dERpcmVjdGl2ZSxcbiAgICBSdXRWYWxpZGF0b3IsXG4gICAgUnV0VmFsdWVBY2Nlc3NvcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4UnV0TW9kdWxlIHsgfVxuIl19