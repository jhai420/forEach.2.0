// import React from 'react';

// class Payments extends Component {
//   constructor() {
//     super();
//     this.state = {
//       nameinput: '',
//       donationAmount: '',
//       creditCard: '',
//       phone: '',
//       date: '',
//       email: '',
//       username: '',
//       password: '',
//       totalRaised: '',
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     const donations = {
//       nameinput: this.state.nameinput,
//       // nameinput : document.getElementById("nameinput").value,
//       donationAmount: this.state.donationAmount,
//       creditCard: this.state.creditCard,
//       phone: this.state.phone,
//       date: this.state.date,
//       email: this.state.emai,
//     };
//     const members = { username: this.state.username, password: this.state.password };

//     preventDefault(event);
//     fetch('/donate', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ donations, members }),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             id="nameinput"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 nameinput: evt.target.value,
//               });
//             }}
//           >
//             name
//           </input>

//           <input
//             type="text"
//             id="donationAmount"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 donationAmount: evt.target.value,

//               });
//             }}
//           >
//             {' '}
//             donation amount
//           </input>

//           <input
//             type="text"
//             id="creditCard"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 creditCard: evt.target.value,
//               });
//             }}
//           >
//             {' '}
//             creditcard
//           </input>

//           <input
//             type="text"
//             id="phone"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 phone: evt.target.value,
//               });
//             }}
//           >
//             {' '}
//             phone number
//             {' '}
//           </input>

//           <input
//             type="text"
//             id="date"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 nameinput: evt.target.value,
//               });
//             }}
//           >
//             {' '}
//             date
//           </input>

//           <input
//             type="text"
//             id="email"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 email: evt.target.value,
//               });
//             }}
//           >
//             {' '}
//             email
//           </input>

//           <input type="checkbox" onChange="">Would you like to become a member?</input>

//           <input
//             type="text"
//             id="username"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 username: evt.target.value,
//               });
//             }}
//           >
//             {' '}
//             username
//           </input>

//           <input
//             type="text"
//             id="password"
//             onChange={(evt) => {
//               this.setState({
//                 ...this.state,
//                 password: evt.target.value,
//               });
//             }}
//           >
//             {' '}
//             password
//           </input>

//           <button onClick={this.handleClick}>Submit</button>
//         </form>
//       </div>

//     );
//   }
// }

// export default Payments;

import React from 'react';

const Payments = () => (
  <div>
    Payments Component
  </div>
);

export default Payments;
