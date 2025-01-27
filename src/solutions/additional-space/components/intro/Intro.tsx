import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  ThemeIcon,
  Image,
} from "@mantine/core";
import css from "./Intro.module.css";
import doubleArrow from "../../../../assets/double-arrow.png";

const Intro = () => {
  return (
    <Box className={css.Background}>
      <Container className={css.Container}>
        <Stack mt={30} mb={400} gap={40} align="center">
          <Text className={css.Title}>
            <span className={css.TitleSpan}>Extinde-ți</span> Capacitatea
            <span className={css.TitleSpan}>în</span> Cloud – Simplu
            <span className={css.TitleSpan}>și</span> Rapid
          </Text>
          <Button variant="outline" size="60px" className={css.Button}>
            Explorează opțiunile de stocare
          </Button>
          <ThemeIcon size={40} color="transparent">
            <Image src={doubleArrow} />
          </ThemeIcon>
        </Stack>
      </Container>
    </Box>
  );
};

export default Intro;
