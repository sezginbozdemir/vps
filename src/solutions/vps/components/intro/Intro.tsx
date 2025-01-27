import { Box, Container, Stack, Text } from "@mantine/core";
import css from "./Intro.module.css";

const Intro = () => {
  return (
    <Box className={css.Background}>
      <Container className={css.Container}>
        <Stack mt={30} mb={400} align="left">
          <Text className={css.Title}>
            Servere VPS <span className={css.TitleSpan}>în</span> Cloud
          </Text>
          <Text className={css.subTitle}>
            Performanță <span className={css.subTitleSpan}>la Standardele</span>{" "}
            României
          </Text>
          <Text w="45%" className={css.Paragraph}>
            Experimentează viteze ultra-rapide și latențe minime cu serverele
            noastre VPS, optimizate special pentru afaceri și utilizatori din
            România.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Intro;
