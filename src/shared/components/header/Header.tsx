import { Box, Burger, Button, Container, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import css from "./Header.module.css";
import logo from "../../../assets/logo.png";
function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  useDisclosure(false);

  return (
    <Box className={css.HeaderContainer}>
      <header className={css.Header}>
        <Container>
          <Group justify="space-between" h="100%">
            <Image src={logo} w="auto" h={30} fit="contain" />
            <Group h="100%" gap={30} visibleFrom="sm">
              <a href="#" className={css.Link}>
                Acasă
              </a>

              <a href="#" className={css.Link}>
                Soluții
              </a>
              <a href="#" className={css.Link}>
                Prețuri
              </a>
              <a href="#" className={css.Link}>
                Contact
              </a>
              <Button
                className={css.Button}
                size="lg"
                variant="outline"
                radius="xl"
              >
                LOG IN
              </Button>
            </Group>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Container>
      </header>
    </Box>
  );
}
export default Header;
