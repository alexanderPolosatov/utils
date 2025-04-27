export type TypeMap = {
  string: string;
  number: number;
  boolean: boolean;
};

export type ParseArgsArgSchema = Record<string, keyof TypeMap>;

