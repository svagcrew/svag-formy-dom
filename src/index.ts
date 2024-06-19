import { createTextfieldy, type TextfieldUIType, type TextfieldyType } from '@/components/Textfield.js'

export const createFormyComponents = <TTextfieldUIType extends TextfieldUIType | undefined>(
  p: {
    TextfieldUI?: TTextfieldUIType
  } = {}
): {
  Textfieldy: TTextfieldUIType extends TextfieldUIType ? TextfieldyType<TTextfieldUIType> : never
} => {
  const components = {
    ...(p.TextfieldUI ? createTextfieldy(p.TextfieldUI) : {}),
  }

  return {
    ...(components as any),
  }
}

export * from '@/components/Textfield.js'
