import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';

// List of Favorite Things to dom

const createVariableAction = value => ({
    type: 'variable',
    value
});

const createAddValueAction = value => ({
    type: 'addValue',
    value
});

const reducer = (state, action) => {
    if (action == null) return state;
    switch (action.type) {
        case 'addValue':
            return action.value();
        case 'variable':
            return state;
        default:
            return state;
    }
};

const store = createStore(reducer);

const mapStateToProps = appState => {
    // props passed into the Component.
    return {
        currentValue: appState,
        favoriteThings: () => favoritesList.map(e => createVariableThingInState(dispatch, e))
    };
};

let favoritesList = ['Managing State', 'Drinking lukewarm coffee'];

const createVariableThingInState = (dispatch, thing) => {
    return dispatch(createVariableAction(thing));
};

const mapDispatchToProps = dispatch => {
  // props passed into the Component
    return {
        addThing: () => dispatch(createAddValueAction(() => {
            favoritesList.push('a new thing!');
        }))
    };
};

class MyFavoriteThings extends React.Component {
    static propTypes = {
        favoriteThings: React.PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }
    onClick = (event) => {
        event.preventDefault();
        this.props.addThing();
    }
    onChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.favoriteThings().map(e => <li key={e.value}>{e.value}</li> )}
                </ul>
                <input name="inputText" type="text" onChange={this.onChange} value={this.state.inputText} />
                <button onClick={this.onClick}>Add a thing</button>
            </div>
        );
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(MyFavoriteThings);

ReactDOM.render(<AppContainer store={store} />, document.querySelector('main'));