import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding-left: 50px;
	margin-bottom: 20px;
	h1 {
		font-size: ${({ theme }) => theme.fontSizes.subTitleSize};
		font-weight: 400;
	}
	span {
		font-size: ${({ theme }) => theme.fontSizes.xl};
		font-weight: 300;
	}
`

const CommentHeader = () => {
	return (
		<Container>
			<h1>댓글</h1>
			<span>총 4개의 댓글이 있어요!</span>
		</Container>
	)
}

export default CommentHeader
