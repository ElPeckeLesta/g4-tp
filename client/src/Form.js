import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    //NO ANDA
    const question = { text: text};
    const image = { img: img };
    axios.post('/question/preguntas', question)
      .then(res => {
        console.log(res.question);
        setText('');
      });

    axios.post('/question/preguntas', image)
      .then(res => {
        console.log(res.image);
        setImg('');
      });
  };

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleChange1 = e => {
    setImg(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={text}
        name="text"
        type="text"
        placeholder="Tu Mensaje"
      />
      <input
        onChange={handleChange1}
        value={img}
        name="image"
        type="text"
        placeholder="Tu imagen"
      />
    <input className="btn-submit" type="submit" value="Enviar" />
    </form>
  );
}

export default Form;
