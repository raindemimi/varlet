import { VarComponent, BasicAttributes, Direction as StepsDirection } from './varComponent'

export interface StepsProps extends BasicAttributes {
  active?: string | number
  direction?: StepsDirection
  activeColor?: string
  inactiveColor?: string
  onClickStep?: (index: number) => void
}

export class Steps extends VarComponent {
  $props: StepsProps
}

export class _StepsComponent extends Steps {}
