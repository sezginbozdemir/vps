import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  List,
  Button,
  Divider,
  ThemeIcon,
  Image,
} from "@mantine/core";
import css from "./Info.module.css";
import font from "../../../../shared/modules/Typography.module.css";
import styles from "../../../../shared/modules/Button.module.css";
import data from "./data";
import arrow from "../../../../assets/arrow-blue.png";

const Info = () => {
  return (
    <Container mt={100}>
      {data.map((item, index) => (
        <>
          <Grid mb={100} mt={100} key={index}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap={30} align="start" justify="start">
                <Card className={css.Card}>
                  <Text mb={5} className={`${font.T3} ${css.Title}`}>
                    {item.cardTitle}
                  </Text>
                  <Text className={`${font.Body} ${css.Paragraph}`}>
                    {item.description}
                  </Text>
                </Card>
                <List
                  icon={
                    <ThemeIcon color="transparent" size={15} radius="xl">
                      <Image src={arrow} />
                    </ThemeIcon>
                  }
                  spacing={10}
                  className={`${font.Body} ${css.List}`}
                >
                  {item.listItems_1.map((listItem, i) => (
                    <List.Item key={i}>{listItem}</List.Item>
                  ))}
                </List>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }} offset={{ md: 1 }}>
              <Stack gap={25} align="start">
                <Text className={`${font.T3} ${css.Title}`}>
                  {item.listTitle}
                </Text>
                <List spacing={10} className={`${font.Body} ${css.List}`}>
                  {item.listItems_2.map((listItem, i) => (
                    <List.Item key={i}>{listItem}</List.Item>
                  ))}
                </List>
                <Button
                  size="md"
                  className={`${styles.ButtonOutline} ${font.ButtonBody}`}
                >
                  Vezi prețurile
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
          {index < data.length - 1 && (
            <Divider className={css.Divider} my={50} />
          )}
        </>
      ))}
      <Stack align="center" justify="center" gap={30} mt={100}>
        <Text className={`${font.T2} ${css.BottomTitle}`}>
          <span className={css.BottomTitleSpan}>Cum</span>Funcționează
        </Text>
        <Text className={`${font.T3} ${css.BottomText}`}>
          Configurare Simplă <span className={css.BottomTextSpan}>în</span> 3
          Pași
        </Text>
      </Stack>
      <Box className={css.BottomBox}></Box>
    </Container>
  );
};

export default Info;
