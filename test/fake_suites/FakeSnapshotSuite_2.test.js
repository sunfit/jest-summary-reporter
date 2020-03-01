it(`fails snapshot`, () => {
  expect({
    asd: 23,
    abc: "smthUpdatedToFailSnapshot"
  }).toMatchSnapshot();
});