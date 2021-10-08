import React, { useState, useRef } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
/* import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form' */


const BtnCardProductsEdit = ({ estilos, estiloBootstrap, product, nombreProducto }) => {

    const [show, setShow] = useState(false);

    const [infoNuevoProducto, setInfoNuevoProducto] = useState({
        nombreProducto: product.nombreProducto,
        valorUnitarioProducto: product.valorUnitarioProducto,
        estadoProducto: product.estadoProducto,
        descripcionProducto: product.descripcionProducto,
    });
    const [disponible, setDisponible] = useState(infoNuevoProducto.estadoProducto);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    return (
        <>
            <button className={`btn ${estiloBootstrap} ${estilos} btnCardChildren `} onClick={handleShow}> Editar </button>


            <Modal show={show} onHide={handleClose}>
                <div className='flex flex-col items-center justify-center my-2'>
                    <Modal.Header>
                        <h2 className='text-2xl font-extrabold text-gray-800'>Editar producto</h2>
                    </Modal.Header>
                    <form  className='flex flex-col'>

                        
                        <label>{product.idProducto}</label>
                        <br/>

                        <label className='flex flex-col' htmlFor='valorProducto'>
                            Nombre del producto
                        <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevoProducto.nombreProducto}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, nombreProducto: e.target.value })}
                        />
                        </label>

                        <label className='flex flex-col' htmlFor='valorProducto'>
                            Valor del producto
                            <input
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            value={infoNuevoProducto.valorUnitarioProducto}
                            onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, valorUnitarioProducto: e.target.value })}
                        />
                        </label>

                        <label className='flex flex-col' htmlFor='disponibleProducto'>
                            Estado del producto
                            {/* Añadir codigo para cambiar el estado */}
                        </label>

                        <label className='flex flex-col' htmlFor='descripcionProducto'>
                            Descripción del producto
                            <textarea
                                name='descripcionProducto'
                                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2 h-80'
                                value={infoNuevoProducto.descripcionProducto}
                                onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcionProducto: e.target.value })}
                                placeholder='Capacidad: 256 GB
                                Alto: 14,36 cm
                                Ancho: 7,09 cm
                                Grosor: 0,77 cm
                                Peso: 174 g'
                                required
                            />


                        </label>
                        <Modal.Footer>
                            <button
                                type='submit'
                                className='col-span-2 bg-blue-600 p-2 rounded-md shadow-md hover:bg-blue-800 text-white'>
                                Guardar producto
                            </button>

                            <button
                                type="button" className='col-span-2 bg-gray-600 p-2 rounded-md shadow-md hover:bg-gray-800 text-white' onClick={handleClose} >
                                Cancelar
                            </button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default BtnCardProductsEdit

/*
const actualizarVehiculo = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: 'https://vast-waters-45728.herokuapp.com/vehicle/update/',
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoVehiculo, id: vehiculo._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Vehículo modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el vehículo');
        console.error(error);
      });
  };
*/