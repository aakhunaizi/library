const Tag = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://i.pinimg.com/736x/18/0e/fc/180efc3227b70e92b88fd3e71826fbad.jpg"
          alt="Shrek"
        />
        <div className="card-body">
          <h5 className="card-title">Shrek</h5>
          <p className="card-text">The king of the swamps</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Where's donkey?</li>
        </ul>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go to swamp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tag;
