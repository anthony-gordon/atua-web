import {
  getTextByURL,
  receiveText,
  clearText,
  increaseIndex,
  decreaseIndex
} from "../../../client/actions/text";
import nock from "nock";

test("getText will dispatch an action on success", () => {
  const fakeText = ["hello"];

  const scope = nock("http://localhost:80")
    .get("/api/v1/text/hello")
    .reply(200, fakeText);

  const expectedAction = {
    type: "RECEIVE_TEXT",
    text: fakeText
  };

  const dispatch = jest.fn().mockImplementationOnce(action => {
    expect(action).toEqual(expectedAction);
    scope.done();
  });

  getTextByURL()(dispatch);
});

test("clearText", () => {
  const expected = {
    type: "CLEAR_TEXT",
    text: {}
  };
  const actual = clearText();

  expect(actual).toEqual(expected);
});

test("receiveText", () => {
  const text = "a text";
  const expected = {
    type: "RECEIVE_TEXT",
    text
  };
  const actual = receiveText(text);

  expect(actual).toEqual(expected);
});

test("increaseIndex", () => {
  const expected = {
    type: "INCREASE_INDEX"
  };
  const actual = increaseIndex();
  expect(actual).toEqual(expected);
});

test("decreaseIndex", () => {
  const expected = {
    type: "DECREASE_INDEX"
  };
  const actual = decreaseIndex();
  expect(actual).toEqual(expected);
});
