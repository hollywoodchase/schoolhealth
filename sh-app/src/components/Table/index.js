import React, { Component } from "react";
// import API from "../../utils/API";
import axios from 'axios';
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
    constructor(props) {
        super(props);
        this.state = {
            client: "",
            quantity: "",
            price: "",
            inCart: ""
        };
        // this.handleClick = this.handleClick.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
    }



    increaseQuantity() {
        // this.setState((client, quantity, price, inCart) => {
        //     return {};
        // });
        // this.setState((state) => ({ client: "CLIENT", quantity: state.quantity + 1, price: this.childNode, inCart: 0 }));
        console.log('This is ', this);
        console.log('Friend');
    };

    // printInfo = () => {
    //     axios.get('/api/products', {
    //         params: {
    //           ID: 12345
    //         }
    //       }
    //         .then(res => {
    //             this.setState({ info: [] });

    //             const productInfo = [];
    //             for (let i = 0; i < res.data.length; i++) {
    //                 console.log("FOOL " + JSON.stringify(res.data[0]))
    //                 jobInfo.push({
    //                     id: res.data[i]._id,
    //                     title: res.data[i].title,
    //                     description: res.data[i].description,
    //                     educationNeeded: res.data[i].educationNeeded,
    //                     salary: res.data[i].medianSalary,
    //                     jobsAvailable: res.data[i].projectedJobs,
    //                     link: res.data[i].link,
    //                     hourly: res.data[i].hourlyWage,
    //                     rent: res.data[i].rent,
    //                     image: res.data[i].image,
    //                     selected: false
    //                 })
    //             }
    //             this.setState({ info: jobInfo })
    //         });
    // }

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
                            <td><button onClick={() => this.printInfo()}>Print</button></td>
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
