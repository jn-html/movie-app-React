const Modal = () => {

  let closeButton = null

  const submitModal = () => {
    alert ('Submitting Modal')
      closeButton.click()
  }



  return (
    <React.Fragment>
      {/*  Button trigger modal  */}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
        Add Movie
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Create Movie</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button ref={(element) => closeButton = element } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
