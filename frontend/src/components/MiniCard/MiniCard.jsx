import "./miniCard.scss";

function MiniCard() {
  return (
    <div className="container">
      <div className="imgMiniCard">
        <img
          className="img"
          src="https://global-img.gamergen.com/jaquette-new-super-mario-bros-u-deluxe_0903D4000000906846.jpg"
          alt="jacket de mario"
        />
      </div>
      <div className="name">Super Mario Bros</div>
    </div>
  );
}

export default MiniCard;
