type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type PathImpl<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${FieldName<V>}`;
type IsTuple<T extends ReadonlyArray<unknown>> = number extends T['length'] ? false : true;
type TupleKeys<T extends ReadonlyArray<unknown>> = Exclude<keyof T, keyof unknown[]>;
type ArrayKey = number;

export type FieldName<T> = T extends ReadonlyArray<infer V>
  ? IsTuple<T> extends true
    ? {
        [K in TupleKeys<T>]-?: PathImpl<K & string, T[K]>;
      }[TupleKeys<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<K & string, T[K]>;
    }[keyof T];
