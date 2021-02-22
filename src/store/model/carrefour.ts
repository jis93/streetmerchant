import {Store} from './store';

export const Carrefour: Store = {
  currency: '€',
  labels: {
    inStock: {
      container: 'div.pdp-pricing__block-right > div.pdp-button-container > div.data-produit-acheter',
      text: [''],
    },
    maxPrice: {
      container: 'div.pdp-pricing__block-left > div.product-card-price > div.product-card-price__price > span.ds-title',
    },
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.carrefour.fr/p/console-playstation-5-edition-standard-sony-interactive-0711719395201'
    }
  ],
  name: 'carrefour',
}