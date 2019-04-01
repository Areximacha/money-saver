import styled from '@emotion/styled'

const TransactionCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: row;

  h4 {
    font-weight: 600;
  }
`

const TransactionLeft = styled.div`
  flex-grow: 3;
`

const TransactionRight = styled.div`
  flex-grow: 1;
  text-align: right;
`

export { TransactionCard, TransactionLeft, TransactionRight }
