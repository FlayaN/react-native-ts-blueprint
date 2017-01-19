import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Button } from "react-native";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";

import { HelloWorld } from "../components";
import { User } from "../modules";

interface StateProps {
    UserName: string;
}

interface DispatchProps {
    setName(name: string): any;
}

//type Props = StateProps & DispatchProps;

interface Props {
    store: StateProps;
    actions: DispatchProps;
}

//@connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)
class StartPage extends Component<Props, any> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native {this.props.store.UserName}
                </Text>
                
                {Platform.OS === "android" ?
                    <Text style={styles.instructions}>
                        Shake or press menu for dev menu
                    </Text> :
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload, {"\n"}
                        Cmd+D or shake for dev menu
                    </Text>
                }
                <Button title="TestButton" onPress={() => {this.props.actions.setName("User2")}} />
                <HelloWorld style={styles.helloworld} max={5} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as React.ViewStyle,

    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as React.TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as React.TextStyle,

    helloworld: {
        marginVertical: 15,
    } as React.ViewStyle,
});

function mapStateToProps(state: StoreDef): Props {
    return {
        store: {
            UserName: state.User.Name
        } as StateProps
    } as Props;
}

function mapDispatchToProps(dispatch: any): Props {
    return {
        actions: {
            setName: (name: string) => dispatch(User.Actions.setName(name))
        } as DispatchProps
    } as Props;
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage)