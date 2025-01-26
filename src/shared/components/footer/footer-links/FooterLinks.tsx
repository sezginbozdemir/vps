import {
  ActionIcon,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Image,
} from "@mantine/core";
import css from "./FooterLinks.module.css";
import whatsapp from "../../../../assets/social/whatsapp.png";
import facebook from "../../../../assets/social/facebook.png";
import linkedin from "../../../../assets/social/linkedin.png";
import mastercard from "../../../../assets/social/mastercard.png";
import paypal from "../../../../assets/social/paypal.png";
import visa from "../../../../assets/social/visa.png";

const FooterLinks = () => {
  return (
    <Container mt={100} w="100%" h="100%">
      <Grid className={css.Grid}>
        <Grid.Col span={3}>
          <Stack>
            <Text className={css.Title}>Companie</Text>
            <Text className={css.Link}>Acasa</Text>
            <Text className={css.Link}>Solutii</Text>
            <Text className={css.Link}>Preturi</Text>
            <Text className={css.Link}>Contact</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Stack>
            <Text className={css.Title}>Informatii de contact</Text>
            <Text className={css.Link}>email@email.com</Text>
            <Text className={css.Link}>+0123456789</Text>

            <Text className={css.Link}>
              str.abc, nr. 00, Timișoara, România
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={3} offset={2}>
          <Stack>
            <Group>
              <ActionIcon variant="transparent" size="xl">
                <Image src={facebook} />
              </ActionIcon>
              <ActionIcon variant="transparent" size="xl">
                <Image src={linkedin} />
              </ActionIcon>
              <ActionIcon variant="transparent" size="xl">
                <Image src={whatsapp} />
              </ActionIcon>
            </Group>
            <Group ml={20}>
              <ActionIcon variant="transparent" size="xl">
                <Image src={paypal} />
              </ActionIcon>
              <ActionIcon variant="transparent" size="xl">
                <Image src={visa} />
              </ActionIcon>
              <ActionIcon variant="transparent" size="xl">
                <Image src={mastercard} />
              </ActionIcon>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default FooterLinks;
