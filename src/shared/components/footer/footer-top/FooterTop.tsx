import { Image, Box, Button, Container, Stack, Text } from "@mantine/core";
import css from "./FooterTop.module.css";
import font from "../../../modules/Typography.module.css";
import styles from "../../../modules/Button.module.css";
import MacBook from "../../../../assets/macbook.png";

const FooterTop = () => {
  return (
    <Box className={css.Background}>
      <Container>
        <Stack className={css.Stack}>
          <Text ta="center" className={`${font.T2} ${css.Title}`}>
            Dashboard Simplu <span className={css.Span}>și</span> Intuitiv
          </Text>
          <Text ta="center" className={`${font.Body} ${css.Paragraph}`}>
            Gestionarea serviciilor de cloud hosting nu a fost niciodată mai
            ușoară. Dashboard-ul nostru modern și prietenos îți oferă acces
            rapid și clar la toate funcțiile esențiale, de la configurarea
            serverelor până la monitorizarea resurselor în timp real.
          </Text>
          <Button
            size="md"
            className={`${styles.ButtonFilled} ${font.ButtonBody}`}
          >
            Începe acum!
          </Button>
        </Stack>
        <Image className={css.ImageFlex} mt={80} src={MacBook} w="100%" />
      </Container>
      <Image className={css.Image} src={MacBook} w="50%" />
    </Box>
  );
};

export default FooterTop;
