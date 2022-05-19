import { getGifs } from "../../helpers/getGifs";

describe("Test getGifs", () => {
  test("should get 10 elements", async () => {
    const gifs = await getGifs("Spirited away");
    expect(gifs.length).toBe(20);
  });

  test("should get no elements", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
