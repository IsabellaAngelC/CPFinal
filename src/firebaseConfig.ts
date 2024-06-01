const firebase = require('firebase/app');
import 'firebase/firestore';
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { collection, addDoc, getDocs } = require('firebase/firestore');
import { AddCards } from './types/store'

export const firebaseConfig = {
	apiKey: 'AIzaSyDjvqHWjWLrC36lDqdMHJg5D9aBDaH7Dx0',
	authDomain: 'mevoyapegaruntir-c414a.firebaseapp.com',
	projectId: 'mevoyapegaruntir-c414a',
	storageBucket: 'mevoyapegaruntir-c414a.appspot.com',
	messagingSenderId: '438630763188',
	appId: '1:438630763188:web:c974f0b3874db656b0a5e1',
	measurementId: 'G-0D55B9ZS7P',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addmusic = async (FormData: Omit<AddCards, 'id'>) => {
	console.log('form', FormData);
	try {
		const docRef = await addDoc(collection(db, 'usuarios'), FormData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};