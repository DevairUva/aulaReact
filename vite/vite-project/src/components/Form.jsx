import Button from "./Button";

function Form(){
    return(
        <form>
            <label>Nome:
            <input type="text"/>
            </label><br />
            <label>Email
            <input type="email"/>
            </label><br />
            <label>Mensagem:
            <textarea cols="40" rows="5"></textarea>
            </label><br />
            <Button texto="Prop Enviar" color="green"></Button>
            <Button texto="Prop Enviar" color="black"></Button>
            <Button texto="Prop Enviar" color="red"></Button>
        </form>
    )
}
export default Form;