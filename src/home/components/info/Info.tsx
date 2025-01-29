import { Box, Container, Text, Grid, Stack, Image } from "@mantine/core";
import css from "./Info.module.css";
import font from "../../../shared/modules/Typography.module.css";
import data from "./data";

const Info = () => {
  return (
    <Box className={css.Box}>
      <Container className={css.Container}>
        <Text className={`${font.T2} ${css.Header}`}>
          Performanță și Tehnologie de Vârf
        </Text>

        <Grid mt={60} gutter={100}>
          {data.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <Stack align="center" justify="center">
                <Image src={item.icon} w={90} />
                <Text ta="center" className={`${font.T3} ${css.Title}`}>
                  {item.title}
                </Text>
                <Text ta="center" className={`${font.Body} ${css.Description}`}>
                  {item.description}
                </Text>
                <Stack align="center">
                  {item.tags.map((tag, tagIndex) => (
                    <Text
                      key={tagIndex}
                      className={`${font.Detail} ${css.Tag}`}
                    >
                      {tag}
                    </Text>
                  ))}
                </Stack>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
