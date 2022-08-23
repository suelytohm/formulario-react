import './MyForm.css';

function MyForm() {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" />

            </div>
            {/** Label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite o seu Email" />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm