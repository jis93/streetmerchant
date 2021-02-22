import {Store} from './store';

export const Auchan: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'div.stock-1',
      text: [''],
    },
    maxPrice: {
      container: '#activeOffer > div.product-info > div.wrap-aside > aside > div.price > div',
    },
  },
  links: [],
  name: 'auchan',
}