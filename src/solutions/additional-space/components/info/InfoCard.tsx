import css from "./Info.module.css";
import megaphone from "../../../../assets/megaphone.png";
import font from "../../../../shared/modules/Typography.module.css";

import {
  Card,
  Group,
  Stack,
  ThemeIcon,
  Text,
  Grid,
  Image,
  Container,
} from "@mantine/core";

const InfoCard = () => {
  return (
    <Container w="100%" h="100%">
      <Card mb={100} className={css.Card}>
        <Stack mb={50} align="center" justify="center">
          <Text className={`${font.T2} ${css.Title}`}>
            <span className={css.TitleSpan}>De ce să alegi </span>Spațiu
            Adițional în Cloud?
          </Text>
          <Group gap={0}>
            <Text className={`${font.T3} ${css.secondTitle}`}>
              Începând de la <span className={css.Price}>0,05</span>
              <span className={css.Currency}>€/GB</span>/lună
              <ThemeIcon size={65} color="transparent">
                <Image src={megaphone} />
              </ThemeIcon>
            </Text>
          </Group>
        </Stack>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={`${font.Body} ${css.Text}`} w="100%">
              Fără investiții suplimentare în hardware local.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={`${font.Body} ${css.Text}`} w="100%">
              Scalabilitate instantă pentru orice nevoie.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={`${font.Body} ${css.Text}`} w="100%">
              Protecție sporită pentru datele tale
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text className={`${font.Body} ${css.Text}`} w="100%">
              Accesibilitate 24/7 de oriunde.
            </Text>
          </Grid.Col>
        </Grid>
      </Card>
    </Container>
  );
};

export default InfoCard;
