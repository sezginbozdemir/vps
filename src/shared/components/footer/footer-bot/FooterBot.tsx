import { Container, Text, Stack, Accordion, Image } from "@mantine/core";
import { useState } from "react";
import css from "./FooterBot.module.css";
import font from "../../../modules/Typography.module.css";
import data from "./data";
import arrow from "../../../../assets/arrow.png";
import arrowBlue from "../../../../assets/arrow-blue.png";
const FooterBot = () => {
  const [openedItem, setOpenedItem] = useState<string | null>(null);
  console.log(openedItem);
  return (
    <Container w="100%" h="100%">
      <Stack mt={90} align="center" w="100%" justify="center" gap="xl">
        <Text mb={25} className={`${font.T2} ${css.Title}`}>
          <span className={css.TitleSpan}>Ghid Rapid: </span> Întrebări și
          Răspunsuri
        </Text>
        <Accordion
          w="100%"
          className={css.Accordion}
          chevronPosition="left"
          value={openedItem}
          onChange={setOpenedItem}
        >
          {data.map((item, index) => (
            <Accordion.Item
              className={css.AccordionItem}
              key={index}
              value={item.title}
            >
              <Accordion.Control
                chevron={
                  <Image
                    src={openedItem === item.title ? arrowBlue : arrow}
                    className={css.arrow}
                  />
                }
                className={`${font.T3} ${css.AccordionControl}`}
              >
                {item.title}
              </Accordion.Control>
              <Accordion.Panel className={`${font.Body} ${css.AccordionPanel}`}>
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
