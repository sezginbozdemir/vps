import {
  Stack,
  Container,
  Text,
  Select,
  ComboboxItem,
  Button,
} from "@mantine/core";
import css from "./PricingTable.module.css";
import font from "../../../shared/modules/Typography.module.css";
import styles from "../../../shared/modules/Button.module.css";
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
        <Text className={`${font.Detail} ${css.SelectText}`}>
          Tipul de servicii LOGO VPS
        </Text>
        <Select
          data={serviceTypes}
          value={value.value}
          onChange={(_value, option) => setValue(option)}
          allowDeselect={false}
          className={font.Body}
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
        <Text className={`${font.Body} ${css.BottomText}`}>
          Crează-ți contul simplu și rapid!
        </Text>
        <Button
          className={`${styles.ButtonFilled} ${font.ButtonBody} ${css.BottomButton}`}
          size="md"
        >
          Creează Cont
        </Button>
      </Stack>
    </Container>
  );
};

export default PricingTable;
