const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This app lets you create, manage and complete tasks easily.</p>
      <p>You can use this application easily by watch the video.</p>
      <video controls>
        <source src="/tutorial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutPage;
