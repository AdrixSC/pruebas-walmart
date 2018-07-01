import React, { Component } from 'react';

class Checkbox extends Component {
    // iniciar estado en falso para que se muestre como no seleccionada desde un inicio
    state = {
        isChecked: false,
    }

    // funcion para cambiar el estado del componente y llama a la función que va a seleccionar el checkbox
    toggleCheckboxChange = (props) => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));
        handleCheckboxChange(label);
    }

    render() {
        const { label } = this.props; // valor de entrada para pasarlo como propiedad del input
        const { isChecked } = this.state; // valor que proviene del estado para saber si está marcado o no el input

        return (
            <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange} // evento para llamar la función que marcará o no el input
                    />
                    {label}
                </label>
            </div>
        );
    }
};

export default Checkbox;