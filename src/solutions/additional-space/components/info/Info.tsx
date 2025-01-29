import {
  Image,
  Text,
  Card,
  Container,
  Stack,
  Group,
  ThemeIcon,
  Grid,
  List,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import css from "./Info.module.css";
import font from "../../../../shared/modules/Typography.module.css";
import styles from "../../../../shared/modules/Button.module.css";
import megaphone from "../../../../assets/megaphone.png";
import data from "./data";
import arrow from "../../../../assets/arrow-blue.png";

const Info = () => {
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
      <Box mb={200}>
        {data.map((item, index) => (
          <Box>
            <Stack gap={40} align="center" justify="center">
              <Text className={`${font.T2} ${css.BottomTitle}`}>
                {item.title}
                <span className={css.BottomTitleSpan}>{item.titleSpan}</span>
              </Text>
              <Text w="70%" className={`${font.Body} ${css.BottomDescription}`}>
                {item.description}
              </Text>
              <Grid>
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <List
                    icon={
                      <ThemeIcon color="transparent" size={15} radius="xl">
                        <Image src={arrow} />
                      </ThemeIcon>
                    }
                    w="70%"
                    spacing={10}
                    className={`${font.Body} ${css.BottomList}`}
                  >
                    {item.listItems.map((listItem, i) => (
                      <List.Item key={i}>{listItem}</List.Item>
                    ))}
                  </List>
                </Grid.Col>
                <Grid.Col className={css.ButtonCol} span={{ base: 12, md: 4 }}>
                  <Button
                    size="md"
                    className={`${styles.ButtonFilled} ${font.ButtonBody}`}
                  >
                    Vezi lista de prețuri
                  </Button>
                </Grid.Col>
              </Grid>
            </Stack>

            {index < data.length - 1 && (
              <Divider className={css.Divider} my={50} />
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Info;
