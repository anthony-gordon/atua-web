import { flipNav, openNav, closeNav } from "../../../client/actions/nav";

test("flipNav action working", () => {
  const navVisible = true;
  const expected = {
    type: "FLIP_NAV",
    navVisible
  };
  const actual = flipNav(navVisible);

  expect(actual).toEqual(expected);
});

test("openNav action working", () => {
  const expected = {
    type: "OPEN_NAV",
    navOpen: true
  };

  const actual = openNav();

  expect(actual).toEqual(expected);
});

test("closeNav action working", () => {
  const expected = {
    type: "CLOSE_NAV",
    navOpen: false
  };

  const actual = closeNav();

  expect(actual).toEqual(expected);
});
