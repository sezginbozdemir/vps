import {
  ActionIcon,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Image,
  Divider,
} from "@mantine/core";
import { Link } from "react-router-dom";
import css from "./FooterLinks.module.css";
import font from "../../../modules/Typography.module.css";
import whatsapp from "../../../../assets/social/whatsapp.png";
import facebook from "../../../../assets/social/facebook.png";
import linkedin from "../../../../assets/social/linkedin.png";
import mastercard from "../../../../assets/social/mastercard.png";
import paypal from "../../../../assets/social/paypal.png";
import visa from "../../../../assets/social/visa.png";
import logo from "../../../../assets/logo.png";

const FooterLinks = () => {
  return (
    <Container mt={200} w="100%">
      <Grid mb={30} className={css.Grid}>
        <Grid.Col className={css.MobileGrid} span={{ base: 12, xs: 4, sm: 3 }}>
          <Stack align="start" justify="center">
            <Text className={`${font.T3} ${css.Title}`}>Companie</Text>
            <Link to="/" className={`${font.ButtonBody} ${css.Link}`}>
              Acasa
            </Link>
            <Link to="/vps" className={`${font.ButtonBody} ${css.Link}`}>
              Solutii
            </Link>
            <Link to="/prices" className={`${font.ButtonBody} ${css.Link}`}>
              Preturi
            </Link>
            <Link to="/contact" className={`${font.ButtonBody} ${css.Link}`}>
              Contact
            </Link>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8, sm: 4 }}>
          <Stack align="start" justify="center">
            <Text className={`${font.T3} ${css.Title}`}>
              Informatii de contact
            </Text>
            <Text className={`${font.ButtonBody} `}>email@email.com</Text>
            <Text className={`${font.ButtonBody} `}>+0123456789</Text>

            <Text className={`${font.ButtonBody} `}>
              str.abc, nr. 00, Timișoara, România
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 5, sm: 3 }}
          offset={{ base: 0, xs: 7, sm: 2 }}
        >
          <Stack align="end" justify="end">
            <Group>
              <ActionIcon variant="transparent" size={46}>
                <Image src={facebook} />
              </ActionIcon>
              <ActionIcon variant="transparent" size={46}>
                <Image src={linkedin} />
              </ActionIcon>
              <ActionIcon variant="transparent" size={46}>
                <Image src={whatsapp} />
              </ActionIcon>
            </Group>
            <Group>
              <ActionIcon variant="transparent" size={31}>
                <Image src={paypal} />
              </ActionIcon>
              <ActionIcon variant="transparent" size={31}>
                <Image src={visa} />
              </ActionIcon>
              <ActionIcon variant="transparent" size={31}>
                <Image src={mastercard} />
              </ActionIcon>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
      <Divider className={css.Divider} />
      <Grid mb={0}>
        <Grid.Col
          offset={{ base: 10, xs: 0, sm: 0 }}
          span={{ base: 2, xs: 2, sm: 2 }}
        >
          <Image src={logo} />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 6, sm: 5 }}
          offset={{ base: 0, xs: 4, sm: 0 }}
        >
          <Text className={`${font.Detail} ${css.Copyright}`}>
            Copyright LOGO VPS. 2024. Toate drepturile sunt rezervate.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 12, sm: 5 }}>
          <Group align="end" justify="end" gap={15}>
            <Text className={`${font.Detail} ${css.Copyright} ${css.Link}`}>
              Termeni și Condiții
            </Text>
            <Text className={`${font.Detail} ${css.Copyright} ${css.Link}`}>
              Politica de Cookies
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default FooterLinks;
