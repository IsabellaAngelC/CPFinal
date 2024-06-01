import "./components/export"
import { AddCards } from "./types/store";
import { addmusic } from "./firebaseConfig";
import { PANTALLAS } from "./types/store";
import { navigate } from "./types/store";
import recordCard from "./components/vinilos";

const FormData: Omit<AddCards, 'id'> = {
	name: 'name',
	artist: 'artist',
	price: 'price',
	stock: 'stock',
};

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    submitForm() {
		addmusic(FormData);
	}

    render() {
        const something = this.ownerDocument.createElement('div');
        const Title = this.ownerDocument.createElement('H1');
			something.appendChild(Title);
			Title.innerText = 'Vinyl Store';

            const subTitle1 = this.ownerDocument.createElement('H2');
            something.appendChild(subTitle1)
			subTitle1.innerText = 'Home';

            const subTitle2 = this.ownerDocument.createElement('H2');
            something.appendChild(subTitle2)
			subTitle2.innerText = 'Modify Products';

            const subTitle3 = this.ownerDocument.createElement('H2');
            something.appendChild(subTitle3)
			subTitle3.innerText = 'Add New Product';

            const name = this.ownerDocument.createElement('input');
            something.appendChild(name)
			name.placeholder = 'Name';

            const artist = this.ownerDocument.createElement('input');
            something.appendChild(artist)
			artist.placeholder = 'Artist';

            const price = this.ownerDocument.createElement('input');
            something.appendChild(price)
			price.placeholder = 'Price';

            const stock = this.ownerDocument.createElement('input');
            something.appendChild(stock)
			stock.placeholder = 'Stock';

            const save = this.ownerDocument.createElement('button');
            save.addEventListener('click', this.submitForm);
            something.appendChild(save)
            save.innerText = 'Add Product';

        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)