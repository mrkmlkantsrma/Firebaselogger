const Card = (props) => {
  return (
    <>
      <div className="cards row">
        <div className="card col-md-12">
          <div className="cardin">
            <div className="round ron1 ">
              <i className="fa fa-pencil-square-o icon" aria-hidden="true"></i>
            </div>
            <h5> {props.heading} </h5>
          </div>
        </div>
      </div>   
    </>
  );
};

export default Card;
