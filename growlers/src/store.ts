import { reactive, watchEffect } from "vue";
import { Beverage } from "./types";

export interface IStore {
  taps: Beverage[];
  searchText: string;
  alcoholLimit: number;
  filteredTaps: Beverage[];
  cart: Beverage[];
}

const store = reactive<IStore>({
  taps: [],
  searchText: "",
  alcoholLimit: 10,
  filteredTaps: [],
  cart: [],
});

const filter = () => {
  const searchRE = new RegExp(store.searchText, "i");
  return store.taps
    .filter(
      ({ beverageName, abv }) =>
        beverageName.match(searchRE) && abv < store.alcoholLimit
    )
    .slice(0, 15);
};

export const load = (client: string): void => {
  fetch(`http://localhost:8080/${client}.json`)
    .then((resp) => resp.json())
    .then((taps) => {
      store.taps = taps;
      store.filteredTaps = filter();
    });
};

export const setSearchText = (text: string): void => {
  store.searchText = text;
  store.filteredTaps = filter();
};

export const setAlcoholLimit = (limit: number): void => {
  store.alcoholLimit = limit;
  store.filteredTaps = filter();
};

export const addToCart = (beverage: Beverage): void => {
  store.cart.push(beverage);
};

type Callback = (store: IStore) => void;
const subscribers: Callback[] = [];
export const subscribe = (callback: Callback) => {
  callback(store);
  subscribers.push(callback);
};

watchEffect(() => {
  const payload = {
    ...store,
  };
  subscribers.forEach((fn) => fn(payload));
});

export default store;
