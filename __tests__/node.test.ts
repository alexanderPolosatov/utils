import { parseArgs } from '../src/node'

function getMockProcess(args: string[]) {
  return {
    argv: ['p1', 'p2', ...args]
  } as NodeJS.Process
}

describe('parseArgs', () => {
  test('parses a flag without a value', () => {
    const mockProcess = getMockProcess(['--verbose']);
    const result = parseArgs(mockProcess);
    expect(result).toEqual({ verbose: true });
  });

  test('parses a flag with a simple value', () => {
    const mockProcess = getMockProcess(['--name', 'Alice']);
    const result = parseArgs(mockProcess);
    expect(result).toEqual({ name: 'Alice' });
  });

  test('parses multiple flags with and without values', () => {
    const mockProcess = getMockProcess(['--verbose', '--name', 'Alice', '--age', '30']);
    const result = parseArgs(mockProcess);
    expect(result).toEqual({
      verbose: true,
      name: 'Alice',
      age: '30'
    });
  });

  test('handles consecutive flags without values correctly', () => {
    const mockProcess = getMockProcess(['--debug', '--test']);
    const result = parseArgs(mockProcess);
    expect(result).toEqual({
      debug: true,
      test: true
    });
  });

  test('ignores arguments without a "--" prefix', () => {
    const mockProcess = getMockProcess(['random', '--flag']);
    const result = parseArgs(mockProcess);
    expect(result).toEqual({
      flag: true
    });
  });

  test('returns an empty object when no arguments are provided', () => {
    const mockProcess = getMockProcess([]);
    const result = parseArgs(mockProcess);
    expect(result).toEqual({});
  });

  test('handles a flag without a value after a key-value pair correctly', () => {
    type Schema = {
      key: 'string';
      flag: 'boolean';
    };

    const mockProcess = getMockProcess(['--key', 'value', '--flag']);
    const result = parseArgs<Schema>(mockProcess);
    expect(result).toEqual({
      key: 'value',
      flag: true
    });
  });
});
