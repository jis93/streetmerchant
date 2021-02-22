import {Store} from './store';

export const Boulanger: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'div.pb-right > div.onlinePurchase.on',
      text: [''],
    },
    maxPrice: {
      container: 'div.pb-top > div.pb-left > div.price > p > span.exponent',
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.boulanger.com/ref/1147567'
    }
  ],
  name: 'boulanger',
}