import { Song } from "src/common/models/songs/Song";
import { Artist } from "src/common/models/artists/Artist";
import { Album } from "src/common/models/albums/Album";
import { Playlist } from "src/common/models/playlists/Playlist";

export interface PlayerTrack {
  song?: Song;
  artist?: Artist;
  album?: Album;
  playlists?: Playlist[];
}
