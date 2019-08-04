export type TypeCache = 'repo' | 'label';

export default interface CacheService {
  loadFromCache(type: TypeCache, key: string): any;
  saveToCache(type: TypeCache, key: string, data: any): void;
  deleteLabelCache(repoName: string): void;
  deleteRepoFromStorage(repoToBeDeleted: string): void;
}
