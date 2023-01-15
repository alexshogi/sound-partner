import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'sound_partner',
      storage: window.localStorage,
      restoreState: (key, storage) => JSON.parse(storage.getItem(key))
    }).plugin(store);
  });
};
