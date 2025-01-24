import { Box, Text, Container, Stack, Divider, Button } from "@mantine/core";
import css from "./FooterMid.module.css";
const FooterMid = () => {
  return (
    <Box mt={70} className={css.Background}>
      <Container>
        <Divider h="0.5px" className={css.Divider} mb={50}></Divider>

        <Stack align="center" justify="center">
          <Stack
            className={css.Stack}
            align="center"
            justify="center"
            gap="xl"
            w="70%"
            mb={150}
          >
            <Text ta="center" className={css.Title}>
              <span className={css.TitleSpan}>risc</span> ZERO – garanție de 30
              de zile
            </Text>
            <Text ta="center" className={css.Paragraph}>
              Te asigurăm că serviciile noastre sunt exact ceea ce ai nevoie.
              Dacă nu ești complet mulțumit în primele 30 de zile, îți returnăm
              banii fără întrebări suplimentare. Îți oferim această garanție
              pentru că avem încredere totală în calitatea soluțiilor noastre de
              cloud hosting.
            </Text>
            <Button
              className={css.Button}
              variant="filled"
              size="xl"
              radius="xl"
            >
              Configurează un VPS acum
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default FooterMid;
