import {
  Stack,
  Container,
  Text,
  Select,
  ComboboxItem,
  Group,
  Button,
} from "@mantine/core";
import css from "./PricingTable.module.css";
import { useState } from "react";
import data from "./data";
import cloudData from "./cloudData";
import VPSPricing from "./VPSPricing";
import CloudStoragePricing from "./CloudPricing";
const serviceTypes = [
  { label: "Servere VPS în Cloud", value: "vps-cloud" },
  { label: "Spațiu adițional în Cloud", value: "cloud-storage" },
];

const PricingTable = () => {
  const [value, setValue] = useState<ComboboxItem>({
    label: "Servere VPS în Cloud",
    value: "vps-cloud",
  });

  const renderContent = () => {
    switch (value.value) {
      case "vps-cloud":
        return <VPSPricing data={data} />;
      case "cloud-storage":
        return <CloudStoragePricing data={cloudData} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Stack align="center" justify="center">
        <Text className={css.SelectText}>Tipul de servicii LOGO VPS</Text>
        <Select
          data={serviceTypes}
          value={value.value}
          onChange={(_value, option) => setValue(option)}
          allowDeselect={false}
          classNames={{
            root: css.SelectRoot,
            input: css.SelectInput,
            dropdown: css.SelectDropdown,
            option: css.SelectOption,
          }}
        />
      </Stack>
      {renderContent()}
      <Stack mb={80} align="start" justify="start" gap={15}>
        <Text className={css.BottomText}>
          Crează-ți contul simplu și rapid!
        </Text>
        <Button className={css.BottomButton} variant="filled" size="xl">
          Creează Cont
        </Button>
      </Stack>
    </Container>
  );
};

export default PricingTable;
