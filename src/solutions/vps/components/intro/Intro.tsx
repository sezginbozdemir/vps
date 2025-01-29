import { Box, Container, Stack, Text } from "@mantine/core";
import css from "./Intro.module.css";
import font from "../../../../shared/modules/Typography.module.css";

const Intro = () => {
  return (
    <Box className={css.Background}>
      <Container className={css.Container}>
        <Stack mt={30} mb={400} align="left">
          <Text className={`${font.T1} ${css.Title}`}>
            Servere VPS <span className={css.TitleSpan}>în</span> Cloud
          </Text>
          <Text className={`${font.T2} ${css.subTitle}`}>
            Performanță <span className={css.subTitleSpan}>la Standardele</span>{" "}
            României
          </Text>
          <Text className={`${font.Body} ${css.Paragraph}`}>
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
