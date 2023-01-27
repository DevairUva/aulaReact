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
            </label>
        </form>
    )
}
export default Form;