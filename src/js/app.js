import React from 'react';
import ReactDOM from 'react-dom';
// import ColorTool from './ColorTool/ColorTool';
// import CarTool from './CarTool/CarTool';

// const colors = ['green', 'yellow', 'black', 'red', 'white', 'blue'];
// const carList = [
//   {ID: 1, Make: 'BMW', Model: '335', Year: '2008', Color: 'gray', Price: 'OBO'},
//   {ID: 2, Make: 'Honda', Model: 'Odessy', Year: '2005', Color: 'Red', Price: 12000},
//   {ID: 3, Make: 'Honda', Model: 'Fit', Year: '2012', Color: 'Silver', Price: 10000}
// ];
// const carHeaders = ['ID', 'Make', 'Model', 'Year', 'Color', 'Price', 'Editable'];

// class App extends React.Component {
//     render() {
//         return (
//       <div>
//         <ColorTool myColors={colors} />
//         <CarTool
//           carList={carList}
//           carHeaders={carHeaders}
//           />
//       </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.querySelector('main'));

const createAddAction = value => ({
    type: 'ADD',
    value
});

const createSubtractAction = value => ({
    type: 'SUBTRACT',
    value
});

const reducer = (state = 0, action) => {
    console.log('state: ', state, 'action: ', action);
    if (action == null) return state;
    switch(action.type) {
        case 'ADD':
            return state + action.value;
        case 'SUBTRACT':
            return state - action.value;
        default:
            return state;
    }
};

const createStore = reducer => {
    let currentState;
    const fns = [];

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
            fns.forEach(fn => fn());
        },
        subscribe: fn => fns.push(fn),
    };
};

const store = createStore(reducer);

class Calculator extends React.Component {

    static propTypes = {
        currentValue: React.PropTypes.number,
        addFive: React.PropTypes.func,
        subtractFive: React.PropTypes.func
    };

    render(){
        return(<div>
          <div>{this.props.currentValue}</div>
          <button onClick={this.props.addFive}>Add Five</button>
          <button onClick={this.props.subtractFive}>Subtract Five</button>
        </div>);
    }
}

const mapStateToProps = appState => {
    // props passed into the Component.
    return {
        currentValue: appState
    };
};

const mapDispatchToProps = dispatch => {
  // props passed into the Component
    return {
        addFive: () => dispatch(createAddAction(5)),
        subtractFive: () => dispatch(createSubtractAction(5))
    };
};

const connect = (mapStateToProps, mapDispatchToProps) => {
    return (componentToWrap) => {
        return class Container extends React.Component {

            static propTypes = {
                store: React.PropTypes.object
            };

            componentDidMount() {
                this.props.store.subscribe(() => {
                    this.forceUpdate();
                });

                this.props.store.dispatch();
            }
            render() {
                const componentProps = {};
                Object.assign(componentProps, mapStateToProps(this.props.store.getState()));
                Object.assign(componentProps, mapDispatchToProps(this.props.store.dispatch));
                return React.createElement(componentToWrap, componentProps);
            }
        };
    };
};

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

ReactDOM.render(<CalculatorContainer store={store}/>, document.querySelector('main'));