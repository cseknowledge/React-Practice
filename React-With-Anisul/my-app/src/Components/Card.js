function Card(props) {
  const { cardHeader, cardTitle, cardText } = props;
  return (
    <div className="col-sm-3 ">
      <div className="card text-center">
        <div className="card-header">{cardHeader}</div>
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
          <a href="http://google.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Card;
