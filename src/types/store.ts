const { collection, addDoc, getDocs } = require('firebase/firestore');

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum SomeActions {
  "X" = "X",
  'changescreen' = 'changescreen',
}

export interface XAction {
  action: SomeActions.X;
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;

export enum PANTALLAS {
	'HOME' = 'HOME',
	'ADD' = 'ADD',
	'MODIFY' = 'MODIFY',
}

export const navigate = (screen: string) => {
	return {
		action: SomeActions.changescreen,
		payload: screen,
	};
};

export interface AddCards {
	name: string,
	artist: string,
	price: string,
	stock: string,
}

export const getmusic = async () => {
	const querySnapshot = await getDocs(collection('Music'));
	const Arraysongs: Array<AddCards> = [];

	querySnapshot.forEach((doc: any) => {
		const data = doc.data() as any;
		Arraysongs.push({ id: doc.id, ...data });
	});
	console.log('get', Arraysongs);
	return Arraysongs;
};

