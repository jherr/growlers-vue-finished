import { reactive, watchEffect } from "vue";

const store = reactive({
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

export const load = (client) => {
  fetch(`http://localhost:8080/${client}.json`)
    .then((resp) => resp.json())
    .then((taps) => {
      store.taps = taps;
      store.filteredTaps = filter();
    });
};

export const setSearchText = (text) => {
  store.searchText = text;
  store.filteredTaps = filter();
};

export const setAlcoholLimit = (limit) => {
  store.alcoholLimit = limit;
  store.filteredTaps = filter();
};

export const addToCart = (beverage) => {
  store.cart.push(beverage);
};

const subscribers = [];
export const subscribe = (callback) => {
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
