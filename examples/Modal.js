import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-overlays/lib/Modal'

let rand = () => Math.floor(Math.random() * 20) - 10

const backdropStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5,
}

const modalStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 50 + rand()
  let left = 50 + rand()

  return {
    position: 'fixed',
    width: 400,
    zIndex: 1040,
    top: top + '%',
    left: left + '%',
  }
}

const dialogStyle = {
  border: '1px solid #e5e5e5',
  backgroundColor: 'white',
  boxShadow: '0 5px 15px rgba(0,0,0,.5)',
  padding: 20,
}

class ModalExample extends React.Component {
  state = { showModal: false }

  close = () => {
    this.setState({ showModal: false })
  }

  open = () => {
    this.setState({ showModal: true })
  }

  renderBackdrop(props) {
    return <div {...props} style={backdropStyle} />
  }

  renderDialog = props => {
    return (
      <div style={dialogStyle} {...props}>
        <h4 id="modal-label">Text in a modal</h4>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <ModalExample />
      </div>
    )
  }
  render() {
    return (
      <div className="modal-example">
        <Button onClick={this.open}>Open Modal</Button>
        <p>Click to get the full Modal experience!</p>

        <Modal
          onHide={this.close}
          style={modalStyle()}
          aria-labelledby="modal-label"
          show={this.state.showModal}
          renderDialog={this.renderDialog}
          renderBackdrop={this.renderBackdrop}
        />
      </div>
    )
  }
}

export default ModalExample
