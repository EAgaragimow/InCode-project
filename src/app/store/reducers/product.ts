import {Product} from '../../shared/models/product.model';

export interface State {
  product: Product;
}

export const initialState: State = {
  product: {
    title: 'Nokia C5-00',
    description: '..description text for Nokia C5-00..',
    neil: 'https://moscow.shop.megafon.ru/images/goods/382/38296_p_21.png',
    price: 1350,
    stock: 35,
    id: 1
  }
};
