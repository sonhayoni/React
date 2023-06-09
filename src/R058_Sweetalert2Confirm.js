import React, { Component } from "react";
import Swal from "sweetalert2";

class R058_Sweetalert2Confirm extends Component {
    deleteAlert = (e) => {
        Swal.fire({
            title: "Do you really want to delete?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#4B088A",
            cancelButtonColor: "#01DF01",
            confirmButtonText: "yes",
            cancelButtonText: "no"
        }).then((result) => {
            if (result.value) {
                document.getElementById("deleteId").remove();
                Swal.fire(
                    "Deleted!",
                    "Sweetalert2 has been deleted!",
                    "success"
                )
            }
        })
    }

    render() {
        return (
            <>
                <h1 id="deleteId">sweetalert2</h1>
                <button onClick={e => this.deleteAlert()}>delete </button>
            </>
        )
    }
}

export default R058_Sweetalert2Confirm;