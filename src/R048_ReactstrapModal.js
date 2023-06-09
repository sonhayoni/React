import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class R048_ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false }
    }
    toggle = () => {
        this.setState({ modal: !this.state.modal })
    }


    render() {
        return (
            <>
                <Button color="warning" onClick={this.toggle}>Modal</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal header</ModalHeader>
                    <ModalBody>Modal Body</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>confirm</Button>
                        <Button color="secondary" onClick={this.toggle}>close</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default R048_ReactstrapModal;