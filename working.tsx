export interface GenericComponentProps<T> {
  prop: T
}

export const GenericComponent = <T extends unknown = unknown>(props: GenericComponentProps<T>) => (
  <div>hello</div>
);