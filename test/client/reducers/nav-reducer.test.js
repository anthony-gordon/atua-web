import { navMenuReducer, navFlipReducer } from "../../../client/reducers/nav";

test("initial state for navMenuReducer", () => {
  const expected = false;
  const action = {};
  const actual = navMenuReducer(undefined, action);

  expect(actual).toBe(expected);
});

test("OPEN_NAV works", () => {
  const expected = true;
  const navOpen = true;
  const initialState = false;
  const action = {
    type: "OPEN_NAV",
    navOpen
  };

  const actual = navMenuReducer(initialState, action);

  expect(actual).toBe(expected);
});

test("CLOSE_NAV works", () => {
  const expected = false;
  const navOpen = false;
  const initialState = true;
  const action = {
    type: "CLOSE_NAV",
    navOpen
  };

  const actual = navMenuReducer(initialState, action);

  expect(actual).toBe(expected);
});

test("navFlipReducer initial state", () => {
  const expected = false;
  const action = {};
  const actual = navFlipReducer(undefined, action);

  expect(actual).toBe(expected);
});

test("FLIP_NAV works", () => {
  const expected = true;
  const navVisible = true;
  const initialState = false;
  const action = {
    type: "FLIP_NAV",
    navVisible
  };

  const actual = navFlipReducer(initialState, action);

  expect(actual).toBe(expected);
});
