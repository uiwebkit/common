/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UniLicense {
        "adk": string;
        "loc": string;
        "mat": string;
        "pro": string;
    }
}
declare global {
    interface HTMLUniLicenseElement extends Components.UniLicense, HTMLStencilElement {
    }
    var HTMLUniLicenseElement: {
        prototype: HTMLUniLicenseElement;
        new (): HTMLUniLicenseElement;
    };
    interface HTMLElementTagNameMap {
        "uni-license": HTMLUniLicenseElement;
    }
}
declare namespace LocalJSX {
    interface UniLicense {
        "adk"?: string;
        "loc"?: string;
        "mat"?: string;
        "pro"?: string;
    }
    interface IntrinsicElements {
        "uni-license": UniLicense;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uni-license": LocalJSX.UniLicense & JSXBase.HTMLAttributes<HTMLUniLicenseElement>;
        }
    }
}
