import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  receiveWeather,
  requestWeather,
  getWeather
} from "../../../client/actions/weather";
import nock from "nock";

test("requestWeather action works", () => {
  const expected = {
    type: REQUEST_WEATHER
  };

  const actual = requestWeather();
  expect(actual).toEqual(expected);
});

test("receiveWeather action adds weather to state", () => {
  const expected = {
    type: RECEIVE_WEATHER
  };
  const actual = receiveWeather();
  expect(actual).toEqual(expected);
});

test("getWeather will dispatch an action on success", () => {
  const fakeWeather = [
    {
      rain: "heavy",
      temp: 20,
      wind_dir: "SSE"
    }
  ];

  const scope = nock("http://localhost:80")
    .get("/api/v1/weather")
    .reply(200, fakeWeather);

  const dispatch = jest.fn();

  return getWeather()(dispatch).then(() => {
    expect(dispatch.mock.calls.length).toBe(2);
    expect(dispatch.mock.calls[0][0].type).toBe("REQUEST_WEATHER");
    expect(dispatch.mock.calls[1][0].type).toBe("RECEIVE_WEATHER");
    scope.done();
  });
});
