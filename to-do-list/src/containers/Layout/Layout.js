import React, {Component} from 'react';
import Card from '../../components/Cards/Card.js';
import Checkbox from '../../components/Check-List/Checkbox.js'
import Footer from '../../components/Footer/Footer.js';
import classes from './Layout.css';
import axios from 'axios';

//arreglo para los items de los checkbox de acuerdo al número de ID´s que tiene el endpoint
const itemsCheck = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    // 'ID TWO',
    // 'ID THREE',
    // 'ID FOUR',
    // 'ID FIVE',
    // 'ID SIX',
    // 'ID SEVEN',
    // 'ID EIGTH',
    // 'ID NINE',
    // 'ID TEN'
];

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            newData: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    data: response.data
                })
                //console.log("response setState", response)
            })
    };

    // componente que se creará antes de montar la aplicación
    componentWillMount ()  {
        this.selectedCheckboxes = new Set();
    }

    // funcion para marcar o desmarcar cada casilla que el usuario seleccione
    toggleCheckbox = label => {
        //console.log(label)
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    // función que se detonará con el evento onSubmit del botón "Check"
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault(); // evitará que se recargue la página

        for (const checkbox of this.selectedCheckboxes) { // itera los checkbox para registrar cada elemento al que el usuario seleccione
            console.log("check seleccionado", checkbox);
            const newData = {...this.state.data}; // generando una variable con una copia de la data, para no mutarla en el state
            const dataCard = this.state.data; // guardando el estado de la data en una nueva variable
            let  userData = [ ]; // variable para agregar la información del usuario de acuerdo a la condición
            dataCard.map(item => {
                //console.log(item)
                const user = item.userId; // guardando el userId para hacer la comparación con el checkbox
                //console.log('user',user)
                if (user === checkbox) {
                    console.log("si son iguales")
                    userData.push(dataCard)
                    newData = dataCard; // intentando actualizar el estado...
                    console.log("newdata", newData);
                    console.log("push", user);
                    //console.log("dataCard", dataCard);
                }
            })
        };
    };

    // funcion para definir las propiedades de cada checkbox
    createCheckbox = label => (
        <Checkbox
            label={label} // es el texto que se muestra junto a la casilla y proviene del arreglo itemsCheck
            handleCheckboxChange={this.toggleCheckbox} // llama a la funcion que va a marcar o desmarcar la casilla 
            key={label} // key para identificar cada check
        />
    )

    // iterar el arreglo de items para crear cada check que se encuentre dentro del arreglo
    createCheckboxes = () => (
        itemsCheck.map(this.createCheckbox)
    )

    render(){
        const data = this.state.data.map(data => {
            //console.log("data mapeo", data)
            return <Card key={data.id} title={data.title} userId={data.userId} body={data.body} />
        });

        return (
            <div className="Layout">

                <div className="List">
                    <form onSubmit={this.handleFormSubmit}>
                        {this.createCheckboxes()}
                        <button className="" type="submit">Select</button>
                    </form>
                </div>
                <div className="wrapperCard">
                   {data}
                </div>

                <Footer></Footer>
            </div>
        )
    };
};

export default Layout