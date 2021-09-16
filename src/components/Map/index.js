import React from "react";
import {
  Box,
  Container,
  DefaultText,
  Main,
  Title,
  WrapperBox,
  WrapperMap,
} from "./style";
import {
  Map,
  Placemark,
  YMaps,
  TypeSelector,
  GeolocationControl,
} from "react-yandex-maps";
import Fade from "react-reveal/Fade";

export default function Maps() {
  return (
    <Main>
      <Container>
        <Fade duration={800} left cascade>
          <Title size line>
            Contacts
          </Title>
        </Fade>
        <YMaps size={(10, 10)}>
          <WrapperMap>
            <Map
              defaultState={{
                center: [41.114592, 72.077593],
                zoom: 7,
                controls: [],
              }}
            >
              <Placemark geometry={[41.114592, 72.077593]} />
              <TypeSelector options={{ float: "right" }} />
              <GeolocationControl options={{ float: "left" }} />
            </Map>
          </WrapperMap>
        </YMaps>
        <WrapperBox>
          <Box>
            <Fade top cascade>
              <Title>Adress Company</Title>
            </Fade>
            <Fade top cascade>
              <DefaultText>
                Ул. Печугина 240/1, г. Караганда, 100000, Казахстан
              </DefaultText>
            </Fade>
          </Box>
          <Box>
            <Fade top cascade>
              <Title>Number Telefon</Title>
            </Fade>
            <Fade top cascade>
              <DefaultText>
                +7 700 000 00 00
                <br />
                +7 700 000 00 00
              </DefaultText>
            </Fade>
          </Box>
          <Box big>
            <Fade top cascade>
              <Title>Additional communication methods</Title>
            </Fade>
            <Fade top cascade>
              <DefaultText>
                support@test.kz
                <br />
                support@test.kz
              </DefaultText>
            </Fade>
          </Box>
        </WrapperBox>
      </Container>
    </Main>
  );
}
