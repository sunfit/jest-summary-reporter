it(`fails snapshot`, () => {
  expect({
    asd: 23,
    abc: "smthNew"
  }).toMatchSnapshot();
});