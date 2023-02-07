import commonConstants from 'constants/common.constant';
import axiosHelper from 'helpers/axios.helper';
import { useCallback, useRef } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFilterProperties } from 'redux/selectors/projects.selector';
import {
  PROPERTY_KEY,
  resetAllProperties,
  setProperties,
} from 'redux/slices/products.slice';
import getQueryKey, { GET_PROJECTS } from 'utils/get-query-key';
import produce from 'immer';
import { ProductItemListType } from 'types/product.type';
import { useDebounce } from './useDebounce';
import formatUtil from 'utils/format.util';
import { SelectChangeEvent } from '@mui/material';

export const useGetProjects = () => {
  const {
    start,
    limit,
    keyword,
    order,
    sort,
    min_price,
    max_price,
  } = useSelector(getProductsFilterProperties);
  const _startRef = useRef(start);
  const _endRef = useRef(start);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const backTo1stPage = useCallback(() => {
    _startRef.current = commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start;
    _endRef.current = commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start;
    // queryClient.removeQueries([GET_PROJECTS]);
  }, []);

  const handleDebounceFn = useCallback(
    (inputValue: string) => {
      backTo1stPage();
      dispatch(
        setProperties([
          { type: PROPERTY_KEY.KEYWORD, value: inputValue },
          {
            type: PROPERTY_KEY.START,
            value: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start,
          },
        ]),
      );
    },
    [backTo1stPage, dispatch],
  );

  const handleChangeInput = useDebounce(handleDebounceFn);
  const onHandleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeInput(e.target.value);
  };
  const onHandleChangeOrder = (event: SelectChangeEvent) => {
    backTo1stPage();
    dispatch(
      setProperties([
        { type: PROPERTY_KEY.ORDER, value: event.target.value as string },
        {
          type: PROPERTY_KEY.START,
          value: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start,
        },
      ]),
    );
  };
  const onHandleChangePrice = useCallback(
    (newValue: number | number[]) => {
      const value = newValue as number[];
      backTo1stPage();
      dispatch(
        setProperties([
          { type: PROPERTY_KEY.MIN_PRICE, value: value[0] },
          { type: PROPERTY_KEY.MAX_PRICE, value: value[1] },
          {
            type: PROPERTY_KEY.START,
            value: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start,
          },
        ]),
      );
    },
    [backTo1stPage, dispatch],
  );
  const onHandleChangeSort = (event: SelectChangeEvent) => {
    backTo1stPage();
    dispatch(
      setProperties([
        { type: PROPERTY_KEY.SORT, value: event.target.value as string },
        {
          type: PROPERTY_KEY.START,
          value: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start,
        },
      ]),
    );
  };
  const query = useInfiniteQuery(
    getQueryKey.getProjectsQueryKey(keyword, order, sort, min_price, max_price),
    async ({ pageParam = { forward: true } }) => {
      let startQuery = 0;
      let endQuery = 0;
      if (pageParam.forward) {
        startQuery = _endRef.current;
        endQuery = _endRef.current + limit;
      } else {
        endQuery = _startRef.current;
        startQuery = _startRef.current - limit;
        startQuery = startQuery < 0 ? 0 : startQuery;
      }
      const queryString = formatUtil.convertObjectIntoQueryString({
        _start: startQuery,
        _end: endQuery,
        q: keyword,
        _order: order,
        _sort: sort,
        min_price,
        max_price,
      });
      const response = await axiosHelper.get(`/api/projects?${queryString}`);
      if (pageParam.forward) {
        _endRef.current = _endRef.current + limit;
      } else {
        _startRef.current = _startRef.current - limit;
      }
      const data = produce(
        response?.data as { count: number; projects: ProductItemListType[] },
        draft => {
          if (draft?.projects?.length > 0) {
            let temp = _startRef.current;
            for (let i = 0; i < draft?.projects?.length; i++) {
              draft.projects[i].startCursor = temp++;
            }
          }
          return draft;
        },
      );

      return data;
    },
    {
      getPreviousPageParam: (
        firstPage: any,
        pages: any,
      ): undefined | { forward: boolean } => {
        if (firstPage?.count < 1 || _startRef.current <= 0) {
          return undefined;
        } else {
          return { forward: false };
        }
      },
      getNextPageParam: (
        lastPage: any,
        pages: any,
      ): undefined | { forward: boolean } => {
        if (lastPage?.count < 1) {
          return undefined;
        } else {
          return { forward: true };
        }
      },
    },
  );

  const resetAllFilter = () => {
    backTo1stPage();
    dispatch(resetAllProperties());
  };

  return {
    query,
    resetAllFilter,
    keyword,
    onHandleChangeKeyword,
    order,
    onHandleChangeOrder,
    sort,
    onHandleChangeSort,
    min_price,
    max_price,
    onHandleChangePrice,
  };
};
