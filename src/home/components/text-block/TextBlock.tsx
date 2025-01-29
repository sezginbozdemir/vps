import { Text, Stack, Container } from "@mantine/core";
import data from "./data";
import css from "./TextBlock.module.css";
import font from "../../../shared/modules/Typography.module.css";
const TextBlock = () => {
  return (
    <Container>
      <Stack mt={80} mb={80} align="center" justify="center">
        <Text ta="center" className={`${font.T2} ${css.Title}`}>
          {data[0].title}
        </Text>
        <Text ta="center" w="70%" className={`${font.Body} ${css.Paragraph}`}>
          {data[0].paragraph}
        </Text>
      </Stack>
    </Container>
  );
};

export default TextBlock;
