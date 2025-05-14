import reducer, {
  increment,
  decrement,
} from "../src/features/counter/counterSlice";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({ value: 0 });
  });

  it("should handle increment", () => {
    const initialState = { value: 0 };
    expect(reducer(initialState, increment())).toEqual({ value: 1 });
  });

  it("should handle decrement", () => {
    const initialState = { value: 1 };
    expect(reducer(initialState, decrement())).toEqual({ value: 0 });
  });
});
