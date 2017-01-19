import React, { Component } from "react";
import { View, Text } from "react-native";
import {connect} from "react-redux";

// See src/declarations.d.ts
import Button from "react-native-button";

interface OwnProps {
    max: number;
    message?: string | number;
    alert?: string | number;
    style: React.ViewStyle;
}

interface StateProps {
    UserName: string;
}

interface Props extends OwnProps{
    store: StateProps;
}

interface State {
    counter: number;
}

class HelloWorld extends Component<Props, State> {
    static defaultProps = {
        message: "Press here",
        alert: "Hello world!"
    } as Props;

    state = {
        counter: 0,
    };

    onPress = () => {
        const counter = this.state.counter + 1;
        if (counter < this.props.max) {
            return this.setState({ counter });
        }
        // Alert after re-rendering
        return this.setState({ counter: 0 }, () => alert(this.props.alert + this.props.store.UserName));
    }

    render() {
        const { message } = this.props;
        const { counter } = this.state;

        return (
            <View style={this.props.style}>
                <Button onPress={this.onPress}>
                    {message} ({counter})
                </Button>
            </View>
        );
    }
}

function mapStateToProps(state: StoreDef, ownProps: OwnProps): Props {
    return {...ownProps,
        store: {
            UserName: state.User.Name
        } as StateProps
    } as Props;
}

export default connect(mapStateToProps)(HelloWorld)