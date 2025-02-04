import { Container, List, Text } from "@mantine/core";
import font from "../shared/modules/Typography.module.css";
import css from "./Terms.module.css";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Text mt={50} mb={30} className={`${font.T1} ${css.Title}`}>
        Termeni <span className={css.TitleSpan}>și</span> Condiții
      </Text>
      <Text className={`${font.Body} ${css.Paragraph}`}>
        Bine ai venit pe website-ul nostru! Acest document stabilește termenii
        și condițiile de utilizare a serviciilor noastre de cloud hosting și
        servere VPS. Prin accesarea și utilizarea acestui website, ești de acord
        să respecți termenii și condițiile prezentate mai jos. Dacă nu ești de
        acord cu acestea, te rugăm să nu utilizezi serviciile noastre.Website-ul
        și serviciile oferite sunt administrate de [Numele Companiei], denumit
        în continuare „Furnizorul”, având sediul în [Adresa companiei],
        înregistrată sub [CUI / Nr. Registrul Comerțului].
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Definiții
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        În cadrul acestui document, termenii de mai jos au următoarele
        înțelesuri:
      </Text>
      <List mb={30} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Furnizor – Compania care oferă servicii de găzduire cloud, servere VPS
          și alte soluții conexe.
        </List.Item>
        <List.Item>
          Utilizator – Orice persoană fizică sau juridică ce accesează și
          utilizează serviciile oferite de Furnizor.
        </List.Item>
        <List.Item>
          Servicii – Orice soluție de găzduire cloud, servere VPS, spațiu de
          stocare, infrastructură IT și servicii conexe oferite de Furnizor.
        </List.Item>
        <List.Item>
          Cont de utilizator – Profilul creat de utilizator pe platforma noastră
          pentru a accesa și administra serviciile achiziționate.
        </List.Item>
        <List.Item>
          Uptime – Disponibilitatea serviciului, exprimată ca procentaj din
          totalul timpului într-o lună .
        </List.Item>
      </List>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Condiții de utilizare
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Eligibilitate: Pentru a utiliza serviciile noastre, trebuie să ai vârsta
        minimă de 18 ani sau să reprezinți o entitate juridică legal
        înregistrată.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Respectarea legilor: Serviciile noastre nu pot fi utilizate pentru
        activități ilegale, frauduloase sau care încalcă drepturile de
        proprietate intelectuală ale altor persoane.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Este strict interzisă utilizarea serverelor noastre pentru:
      </Text>
      <List mb={20} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Distribuirea de conținut ilegal sau dăunător (malware, phishing,
          hacking, spam).
        </List.Item>
        <List.Item>
          Stocarea sau distribuirea de conținut protejat de drepturi de autor
          fără permisiune.
        </List.Item>
        <List.Item>
          Utilizarea resurselor într-un mod care afectează stabilitatea rețelei
          și experiența altor utilizatori.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Securitatea contului: Utilizatorul este responsabil pentru păstrarea
        confidențialității datelor de autentificare și orice activitate
        desfășurată în contul său.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Crearea și administrarea contului
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Înregistrare: Pentru a accesa anumite servicii, utilizatorul trebuie să
        își creeze un cont, oferind informații reale și complete.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Suspendarea și închiderea contului: Furnizorul își rezervă dreptul de a
        suspenda sau închide conturile care încalcă acești termeni, fără
        notificare prealabilă.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Ștergerea contului: Utilizatorii pot solicita ștergerea contului în
        orice moment, contactând echipa de suport.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Plăți, facturare și rambursări
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Metode de plată: Acceptăm plăți prin card de credit, transfer bancar și
        alte metode specificate pe website.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Frecvența plăților: Serviciile pot fi achiziționate pe bază de abonament
        lunar, anual sau prin plată unică, conform opțiunilor disponibile.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Politica de rambursare:
      </Text>
      <List mb={20} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Oferim garanție de 30 de zile money-back pentru anumite servicii.
        </List.Item>
        <List.Item>
          Rambursările nu se aplică în cazul utilizării abuzive sau încălcării
          termenilor.
        </List.Item>
        <List.Item>
          După perioada de 30 de zile, plățile efectuate nu sunt returnabile.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Suspendarea serviciului pentru neplată: Dacă un serviciu nu este achitat
        la timp, acesta poate fi suspendat sau șters după [număr de zile] de la
        data scadentă.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Disponibilitatea și suportul tehnic
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Uptime garantat: Ne angajăm să oferim un uptime de 99.9% pe lună pentru
        serviciile noastre.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Mentenanță programată: Ocazional, pot exista lucrări de mentenanță, iar
        utilizatorii vor fi anunțați în prealabil, atunci când este posibil.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Suport tehnic:
      </Text>
      <List mb={20} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>
          Suportul tehnic este disponibil prin email / chat live / telefon,
          conform programului afișat pe website.
        </List.Item>
        <List.Item>
          Problemele tehnice critice sunt tratate cu prioritate.
        </List.Item>
      </List>

      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Limitarea răspunderii
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Furnizorul nu este responsabil pentru:
      </Text>
      <List mb={20} className={`${font.Body} ${css.Paragraph}`}>
        <List.Item>Pierderi de date cauzate de utilizator sau terți.</List.Item>
        <List.Item>
          Probleme cauzate de furnizori terți (ex. rețele externe, software
          terț).
        </List.Item>
        <List.Item>
          Orice daune indirecte rezultate din utilizarea serviciilor.
        </List.Item>
      </List>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Forță majoră: Furnizorul nu este responsabil pentru întreruperi cauzate
        de evenimente imprevizibile (dezastre naturale, atacuri cibernetice
        majore etc.).
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Protecția datelor și confidențialitate
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Colectarea datelor: Informațiile utilizatorilor sunt colectate și
        procesate conform Politicii de Confidențialitate.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Drepturile utilizatorilor: Ai dreptul de a solicita acces la datele
        tale, rectificarea acestora sau ștergerea din sistemul nostru.
      </Text>
      <Text
        mt={50}
        mb={20}
        ta="start"
        className={`${font.T3} ${css.Paragraph}`}
      >
        Modificarea termenilor și condițiilor
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Actualizări periodice: Ne rezervăm dreptul de a modifica acest document,
        iar utilizatorii vor fi informați prin notificări pe website sau prin
        e-mail.
      </Text>
      <Text mb={20} ta="start" className={`${font.Body} ${css.Paragraph}`}>
        Acceptarea modificărilor: Continuarea utilizării serviciilor după o
        actualizare a termenilor reprezintă acceptarea noilor condiții.
      </Text>
    </Container>
  );
};

export default Terms;
