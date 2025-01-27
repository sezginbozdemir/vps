import {
  Box,
  Burger,
  Menu,
  Button,
  Container,
  Group,
  Image,
  ThemeIcon,
  Text,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import css from "./Header.module.css";
import logo from "../../../assets/logo.png";
import vpsIcon from "../../../assets/vps-icon.png";
import databaseIcon from "../../../assets/database-icon.png";
import chevron from "../../../assets/chevron.png";

function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [menuOpened, { toggle: toggleMenu, close: closeMenu }] =
    useDisclosure(false);

  return (
    <Box className={css.HeaderContainer}>
      <header className={css.Header}>
        <Container>
          <Group justify="space-between" h="100%">
            <Image src={logo} w="auto" h={30} fit="contain" />
            <Group h="100%" gap={30} visibleFrom="sm">
              <a href="/" className={css.Link}>
                Acasă
              </a>

              <Menu
                opened={menuOpened}
                onClose={closeMenu}
                onOpen={toggleMenu}
                withArrow
              >
                <Menu.Target>
                  <Group gap={5} align="center" className={css.Link}>
                    Soluții
                    <ThemeIcon size={15} color="transparent">
                      <Image
                        style={{
                          transition: "transform 0.2s",
                          transform: menuOpened
                            ? "rotate(0deg)"
                            : "rotate(180deg)",
                        }}
                        src={chevron}
                      />
                    </ThemeIcon>
                  </Group>
                </Menu.Target>
                <Menu.Dropdown p={10}>
                  <Menu.Item component="a" href="/vps">
                    <Group>
                      <ThemeIcon size={40} color="transparent">
                        <Image src={vpsIcon} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text className={css.MenuTitle}>VPS</Text>
                        <Text className={css.MenusubTitle}>
                          Servere VPS în Cloud
                        </Text>
                      </Stack>
                    </Group>
                  </Menu.Item>
                  <Menu.Item component="a" href="/additional-space">
                    <Group>
                      <ThemeIcon size={40} color="transparent">
                        <Image src={databaseIcon} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text className={css.MenuTitle}>Spațiu Adițional</Text>
                        <Text className={css.MenusubTitle}>
                          Extinde-ți spațiul în Cloud
                        </Text>
                      </Stack>
                    </Group>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <a href="/prices" className={css.Link}>
                Prețuri
              </a>
              <a href="/contact" className={css.Link}>
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
