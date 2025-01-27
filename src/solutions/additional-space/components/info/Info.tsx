import {
  Image,
  Text,
  Card,
  Container,
  Stack,
  Group,
  ThemeIcon,
  Grid,
} from "@mantine/core";
import css from "./Info.module.css";
import megaphone from "../../../../assets/megaphone.png";

const Info = () => {
  return (
    <Container w="100%" h="100%">
      <Card mb={100} className={css.Card}>
        <Stack mb={50} align="center" justify="center">
          <Text className={css.Title}>
            <span className={css.TitleSpan}>De ce să alegi </span>Spațiu
            Adițional în Cloud?
          </Text>
          <Group gap={40}>
            <Text className={css.secondTitle}>
              Începând de la <span className={css.Price}>0,05</span>
              <span className={css.Currency}>€/GB</span>/lună
            </Text>
            <ThemeIcon size={65} color="transparent">
              <Image src={megaphone} />
            </ThemeIcon>
          </Group>
        </Stack>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={css.Text} w="100%">
              Fără investiții suplimentare în hardware local.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={css.Text} w="100%">
              Scalabilitate instantă pentru orice nevoie.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={css.Text} w="100%">
              Protecție sporită pentru datele tale{" "}
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={css.Text} w="100%">
              Accesibilitate 24/7 de oriunde.
            </Text>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default Info;
