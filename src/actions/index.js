export const LOAD_SINGLE_NEWS = 'LOAD_SINGLE_NEWS';

export const fetchSingleNews = singleNews => ({
  type: LOAD_SINGLE_NEWS,
  singleNews
})