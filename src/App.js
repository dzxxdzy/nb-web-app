/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-08 11:08:13
 * @LastEditTime: 2019-08-09 11:15:45
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import {
    Container,
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
    List,
    ListItem,
    Content,
    Text,
    Picker,
    Form,
} from "native-base";

import { TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import Modal from 'modal-enhanced-react-native-web';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

Modal.setAppElement('#root');
// import 'babel-polyfill';
// const ReactNative = require("react-native");
// const Modal = require("./ModalComponent/Modal");

// ReactNative.Modal = Modal;

const datas = [
    {
        route: "BasicIcon",
        text: "Basic Icon"
    },
    {
        route: "Icons",
        text: "Icons"
    },
    {
        route: "PlatformSpecificIcon",
        text: "Platform Specific Icon"
    },
    {
        route: "IconFamily",
        text: "Icon Family"
    }
];
// toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。
// 这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。
// 对于 Object 对象，直接调用 toString()  就能返回 [object Object] 。
// 而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

const isType = (obj, type) => {
    // if (obj.toString() === '[object Object]') return false;
    //判断数据类型的经典方法：
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
        case 'Object':
            flag = typeString === '[object Object]'
            break;
        case 'Array':
            flag = typeString === '[object Array]'
            break;
        case 'Date':
            flag = typeString === '[object Date]'
            break;
        case 'RegExp':
            flag = typeString === '[object RegExp]'
            break;
        case 'String':
            flag = typeString === '[object String]'
            break;
        case 'Number':
            flag = typeString === '[object Number]'
            break;
        case 'Boolean':
            flag = typeString === '[object Boolean]'
            break;
        case 'Symbol':
            flag = typeString === '[object Symbol]'
            break;
        case 'Undefined':
            flag = typeString === '[object Undefined]'
            break;
        case 'Null':
            flag = typeString === '[object Null]'
            break;
        case 'Function':
            flag = typeString === '[object Function]'
            break;
        case 'Error':
            flag = typeString === '[object Error]'
            break;
        case 'HTMLDocument':
            flag = typeString === '[object HTMLDocument]'
            break;
        case 'global':
            flag = typeString === '[object global]'
            break;
        default:
            flag = false
            break;
    }
    return flag
}

console.log(isType({}, 'Object'))
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            visibleModal: null,
            isShow: false
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value,
        });
    }
    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    _renderModalContent = () => (
        <View>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Learn React</a>
                </header>
            </div>
            {this._renderButton("Close", () => this.setState({ visibleModal: false }))}
        </View>
    );

    _handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y
        });
    };

    _handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => { this.setState({ isShow: true }) }}
                        >
                            <Icon type="Zocial" name="digg" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>react-native-web</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem button onPress={() => { }}
                            >
                                <Left>
                                    <Text>
                                        {data.text}
                                    </Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward" style={{ color: "#999" }} />
                                </Right>
                            </ListItem>}
                    />
                    <Form>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: 200 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                        <View style={styles.container}>
                            {this._renderButton('Default modal', () =>
                                this.setState({ visibleModal: 1 })
                            )}
                            {this._renderButton('Sliding from the sides', () =>
                                this.setState({ visibleModal: 2 })
                            )}
                            {this._renderButton('A slower modal', () =>
                                this.setState({ visibleModal: 3 })
                            )}
                            {this._renderButton('Fancy modal!', () =>
                                this.setState({ visibleModal: 4 })
                            )}
                            {this._renderButton('Bottom half modal', () =>
                                this.setState({ visibleModal: 5 })
                            )}
                            {this._renderButton('Modal that can be closed on backdrop press', () =>
                                this.setState({ visibleModal: 6 })
                            )}
                            {this._renderButton('Swipeable modal', () =>
                                this.setState({ visibleModal: 7 })
                            )}
                            {this._renderButton('Scrollable modal', () =>
                                this.setState({ visibleModal: 8 })
                            )}
                            <Modal isVisible={this.state.visibleModal === 1}>
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 2}
                                animationIn="slideInLeft"
                                animationOut="slideOutRight"
                            >
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 3}
                                animationInTiming={2000}
                                animationOutTiming={2000}
                                backdropTransitionInTiming={2000}
                                backdropTransitionOutTiming={2000}
                            >
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 4}
                                backdropColor='#f00'
                                backdropOpacity={0.5}
                                animationIn="zoomInDown"
                                animationOut="zoomOutUp"
                                animationInTiming={1000}
                                animationOutTiming={1000}
                                backdropTransitionInTiming={1000}
                                backdropTransitionOutTiming={1000}
                            >
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 5}
                                style={styles.bottomModal}
                            >
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 6}
                                onBackdropPress={() => this.setState({ visibleModal: null })}
                            >
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 7}
                                onSwipe={() => this.setState({ visibleModal: null })}
                                swipeDirection="left"
                            >
                                {this._renderModalContent()}
                            </Modal>
                            <Modal
                                isVisible={this.state.visibleModal === 8}
                                onSwipe={() => this.setState({ visibleModal: null })}
                                swipeDirection="down"
                                scrollTo={this._handleScrollTo}
                                scrollOffset={this.state.scrollOffset}
                                scrollOffsetMax={400 - 300} // content height - ScrollView height
                                style={styles.bottomModal}
                            >
                                <View style={styles.scrollableModal}>
                                    <ScrollView
                                        ref={(ref) => (this.scrollViewRef = ref)}
                                        onScroll={this._handleOnScroll}
                                        scrollEventThrottle={16}
                                    >
                                        <View style={styles.scrollableModalContent1}>
                                            <Text>Scroll me up</Text>
                                        </View>
                                        <View style={styles.scrollableModalContent1}>
                                            <Text>Scroll me up</Text>
                                        </View>
                                    </ScrollView>
                                </View>
                            </Modal>
                        </View>
                    </Form>

                </Content>
            </Container>

        );
    }

}

export default App;
