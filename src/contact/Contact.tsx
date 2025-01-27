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

const Contact = () => {
  return (
    <Container>
      <Stack mt={50} mb={100} align="center" justify="center">
        <Text className={css.Title}>
          <span className={css.TitleSpan}>Contacteaza </span> LOGO VPS
        </Text>
        <Text w="70%" className={css.Paragraph}>
          Ai întrebări sau ai nevoie de asistență? Echipa noastră este mereu
          pregătită să te ajute!
        </Text>
      </Stack>
      <Grid mb={30}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack h="100%" align="start" justify="space-between">
            <Text mb={50} className={css.ColTitle}>
              Trimite-ne un mesaj
            </Text>

            <TextInput
              size="md"
              label=<Text className={css.InputLabel}>Nume și Prenume</Text>
              w="70%"
              classNames={{ input: css.Input }}
            />

            <TextInput
              size="md"
              label=<Text className={css.InputLabel}>Adresă de mail</Text>
              w="85%"
              classNames={{ input: css.Input }}
            />
            <Textarea
              size="xl"
              description="Îți răspundem în cel mai scurt timp!"
              label=<Text className={css.InputLabel}>Adresă de mail</Text>
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
            <Text mb={50} className={css.ColTitle}>
              Informații Societate
            </Text>
            <Stack align="start" justify="start" className={css.Card}>
              <Text className={css.CardText}>
                Sediu: str. Victoriei, nr. 17, oras Timișoara, județul Timișoara
              </Text>
              <Text className={css.CardText}>
                Sediu: str. Victoriei, nr. 17, oras Timișoara, județul Timișoara
              </Text>
              <Text className={css.CardText}>
                Adresă de email : abcd@gmail.logovps.ro
              </Text>
              <Text className={css.CardText}>
                Număr de telefon: 0123 456 789
              </Text>
              <Divider h="0.5px" className={css.CardDivider} />
              <Text className={css.CardTitle}>Program de lucru</Text>
              <Text className={css.CardText}>Luni - Vineri : 9:00-17:00</Text>
              <Text className={css.CardText}>Sâmbătă - Duminică : Liber</Text>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
      <Button mb={100} size="xl" variant="filled" className={css.Button}>
        Trimite mesajul tău
      </Button>
      <Grid mb={100}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack align="start" justify="start">
            <Text className={css.ColTitle}>
              Preferi să discuți direct cu noi?
            </Text>
            <Text className={css.CardText}>Sună-ne acum !</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Button size="xl" variant="filled" className={css.Button}>
            +0123 456 789{" "}
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
export default Contact;
