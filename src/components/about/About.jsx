export const About = () => {
  return (
    <div className="journal-section">
      <h2 className="journal-section__title">About us</h2>
      <hr />
      <div class="about">
        <div class="about__content">
          <div className="about__member">
            <img
              alt="about-image1"
              src="https://avatars.githubusercontent.com/u/16324893?v=4"
            />
            <h1>Maria Diaz</h1>
            <p className="about__description">Software Developer 2</p>
            <p className="about__description">NOW Web</p>
          </div>
          <div className="about__member">
            <img
              alt="about-image2"
              src="https://avatars.githubusercontent.com/u/14214966?v=4"
            />
            <h1>Suraj Kalsi</h1>
            <p className="about__description">Software Developer 2</p>
            <p className="about__description">Peacock XTV</p>
          </div>
        </div>
      </div>
    </div>
  );
};
