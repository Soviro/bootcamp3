const isAnagram = require('./anagram')

test('teste si string1 est une anagram de string2', () => {
 
    expect(isAnagram('chat','atch')).toBe(true);
  
})