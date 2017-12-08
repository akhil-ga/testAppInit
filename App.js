import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>e-mail</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Mobile</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Landline</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Place</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>House Number</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Street</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Landmark</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Age</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Gender</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Place Id </Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Qualification</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Confirm Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}