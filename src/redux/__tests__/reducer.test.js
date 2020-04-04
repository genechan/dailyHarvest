import reducer from "../reducer";
import { USER_INPUT } from "../actions";
describe("Testing Redux Reducer", () => {
  it("Gives an empty state when I give it a unknown type", () => {
    expect(reducer({}, { type: "foobar", payload: "" })).toEqual({});
  });
  it("Gives the user input and list when user enters their query", () => {
    const store = reducer(
      {},
      {
        type: USER_INPUT,
        payload: "kale",
      }
    );
    expect(store.userInput).toBe("kale");
    expect(store.list.length).toBeGreaterThanOrEqual(1);
  });
  it("Resets the store if user searches for empty string", () => {
    expect(reducer({}, { type: USER_INPUT, payload: "" })).toEqual({
      list: [],
      userInput: "",
    });
  });
});
