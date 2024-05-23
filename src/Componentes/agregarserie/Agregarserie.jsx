import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './agregarserie.css';  

const Agregarserie = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="containerrr">
                <div className="sidebar">
                    <h3>Admin</h3>
                    <ul>
                        <Link to="/paneladmin"><li>Dashboard</li></Link>
                        <Link to="/usuariosregister"><li>Usuarios registrados</li></Link>
                        <Link to="/productosadmin"><li>Productos</li></Link>
                        <Link to="/orders"><li>Ordenes</li></Link>
                        <Link to="/productsell"><li>Productos más vendidos</li></Link>
                        <Link to="/series"><li>Series</li></Link>
                    </ul>
                </div>
                <div className="main-content">
                    <h3><strong>Agregar serie</strong></h3>
                    <div className="form-group">
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Descripción' />
                    </div>

                    <div>
                        <div>
                            <h4>Productos en la serie</h4>
                            <button onClick={openModal}>+</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Modal de Página"
                                className="modal-content"
                            >
                                <div className="modal-header">
                                    <h2><strong>Agregar Producto</strong></h2>
                                </div>
                                <div className="form-group">
                                    <input type="text" />
                                    <button>Buscar</button>
                                </div>
                                <div className="modal-product-list">
                                    <ul>
                                        <li>ID</li>
                                        <li>Descripción</li>
                                        <li>Acción</li>
                                    </ul>
                                    <ul>
                                        <li>ID</li>
                                        <li>Manga dragon ball</li>
                                        <li><a href="">Agregar</a></li>
                                    </ul>
                                </div>
                                <button onClick={closeModal}>Cerrar</button>
                            </Modal>
                        </div>
                        <div className="product-list">
                            <ul>
                                <li>ID</li>
                                <li>Descripción</li>
                                <li>Acción</li>
                            </ul>
                            <ul>
                                <li>ID</li>
                                <li>Manga dragon ball</li>
                                <li><a href="">Remover</a></li>
                            </ul>
                            <ul>
                                <li>ID</li>
                                <li>Manga dragon ball</li>
                                <li><a href="">Remover</a></li>
                            </ul>
                        </div>
                    </div>
                    <button>Guardar</button>
                </div>
            </div>
            
        </>
    );
};

export default Agregarserie;
  