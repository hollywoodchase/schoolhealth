import React, { Component } from "react";
// import API from "../../utils/API";
import "../../style.css";

// class Table extends React.Component {
//     handleClick() {
//       console.log('this is:', this);
//     }

//     render() {
//       // This syntax ensures `this` is bound within handleClick
//       return (
//         <button onClick={() => this.handleClick()}>
//           Click me
//         </button>
//       );
//     }
//   }

class Table extends Component {
    state = {
        client: [],
        quantity: "",
        price: "",
        inCart: ""
      };

    increaseQuantity() {
        // e.preventDefault();

        // console.log('The quantity is now ' + this.quantity);
        // console.log('The price is now ' + this.price);
        // console.log('The current price is ' + (this.price * this.quantity));
        console.log('This is ', this);
    };

    render() {
        return (
                <div className="table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item</th>
                                <th scope="col" className="quantity">Quantity</th>
                                <th scope="col" className="price">Price</th>
                                <th scope="col" className="inCart">In Cart</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Facemask</td>
                                <td>0 <br></br><button onClick={() => this.increaseQuantity()}>Add</button></td>
                                <td>2.50</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Hand Sanitizer</td>
                                <td>0 <br></br><button>Add</button></td>
                                <td>2.99</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Box of bandages</td>
                                <td>0 <br></br><button>Add</button></td>
                                <td>5.00</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default Table;
