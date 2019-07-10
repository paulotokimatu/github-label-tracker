export const loadReposState = () => {
  try {
    const serializedReposData = localStorage.getItem('repos');
    return JSON.parse(serializedReposData || '[]');
  } catch (err) {
    return undefined;
  }
};

export const saveReposState = (repos: any) => {
  try {
    const stringifiedState = JSON.stringify(Array.from(repos));

    localStorage.setItem('repos', stringifiedState);
  } catch {
    return;
  }
};

export const deleteRepoFromStorage = (repoToBeDeleted: string) => {
  try {
    const reposData = loadReposState();

    const reposUpdated = reposData.filter((repo: string) => {
      return repo !== repoToBeDeleted;
    });

    saveReposState(reposUpdated);
  } catch {
    return;
  }
};
