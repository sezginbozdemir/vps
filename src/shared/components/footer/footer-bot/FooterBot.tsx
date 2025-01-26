import { Container, Text, Stack, Accordion, Image } from "@mantine/core";
import css from "./FooterBot.module.css";
import data from "./data";
import arrow from "../../../../assets/arrow.png";
const FooterBot = () => {
  return (
    <Container w="100%" h="100%">
      <Stack mt={90} align="center" w="100%" justify="center" gap="xl">
        <Text mb={25} className={css.Title}>
          <span className={css.TitleSpan}>Ghid Rapid: </span> Întrebări și
          Răspunsuri
        </Text>
        <Accordion
          className={css.Accordion}
          chevron={<Image src={arrow} className={css.arrow} w={15} />}
          chevronPosition="left"
        >
          {data.map((item, index) => (
            <Accordion.Item
              className={css.AccordionItem}
              key={index}
              value={item.title}
            >
              <Accordion.Control className={css.AccordionControl}>
                {item.title}
              </Accordion.Control>
              <Accordion.Panel className={css.AccordionPanel}>
                {item.description}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
};

export default FooterBot;
