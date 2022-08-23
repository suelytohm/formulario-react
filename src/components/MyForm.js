
import './MyForm.css';
import { useState } from 'react';

const MyForm = ({user}) => {
  
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email :"");
    const [description, setDescription] = useState(user ? user.description : "");
    const [city, setCity] = useState(user ? user.city : "");


    const handleName = (e) => {
       let nome = e.target.value;
        
        setName(nome);
    }

    const handleEmail = (e) => {
        let email = e.target.value;

        setEmail(email);
    }
    const handlerCity = (e) => {
        let cidade = e.target.value;
        setCity(cidade);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // A página não atualiza
        console.log("Validando e enviando o formulário");
        console.log(name);
        console.log(email);
        console.log(description);
        console.log(city);

    }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name} />

            </div>
            {/** Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite o seu Email" onChange={handleEmail} value={email} />
            </label>

            {/** Simplificando a manipulação de state */}
            <label>
                <span>Descrição</span>
                <textarea name="description" cols="30" rows="10" onChange={(e) => {
                    setDescription(e.target.value)
                }} value={description}></textarea>

                <label>
                    <span>Cidade</span>
                    <input type="text" name="city" placeholder="Digite a cidade" onChange={handlerCity} value={city} />
                </label>

            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm