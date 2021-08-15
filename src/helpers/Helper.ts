import _ from 'lodash';
import qs, { IParseOptions } from 'qs';

export const camelOrPascalToSentenceCase = (value: string) => _.startCase(value || '');

export function qsStringify(query: any, options?: qs.IStringifyOptions) {
  try {
    const cloneQuery = _.cloneDeep(query);

    // add square brackkets to identify array with single value
    for (let i = 0; i < Object.keys(cloneQuery).length; i += 1) {
      const property = cloneQuery[i];

      if (Array.isArray(cloneQuery[property]) && cloneQuery[property].length === 1 && !property.includes('[]')) {
        cloneQuery[`${property}[]`] = cloneQuery[property];
        delete cloneQuery[property];
      }
    }

    return qs.stringify(cloneQuery, {
      /** handling array query string, will convert to => des=hanoi&des=hai%20phong */
      arrayFormat: 'repeat',
      addQueryPrefix: true,
      ...options,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 *
 * @param queryString did not need to substring/remove the question mark
 * @param options
 */
export function qsParse(queryString: string, options?: IParseOptions & { decoder?: never }) {
  return qs.parse(queryString, { ignoreQueryPrefix: true, ...options });
}
