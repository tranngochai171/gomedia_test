const commonConstants = {
  GET: 'GET',
  POST: 'POST',
  SOMETHING_WENT_WRONG: 'Something went wrong',
  PROJECTS_DEFAULT_QUERY_PARAMS: {
    limit: 8,
    start: 0,
    end: 0,
    q: '',
    sort: 'title',
    order: 'ASC',
    min_price: 0,
    max_price: 0,
  },
  DATE_FORMAT: {
    MM_DD_YYYY: 'MM/DD/YYYY',
    MM_DD_YY: 'MM/DD/YY',
  },
  PROJECTS_ORDER_OPTIONS: [
    { value: 'ASC', label: 'ASC' },
    { value: 'DESC', label: 'DESC' },
  ],
  PROJECTS_SORT_OPTIONS: [
    { value: 'id', label: 'id' },
    { value: 'title', label: 'title' },
    { value: 'max_price', label: 'max_price' },
  ],
  PROJECTS_PRICE_MIN_MAX: {
    STEP: 1_000_000,
    MIN: 0,
    MID: 50_000_000,
    MAX: 100_000_000,
  },
};

export default commonConstants;
