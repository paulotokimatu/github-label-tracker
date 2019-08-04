import CacheService, { TypeCache } from './cacheService.interface';

class LocalStorageService implements CacheService {
  public loadFromCache(type: TypeCache, key: string) {
    try {
      const serializedReposData = localStorage.getItem(`${type}-${key}`);

      return serializedReposData ? JSON.parse(serializedReposData) : null;
    } catch {
      return;
    }
  }

  public saveToCache(type: TypeCache, key: string, data: any) {
    try {
      const stringifiedState = JSON.stringify(data);

      localStorage.setItem(`${type}-${key}`, stringifiedState);
    } catch {
      return;
    }
  }

  public deleteLabelCache(repoName: string) {
    try {
      localStorage.removeItem(`labels-${repoName}`);
    } catch (err) {
      return;
    }
  }

  public deleteRepoFromStorage(repoToBeDeleted: string) {
    try {
      const reposData = this.loadFromCache('repo', 'all');

      const reposUpdated = reposData.filter((repo: string) => {
        return repo !== repoToBeDeleted;
      });

      this.saveToCache('repo', 'all', reposUpdated);
    } catch {
      return;
    }
  }
}

const localStorageService: CacheService = new LocalStorageService();

export default localStorageService;
