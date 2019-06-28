export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app');
    return JSON.parse(serializedState || '{}');
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify({
      repos: Array.from(state.repos),
      ui: state.ui,
    });

    localStorage.setItem('app', serializedState);
  } catch {
    return;
  }
};
