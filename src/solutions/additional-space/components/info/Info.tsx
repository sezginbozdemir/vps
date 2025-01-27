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
import megaphone from "../../../../assets/megaphone.png";
import data from "./data";
import arrow from "../../../../assets/arrow-blue.png";

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
      <Box mb={200}>
        {data.map((item, index) => (
          <Box>
            <Stack gap={40} align="center" justify="center">
              <Text className={css.BottomTitle}>
                {item.title}
                <span className={css.BottomTitleSpan}>{item.titleSpan}</span>
              </Text>
              <Text w="70%" className={css.BottomDescription}>
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
                    className={css.BottomList}
                  >
                    {item.listItems.map((listItem, i) => (
                      <List.Item key={i}>{listItem}</List.Item>
                    ))}
                  </List>
                </Grid.Col>
                <Grid.Col className={css.ButtonCol} span={{ base: 12, md: 4 }}>
                  <Button
                    variant="filled"
                    size="md"
                    className={css.BottomButton}
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
