import { Container, Links, Content } from "./style.js";

import { Button } from '../../components/Buttons/index.jsx'
import { MyHeader } from "../../components/Hearder/index.jsx";
import { Section } from "../../components/Sections/index.jsx";
import { Tag } from "../../components/tags/index.jsx";
import { ButtonTxt } from "../../components/ButtonText/index.jsx";
function Details() {
  const content="Lourem ipson tyukm".repeat(50);
  return (
    <Container>
      <MyHeader />
      <main>
        <Content>
          <ButtonTxt title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.linkedin.com/in/miguel-nanga-manuel-078616233/</a></li>
              <li><a href="#">https://www.linkedin.com/in/miguel-nanga-manuel-078616233/</a></li>
            </Links>
          </Section>


          <Section title="Marcadores">
            <Tag title="NodeJS"></Tag><Tag title="Express"></Tag>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}


export { Details };