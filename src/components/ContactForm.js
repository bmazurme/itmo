function ContactForm () {
  return(
    <form className="contact-form">
      <input className="contact-form__input contact-form__input_name" 
             placeholder="Имя"
             type="input"></input>
      <input className="contact-form__input contact-form__input_surname"
             placeholder="Фамилия"
             type="input"></input>
      <input className="contact-form__input contact-form__input_phone"
             placeholder="Телефон" 
             type="input"></input>
      <input className="contact-form__input contact-form__input_email"
             placeholder="E-mail" 
             type="input"></input>
      <textarea className="contact-form__input contact-form__input_text"
             placeholder="Сообщение" 
             type="input"></textarea>
      <button className="contact-form__button" type="button">ОТПРАВИТЬ</button>
    </form>
  );
}

export default ContactForm;