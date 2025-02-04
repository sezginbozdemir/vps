import { Container, List, Text } from "@mantine/core";
import font from "../shared/modules/Typography.module.css";
import css from "./Confidentiality.module.css";
import { useEffect } from "react";

const Confidentiality = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Text mt={50} mb={30} className={`${font.T1} ${css.Title}`}>
        Politica <span className={css.TitleSpan}>de</span> Confidențialitate
      </Text>
      <Text className={`${font.Body} ${css.Paragraph}`}>
        Această Politică de Confidențialitate explică modul în care [Numele
        Companiei] („noi”, „Furnizorul”) colectează, utilizează și protejează
        informațiile personale ale utilizatorilor („tu”, „Utilizatorul”) atunci
        când accesează website-ul și serviciile noastre de cloud hosting și VPS.
        Prin utilizarea serviciilor noastre, ești de acord cu procesarea datelor
        tale conform acestei politici. Dacă nu ești de acord, te rugăm să nu
        folosești website-ul sau serviciile noastre.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Ce date colectăm?
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Date furnizate direct de tine
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>Numele și prenumele</List.Item>
        <List.Item>Adresa de e-mail</List.Item>
        <List.Item>Numărul de telefon</List.Item>
        <List.Item>Adresa de facturare</List.Item>
        <List.Item>Detalii de plată (procesate securizat prin terți)</List.Item>
        <List.Item>
          Informații suplimentare oferite voluntar prin formulare sau suport
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Date colectate automat
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>Adresa IP</List.Item>
        <List.Item>Tipul și versiunea browserului</List.Item>
        <List.Item>Sistemul de operare</List.Item>
        <List.Item>Paginile accesate și durata vizitei</List.Item>
        <List.Item>Cookie-uri și tehnologii similare</List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Date primite de la terți
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>Procesatori de plăți (ex. Stripe, PayPal)</List.Item>
        <List.Item>
          Servicii de autentificare terță parte (ex. Google, Facebook)
        </List.Item>
      </List>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Cum utilizăm datele tale?
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Folosim datele colectate pentru:
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Furnizarea și administrarea serviciilor – Crearea contului, procesarea
          plăților, gestionarea serverelor VPS
        </List.Item>
        <List.Item>
          Îmbunătățirea serviciilor – Analizăm datele pentru a optimiza
          performanța platformei noastre.
        </List.Item>
        <List.Item>
          Comunicare – Trimiterea notificărilor legate de cont, actualizări sau
          oferte speciale.
        </List.Item>
        <List.Item>
          Securitate și prevenirea fraudelor – Protejarea contului și detectarea
          activităților suspecte.
        </List.Item>
        <List.Item>
          Respectarea obligațiilor legale – Facturare, arhivare și conformitate
          cu reglementările fiscale și GDPR.
        </List.Item>
      </List>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Cu cine partajăm datele tale?
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Datele tale NU sunt vândute sau partajate în scopuri comerciale, dar pot
        fi partajate cu:
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Procesatori de plăți – Stripe, PayPal, banca ta pentru procesarea
          plăților securizate.
        </List.Item>
        <List.Item>
          Parteneri de infrastructură – Furnizori de servere și centre de date
          pentru livrarea serviciilor VPS.
        </List.Item>
        <List.Item>
          Autorități legale – Dacă este necesar prin lege sau printr-o cerere
          oficială.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Toți partenerii noștri respectă regulamentele GDPR pentru protecția
        datelor.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Cât timp păstrăm datele?
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Datele sunt păstrate doar atât timp cât este necesar pentru:
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Oferirea serviciilor noastre (pe durata activității contului tău).
        </List.Item>
        <List.Item>
          Respectarea obligațiilor legale și fiscale (de ex. facturile se
          păstrează 5 ani).
        </List.Item>
        <List.Item>
          Rezolvarea disputelor și aplicarea termenilor și condițiilor.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        După această perioadă, datele sunt șterse sau anonimizate.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Drepturile tale asupra datelor personale
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Conform GDPR, ai următoarele drepturi:
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Dreptul de acces – Poți solicita o copie a datelor colectate despre
          tine.
        </List.Item>
        <List.Item>
          Dreptul la rectificare – Poți cere corectarea datelor incorecte.
        </List.Item>
        <List.Item>
          Dreptul la ștergere („dreptul de a fi uitat”) – Poți solicita
          ștergerea datelor tale.
        </List.Item>
        <List.Item>
          Dreptul la restricționarea procesării – Poți limita utilizarea datelor
          tale în anumite condiții.
        </List.Item>
        <List.Item>
          Dreptul la portabilitate – Poți primi datele într-un format
          structurat.
        </List.Item>
        <List.Item>
          Dreptul de a te opune – Poți refuza utilizarea datelor tale pentru
          marketing direct.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Pentru a-ți exercita drepturile, ne poți contacta la [email de contact].
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Cum protejăm datele tale?
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Luăm măsuri stricte pentru a proteja datele utilizatorilor:
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Criptare SSL – Toate datele transmise între tine și serverele noastre
          sunt criptate.
        </List.Item>
        <List.Item>
          Autentificare securizată – Suport pentru autentificare în doi pași
          (2FA).
        </List.Item>
        <List.Item>
          Monitorizare 24/7 – Protecție împotriva atacurilor cibernetice și
          tentativelor de acces neautorizat.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Dacă suspectezi o breșă de securitate, te rugăm să ne contactezi
        imediat.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Transferul datelor în afara UE
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Dacă datele tale sunt procesate de furnizori din afara UE (de exemplu,
        servicii cloud), ne asigurăm că aceștia respectă standardele GDPR prin
        acorduri de protecție a datelor.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Modificări ale politicii de confidențialitate
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Ne rezervăm dreptul de a actualiza această politică periodic. Orice
        modificare majoră va fi anunțată prin notificări pe website sau prin
        e-mail.
      </Text>

      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Acceptarea modificărilor: Continuarea utilizării serviciilor după o
        actualizare a termenilor reprezintă acceptarea noilor condiții.
      </Text>
    </Container>
  );
};

export default Confidentiality;
