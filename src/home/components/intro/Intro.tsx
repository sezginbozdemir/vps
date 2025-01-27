import {
  Box,
  Group,
  Button,
  Container,
  Text,
  Image,
  Grid,
} from "@mantine/core";
import css from "./Intro.module.css";
import { data } from "./data.ts";
import cloud from "../../../assets/cloud.png";
import shield from "../../../assets/shield.png";
import lightning from "../../../assets/lightning.png";
import graph from "../../../assets/graph.png";

const Intro = () => {
  return (
    <Box className={css.Box}>
      <Image w={91} src={cloud} className={css.FloatCloud} />
      <Image w={112} src={cloud} className={css.FloatCloud2} />
      <Image w={85} src={shield} className={css.FloatShield2} />
      <Image w={85} src={shield} className={css.FloatShield} />
      <Image w={87} src={lightning} className={css.FloatLightning} />
      <Image w={87} src={lightning} className={css.FloatLightning2} />
      <Image w={61} src={graph} className={css.FloatGraph} />
      <Image w={81} src={graph} className={css.FloatGraph2} />

      <Container className={css.Container}>
        <Group justify="space-between" gap={500} className={css.GroupOuter}>
          <Group className={css.Group}>
            <Text className={css.Text}>
              Servere VPS <span className={css.span}>care îți</span> <br />
              Conectează Lumea
            </Text>
            <Text className={css.Text2}>
              Performanță globală, accesibilitate locală – tot ce <br /> ai
              nevoie de la VPS-ul tău.
            </Text>
            <Text className={css.Text3}>
              Începând de la <span className={css.span2}>4</span>
              <span className={css.span3}>€</span>/lună
            </Text>
            <Button className={css.Button} size="md">
              Configurează un VPS acum
            </Button>
          </Group>
          <Grid className={css.Grid}>
            {data.map((item, index) => (
              <Grid.Col
                span={{ base: 12, sm: 6, md: 3 }}
                key={index}
                className={`${css.GridCol} ${
                  index === 0 || index === 2 ? css.MarginTop : ""
                }`}
              >
                <Image w={130} src={item.icon} className={css.Icon} />
                <Text className={css.Title}>{item.title}</Text>
                <Text className={css.Description}>{item.text}</Text>
              </Grid.Col>
            ))}
          </Grid>
        </Group>
      </Container>
    </Box>
  );
};

export default Intro;
