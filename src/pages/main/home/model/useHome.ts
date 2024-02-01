import { useQuery } from "@tanstack/react-query";
import { playlistService } from "src/common/models/playlists/PlaylistService";

export function useHome() {
  const { isLoading, data } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const shortcuts = await playlistService.getShortcuts();

      return {
        shortcuts,
      };
    },
  });

  const shortcuts = data?.shortcuts ?? [];

  return {
    isLoading,
    shortcuts,
  };
}
