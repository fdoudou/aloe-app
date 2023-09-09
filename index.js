import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';*/
//import LogButton from "./LogButton.js";
import ReactForm from "./ReactForm.js";
import Todo from "./todo-app/Todo";
import TodoAppContainer from "./todo-reducer-app/TodoApp";

//import ContactManager from "./ContactManager.js";
//import MyForm from './ReactForm.js';
import ManageContact from "./c-manager-context/ManageContact";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./aloe/App";


export default function AloehApp() {
    return (
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    )
}

// class ContactList extends React.Component {
//   constructor (nameList) {
//     super(nameList);
//     this.nameList = nameList;
//   }


// let itemList = [<Render/>,'two','three','four','five'];
// let listToRender = itemList.map((item) => <div>{item}</div>);
let myList = [{pname:'Sira',ptel:774859132,paddress:'TP'},{pname:'Adama',ptel:771255003,paddress:'TB'},{pname:'Coumba',ptel:774859132,paddress:'TB'},{pname:'Mama',ptel:772675656,paddress:'SG'},{pname:'Bintou',ptel:770424127,paddress:'DK'}];

let people = ['Sira','Adama','Coumba','Mama','Bintou'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AloehApp></AloehApp>
    
  </>
  
  // <SimpleForm></SimpleForm>
/*<LogButton isconnected={false}/>*/
  /*<React.StrictMode>
    <myList />
  </React.StrictMode>
  <ManageContact plist={people}></ManageContact>
  <AddPeople></AddPeople>
    <PeopleList data={myList}></PeopleList>
<TodoAppContainer></TodoAppContainer>

    <div style={{fontFamily: "Arial"}}>
    <div>Contact Manager +</div><br/>
    <ContactManager data={myList}></ContactManager>

  </div>
  */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
