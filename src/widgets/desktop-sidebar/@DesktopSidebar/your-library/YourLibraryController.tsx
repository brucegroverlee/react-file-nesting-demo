import { YourLibrary } from "./YourLibrary";
import { useYourLibraryList } from "./model/useYourLibraryList";

export const YourLibraryController = () => {
  const { isLoading, libraryList } = useYourLibraryList();

  return <YourLibrary loading={isLoading} libraryList={libraryList} />;
};
