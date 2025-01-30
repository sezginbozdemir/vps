import {
  Box,
  Button,
  Container,
  Text,
  Image,
  Grid,
  Stack,
} from "@mantine/core";
import css from "./Intro.module.css";
import font from "../../../shared/modules/Typography.module.css";
import styles from "../../../shared/modules/Button.module.css";
import { data } from "./data.ts";
import cloud from "../../../assets/cloud.png";
import shield from "../../../assets/shield.png";
import lightning from "../../../assets/lightning.png";
import graph from "../../../assets/graph.png";

const Intro = () => {
  return (
    <Box className={css.Box}>
      <Image src={cloud} className={css.FloatCloud} />
      <Image src={cloud} className={css.FloatCloud2} />
      <Image src={shield} className={css.FloatShield2} />
      <Image src={shield} className={css.FloatShield} />
      <Image src={lightning} className={css.FloatLightning} />
      <Image src={lightning} className={css.FloatLightning2} />
      <Image src={graph} className={css.FloatGraph} />
      <Image src={graph} className={css.FloatGraph2} />

      <Container size={1100} className={css.Container}>
        <Stack justify="space-between" gap={500}>
          <Stack align="start" justify="start" gap={34}>
            <Text className={`${css.Text} ${font.T1}`}>
              Servere VPS <span className={css.span}>care îți</span> <br />
              Conectează Lumea
            </Text>
            <Text className={`${css.Text2} ${font.Body}`}>
              Performanță globală, accesibilitate locală – tot ce ai nevoie de
              la VPS-ul tău.
            </Text>
            <Text className={`${css.Text3} ${font.Body}`}>
              Începând de la <span className={css.span2}>4</span>
              <span className={css.span3}>€</span>/lună
            </Text>
            <Button
              className={`${styles.ButtonFilled} ${font.ButtonBody}`}
              size="md"
              mt={10}
            >
              Configurează un VPS acum
            </Button>
          </Stack>
          <Grid className={css.Grid}>
            {data.map((item, index) => (
              <Grid.Col
                span={{ base: 12, sm: 6, md: 3 }}
                order={{
                  base: index === 1 ? 0 : index === 3 ? 1 : index === 0 ? 2 : 3,
                  sm: index === 1 ? 0 : index === 3 ? 1 : index === 0 ? 2 : 3,
                  md: index + 1,
                }}
                key={index}
                className={`${css.GridCol} ${
                  index === 0 || index === 2 ? css.MarginTop : ""
                }`}
              >
                <Image w={130} src={item.icon} className={css.Icon} />
                <Text className={`${css.Title} ${font.T3}`}>{item.title}</Text>
                <Text className={`${css.Description} ${font.Body}`}>
                  {item.text}
                </Text>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Intro;
