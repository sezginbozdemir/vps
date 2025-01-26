import { Box, Group, Button, Container, Text, Image } from "@mantine/core";
import css from "./Intro.module.css";
import { data } from "./data.ts";
import cloud from "../../../assets/cloud.png";
import shield from "../../../assets/shield.png";
import lightning from "../../../assets/lightning.png";
import graph from "../../../assets/graph.png";

const Intro = () => {
  return (
    <Box className={css.Box}>
      <Container className={css.Container}>
        <Image w={91} src={cloud} className={css.FloatCloud} />
        <Image w={112} src={cloud} className={css.FloatCloud2} />
        <Image w={85} src={shield} className={css.FloatShield2} />
        <Image w={85} src={shield} className={css.FloatShield} />
        <Image w={87} src={lightning} className={css.FloatLightning} />
        <Image w={87} src={lightning} className={css.FloatLightning2} />
        <Image w={61} src={graph} className={css.FloatGraph} />
        <Image w={81} src={graph} className={css.FloatGraph2} />
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
            <Button variant="filled" size="md" radius="xl">
              Configurează un VPS acum
            </Button>
          </Group>
          <Group justify="space-between" className={css.Group2}>
            {data.map((item, index) => (
              <Group
                key={index}
                className={`${css.Group2Inner} ${
                  index === 0 || index === 2 ? css.MarginTop : ""
                }`}
              >
                <Image w={130} src={item.icon} className={css.Icon} />
                <Text className={css.Title}>{item.title}</Text>
                <Text className={css.Description}>{item.text}</Text>
              </Group>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default Intro;
