import { LibraryItem } from "./LibraryItem";
import { processedLibraryList } from "./__mocks__/data";

export class YourLibraryService {
  public async getLibraryList(): Promise<LibraryItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(processedLibraryList);
      }, 1000);
    });
  }
}

export const yourLibraryService = new YourLibraryService();
