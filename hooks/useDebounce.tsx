import { useCallback } from 'react';
import _ from 'lodash';
export const useDebounce = (handleDebounceFn: any, timer: number = 1000) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(_.debounce(handleDebounceFn, timer), []);
};
