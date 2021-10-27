export interface GenericComponentProps<T> {
  prop: T
}

export const GenericComponent = <T>(props: GenericComponentProps<T>) => (
  <div>hello</div>
);