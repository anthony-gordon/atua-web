import { textReducer, indexReducer } from "../../../client/reducers/text";

test("text reducer initial state", () => {
  const expected = {};
  const action = {};
  const actual = textReducer(undefined, action);

  expect(actual).toEqual(expected);
});

test("index reducer intiial state", () => {
  const expected = 0;
  const action = {};
  const actual = indexReducer(undefined, action);

  expect(actual).toBe(expected);
});

test("RECEIVE_TEXT works with indexReducer", () => {
  const expected = 0;
  const initialState = 0;
  const action = {
    type: "RECEIVE_TEXT"
  };
  const actual = indexReducer(initialState, action);

  expect(actual).toBe(expected);
});

test("RECEIVE_TEXT works with textReducer", () => {
  const testText = {
    sentence: "this is a test sentence",
    word: "word",
    data: "some data"
  };
  const expected = testText;
  const initialState = {};
  const action = {
    type: "RECEIVE_TEXT",
    text: testText
  };
  const actual = textReducer(initialState, action);

  expect(actual).toEqual(expected);
});

test("CLEAR_TEXT works with textReducer", () => {
  const initialState = {
    sentence: "this is a test sentence",
    word: "word",
    data: "some data"
  };
  const expected = {};
  const action = {
    type: "CLEAR_TEXT",
    text: {}
  };
  const actual = textReducer(initialState, action);

  expect(actual).toEqual(expected);
});

test("INCREASE_INDEX increases state by 1", () => {
  const initialState = 0;
  const expected = initialState + 1;
  const action = {
    type: "INCREASE_INDEX"
  };
  const actual = indexReducer(initialState, action);

  expect(actual).toBe(expected);
});

test("DECREASE_INDEX decreases state by 1", () => {
  const initialState = 2;
  const expected = initialState - 1;
  const action = {
    type: "DECREASE_INDEX"
  };
  const actual = indexReducer(initialState, action);

  expect(actual).toBe(expected);
});
