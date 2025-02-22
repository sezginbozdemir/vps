import {
  Container,
  Text,
  Card,
  Button,
  Stack,
  Divider,
  Grid,
} from "@mantine/core";
import css from "./Pricing.module.css";
import font from "../../../shared/modules/Typography.module.css";
import styles from "../../../shared/modules/Button.module.css";
import data from "./data.ts";
import { useLocation } from "react-router-dom";
const Pricing = () => {
  const location = useLocation();
  const TextClassName =
    location.pathname !== "/" ? `${css.Text} ${css.NoDisplay}` : css.Text;
  return (
    <Container w="100%" mb={150} className={css.Container}>
      <Stack mb={10} justify="center" align="center">
        <Text className={`${font.T2} ${TextClassName}`}>
          Cumpără un plan de Hosting VPS
        </Text>
        <Grid w="100%" classNames={{ inner: css.GridInner }}>
          {data.map((plan, index) => (
            <Grid.Col
              px={5}
              className={plan.isPopular ? css.MiddleCol : css.Col}
              span={{ base: 12, sm: 4 }}
            >
              <Card
                key={index}
                className={plan.isPopular ? css.MiddleCard : css.Card}
              >
                {plan.isPopular && (
                  <Card.Section
                    h={40}
                    inheritPadding
                    className={css.CardSection}
                  >
                    <Text className={font.Body}> CEL MAI POPULAR</Text>
                  </Card.Section>
                )}
                <Stack px="md" gap="md" justify="space-between">
                  <Stack gap={0}>
                    <Text className={`${font.T4} ${css.Title1}`}>
                      {plan.type.toUpperCase()}
                    </Text>
                    <Text className={`${font.T3} ${css.Title2}`}>
                      {plan.cpu}
                    </Text>
                  </Stack>
                  <Stack gap={0}>
                    <Text className={`${font.Body} ${css.Title3}`}>
                      EUR€ <span className={css.Title3Span}>{plan.price}</span>
                      /luna
                    </Text>
                    <Text className={`${font.CardDetail} ${css.subTitle3}`}>
                      {plan.billingCycle}
                    </Text>
                  </Stack>
                  <Button
                    className={
                      plan.isPopular
                        ? `${styles.ButtonFilled} ${font.ButtonBody}`
                        : `${styles.ButtonOutline} ${font.ButtonBody}`
                    }
                    size="md"
                  >
                    Alege acest plan
                  </Button>
                  <Divider className={css.Divider}></Divider>
                  <Stack gap={15}>
                    {plan.features.map((feature, index) => (
                      <Text key={index} className={`${font.Body} ${css.Text1}`}>
                        <span className={css.TextSpan}>{feature.value}</span>
                        {feature.unit}
                      </Text>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default Pricing;
