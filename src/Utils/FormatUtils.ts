import format from 'date-fns/format';
import parse from 'date-fns/parse';

const DATE_SHORT_FORMAT = 'MMM do, yyyy';

/**
 * @class FormatUtils
 * @description Formatting utils for strings
 */
export default class FormatUtils {
  static formatDateString(dateString: string): string {
    const parsedDate = parse(dateString, 'yyyy-MM-dd', new Date());
    return format(parsedDate, DATE_SHORT_FORMAT);
  }
}
