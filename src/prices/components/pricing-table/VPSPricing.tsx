import { Stack, Text, Button, Box, ScrollArea } from "@mantine/core";
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
        <Stack w="100%" mb={80} mt={70} key={instanceIndex}>
          <Text className={`${font.T3} ${css.TableTitle}`}>
            {instance.title}
          </Text>
          <ScrollArea>
            {instance.pricingCards.map(
              (card: PricingCard, cardIndex: number) => (
                <Box mb={20} key={cardIndex} className={css.PriceCard}>
                  <Stack gap={5}>
                    <Text
                      className={`${font.ButtonBody} ${css.HighlightedContent}`}
                    >
                      {card.cpu}
                    </Text>
                    <Text className={`${font.Body} ${css.TableContent}`}>
                      CPU
                    </Text>
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
                </Box>
              )
            )}
          </ScrollArea>
        </Stack>
      ))}
    </>
  );
};

export default VPSPricing;
