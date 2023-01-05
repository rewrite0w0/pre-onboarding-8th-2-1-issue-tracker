import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;
`;

const App = () => {
  return (
    <article>
      <input type="text" />
      <Wrapper>
        <section>
          <header>예정</header>
          <body>123</body>
        </section>
        <section>
          <header>진행중</header>
          <main>123</main>
        </section>
        <section>
          <header>완료</header>
          <main>q</main>
        </section>
      </Wrapper>
    </article>
  );
};

export default App;
