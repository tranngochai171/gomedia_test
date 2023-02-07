export const GET_PROJECTS = 'GET_PROJECTS';

const getQueryKey = {
  getProjectsQueryKey: (
    keyword: string,
    order: string,
    sort: string,
    min_price: number,
    max_price: number,
  ): any[] => [
    GET_PROJECTS,
    { keyword },
    { order },
    { sort },
    { min_price, max_price },
  ],
};

export default getQueryKey;
