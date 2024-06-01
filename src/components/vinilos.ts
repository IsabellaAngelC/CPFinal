import { AddCards } from "../types/store";
import { getmusic } from "../types/store";

export const record = {
	name: 'name',
	artist: 'artist',
	price: 'price',
	stock: 'stock',
};

class recordCard extends HTMLElement {
	name?: string;
	artist?: string;
	price?: string;
	stock?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		const songs = await getmusic();
		songs.forEach((record: AddCards) => {
			const container = this.ownerDocument.createElement('section');
			this.shadowRoot?.appendChild(container);
		});
	}
}
export default recordCard;