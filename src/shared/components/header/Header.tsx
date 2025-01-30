import { useState, useEffect } from "react";
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
import css from "./Header.module.css";
import font from "../../modules/Typography.module.css";
import styles from "../../modules/Button.module.css";
import logo from "../../../assets/logo.png";
import vpsIcon from "../../../assets/vps-icon.png";
import databaseIcon from "../../../assets/database-icon.png";
import chevron from "../../../assets/chevron.png";
import { useDisclosure } from "@mantine/hooks";

function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [menuOpened, { toggle: toggleMenu, close: closeMenu }] =
    useDisclosure(false);
  const [
    menuOpenedMobile,
    { toggle: toggleMenuMobile, close: closeMenuMobile },
  ] = useDisclosure(false);
  useEffect(() => {
    if (drawerOpened) {
      document.body.classList.add(css.noScroll);
    } else {
      document.body.classList.remove(css.noScroll);
    }

    return () => {
      document.body.classList.remove(css.noScroll);
    };
  }, [drawerOpened]);

  return (
    <Box
      className={`${css.HeaderContainer} ${
        drawerOpened ? css.HeaderOpenedCont : ""
      }`}
    >
      <header
        className={`${css.Header} ${drawerOpened ? css.HeaderOpened : ""}`}
      >
        <Container size={950}>
          <Group justify="space-between" h="100%">
            <Image src={logo} w="auto" h={25} fit="contain" />
            <Group justify="space-between">
              <Group h="100%" gap={20} visibleFrom="sm">
                <a href="/" className={`${css.Link} ${font.ButtonBody}`}>
                  Acasă
                </a>

                <Menu
                  zIndex={2400}
                  opened={menuOpened}
                  onClose={closeMenu}
                  onOpen={toggleMenu}
                  withArrow
                  classNames={{
                    dropdown: css.MenuDropdown,
                    overlay: css.Overlay,
                  }}
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
                    <Menu.Item
                      className={css.MenuItem}
                      component="a"
                      href="/vps"
                    >
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
              </Group>
              <Group justify="space-between">
                <Button
                  className={`${css.ButtonLogIn} ${styles.ButtonOutline} ${font.ButtonBody}`}
                  size="md"
                >
                  LOG IN
                </Button>

                <Burger
                  opened={drawerOpened}
                  onClick={() => setDrawerOpened((prev) => !prev)}
                  hiddenFrom="sm"
                  classNames={{ root: css.Burger }}
                />
              </Group>
            </Group>
          </Group>
        </Container>
      </header>

      <Box
        pt={20}
        className={`${css.CustomDrawer} ${drawerOpened ? css.Opened : ""}`}
      >
        <Stack align="center" h="100%" gap={60}>
          <a href="/" className={`${css.Link} ${font.ButtonBody}`}>
            Acasă
          </a>
          <Menu
            zIndex={2400}
            opened={menuOpenedMobile}
            onClose={closeMenuMobile}
            onOpen={toggleMenuMobile}
            withArrow
            classNames={{
              dropdown: css.MenuDropdown,
              overlay: css.Overlay,
            }}
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
                      transform: menuOpened ? "rotate(0deg)" : "rotate(180deg)",
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
                    <Text className={`${css.MenuTitle} ${font.T3}`}>VPS</Text>
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
          </Menu>{" "}
          <a href="/prices" className={`${css.Link} ${font.ButtonBody}`}>
            Prețuri
          </a>
          <a href="/contact" className={`${css.Link} ${font.ButtonBody}`}>
            Contact
          </a>
          <Button
            className={`${css.ButtonLogInMenu} ${styles.ButtonOutline} ${font.ButtonBody}`}
            size="md"
          >
            LOG IN
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Header;
