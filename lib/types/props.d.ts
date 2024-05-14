import { ButtonProps as ElButtonProps } from 'element-plus';
import type { PropType, VNode, ExtractPropTypes } from 'vue';
export declare const definePropType: <T>(val: any) => PropType<T>;
export declare const componentProps: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | ((vm: vm) => VNode | string)>;
export declare type componentProps = ExtractPropTypes<typeof componentProps>;
export declare type buttonPropsParams = BtnConfig | VNode | BtnFnConfig;
export declare const buttonProps: PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | buttonPropsParams[] | ((opt: {
    vm: vm;
    component: any;
    getFooterBtns: any;
}) => VNode | buttonPropsParams[])>;
export declare type buttonProps = ExtractPropTypes<typeof buttonProps>;
interface BtnParam {
    vm: vm;
    ctx: Partial<ElButtonProps>;
    component?: any;
}
export declare type BtnFnConfig = (opt: BtnParam) => void;
export declare type getFooterBtnsFn = (cont: any) => buttonPropsParams[] | VNode;
export interface BtnConfig extends Partial<ElButtonProps> {
    label: string;
    onClick?: BtnFnConfig;
}
export interface vm extends DialogConfig {
    hide: () => void;
    close: () => void;
    [propName: string]: any;
}
export declare const DialogBeforeCloseFn: PropType<(vm: vm, done: any) => void>;
export declare const dialogProps: {
    title: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | ((vm: vm) => VNode | string)>;
        default: string;
    };
    content: {
        type: PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | ((vm: vm) => VNode | string)>;
        default: string;
    };
    buttons: {
        type: PropType<VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | buttonPropsParams[] | ((opt: {
            vm: vm;
            component: any;
            getFooterBtns: any;
        }) => VNode | buttonPropsParams[])>;
        default: never[];
    };
    iframeSrc: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    fullScreenEnable: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    canModalClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: PropType<(vm: vm, done: any) => void>;
        default: () => void;
    };
    afterClose: {
        type: FunctionConstructor;
        default: () => void;
    };
    afterOpen: {
        type: FunctionConstructor;
        default: () => void;
    };
};
export declare type DialogConfig = Partial<ExtractPropTypes<typeof dialogProps>>;
export {};
