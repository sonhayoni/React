import React, { Component } from "react";
import Swal from "sweetalert2";

class R057_Sweetalert2Position extends Component {
    saveAlert = (flag, positionflag, e) => {
        Swal.fire({
            position: positionflag,
            icon: "success",
            title: flag + "done",
            showConfirmButton: false,
            timer: 1500
        })
    }

    render() {
        return (
            <>
                <h1>sweetalert2</h1>
                <button onClick={e => this.saveAlert('save', 'center')}>save</button>
                <button onClick={e => this.saveAlert('edit', 'bottom-end')}>edit</button>
            </>
        )
    }
}

export default R057_Sweetalert2Position;
