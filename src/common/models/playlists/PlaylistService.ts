import { Playlist } from "./Playlist";
import { shortcuts } from "./__mocks__/playlistsData";

export class PlaylistService {
  public async getShortcuts(): Promise<Playlist[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(shortcuts);
      }, 1000);
    });
  }
}

export const playlistService = new PlaylistService();
