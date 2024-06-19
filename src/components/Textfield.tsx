import type { FormyInputPropsGeneral } from '@/utils.js'
import React from 'react'
import { useFormyField } from 'svag-formy'

export type TextfieldUIProps = {
  value: string
  error?: string
  onChange?: (e: React.ChangeEvent<any>) => any
  onBlur?: () => any
}
export type TextfieldUIType = React.FC<TextfieldUIProps>

export type TextfieldyProps<TTextfieldUIType extends TextfieldUIType = TextfieldUIType> = FormyInputPropsGeneral &
  Omit<React.ComponentProps<TTextfieldUIType>, 'onChange'> & {
    onChange?: (e: React.ChangeEvent<any>, value: string) => any
  }
export type TextfieldyType<TTextfieldUIType extends TextfieldUIType = TextfieldUIType> = React.FC<
  TextfieldyProps<TTextfieldUIType>
>

export const createTextfieldy = <TTextfieldUIType extends TextfieldUIType = TextfieldUIType>(
  TextfieldUI: TTextfieldUIType
) => {
  const Textfieldy: TextfieldyType<TTextfieldUIType> = ({ formy, name, ...restProps }) => {
    const { error, value } = useFormyField({ formy, name })
    const TextfieldUI1 = TextfieldUI as TextfieldUIType
    return (
      <TextfieldUI1
        {...restProps}
        value={value}
        error={error}
        onChange={(e) => {
          const newValue = e.target.value
          void formy.setFieldValue(name, newValue)
          restProps?.onChange?.(e, newValue)
        }}
        onBlur={() => {
          void formy.setFieldTouched(name, true)
          restProps?.onBlur?.()
        }}
      />
    )
  }
  return {
    Textfieldy,
  }
}
