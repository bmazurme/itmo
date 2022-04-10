import ContactForm from "./ContactForm";

function SectionContacts() {
  return(
    <section className="section section_contacts">
      <h2 id="contacts" className="section-contacts__title">
        ВСЕГДА НА СВЯЗИ
      </h2>
      <p className="section-contacts__content">
        По всем интересующим вас вопросам вы всегда можете обратиться 
        по указанным телефонам, написать на почту или оставтиь свое 
        сообщение через форму обратной связи. 
      </p>
      <ContactForm/>
    </section>
  );
}

export default SectionContacts;