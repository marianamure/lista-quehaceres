import React, { useState } from "react";

const Lista = () => {

    const [arreglo, setArreglo] =useState([])
    const [tarea, setTarea] = useState("")

    const agregarTarea = (nombre) => {
        let aux = arreglo;
        aux.push ({nombre:nombre, state: false});
        setArreglo ([...aux])
        console.log(aux)
    }

    const guardar = e => {
        e.preventDefault();
        agregarTarea(tarea);
        setTarea("")
    }



    return (
        <div>
            <form onSubmit={guardar}>
                <input type="text" className="form-control" name= "name" id="name" value={tarea} onChange={e => setTarea (e.target.value)} />
                <button type="submit" className="btn btn-success">Guardar</button>
            </form>
            <div>
                {arreglo.map((item, index) => {
                    return(
                        <div key={item.nombre+index}>
                            <h4>{item.nombre}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Lista;
