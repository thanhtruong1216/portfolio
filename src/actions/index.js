export const LOAD_SINGLE_PROJECT = 'LOAD_SINGLE_PROJECT';

export const fetchSingleProject = singleProject => ({
  type: LOAD_SINGLE_PROJECT,
  singleProject
})