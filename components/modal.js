import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.closeButton = null
  }
  
  closeModal() {
    this.closeButton.click()
  }

  submitModal = () => {
    alert ('Submitting Modal')
      this.closeModal()
  }

  render() {
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
                {this.props.children}
              </div>
              <div className="modal-footer">
                <button ref={(element) => this.closeButton = element } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                { this.props.hasSubmit &&
                  <button onClick={this.submitModal} type="button" className="btn btn-primary">Save changes</button>
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default Modal;
  






// const Modal = (props) => {

//   let closeButton = null

//   const submitModal = () => {
//     alert ('Submitting Modal')
//       closeButton.click()
//   }



//   return (
//     <React.Fragment>
//       {/*  Button trigger modal  */}
//       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
//         Add Movie
//       </button>

//       {/* Modal */}
//       <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLongTitle">Create Movie</h5>
//               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               {props.children}
//             </div>
//             <div className="modal-footer">
//               <button ref={(element) => closeButton = element } type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               { props.hasSubmit &&
//                 <button onClick={submitModal} type="button" className="btn btn-primary">Save changes</button>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Modal;
