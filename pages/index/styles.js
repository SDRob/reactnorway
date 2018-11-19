import styled from 'styled-components';

export const Outer = styled.div`
  margin-bottom: 30px;
  background-color: #D1328B;
`;


//FIRST ROW - ROW #1////FIRST ROW - ROW #1////FIRST ROW - ROW #1//
	export const Wrapper1 = styled.div`
		display: grid;
		grid-gap: 1em;
		grid-template-columns: repeat(6, 1fr);
		color: white;
	`;

	export const DudeIMG = styled.img`
		grid-column: 2/ span 2;
		grid-row: 1/ span 5;
	`;

	export const ReactDayBox = styled.div`
		grid-column: 4/ span 2;
		grid-row: 1/ span 5;
	`;

	export const ReactIMG = styled.img`
		width: 15%;
		height: auto;
	`;

	export const DateSaver = styled.button`
		background-color: #74C0B3;
		border-radius: 1em;
		padding: 0.6em 2.3em;
		text-align: center;
		display: inline-block;
		font-size: 0.8em;
		text-shadow: -1px -1px 0 #64B0A3,
			1px -1px 0 #64B0A3,
			-1px 1px 0 #64B0A3,
			1px 1px 0 #64B0A3;
	`;

//FIRST ROW - ROW #1////FIRST ROW - ROW #1////FIRST ROW - ROW #1//


//SECOND ROW - ROW #2////SECOND ROW - ROW #2////SECOND ROW - ROW #2//

	export const Blob1 = styled.img`
		grid-column: 1/ span 6;
		grid-row: 2/ span 6;
	`;

	export const DescriptionTitle = styled.h1`
		grid-column: 2/ span 2;
		grid-row: 6;
		font-size: 2.5em;
		text-align: center;
		line-height: 1.5;
	`;

	export const DescriptionIMG = styled.img`
		grid-column: 2/ span 2;
		grid-row: 7;
	`;

	export const DescriptionText = styled.p`
		grid-column: 4/ span 3;
		grid-row: 7;
		padding-right: 3em;
		line-height: 1.25;
	`;

//SECOND ROW - ROW #2////SECOND ROW - ROW #2////SECOND ROW - ROW #2//


//THIRD ROW - ROW #3////THIRD ROW - ROW #3////THIRD ROW - ROW #3//
	export const SpeakerWrapper = styled.div`
		grid-column: span 2;
		display: grid;
		grid-template-columns: 1fr;
		> * {margin-bottom: 1em;}
	`;

	export const SpeakerIMG = styled.img`
		grid-row: span 3;
	`;
//THIRD ROW - ROW #3////THIRD ROW - ROW #3////THIRD ROW - ROW #3//


//FOURTH ROW - ROW #4////FOURTH ROW - ROW #4////FOURTH ROW - ROW #4//
	
	export const Wrapper3 = styled.div`
		display: grid;
		grid-gap: 1em;
		grid-template-columns: repeat(2, 1fr);
		color: white;
	`;

	export const LocationTitle = styled.h1`
		font-size: 2.5em;
		vertical-align: bottom;
		text-align: right;
		grid-column: 2;
		grid-row: 3;
		bottom: 0;
		padding-right: 1em;
	`;

	export const LocationIMG = styled.img`
		padding: 3em;
		grid-column: 1;
		grid-row: 4;
	`;

	export const LocationText = styled.p`
		grid-column: 2;
		grid-row: 4;
		text-align: right;
		line-height: 1.25;
		padding: 3em;
	`;

	export const Blob2 = styled.img`
		grid-column: 1/ span 2;
		grid-row: 1/ span 5;
		padding: 0;
	`;

//FOURTH ROW - ROW #4////FOURTH ROW - ROW #4////FOURTH ROW - ROW #4//


//FIFTH ROW - ROW #5////FIFTH ROW - ROW #5////FIFTH ROW - ROW #5//
	export const Wrapper4 = styled.div`
		display: grid;
		grid-gap: 1em;
		grid-template-columns: repeat(8, 1fr);
		color: white;
	`;

	export const SponsorTitle = styled.h1`
		font-size: 2.5em;
		color: white;
		padding-left: 1em;
	`;

	export const SponsorSubTitle = styled.p`
		color: white;
		padding-left: 3em;
	`;

	export const SponsorIMG = styled.img`
		grid-column: span 2;
	`;

//FIFTH ROW - ROW #5////FIFTH ROW - ROW #5////FIFTH ROW - ROW #5//


//SIXTH ROW - ROW #6////SIXTH ROW - ROW #6////SIXTH ROW - ROW #6//
	
	export const Wrapper5 = styled.div`
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		color: white;
		text-shadow: -1px -1px 0 #64B0A3,
			1px -1px 0 #64B0A3,
			-1px 1px 0 #64B0A3,
			1px 1px 0 #64B0A3;
	`;

	export const FooterText = styled.div`
		grid-column: 2/ span 5;
		grid-row: 3;
		line-height: 2;
	`;

	export const Blob3 = styled.img`
		grid-column: 1/ span 7;
		grid-row: 1/ span 4;
	`;

//SIXTH ROW - ROW #6////SIXTH ROW - ROW #6////SIXTH ROW - ROW #6//