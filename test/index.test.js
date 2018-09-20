const functions = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test('Negative Addition', function(){
  const expected = 2;
  const result = functions.add(-1, 3);
  expect(result).toBe(expected);
});

test('Longest String', function() {
  const expected = "Anthony";
  const result = functions.longestString(["Luke", "Jamal", "Claire", "Anthony"])
  expect(result).toBe(expected);
} )

test('Longest String', function() {
  const expected = "Maximillian";
  const result = functions.longestString(["Luke", "Jamal", "Claire", "Anthony", "Maximillian"])
  expect(result).toBe(expected);
} )

test('Replace Letter', function() {
  const expected = '5ch001';
  const result = functions.replaceLetter('school')
expect(result).toBe(expected);
})

test('Unique Array', function() {
  const expected = ['dog', 'cat', 'bird']; 
  const result = functions.uniqueArray(['dog', 'cat', 'dog', 'cat', 'bird'])
expect(result).toEqual(expected);
})

test("constructor", function(){
  const expected = {
    name: "luke",
    language: ["ruby", "javascript"]
  };

  const luke = new functions.Developer("luke", ["ruby", "javascript"])
  
  expect(luke).toEqual(expected)
})

test("learn language", function(){
  const expected = {
    name: "jamal",
    language: ["ruby", "javascript", "python"]
  };
  const result = expected.learnLanguage('python');

  expect(result).toEqual(expected)
})

