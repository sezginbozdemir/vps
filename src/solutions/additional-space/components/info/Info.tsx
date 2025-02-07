import {
  Image,
  Text,
  Container,
  Stack,
  ThemeIcon,
  Grid,
  List,
  Button,
  Divider,
  Box,
} from "@mantine/core";
import css from "./Info.module.css";
import font from "../../../../shared/modules/Typography.module.css";
import styles from "../../../../shared/modules/Button.module.css";
import data from "./data";
import arrow from "../../../../assets/arrow-blue.png";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <Container w="100%" h="100%">
      <Box mb={200}>
        {data.map((item, index) => (
          <Box>
            <Stack gap={40} align="center" justify="center">
              <Text className={`${font.T2} ${css.BottomTitle}`}>
                {item.title}
                <span className={css.BottomTitleSpan}>{item.titleSpan}</span>
              </Text>
              <Text w="70%" className={`${font.Body} ${css.BottomDescription}`}>
                {item.description}
              </Text>
              <Grid>
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <List
                    icon={
                      <ThemeIcon color="transparent" size={15} radius="xl">
                        <Image src={arrow} />
                      </ThemeIcon>
                    }
                    w="70%"
                    spacing={10}
                    className={`${font.Body} ${css.BottomList}`}
                  >
                    {item.listItems.map((listItem, i) => (
                      <List.Item key={i}>{listItem}</List.Item>
                    ))}
                  </List>
                </Grid.Col>
                <Grid.Col className={css.ButtonCol} span={{ base: 12, md: 4 }}>
                  <Button
                    onClick={() => navigate("/prices")}
                    size="md"
                    className={`${styles.ButtonFilled} ${font.ButtonBody}`}
                  >
                    Vezi lista de prețuri
                  </Button>
                </Grid.Col>
              </Grid>
            </Stack>

            {index < data.length - 1 && (
              <Divider className={css.Divider} my={50} />
            )}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Info;
