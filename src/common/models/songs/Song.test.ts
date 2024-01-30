import { songIsExplicit } from "./Song";

describe("songIsExplicit", () => {
  it("returns false for non-explicit songs", () => {
    const song = {
      id: "1",
      title: "Test Song",
      artistId: "1",
    };

    expect(songIsExplicit(song)).toBe(false);
  });
});
