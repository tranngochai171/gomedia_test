import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import commonConstants from '../../constants/common.constant';

export const PROPERTY_KEY = {
  LIMIT: 'limit',
  START: 'start',
  END: 'end',
  KEYWORD: 'keyword',
  SORT: 'sort',
  ORDER: 'order',
  MIN_PRICE: 'min_price',
  MAX_PRICE: 'max_price',
};

const initialState = {
  limit: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.limit,
  start: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.start,
  end: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.end,
  keyword: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.q,
  sort: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.sort,
  order: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.order,
  min_price: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.min_price,
  max_price: commonConstants.PROJECTS_DEFAULT_QUERY_PARAMS.max_price,
};

type PayloadProperty = {
  type: string;
  value: string | number | Date[] | any[];
};

type PayloadProperties = PayloadProperty[];

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProperty: (state, action: PayloadAction<PayloadProperty>) => {
      // @ts-ignore
      state[action.payload.type] = action.payload.value;
    },
    setProperties: (state, action: PayloadAction<PayloadProperties>) => {
      if (action.payload.length > 0) {
        action.payload.forEach((item: PayloadProperty) => {
          if (state.hasOwnProperty(item.type)) {
            // @ts-ignore
            state[item.type] = item.value;
          }
        });
      }
    },
    resetAllProperties: state => {
      return initialState;
    },
  },
});

export const { setProperty, setProperties, resetAllProperties } =
  ProductsSlice.actions;

export default ProductsSlice.reducer;
