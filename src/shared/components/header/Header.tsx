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
import font from "../../modules/Typography.module.css";
import styles from "../../modules/Button.module.css";
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
              <a href="/" className={`${css.Link} ${font.ButtonBody}`}>
                Acasă
              </a>

              <Menu
                opened={menuOpened}
                onClose={closeMenu}
                onOpen={toggleMenu}
                withArrow
              >
                <Menu.Target>
                  <Group
                    gap={5}
                    align="center"
                    className={`${css.Link} ${font.ButtonBody}`}
                  >
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
                <Menu.Dropdown w={400} p={10}>
                  <Menu.Item className={css.MenuItem} component="a" href="/vps">
                    <Group>
                      <ThemeIcon className={css.MenuIcon} color="transparent">
                        <Image src={vpsIcon} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text className={`${css.MenuTitle} ${font.T3}`}>
                          VPS
                        </Text>
                        <Text className={`${font.Body} ${css.MenusubTitle}`}>
                          Servere VPS în Cloud
                        </Text>
                      </Stack>
                    </Group>
                  </Menu.Item>
                  <Menu.Item
                    className={css.MenuItem}
                    component="a"
                    href="/additional-space"
                  >
                    <Group>
                      <ThemeIcon className={css.MenuIcon} color="transparent">
                        <Image src={databaseIcon} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text className={`${css.MenuTitle} ${font.T3}`}>
                          Spațiu Adițional
                        </Text>
                        <Text className={`${font.Body} ${css.MenusubTitle}`}>
                          Extinde-ți spațiul în Cloud
                        </Text>
                      </Stack>
                    </Group>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <a href="/prices" className={`${css.Link} ${font.ButtonBody}`}>
                Prețuri
              </a>
              <a href="/contact" className={`${css.Link} ${font.ButtonBody}`}>
                Contact
              </a>
              <Button
                className={`${styles.ButtonOutline} ${font.ButtonBody}`}
                size="md"
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
