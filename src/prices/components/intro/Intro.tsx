import { Button, Container, Stack, Text } from "@mantine/core";
import css from "./Intro.module.css";
import font from "../../../shared/modules/Typography.module.css";
import styles from "../../../shared/modules/Button.module.css";

const Intro = () => {
  return (
    <Container mb={150}>
      <Stack align="center" justify="center" gap={50} mt={50}>
        <Text className={`${font.T1} ${css.Title}`}>
          <span className={css.TitleSpan}>Prețuri</span> LOGO VPS
        </Text>
        <Text className={`${font.Body} ${css.Text}`}>
          Alege planul perfect pentru tine sau alege din lista completa de
          prețuri ceea ce ti se potrivește.
        </Text>
        <Button
          size="md"
          className={`${styles.ButtonOutline} ${font.ButtonBody}`}
        >
          Scroll la lista de prețuri
        </Button>
      </Stack>
    </Container>
  );
};

export default Intro;
