import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
// function Sample()
// {
//   return(
//     <div>
//       <label>Username</label>
//       <input type="text" placeholder="Enter your name"/>
//       <br/>
//       <label>Password</label>
//       <input type="password" placeholder='Enter your password'/>
//       <br/>
//       <button>Submit</button>
//     </div>
//   )
// }
// const r1=ReactDOM.createRoot(document.getElementById("root"));
// r1.render(<Sample/>);


// Basic Rendering
// const Sample=()=>{
//   return(
//     <div>
//       <h1>My First React App</h1>
//       <p>React is a javascript library for building user interfaces</p>
//     </div>
//   )
// }
// const r1=ReactDOM.createRoot(document.getElementById("root"));
// r1.render(<Sample/>);

// Dynamic Rendering
// const App=()=>{
//   const Username="menaga";
//   const password="123456";
//   return(
//     <div>
//       <h1>My First React App {Username} and {password}</h1>
//       <p>{new Date().toLocaleDateString()}</p>
//       <p>React is a javascript library for building user interfaces.</p>
//       <label>Username</label>
//       <input type='text' placeholder='Enter your password'/>
//       <br/>
//       <button>Submit</button>
//     </div>
//   )
// }
// const r1=ReactDOM.createRoot(document.getElementById("root"));
// r1.render(<App/>);

// With JSX

// const myelm1=<h1>Welcome</h1>
// const myelm2=<p>React is a javascript library for building user interfaces.</p>
// const myelm3=<label>Username</label>
// const myelm4=<input type='text' placeholder='Enter your name'/>
// const myelm5=<label>Password</label>
// const myelm6=<input type='password' placeholder='Enter your name'/>
// const myelm7=<button>Sumbit</button>
// const myelm8=<div>
//   <h1>My First React App</h1>
//   <p>{new Date().toLocaleDateString()}</p>
//   {myelm1}
//   {myelm2}
//   <br/>
//   {myelm3}
//   {myelm4}
//   <br/>
//   {myelm5}
//   {myelm6}
//   <br/>
//   {myelm7}
// </div>
// const r2=ReactDOM.createRoot(document.getElementById('root'));
// r2.render(myelm8);

//  Without JSX
// const myelement=React.createElement("p",{},'I do not use JSX!')
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myelement);

// React List
// const App=()=>{
//     return(
//         <div>
//             <h1>My First React App</h1>
//             <ul>
//                 <li>Iteam 1</li>
//                 <li>Iteam 2</li>
//                 <li>Iteam 3</li>
//             </ul>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// Fragment Tag
// const App=()=>{
//     return(
//         <>
//         <h1>Menaga</h1>
//         <h2>Menaga</h2>
//         </>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// Importing css and implementing bootstrap
// import './index.css';
// const App=()=>{
//     return(
//         <div className='container'>
//             <h1>Welcome</h1>
//             <h2>Welcome</h2>
//             <form>
//                 <input type='Submit' value='Submit' className='btn btn-info'/>
//             </form>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

// practice
// import './index.css';
// const App=()=>{
//      return(
//         <div className='container'>
//          <h1>LOGIN PAGE</h1>
         
//          <form>
//             <label>Username</label>
//             <input type='text' placeholder='text'/>
//             <br/>
//             <label>Password</label>
//             <input type='password'placeholder='password'/>
//             <br/>
//             <input type='Submit' placeholder='Submit' className='btn btn-info'/>
//          </form>
//         </div>
//      )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)


// conditional rendering
// const x=9
// let text="";
// if(x>10){
// text="world"
// }else if(x==10){
// text="equal"
//  }else{
//      text="less"
// }
//  const Myelem =()=>{
//     return(
//     <div>
//      <h1>{text}</h1>
//     </div>
// )
//  }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Myelem/>)


// class component
// class Sample extends React.Component
// {
//    render()
//    {
//       return(
//          <div>
//             <h1>Hello</h1>
//          </div>
//       )
//    }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)


// function component with argument
// function Sample(props)
// {
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h1>Hello {props.age}</h1>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample name="Menaga" age="22"/>)


// component in component
// function Sample1()
// {
//     return(
//         <div>
//             <h1>This is Sample1</h1>
//         </div>
//     )
// }

// function Sample2()
// {
//     return(
//         <div>
//             <h1>This is Sample2</h1>
//             <Sample1/>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample2/>)


// function Sample1()
// {
//     return(
//         <div>
//             <center>
//                 <a href=''>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <a href=''>About</a>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <a href=''>Login</a>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <a href=''>Register</a>&nbsp;&nbsp;&nbsp;&nbsp;
//                 <a href=''>Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
//             </center>
//         </div>
//     )
// }

// function Sample2()
// {
//     return(
//         <div>
//             <Sample1/>
//             <br/>
//             <center>
//                 <h1>This is Sample2</h1>
//             </center>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample2/>)



// importing the component and rendering it
// import Sample from "./App";
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)


// proctice
// import './index.css';
// const App=()=>{
//     return(
//         <div className='container'>
            
//             <h1>WELCOME TO MY LOGINPAGE</h1>
//             <br/>
//             <form>
//                 <center>
//                 <label>Username</label>
//                 <input type='text' placeholder='Enter your name'/>
//                 <br/>
//                 <label>Password</label>
//                 <input type='password' placeholder='Enter your password'/>
//                 <br/>
//                 <input type='LOGIN' value='submit' className='btn btn-info'/>
//                 </center>
//             </form>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)


// component constructor
// class Sample extends React.Component
// {
//     constructor(){
//         super();
//         this.state={
//         name:"Menaga",
//         age:"20"
//         }
//     }
//     render()
    
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.age}</h1>
//             </div>
//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)


// using constructor
// class Header extends Component
// {
//     text="Welcome";
//     constructor()
//     {
//         super();
//         this.state={f1:'red'}
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.text}</h1>
//                 <h1 style={{color:this.state.f1}}>Welcome</h1>
//             </div>
//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Header/>)


// import './index.css';
// const Computer=()=>{
//     return(
//         <div>
//             <center>
//                 <h1>WELCOME</h1>
//                 <ul>
//                     <li><a href=''>Home</a></li>
//                     <li><a href=''>About</a></li>
//                     <li><a href=''>Login</a></li>
//                     <li><a href=''>Register</a></li>
//                 </ul>
//                 <br/><br/><br/><br/>
//                 <form>
//                     <b><label>USERNAME</label></b>&nbsp;&nbsp;
//                     <input type='text' placeholder='text'/><br/><br/>
//                     <b><label>PASSWORD</label></b>&nbsp;&nbsp;
//                     <input type='password' placeholder='password'/>
//                 </form>
//                 <br/><br/>
//                 <input type='login'placeholder='login' className='btn btn-info'/>
//                 <br/><br/><br/>
//                 <p>------------or--------------</p>
//                 <br/><br/>
//                 <p><i class='bx bxl-google'></i>Sign in with Google</p>
//                 <br/>
//                 <p>New Page? Create Account</p>
//             </center>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Computer/>)


// Changing the state object
// class Sample extends React.Component
// {
//     constructor()
//     {
//         super();
//         this.state={
//             emp:{
//                 name:"Menaga",
//                 age:"25",
//                 city:"karur"
//             },
//             ShowData:false
//         };
//     }
//     ShowData()
//     {
//         this.setState({ShowData:true});
//     }
//     hideData()
//     {
//         this.setState({ShowData:false});
//     }
//     render()
//     {
//         let data;
//         if(this.state.ShowData==true)
//         {
//             data=<div><b>city::</b>{this.state.emp.city}<b>name::</b>{this.state.emp.name}<br/><button onClick={this.hideData.bind(this)}>hideData</button></div>
//         }
//         else
//         {
//             data=<div><button onClick={this.ShowData.bind(this)}>ShowData</button></div>
//         }
//         return(
//             <div>
//                 <h1>Welcome</h1>
//                 <h2>Employee Details</h2>
//                 {data}
//             </div>
//         )
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)


// React Events  onclick
// function Football(){
// const shoot=()=>{
//     alert("Goal shooted")
// }
// return(
//     <div>
//         <button onClick={shoot}>shoot</button>
//     </div>
// )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football/>)


// Onclick  anyther way
// function Football(){
//     const shoot=(a)=>{
//         alert(a)
//     }
//     return(
//         <div>
//             <button onClick={()=>shoot("Gooal shooted")}>shoot</button>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football/>)



// conditional rendering

// function MissedGoal()
// {
//     return<h1>Missed</h1>
// }
// function MadeGoal()
// {
//     return<h1>Goal</h1>
// }
// function Goal(props)
// {
//     const isGoal=props.isGoal;
//     if(isGoal)
//     {
//         return<MadeGoal/>
//     }else
//     {
//         return<MissedGoal/>
//     }
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Goal isGoal={Math.random()>0.5}/>);



// React list
// function Car(props)
// {
//     return<li>I am a{props.b1}</li>
// }
// function Garage()
// {
//     const cars=["BMW","Audi","Mercedes"]
//     return(
//         <div>
//             <h1>Garage</h1>
//             <ul>
//                 {cars.map((car)=><Car b1={car}/>)}
//             </ul>
//         </div>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Garage/>);


// React form
// function Myform()
// {
//     return(
//         <form>
//             <label>Username</label>
//             <input type='text' name='' id=''/>
//             <br/>
//             <label>password</label>
//             <input type='text'/>
//             <br/>
//             <button type='submit'>submit</button>
//         </form>
//     )
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Myform/>);



// React getderived state fromprops
class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={favcolor:"Red"};
    }
    static getDerivedStateFromProps(props,state)
    {
        return{favcolor:props.favcolor};
    }
    render()
    {
        return(
            <div>
                <h1>My fav color is{this.state.favcolor}</h1>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header favcolor="blue"/>)