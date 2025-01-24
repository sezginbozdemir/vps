import { Box, Container, Text, Grid, Stack, Image, Pill } from "@mantine/core";
import css from "./Info.module.css";
import data from "./data";

const Info = () => {
  return (
    <Box className={css.Box}>
      <Container className={css.Container}>
        <Text className={css.Header}>Performanță și Tehnologie de Vârf</Text>

        <Grid mt={60} gutter={100}>
          {data.map((item, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6 }}>
              <Stack align="center" justify="center">
                <Image src={item.icon} w={80} />
                <Text ta="center" className={css.Title}>
                  {item.title}
                </Text>
                <Text ta="center" className={css.Description}>
                  {item.description}
                </Text>
                <Stack align="center">
                  {item.tags.map((tag, tagIndex) => (
                    <Pill py={5} key={tagIndex} className={css.Tag}>
                      {tag}
                    </Pill>
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
