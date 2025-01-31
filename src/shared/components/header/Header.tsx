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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
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
        <Container size={1000}>
          <Group justify="space-between" h="100%">
            <Image
              onClick={() => navigate("/")}
              src={logo}
              w="auto"
              h={25}
              fit="contain"
              className={css.Logo}
            />
            <Group justify="space-between">
              <Group h="100%" gap={30} visibleFrom="sm">
                <Link to="/" className={`${css.Link} ${font.ButtonBody}`}>
                  Acasă
                </Link>

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
                      component={Link}
                      to="/vps"
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
                      component={Link}
                      to="/additional-space"
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
                <Link to="/prices" className={`${css.Link} ${font.ButtonBody}`}>
                  Prețuri
                </Link>
                <Link
                  to="/contact"
                  className={`${css.Link} ${font.ButtonBody}`}
                >
                  Contact
                </Link>
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
          <Link
            to="/"
            onClick={() => setDrawerOpened(false)}
            className={`${css.Link} ${font.ButtonBody}`}
          >
            Acasă
          </Link>
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
              <Menu.Item
                className={css.MenuItem}
                onClick={() => setDrawerOpened(false)}
                component={Link}
                to="/vps"
              >
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
                component={Link}
                onClick={() => setDrawerOpened(false)}
                to="/additional-space"
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
          <Link
            to="/prices"
            onClick={() => setDrawerOpened(false)}
            className={`${css.Link} ${font.ButtonBody}`}
          >
            Prețuri
          </Link>
          <Link
            to="/contact"
            onClick={() => setDrawerOpened(false)}
            className={`${css.Link} ${font.ButtonBody}`}
          >
            Contact
          </Link>
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
