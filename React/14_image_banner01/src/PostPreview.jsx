import React from "react";
import styled from "styled-components";

function PostPreview({ images }) {
	const MAX_PREVIEW_IMAGES = 5;

	const getImageSize = (index, imagesLength) => {
		switch (Math.min(imagesLength, MAX_PREVIEW_IMAGES)) {
			case 1:
				return { gridColumnStart: 1, gridColumnEnd: 21, gridRowStart: 1, gridRowEnd: 21 };
			case 2:
				return index === 0
					? { gridColumnStart: 1, gridColumnEnd: 11, gridRowStart: 1, gridRowEnd: 21 }
					: { gridColumnStart: 11, gridColumnEnd: 21, gridRowStart: 1, gridRowEnd: 21 };
			case 3:
				return index === 0
					? { gridColumnStart: 1, gridColumnEnd: 11, gridRowStart: 1, gridRowEnd: 21 }
					: index === 1
					? {
							gridColumnStart: 11,
							gridColumnEnd: 21,
							gridRowStart: 1,
							gridRowEnd: 11,
					  }
					: {
							gridColumnStart: 11,
							gridColumnEnd: 21,
							gridRowStart: 11,
							gridRowEnd: 21,
					  };
			case 4:
				return {
					gridColumnStart: (index % 2) * 10 + 1,
					gridColumnEnd: (index % 2) * 10 + 11,
					gridRowStart: Math.floor(index / 2) * 10 + 1,
					gridRowEnd: Math.floor(index / 2) * 10 + 11,
				};
			case 5:
				return index < 2
					? {
							gridColumnStart: index * 10 + 1,
							gridColumnEnd: (index + 1) * 10 + 1,
							gridRowStart: 1,
							gridRowEnd: 11,
					  }
					: {
							gridColumnStart: (index - 2) * 7 + 1,
							gridColumnEnd: (index - 1) * 7 + 1,
							gridRowStart: 11,
							gridRowEnd: 21,
					  };
			default:
				return;
		}
	};

	return (
		<PreviewContainer moreThanFour={images.length > MAX_PREVIEW_IMAGES}>
			<ImageContainer>
				{images.slice(0, MAX_PREVIEW_IMAGES).map((image, index) => {
					const size = getImageSize(index, images.length);
					return (
						<PreviewImage
							key={index}
							src={image}
							alt={`Image ${index}`}
							gridColumnStart={size.gridColumnStart}
							gridColumnEnd={size.gridColumnEnd}
							gridRowStart={size.gridRowStart}
							gridRowEnd={size.gridRowEnd}
						/>
					);
				})}
			</ImageContainer>
			{images.length > MAX_PREVIEW_IMAGES && <MoreImages>{images.length}장의 이미지</MoreImages>}
		</PreviewContainer>
	);
}

export default PostPreview;

const PreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
	height: auto;
`;

const ImageContainer = styled.div`
	display: grid;
	height: 250px;
	grid-template-columns: repeat(20, 1fr);
	grid-template-rows: repeat(20, 1fr);
	border-radius: 9px;
	overflow: hidden;
`;

const PreviewImage = styled.div`
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-position: center;

	grid-column-start: ${(props) => props.gridColumnStart || "auto"};
	grid-column-end: ${(props) => props.gridColumnEnd || "auto"};
	grid-row-start: ${(props) => props.gridRowStart || "auto"};
	grid-row-end: ${(props) => props.gridRowEnd || "auto"};
`;

const MoreImages = styled.div`
	// 필요한 스타일을 여기에 추가하세요.
`;
