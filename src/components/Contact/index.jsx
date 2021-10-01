import React from "react";
import { Button, Container, Header, Left, Right } from "./style";
import {
  Map,
  Placemark,
  YMaps,
  TypeSelector,
  GeolocationControl,
  FullscreenControl,
  RouteButton,
  SearchControl,
  TrafficControl,
  ZoomControl,
} from "react-yandex-maps";
export const Contact = () => {
  return (
    <Header>
      <Container>
        <Left>
          <YMaps size={(10, 10)}>
            <Map
              style={{ width: "100%", height: "500px" }}
              defaultState={{
                center: [41.114592, 72.077593],
                zoom: 7,
                controls: [],
              }}
            >
              <Placemark geometry={[41.114592, 72.077593]} />
              <TypeSelector options={{ float: "right" }} />
              <GeolocationControl options={{ float: "left" }} />
              <FullscreenControl />
              <RouteButton options={{ float: "right" }} />
              <SearchControl options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <ZoomControl options={{ float: "right" }} />
            </Map>
          </YMaps>
        </Left>
        <Right>
          <Right.Title>Contact Us</Right.Title>
          <Right.Desc>We are here assist you</Right.Desc>
          <Right.Name placeholder="Your Name" />
          <Right.Surname placeholder={"Your Surname"} />
          <Right.Phone placeholder={"Your Phone Number"} type="number" />
          <br />
          <Button>Contact</Button>
        </Right>
      </Container>
    </Header>
  );
};
export default Contact;
