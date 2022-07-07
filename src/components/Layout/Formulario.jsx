import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mnqldrgg");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
          Nome
      </label>
      <br/>
      <input
        id="nome"
        type="text"
        name="nome"
      />
      <ValidationError 
        prefix="Nome" 
        field="nome"
        errors={state.errors}
      />
      <br/>
      <br/>
      <label htmlFor="email">
        Digite seu email
      </label>
      <br/>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br/>
      <br/>
      <label>telefone</label>
      <br/>
      <input
        id="telefone"
        type="tel" 
        name="telefone"
      />
      <ValidationError 
        prefix="Telefone" 
        field="tefone"
        errors={state.errors}
      />
      <br/>
      <br/>
      <label>
          Envie uma Messagem
      </label>
      <br/>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br/>
      <br/>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm