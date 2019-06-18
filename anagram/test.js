const isAnagram = require('./index');

describe('Anagrams', () => {
  it('anagrams have same length', () => {
    expect(isAnagram('friends', 'friend')).toBe(false);
    expect(isAnagram('abc', 'cba')).toBe(true);
  });
  it('single worded anagrams', () => {
    expect(isAnagram('fluster', 'restful')).toBe(true);
    expect(isAnagram('mindful', 'flumind')).toBe(true);
    expect(isAnagram('test', 'not correct')).toBe(false);
  });

  it('several worded anagrams', () => {
    expect(isAnagram('eleven plus two', 'twelwe plus one')).toBe(false);
  });

  
});
