import { createSelector } from 'reselect';

const filtersSelector = state => state.filter.get('filters');
const tagsSelector = state => state.filter.get('tags');
const offersCountSelector = state => state.bathhouse.get('valid').size;

export const filtersListSelectors = createSelector(
  filtersSelector,
  tagsSelector,
  offersCountSelector,
  (filters, tags, offersCount) => {
    return {
      tags,
      offersCount,
      datetime: filters.get('datetime'),
      distance: filters.get('distance'),
      guest: filters.get('guest'),
      prepayment: filters.get('prepayment'),
      price: filters.get('price'),
      searchName: filters.get('searchName'),
      sorting: filters.get('sorting'),
      options: filters.get('options'),
      types: filters.get('types'),
    };
  }
);
