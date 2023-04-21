import React from "react";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This website was developed by Levente, Kruno, and Martin using React.
      </p>
      <p>
        All Pokémon names, images, and related content are the intellectual
        property of The Pokémon Company, Nintendo, and their partners. This
        website does not claim ownership of any Pokémon-related intellectual
        property. &#169; The Pokémon Company, Nintendo.
      </p>
      <p>
        The modal still not works, and I spent about 2 hours debugging it,
        finding that if you just click the "escape" key it works for some
        reason. ¯\_(ツ)_/¯
        <br />
        <img src="https://media.tenor.com/rkI1a8s2Z6QAAAAC/todd-howard-it-just-works.gif" alt="funnygif" />
      </p>
    </div>
  );
};

export default About;
