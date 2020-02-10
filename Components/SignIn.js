import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {isEmpty} from 'lodash';
import {
    Form,
    Container,
    Content,
    Input,
    Item as FormItem,
    Button,
    Label,
    Text
} from 'native-base';


const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
    },
    textContent: {
        marginTop: 200,
        textAlign: 'center',
    },
    
    loginButton: {
        alignContent:'flex-end',
        marginTop: 50,
        marginLeft: 150,
    },

    errorLables: {
        fontSize: 10,
        color:'red',
    },

});

class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            emailError:'',
            passwordError: '',
        };
    }

    onChangeEmail = (text) =>{
        this.setState({
            'Email': text
        });
    }

    onChangePassword = (text) =>{
        this.setState({
            'Password': text
        });
    }

    onSignIn = () => {
        const { email, password } = this.state;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        let erromail = '';
        let errorPass = '';

        let returnState = true;
        
        if( isEmpty(email) ){

            erromail = 'Email Should not empty';
            returnState = false;
 
     
        }else if (reg.test(email) === false){

            erromail = 'Email Incorrect';
            returnState = false;
            

        }

        if( isEmpty(password) ){

            errorPass = 'Password Should not empty';
            returnState = false;
 
        }

        this.setState({
            emailError: erromail,
            passwordError: errorPass,
        });

        return returnState;

    }

    render() {

        const { email, password, emailError, passwordError} = this.state;
        return (
            <Container>
                <Content style={styles.container}>
                <Form>
                        <FormItem inlineLabel>
                            <Label>Email</Label>
                            <Input placeholder='your@address.net'  onChangeText={this.onChangeEmail}  value={email} />
                            
                        </FormItem>
                        <Text style={styles.errorLables}> {emailError} </Text>
                        <FormItem inlineLabel >
                            <Label>password</Label>
                            <Input placeholder='**********' onChangeText={this.onChangePassword}  value={password} />
                            
                        </FormItem>
                        <Text style={styles.errorLables}> {passwordError} </Text>
                        <Button dark block style={styles.loginButton} onPress={this.onSignIn}><Text> Sign-In</Text></Button>
               
                        
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default SignIn;