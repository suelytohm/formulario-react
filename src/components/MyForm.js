
import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
  
    // 3 - gerenciamento de dados
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const handleName = (e) => {
       let nome = e.target.value;
        
        setName(nome);
    }

    const handleEmail = (e) => {
        let email = e.target.value;

        setEmail(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // A página não atualiza
        console.log("Validando e enviando o formulário");
        console.log(email);
        console.log(name);
        console.log(description);

    }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome: {name}</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />

            </div>
            {/** Label envolvendo input */}
            <label>
                <span>E-mail {email}</span>
                <input type="email" name="email" placeholder="Digite o seu Email" onChange={handleEmail} />
            </label>

            {/** Simplificando a manipulação de state */}
            <label>
                <span>Descrição</span>
                <textarea name="description" cols="30" rows="10" onChange={(e) => {
                    setDescription(e.target.value)
                }}></textarea>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm