import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type BothOfWhatIPassIn<A, B> = {
  a: A;
  b: B;
};

const returnBothOfWhatIPassIn = <A, B>(params: BothOfWhatIPassIn<A, B>) => {
  return {
    first: params.a,
    second: params.b,
  };
};

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
