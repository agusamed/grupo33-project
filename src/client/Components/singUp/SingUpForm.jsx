import React, { Component } from 'react';



const BUTTONS = [
    { id: 'student', title: 'Soy Alumno/a' },
    { id: 'teacher', title: 'Soy Profesor/a' }
]


class Singup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'student'
        };
        this.singup = props.singUp;
    }
    
    handleButton = button => {
        this.setState({role: button})
    }

    

    handleSubmit = (e) => {
        e.preventDefault();
        const request = {role: this.state.role, name: e.target[0].value, surname: e.target[1].value, email: e.target[2].value, password: e.target[3].value, phoneNumber: e.target[4].value};
        this.singup(request);
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
            <h3>Registrate</h3>
            <div className='select-type'>
                    {BUTTONS.map(bt => (
                        <span
                            key={bt.id}
                            onClick={() => this.handleButton(bt.id)}
                            className={this.state.role == bt.id ? "btnPressed" : "btn"}
                            data={bt.id}
                            id={this.state.role == bt.id ? 'rancio' : ''}>
                            {bt.title}
                        </span>
                    ))}
            </div>
            <div className='container-inputs'>
            <input type="text" placeholder='Nombre' title='Nombre' />
            <input type="text" placeholder='Apellido' title='Apellido' />
            <input type="email" placeholder='Email' title='Email'  />
            <input type="password" placeholder='Contraseña' title='Contraseña' />
            <input type="number"  placeholder='Telefono' title='Telefono' />
            </div>

            <button type='submit'>Inscribirme</button>
            </form>

        );
    }
}

export default Singup;