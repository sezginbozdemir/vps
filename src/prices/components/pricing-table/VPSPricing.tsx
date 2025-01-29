import { Stack, Text, Group, Button } from "@mantine/core";
import css from "./PricingTable.module.css";
import font from "../../../shared/modules/Typography.module.css";
import styles from "../../../shared/modules/Button.module.css";

interface PricingCard {
  cpu: string;
  ram: string;
  storage: string;
  storageType: string;
  transfer: string;
  price: string;
}

interface InstanceType {
  title: string;
  pricingCards: PricingCard[];
}

interface VPSPricingProps {
  data: InstanceType[];
}

const VPSPricing = ({ data }: VPSPricingProps) => {
  return (
    <>
      {data.map((instance: InstanceType, instanceIndex: number) => (
        <Stack mb={80} mt={70} key={instanceIndex}>
          <Text className={`${font.T3} ${css.TableTitle}`}>
            {instance.title}
          </Text>
          {instance.pricingCards.map((card: PricingCard, cardIndex: number) => (
            <Group
              key={cardIndex}
              gap="xl"
              className={css.PriceCard}
              align="center"
              justify="space-between"
            >
              <Stack gap={5}>
                <Text
                  className={`${font.ButtonBody} ${css.HighlightedContent}`}
                >
                  {card.cpu}
                </Text>
                <Text className={`${font.Body} ${css.TableContent}`}>CPU</Text>
              </Stack>
              <Stack gap={5}>
                <Text
                  className={`${font.ButtonBody} ${css.HighlightedContent}`}
                >
                  {card.ram}
                </Text>
                <Text className={`${font.Body} ${css.TableContent}`}>
                  RAM ECC
                </Text>
              </Stack>
              <Stack gap={5}>
                <Text
                  className={`${font.ButtonBody} ${css.HighlightedContent}`}
                >
                  {card.storage}
                </Text>
                <Text className={`${font.Body} ${css.TableContent}`}>
                  {card.storageType}
                </Text>
              </Stack>
              <Stack gap={5}>
                <Text
                  className={`${font.ButtonBody} ${css.HighlightedContent}`}
                >
                  {card.transfer}
                </Text>
                <Text className={`${font.Body} ${css.TableContent}`}>
                  Transfer
                </Text>
              </Stack>
              <Text className={`${font.Body} ${css.TableContent}`}>
                <span className={css.PriceSpan}>
                  {card.price.split(" ")[0]}
                </span>
                EUR
              </Text>
              <Button
                size="md"
                className={`${styles.ButtonOutline} ${font.ButtonBody}`}
              >
                Alege
              </Button>
            </Group>
          ))}
        </Stack>
      ))}
    </>
  );
};

export default VPSPricing;
