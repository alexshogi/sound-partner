import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'paxton_garage',
      storage: window.localStorage,
      restoreState: (key, storage) => JSON.parse(storage.getItem(key))
    }).plugin(store);
  });
};
