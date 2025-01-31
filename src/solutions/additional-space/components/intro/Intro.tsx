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
import font from "../../../../shared/modules/Typography.module.css";
import styles from "../../../../shared/modules/Button.module.css";
import doubleArrow from "../../../../assets/double-arrow.png";

const Intro = ({
  scrollToRef,
}: {
  scrollToRef: React.RefObject<HTMLDivElement>;
}) => {
  const handleScroll = () => {
    scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={css.Background}>
      <Container className={css.Container}>
        <Stack mt={30} mb={400} gap={40} align="center" justify="center">
          <Text className={`${font.T1} ${css.Title}`}>
            <span className={css.TitleSpan}>Extinde-ți</span> Capacitatea
            <span className={css.TitleSpan}> în</span> Cloud – Simplu
            <span className={css.TitleSpan}>și</span> Rapid
          </Text>
          <Button
            onClick={handleScroll}
            size="md"
            className={`${font.ButtonBody} ${styles.ButtonOutline}`}
          >
            Explorează opțiunile de stocare
          </Button>
          <ThemeIcon size={47} color="transparent">
            <Image src={doubleArrow} />
          </ThemeIcon>
        </Stack>
      </Container>
    </Box>
  );
};

export default Intro;
