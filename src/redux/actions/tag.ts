export const ADD_TAG = 'ADD_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const EDIT_TAG = 'EDIT_TAG';

export const addtag = (tagName: string) => (
  {
    payload: tagName,
    type: ADD_TAG,
  }
);

export const deletetag = (tagName: string) => (
  {
    payload: tagName,
    type: DELETE_TAG,
  }
);

export const edittag = (oldtagName: string, newtagName: string) => (
  {
    payload: { oldtagName, newtagName },
    type: ADD_TAG,
  }
);
