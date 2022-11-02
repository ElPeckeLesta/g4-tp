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
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
        </div>
        <div class="carousel-inner text-bg-">
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

            <div class="container">
              <div class="carousel-caption text-start text-bg-dark">
                <h1>deberia estar arriba</h1>
                <p className = "text-center text-bg-dark fs-3">Matematicas</p>
                <p><a class="btn btn-lg btn-primary" href="#">Jugar</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

            <div class="container">
              <div class="carousel-caption">
                <h1>Preguntados la35</h1>
                <p>Para jugar y elegir el tema de las preguntas o preguntar pase la pagina</p>

              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

            <div class="container">
              <div class="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p className="text-center fs-3">Ajedrez</p>
                <p><a class="btn btn-lg btn-dark" href="#">Jugar</a></p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
