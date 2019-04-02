import styled from '@emotion/styled'

const SaverContainer = styled.div`
  flex: 1;
  padding: 10px;

  h3 {
    margin-bottom: 20px;
  }
`

const SaverBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;

  span {
    margin-bottom: 20px;
    font-weight: 600;
  }

  h1 {
    font-weight: 500;
  }
`

const SaverButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  background-color: #7433ff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  transition: opacity 0.4s ease-in-out;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export { SaverContainer, SaverBox, SaverButton }
