const Cstring = require('./index');

describe('Constant String Base Operations', () => {
  it('eval should return initialized value', () => {
    expect(new Cstring('foo').eval()).toBe('foo');
  });

  it('should be able to concatinate two strings', () => {
    const result = new Cstring('foo').concat('bar');
    expect(result.eval()).toBe('foobar');
  });

  it('should support inserting', () => {
    const atStart = new Cstring('bar').insert('foo', 0);
    expect(atStart.eval()).toBe('foobar');

    const inMiddle = new Cstring('bar').insert('foo', 1);
    expect(inMiddle.eval()).toBe('bfooar');


    const atEnd = new Cstring('bar').insert('foo', 4);
    expect(atEnd.eval()).toBe('barfoo');


    const afterEnd = new Cstring('bar').insert('foo', 10);
    expect(afterEnd.eval()).toBe('barfoo');
  });

  it('should support substring', () => {
    const result = new Cstring('foo').concat('bar').substring(0, 3);
    expect(result.eval()).toBe('foo');
  });
});

describe('Constant string immutability tests', () => {
  const start = new Cstring('bar');
  const other = start.concat('foo');

  expect(start.eval()).toBe('bar');
  expect(other.eval()).toBe('barfoo');

});
