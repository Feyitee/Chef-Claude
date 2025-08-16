// import React from "react";

// const She = () => {
//   const [myFavoriteThings, setMyFavoriteThings] = React.useState([]);

//   const allFavoriteThings = [
//     "💦🌹",
//     "😺",
//     "💡🫖",
//     "🔥🧤",
//     "🟤🎁",
//     "🐴",
//     "🍎🥧",
//     "🚪🔔",
//     "🛷🔔",
//     "🥩🍝",
//   ];
//   const thingsElements = myFavoriteThings.map((thing) => (
//     <p key={thing}>{thing}</p>
//   ));

//   function addFavoriteThing() {
//     setMyFavoriteThings((prevFavThings) => [
//       ...(prevFavThings + myFavoriteThings.at(2)),
//     ]);
//   }

//   return (
//     <main>
//       <button onClick={addFavoriteThing}>Add item</button>
//       <section aria-live="polite">{thingsElements}</section>
//     </main>
//   );
// };

// export default She;

// import React from "react"
// import avatar from "./images/user.png"
// import starFilled from "./images/star-filled.png"
// import starEmpty from "./images/star-empty.png"

// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (212) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })

//     let starIcon = isFavorite ? starFilled : starEmpty

//     return (
//         <main>
//             <article className="card">
//                 <img
//                     src={avatar}
//                     className="avatar"
//                     alt="User profile picture of John Doe"
//                 />
//                 <div className="info">
//                     <button
//                         onClick={toggleFavorite}
//                         aria-pressed={contact.isFavorite}
//                         aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
//                         className="favorite-button"
//                     >
//                         <img
//                             src={starIcon}
//                             alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
//                             className="favorite"
//                         />
//                     </button>
//                     <h2 className="name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="contact">{contact.phone}</p>
//                     <p className="contact">{contact.email}</p>
//                 </div>

//             </article>
//         </main>
//     )
// }

// const signup = (formData) =>{
// const email = formData.get("email")
// const password = formData.get("password")
// console.log(email, password)
// }
// // Form Old way
// function handleSubmit (event){
//   event.preventDefault()
//   const formEL = event.currentTarget
//   const formData = new FormData(formEL)
//   const email = formData.get("email")
// }

// // React 19
// function App() {
//   function signUp(formData) {
//     const email = formData.get("email")
//     console.log(email)
//   }

//   return (
//     <section>
//       <h1>Signup form</h1>
//       <form action={signUp}>
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
//         <br />

//         <label htmlFor="password">Password:</label>
//         <input id="password" type="password" name="password" />
//         <br />

//        <button>Submit</button>

//       </form>
//     </section>
//   )
// }

// import React from "react";

// const She = () => {
//   const diaetaryData = FormData.getAll(dietaryRestrictions);
//   const allData = {
//     ...data,
//     diaetaryData,
//   };
//   return (
//     <div>
//       <label htmlFor="description">Description:</label>
//       <textarea id="description" name="description"></textarea>
//     </div>
//   );
// };

// export default She;

// // Ternary instead of the And operator
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             {isShown ? <p>{props.punchline}</p> : null}
//             <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
//             <hr />
//         </div>

// import React from 'react'
import padsData from "./pads"
import Pad from "./Pad"

// const She = () => {

//   const [pads, setPads] = React.useState(padsData)
//   const buttonElements = pads.map((pad)=>{
//     return <Pad key ={pad.id}/>
//   })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default She

// export default function Pad(props) {

//   const [onoff, setoneoff] = React.useState(props.on)

//   function onn (){
//    setoneoff(prevon => !prevon)
//     }
    
//     return (
//         <button style={{backgroundColor: props.color}} onClick ={onn}></button>
//     )
// }


import React from "react"

export default function Pad(props) {
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}


import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    function toggle(id) {
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }
    
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}



