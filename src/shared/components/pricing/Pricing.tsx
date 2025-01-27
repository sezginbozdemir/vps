import {
  Group,
  Container,
  Text,
  Card,
  Button,
  Stack,
  Divider,
} from "@mantine/core";
import css from "./Pricing.module.css";
import data from "./data.ts";
import { useLocation } from "react-router-dom";
const Pricing = () => {
  const location = useLocation();
  const TextClassName =
    location.pathname !== "/" ? `${css.Text} ${css.NoDisplay}` : css.Text;
  return (
    <Container className={css.Container}>
      <Group className={css.GroupOuter} justify="center" align="center">
        <Text className={TextClassName}>Cumpără un plan de Hosting VPS</Text>
        <Group gap={20} w="100%" h="100%" justify="center" align="end">
          {data.map((plan, index) => (
            <Card
              key={index}
              className={plan.isPopular ? css.MiddleCard : css.Card}
            >
              {plan.isPopular && (
                <Card.Section h={40} inheritPadding className={css.CardSection}>
                  <Text> CEL MAI POPULAR</Text>
                </Card.Section>
              )}
              <Stack px="md" gap="md" justify="space-between">
                <Stack gap={0}>
                  <Text className={css.Title1}>{plan.type.toUpperCase()}</Text>
                  <Text className={css.Title2}>{plan.cpu}</Text>
                </Stack>
                <Stack gap={0}>
                  <Text className={css.Title3}>
                    EUR€ <span className={css.Title3Span}>{plan.price}</span>
                    /luna
                  </Text>
                  <Text className={css.subTitle3}>{plan.billingCycle}</Text>
                </Stack>
                <Button
                  className={css.Button}
                  radius="xl"
                  size="md"
                  variant={plan.isPopular ? "filled" : "outline"}
                >
                  Alege acest plan
                </Button>
                <Divider className={css.Divider}></Divider>
                <Stack gap={15}>
                  {plan.features.map((feature, index) => (
                    <Text key={index} className={css.Text1}>
                      <span className={css.TextSpan}>{feature.value}</span>{" "}
                      {feature.unit}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Card>
          ))}
        </Group>
      </Group>
    </Container>
  );
};

export default Pricing;
