import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'semantic-ui-css/semantic.min.css';

// import ArrowFunction from './arrow_function/arrow_function.js';
// import ArrowClass from './arrow_function/arrow_class.js';
// import ClassComponent from './Class_component/ClassComponent';
// import Map from './map_function/Map';
// import Users from './components_props/Users';
// import FunctionComp from './functional_component/functionComp.js';
// import MultipleFunc from './function_component/MultipleFunc';
// import RenderElem from './rendering_element/RenderElement';
// import StyleConst from './const_var/StyleConst';
// import CompDidMountLifeCycle from './state_and_lifecycle/CompDidMountLifeCycle';
// import GetDrivedStateFromProps from './state_and_lifecycle/GetDrivedStateFromProps';
// import ShouldCompUpdate from './state_and_lifecycle/ShouldCompUpdate';
// import GetSnapshotBeforeUpdate from './state_and_lifecycle/GetSnapshotBeforeUpdate';
// import CompDidUpdate from './state_and_lifecycle/CompDidUpdate';
// import CompWillUnmount from './state_and_lifecycle/CompWillUnmount';
// import ReactRouter from './react-router/ReactRouter';
// import ConstReactRouterLink from './react-router/ConstReactRouterLink';
// import NewPageOnButtonClick from './react-router/NewPageOnButtonClick';
import Nav from './react-router/Nav';
import About from './react-router/About';
import Contact from './react-router/Contact';
import Shop from './react-router/Shop';
import ShopDetails from './react-router/ShopDetails';
// import Navbar from './react-router/Navbar';
// import { BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Main from './keys/Main.js';


function App() {
  return (
    <div className="App">

      {/* <ArrowFunction /> */}
  {/* <ArrowClass /> */}
      {/* not working yet    */}

      {/* <ClassComponent greeting="Hey, I am " /> */}

{/* <Map /> */}

      {/* <Users title="Users" userage="Users with their Age" /> */}
      {/* <FunctionComp surname="Parmar" /> */}

   {/* <MultipleFunc />   */}

      {/* <RenderElem name="Bharti" /> */}
      {/* <StyleConst buttonname="click me" />  */}
      {/* <CompDidMountLifeCycle /> */}

    {/* <GetDrivedStateFromProps myFavCar="Aventador" />  */}

      {/* <ShouldCompUpdate /> */}

      {/* <GetSnapshotBeforeUpdate /> */}
      {/* <CompDidUpdate /> */}

      {/* we can use it on modal popup delete modal onclick any button */}
      {/* <CompWillUnmount /> */}

      {/* React router */}

{/* first method */}
      {/* <BrowserRouter> */}
          {/* It's the component that does all the logic of displaying various components that you provide it with. */}
         {/* <ReactRouter /> */}
         {/* <ConstReactRouterLink /> */}
         {/* <NewPageOnButtonClick /> */}
      {/* </BrowserRouter> */}

{/* second method */}
      <Router>
          <Nav />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/shop' exact component={Shop} /> 
            <Route path='/shop/:id' component={ShopDetails} />
          </Switch>
      </Router>
     
      {/* <Main title="User Dynamic Data" /> */}
    </div>
  );
}

// const Home = () => {
//   <div><h1>Home Page</h1></div>
// }

export default App;
