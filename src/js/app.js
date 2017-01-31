import React from 'react';
import ReactDOM from 'react-dom';
import ColorTool from './ColorTool/ColorTool';
import CarTool from './CarTool/CarTool';

const colors = ['green', 'yellow', 'black', 'red', 'white', 'blue'];
const carList = [
  {ID: 1, Make: 'BMW', Model: '335', Year: '2008', Color: 'gray', Price: 'OBO'},
  {ID2: 2, Make: 'Honda', Model: 'Odessy', Year: '2005', Color: 'Red', Price: 12000},
  {ID: 3, Make: 'Honda', Model: 'Fit', Year: '2012', Color: 'Silver', Price: 10000}
];
const carHeaders = ['ID', 'Make', 'Model', 'Year', 'Color', 'Price', 'Editable']

class App extends React.Component {
  render() {
    return (
      <div>
        <ColorTool myColors={colors} />
        <CarTool
          carList={carList}
          carHeaders={carHeaders}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));
