import { ButtonProps as ElButtonProps } from 'element-plus'
import type { PropType, VNode, ExtractPropTypes } from 'vue'
export const definePropType = <T>(val: any): PropType<T> => val

export const componentProps = definePropType<string | VNode | ((vm: vm) => VNode | string)>([
  String,
  Object,
  Function,
])
export type componentProps = ExtractPropTypes<typeof componentProps>

export type buttonPropsParams = BtnConfig | VNode | BtnFnConfig

export const buttonProps = definePropType<
  buttonPropsParams[] | VNode | ((opt: { vm: vm; component: any; getFooterBtns: any }) => VNode | buttonPropsParams[])
>([Array, Object, Function])
export type buttonProps = ExtractPropTypes<typeof buttonProps>

interface BtnParam {
  vm: vm
  ctx: BtnParam | buttonProps
  component?: any
}
export type BtnFnConfig = (opt: BtnParam) => void
export type getFooterBtnsFn = (cont: any) => buttonPropsParams[] | VNode

export interface BtnConfig extends Partial<ElButtonProps> {
  label: string
  onClick?: BtnFnConfig
}

export interface vm extends DialogConfig {
  hide: () => void
  close: () => void
  [propName: string]: any
}
export const DialogBeforeCloseFn = definePropType<(vm: vm, done: any) => void>([Function])

export const dialogProps = {
  title: {
    type: componentProps,
    default: '',
  },
  content: {
    type: componentProps,
    default: '',
  },
  buttons: {
    type: buttonProps,
    default: [],
  },
  iframeSrc: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '520px',
  },
  height: {
    type: String,
    default: '',
  },
  zIndex: {
    type: Number,
    default: 1000,
  },
  top: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  fullScreenEnable: {
    type: Boolean,
    default: true,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  resize: {
    type: Boolean,
    default: false,
  },
  canModalClose: {
    type: Boolean,
    default: false,
  },
  beforeClose: {
    type: DialogBeforeCloseFn,
    default: () => {},
  },
  afterClose: {
    type: Function,
    default: () => {},
  },
  afterOpen: {
    type: Function,
    default: () => {},
  },
}

export type DialogConfig = Partial<ExtractPropTypes<typeof dialogProps>>
