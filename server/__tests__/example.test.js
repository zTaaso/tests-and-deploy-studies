function soma(a, b) {
  return a + b;
}

test('if i call soma function with 4 and 5 it should return nine', () => {
  const result = soma(4, 5);

  expect(result).toBe(9);
});
