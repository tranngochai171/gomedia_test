import moment from 'moment';
import commonConstants from '../constants/common.constant';
const locales = 'en-US';

const CURRENCY_FORMATTER = new Intl.NumberFormat(locales, {
  currency: 'USD',
  style: 'currency',
});

const NUMBER_FORMATTER = new Intl.NumberFormat(locales);

const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(locales, {
  notation: 'compact',
});

const formatUtil = {
  convertObjectIntoQueryString: (object: any = {}): string => {
    return Object.keys(object)
      .filter(
        key =>
          object[key] !== undefined &&
          object[key] !== null &&
          object[key] !== '',
      )
      .map(key => `${key}=${encodeURI(object[key])}`)
      .join('&');
  },
  formatCurrency: (num: number) => {
    return CURRENCY_FORMATTER.format(num);
  },
  formatNumber: (num: number) => {
    return NUMBER_FORMATTER.format(num);
  },
  formatCompactNumber: (num: number) => {
    // 100000 => 100k, 10000000 => 10M
    return COMPACT_NUMBER_FORMATTER.format(num);
  },
  formatDate: ({
    date,
    originalFormat,
    designateFormat = commonConstants.DATE_FORMAT.MM_DD_YYYY,
  }: {
    date: Date | string;
    originalFormat?: string;
    designateFormat?: string;
  }) => {
    let formattedDate = '--';
    try {
      if (originalFormat) {
        formattedDate = moment(date, originalFormat).format(designateFormat);
      } else {
        formattedDate = moment(date).format(designateFormat);
      }
    } catch (err) {
      /* Do nothing */
    }
    return formattedDate;
  },
};

export default formatUtil;
