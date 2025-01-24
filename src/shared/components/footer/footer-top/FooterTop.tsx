import {
  Group,
  Image,
  Box,
  Button,
  Container,
  Stack,
  Text,
} from "@mantine/core";
import css from "./FooterTop.module.css";
import MacBook from "../../../../assets/macbook.png";

const FooterTop = () => {
  return (
    <Box className={css.Background}>
      <Container>
        <Stack w="60%" align="center" gap="xl" mt={200}>
          <Text ta="center" className={css.Title}>
            Dashboard Simplu și Intuitiv
          </Text>
          <Text ta="center" className={css.Paragraph}>
            Gestionarea serviciilor de cloud hosting nu a fost niciodată mai
            ușoară. Dashboard-ul nostru modern și prietenos îți oferă acces
            rapid și clar la toate funcțiile esențiale, de la configurarea
            serverelor până la monitorizarea resurselor în timp real.
          </Text>
          <Button
            variant="filled"
            radius="xl"
            size="xl"
            px={50}
            className={css.Button}
          >
            Începe acum!
          </Button>
        </Stack>
      </Container>
      <Image className={css.Image} src={MacBook} w="50%" />
    </Box>
  );
};

export default FooterTop;
