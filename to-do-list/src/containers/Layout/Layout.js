import React, {Component} from 'react';
import Card from '../../components/Cards/Card.js';
import Checkbox from '../../components/Check-List/Checkbox.js'
import Footer from '../../components/Footer/Footer.js';
import classes from './Layout.css';
import axios from 'axios';

//arreglo para los items de los checkbox de acuerdo al número de ID´s que tiene el endpoint

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            newData: [],
            selectedNumber: {}
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
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        this.setState({selectedCheckboxes: this.selectedCheckboxes})
    }

    // funcion para definir las propiedades de cada checkbox
    createCheckbox = label => (
        <Checkbox
            label={label} // es el texto que se muestra junto a la casilla y proviene del arreglo itemsCheck
            handleCheckboxChange={this.toggleCheckbox} // llama a la funcion que va a marcar o desmarcar la casilla
            key={label} // key para identificar cada check
        />
    )

    // iterar el arreglo de items para crear cada check que se encuentre dentro del arreglo
    createCheckboxes = () => {
        /*Aqui la creacion del Menu dinamico*/
        const idMenu = this.state.data.map((ID) => {
            return ID.userId;
        })
        //Aplica eliminacion de datos duplicados
        const menu = this.unique(idMenu);
        return menu.map(this.createCheckbox)
    }

    //Elimina datos duplicados de un Array
    unique = (a) => {
        return a.filter(function (value, index, self) {
            return self.indexOf(value) === index;
          });
    }

    render(){
        let datas = [];
        const data = this.state.data.map(data => {
            for (let item of this.selectedCheckboxes){
                item === data.userId ? datas.push(<Card key={data.id} title={data.title} userId={data.userId} body={data.body} />) : null
            }
        });

        return (
            <div className="Layout">
                <div className="List">
                        {this.createCheckboxes()}
                </div>
                <div className="wrapperCard">
                   {datas}
                </div>
                <Footer></Footer>
            </div>
        )
    };
};

export default Layout