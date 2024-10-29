import { Pipe } from '@angular/core';
import { rutFormat } from './rut-helpers';
import * as i0 from "@angular/core";
export class RutPipe {
    transform(value) {
        return rutFormat(value);
    }
}
RutPipe.ɵfac = function RutPipe_Factory(t) { return new (t || RutPipe)(); };
RutPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "rut", type: RutPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RutPipe, [{
        type: Pipe,
        args: [{
                name: 'rut',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnV0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jhbm1lZGljYS9Eb2N1bWVudHMvbGlicmVyaWFzL25nMTgtcnV0L3Byb2plY3RzL25neC1ydXQvc3JjLyIsInNvdXJjZXMiOlsibGliL3J1dC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzFDLE1BQU0sT0FBTyxPQUFPO0lBQ1gsU0FBUyxDQUFDLEtBQWE7UUFDNUIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OERBSFUsT0FBTztxREFBUCxPQUFPO2tEQUFQLE9BQU87Y0FIbkIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxLQUFLO2FBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBydXRGb3JtYXQgfSBmcm9tICcuL3J1dC1oZWxwZXJzJztcblxuQFBpcGUoe1xuICBuYW1lOiAncnV0Jyxcbn0pXG5leHBvcnQgY2xhc3MgUnV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBydXRGb3JtYXQodmFsdWUpO1xuICB9XG59XG4iXX0=