import { createTextInputy, type TextInputFormyComponent, type TextInputUIComponent } from '@/components/TextInput'

export const createFormyComponents = <TTextInputUIComponent extends TextInputUIComponent>(
  p: {
    TextInput?: TTextInputUIComponent
  } = {}
): {
  TextInputy: TTextInputUIComponent extends TextInputUIComponent
    ? TextInputFormyComponent<TTextInputUIComponent>
    : never
} => {
  const components = {
    ...(p.TextInput ? { TextInputy: createTextInputy(p.TextInput) } : {}),
  }

  return {
    ...(components as any),
  }
}
