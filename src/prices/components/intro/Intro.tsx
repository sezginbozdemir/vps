import { Button, Container, Stack, Text } from "@mantine/core";
import css from "./Intro.module.css";

const Intro = () => {
  return (
    <Container mb={150}>
      <Stack align="center" justify="center" gap={50} mt={50}>
        <Text className={css.Title}>
          <span className={css.TitleSpan}>Prețuri</span> LOGO VPS
        </Text>
        <Text className={css.Text}>
          Alege planul perfect pentru tine sau alege din lista completa de
          prețuri ceea ce ti se potrivește.
        </Text>
        <Button size="xl" variant="outline" className={css.Button}>
          Scroll la lista de prețuri
        </Button>
      </Stack>
    </Container>
  );
};

export default Intro;
