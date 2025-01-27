import { Stack, Text, Group, Button } from "@mantine/core";
import css from "./PricingTable.module.css";

interface CloudData {
  title: string;
  titleSpan: string;
  description: string;
  pricePerGB: any;
}

interface PricingProps {
  data: CloudData[];
}

const CloudPricing = ({ data }: PricingProps) => {
  return (
    <>
      {data.map((item: CloudData, index: number) => (
        <Stack
          mb={80}
          mt={70}
          align="center"
          justify="center"
          gap={50}
          key={index}
        >
          <Text className={css.CloudTitle}>
            {item.title}
            <span className={css.CloudSpan}>{item.titleSpan}</span>
          </Text>
          <Text className={css.CloudDescription}>{item.description}</Text>
          <Group w="100%" justify="space-around">
            <Stack gap={10} align="center" justify="center">
              <Text className={css.CloudDescription}>
                <span className={css.CloudPrice}>{item.pricePerGB}</span>EUR/GB
              </Text>
              <Text className={css.CloudDescription}>
                100 GB= {item.pricePerGB * 100}
              </Text>
            </Stack>
            <Button variant="filled" size="xl" className={css.CloudButton}>
              Alege
            </Button>
          </Group>
        </Stack>
      ))}
    </>
  );
};

export default CloudPricing;
