/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Vuex from 'vuex';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  addDoc,
  getDoc,
  deleteDoc,
  Timestamp,
  query,
  where,
  documentId
} from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQVE-VW2NTNCCCiiiIdA-BTwJ_7-4wjkg",
  authDomain: "paxton-garage-c65b9.firebaseapp.com",
  projectId: "paxton-garage-c65b9",
  storageBucket: "paxton-garage-c65b9.appspot.com",
  messagingSenderId: "1047573840648",
  appId: "1:1047573840648:web:595f8f0bd19d1a2b70a2bd",
  measurementId: "G-WTDB05ZTD2"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);
const storage = getStorage();

const auth = getAuth(app);

Vue.use(Vuex);

const convertTimestamp = (timestamp) => {
	let date = timestamp.toDate();
	let mm = date.getMonth();
	let dd = date.getDate();
	let yyyy = date.getFullYear();

	date = dd + '/' + mm + '/' + yyyy;
	return date;
}

const store = () => new Vuex.Store({
  state: {
    vehicle: {},
    dbVehicle: {},
    vehicles: [],
    sameVehicles: [],
    sameVehiclesChosen: [],
    orders: [],
    user: null
  },

  mutations: {
    SET_VEHICLE(state, vehicle) {
      state.vehicle = { ...vehicle };
    },
    SET_VEHICLES(state, vehicles) {
      state.vehicles = [ ...vehicles ];
    },
    SET_SAME_VEHICLES(state, sameVehicles) {
      state.sameVehicles = [ ...sameVehicles ];
    },
    SET_SAME_VEHICLES_CHOSEN(state, sameVehiclesChosen) {
      state.sameVehiclesChosen = [ ...sameVehiclesChosen ];
    },
    SET_ORDERS(state, orders) {
      state.orders = [ ...orders ];
    },
    ADD_VEHICLE(state, vehicle) {
      state.vehicles.push(vehicle);
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    SET_DB_VEHICLE(state, vehicle) {
      state.dbVehicle = { ...vehicle };
    }
  },

  actions: {
    setVehicle({ commit }, vehicle) {
      commit('SET_VEHICLE', vehicle);
    },
    async getVehicles({ commit }) {
      const colRef = collection(db, 'vehicles');
      const docsSnap = await getDocs(colRef);

      const vehicles = [];
      docsSnap.forEach(doc => {
        const obj = doc.data();
        obj.id = doc.id;
        vehicles.push(obj);
      })

      commit('SET_VEHICLES', vehicles);

      return new Promise((resolve, reject) => {
        resolve(vehicles);
      })
    },
    async getSameVehicles({ commit }, data) {
      const q = query(collection(db, 'vehicles'), where('brand', '==', data.brand), where('model', '==', data.model), where('color', '!=', data.color));

      const querySnapshot = await getDocs(q);

      const sameVehicles = [];

      querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        sameVehicles.push(obj);
      });

      commit('SET_SAME_VEHICLES', sameVehicles);
    },
    async getSameVehiclesChosen({ commit }, data) {
      const q = query(collection(db, 'vehicles'), where(documentId(), 'in', data));

      const querySnapshot = await getDocs(q);

      const sameVehicles = [];

      querySnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        sameVehicles.push(obj);
      });

      return new Promise((resolve, reject) => {
        resolve(sameVehicles);
      })
    },
    async getOrders({ commit }) {
      const colRef = collection(db, 'orders');
      const docsSnap = await getDocs(colRef);

      const orders = [];
      docsSnap.forEach(doc => {
        const obj = doc.data();
        obj.id = doc.id;
        obj.dateFrom = convertTimestamp(obj.date_from);
        obj.dateTo = convertTimestamp(obj.date_to);
        orders.push(obj);
      })

      commit('SET_ORDERS', orders);
    },
    async createOrder({ commit }, data) {
      const docData = {
        brand: data.brand,
        model: data.model,
        date_from: Timestamp.fromDate(new Date(data.date_from)),
        date_to: Timestamp.fromDate(new Date(data.date_to)),
        email: data.email,
        name: data.name,
        phone: data.phone,
        vehicle_id: data.vehicle_id,
        vehicle_brand: data.brand,
        vehicle_model: data.model,
      };

      const colRef = collection(db, 'orders');

      await addDoc(colRef, docData)
        .then(docRef => {})
        .catch(error => {
          console.error(error);
        })
    },
    async createVehicle({ commit }, data) {
      const docData = {
        brand: data.brand,
        model: data.model,
        color: data.color,
        category: data.category,
        engine_cylinder: parseInt(data.engine_cylinder),
        engine_volume: parseInt(data.engine_volume),
        engine_power: parseInt(data.engine_power),
        d_price: parseInt(data.d_price),
        w_price: parseInt(data.w_price),
        m_price: parseInt(data.m_price),
        seat: data.seat,
        type: data.type,
        type_of_bike: data.type_of_bike,
        image: data.image,
        images: data.images,
        same: [],
      };

      const dbRef = collection(db, 'vehicles');

      if (data.image.name && data.image.dataUrl) {
        const motoImageRef = ref(storage, `images/${data.image.name}`);

        await uploadString(motoImageRef, data.image.dataUrl, 'data_url').then(() => {
          getDownloadURL(motoImageRef).then((url) => {
            docData.image.dataUrl = url;
          });
        });
      }

      for (const [index, image] of data.images.entries()) {
        if (image.name && image.dataUrl) {
          const imageRef = ref(storage, `images/${image.name}`);

          await uploadString(imageRef, image.dataUrl, 'data_url').then(() => {
            getDownloadURL(imageRef).then((url) => {
              docData.images[index].dataUrl = url;
            });
          });
        }
      }

      return new Promise((resolve, reject) => {
        addDoc(dbRef, docData)
          .then(docRef => {
            resolve(docRef);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          })
      })
    },
    async updateVehicle({ commit }, { data, id }) {
      const docData = {
        brand: data.brand,
        model: data.model,
        color: data.color,
        category: data.category,
        engine_cylinder: parseInt(data.engine_cylinder),
        engine_volume: parseInt(data.engine_volume),
        engine_power: parseInt(data.engine_power),
        d_price: parseInt(data.d_price),
        w_price: parseInt(data.w_price),
        m_price: parseInt(data.m_price),
        seat: data.seat,
        type: data.type,
        type_of_bike: data.type_of_bike,
        image: data.image,
        images: data.images,
        same: data.same,
      };

      const docRef = doc(db, 'vehicles', id);

      if (data.image.name && data.image.dataUrl) {
        const motoImageRef = ref(storage, `images/${data.image.name}`);

        await uploadString(motoImageRef, data.image.dataUrl, 'data_url').then(() => {
          getDownloadURL(motoImageRef).then((url) => {
            docData.image.dataUrl = url;
          });
        });
      }

      for (const [index, image] of data.images.entries()) {
        if (image.name && image.dataUrl) {
          const imageRef = ref(storage, `images/${image.name}`);

          await uploadString(imageRef, image.dataUrl, 'data_url').then(() => {
            getDownloadURL(imageRef).then((url) => {
              docData.images[index].dataUrl = url;
            });
          });
        }
      }

      return new Promise((resolve, reject) => {
        setDoc(docRef, docData)
          .then(docRef => {
            resolve(docRef);
          })
          .catch(error => {
            console.error(error);
            reject(error);
          })
      })
    },
    async getVehicleById({ commit }, id) {
      const docRef = doc(db, 'vehicles', id);
      const docSnap = await getDoc(docRef);
      const vehicle = docSnap.data();

      commit('SET_DB_VEHICLE', vehicle);
    },
    async deleteVehicle({ commit }, id) {
      const docRef = doc(db, 'vehicles', id);

      await deleteDoc(docRef)
        .then(docRef => {})
        .catch(error => {
          console.error(error);
        })
    },
    async logIn({ commit }, data) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          commit('SET_USER', user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },

  getters: {
    getVehicle(state) {
      return state.vehicle;
    },
    getDBVehicle(state) {
      return state.dbVehicle;
    },
    getVehicles(state) {
      return state.vehicles;
    },
    getSameVehicles(state) {
      return state.sameVehicles;
    },
    getSameVehiclesChosen(state) {
      return state.sameVehiclesChosen;
    },
    getOrders(state) {
      return state.orders;
    },
    getUser(state) {
      return state.user;
    }
  },
});

export default store
