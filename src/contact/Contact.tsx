import {
  Container,
  Grid,
  TextInput,
  Stack,
  Text,
  Textarea,
  Divider,
  Button,
} from "@mantine/core";
import css from "./Contact.module.css";
import font from "../shared/modules/Typography.module.css";
import styles from "../shared/modules/Button.module.css";

const Contact = () => {
  return (
    <Container>
      <Stack mt={50} mb={100} align="center" justify="center">
        <Text className={`${font.T1} ${css.Title}`}>
          <span className={css.TitleSpan}>Contacteaza </span> LOGO VPS
        </Text>
        <Text w="70%" className={`${font.Body} ${css.Paragraph}`}>
          Ai întrebări sau ai nevoie de asistență? Echipa noastră este mereu
          pregătită să te ajute!
        </Text>
      </Stack>
      <Grid mb={30}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack h="100%" align="start" justify="space-between">
            <Text mb={50} className={`${font.T2} ${css.ColTitle}`}>
              Trimite-ne un mesaj
            </Text>

            <TextInput
              size="md"
              label=<Text className={`${font.T3} ${css.InputLabel}`}>
                Nume și Prenume
              </Text>
              w="70%"
              classNames={{ input: css.Input }}
            />

            <TextInput
              size="md"
              label=<Text className={`${font.T3} ${css.InputLabel}`}>
                Adresă de mail
              </Text>
              w="85%"
              classNames={{ input: css.Input }}
            />
            <Textarea
              size="xl"
              description=<Text className={font.Body}>
                Îți răspundem în cel mai scurt timp!
              </Text>
              label=<Text className={`${font.T3} ${css.InputLabel}`}>
                Adresă de mail
              </Text>
              w="100%"
              classNames={{
                input: css.InputArea,
                root: css.InputAreaRoot,
                description: css.InputAreaDescription,
              }}
            />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }} offset={{ md: 1 }}>
          <Stack align="start" justify="center">
            <Text mb={50} className={`${font.T2} ${css.ColTitle}`}>
              Informații Societate
            </Text>
            <Stack align="start" justify="start" className={css.Card}>
              <Text className={`${font.Body} ${css.CardText}`}>
                Sediu: str. Victoriei, nr. 17, oras Timișoara, județul Timișoara
              </Text>
              <Text className={`${css.CardText} ${font.Body}`}>
                Sediu: str. Victoriei, nr. 17, oras Timișoara, județul Timișoara
              </Text>
              <Text className={`${font.Body} ${css.CardText}`}>
                Adresă de email : abcd@gmail.logovps.ro
              </Text>
              <Text className={`${font.Body} ${css.CardText}`}>
                Număr de telefon: 0123 456 789
              </Text>
              <Divider h="0.5px" className={css.CardDivider} />
              <Text className={`${font.T3} ${css.CardTitle}`}>
                Program de lucru
              </Text>
              <Text className={`${font.Body} ${css.CardText}`}>
                Luni - Vineri : 9:00-17:00
              </Text>
              <Text className={`${font.Body} ${css.CardText}`}>
                Sâmbătă - Duminică : Liber
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
      <Button
        mb={100}
        size="md"
        className={`${css.Button} ${font.ButtonBody} ${styles.ButtonFilled}`}
      >
        Trimite mesajul tău
      </Button>
      <Grid mb={100}>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Stack align="start" justify="start">
            <Text className={`${font.T2} ${css.ColTitle}`}>
              Preferi să discuți direct cu noi?
            </Text>
            <Text className={`${font.Body} ${css.CardText}`}>
              Sună-ne acum !
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 3 }}>
          <Button
            size="md"
            className={`${styles.ButtonFilled} ${css.Button} ${font.ButtonBody}`}
          >
            +0123 456 789
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default Contact;
