import styled from '@emotion/styled'

const TransactionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h3 {
    margin-bottom: 20px;
  }
`

const TransactionsBox = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
`

export { TransactionsContainer, TransactionsBox }
