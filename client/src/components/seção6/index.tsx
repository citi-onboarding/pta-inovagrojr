import React from "react";
import { Contat } from "./style";
import { Caixa } from "./style";
import { useState } from "react";
import api from "services/api";

type Propis = {
    texto: string;
    textocaixa: string;
}

export default function Contato({texto, textocaixa}: Propis) {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      service: '',
      demand: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    //this isnt workinggggg
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
           const response = await api.post('/email', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
           }); // this line is not working
           console.log('Email enviado', response.data.message); 
           alert('Email enviado com sucesso!');
            setFormData({
                name: '',
                phone: '',
                service: '',
                demand: '',
              });
        } catch (error) {
            console.error("Erro ao enviar email", error);
        }
    };


    return (
        <div id="cont">
            <Contat>
                <b></b>
                <a></a>
                <p>{texto}</p>
            </Contat>

            <form onSubmit={handleSubmit}>
                <Caixa>
                    <a>
                        <p>{textocaixa}</p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <b></b>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Telefone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <b></b>
                        <input
                            type="text"
                            name="service"
                            placeholder="Serviço"
                            value={formData.service}
                            onChange={handleChange}
                        />
                        <b></b>
                        <input
                            type="text"
                            name="demand"
                            placeholder="Descreva sua demanda"
                            value={formData.demand}
                            onChange={handleChange}
                        />
                        <i></i>
                        <span>
                            <button type="submit">Enviar</button>
                        </span> 
                    </a>
                    <b></b>
                </Caixa>
            </form>
        </div>
    );
}