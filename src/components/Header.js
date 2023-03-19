import styled from 'styled-components'

const Caixa = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`
const Retangulo = styled.section`
  width: 500px;
  height: 300px;
  background-color: red;
`
const Link = styled.a`
  color: white;
`

function Header() {
  return (
    <>
      <Retangulo>
        <Caixa>
          <Link href="https://www.google.com.br" target="_blank">Lorem Ipsum</Link>
        </Caixa>
      </Retangulo>
    </>

  )
}

export default Header