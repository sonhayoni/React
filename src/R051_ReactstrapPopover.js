import React, { Component } from "react";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";

class R051_ReactstrapPopover extends Component {
    render() {
        return (
            <>
                <Button id="Popover_id" type="button">
                    Popover button
                </Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>React</PopoverHeader>
                    <PopoverBody>hello</PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;