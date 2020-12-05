
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtRateProps extends AtComponent {
  /**
   * 评分星星大小
   * @default 20
   */
  size?: number
  /**
   * 当前评分,开发者需要通过 onChange 事件来更新 value 值，必填
   */
  value?: number
  /**
   * 最大评分
   * @default 5
   */
  max?: number
  /**
   * 星星间隔,单位根据环境自动转为 rpx 或 rem
   * @default 5
   */
  margin?: number
  /**
   * 图标类型，仅支持 'star' 和 'heart'
   * @default 'star'
   */
  icon?: 'star' | 'heart'
  /**
   * 图标颜色
   * @default '#FFCA3E'
   */
  color?: string
  /**
   * 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读
   */
  onChange?: CommonEventFunction
}

