import * as G from "../style/GlobalStyle";
import * as B from "../style/ButtonStyle";
import arrow from "../img/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png";
import alarm from "../img/notifications_FILL0_wght400_GRAD0_opsz48.png";
import { color } from "../style/Color";
//https://tilnote.io/pages/623eefea74b8f48522c984a5

function Button() {
	const FirstAlertButton = () => {
		alert("버튼을 만들어 보세요");
	};

	const promptButton = () => {
		if (window.prompt("어렵나요?")) {
		}
	};

	const ButtonInner = (
		<>
			<B.ButtonText>{"Large Primary Button"}</B.ButtonText>
			<B.ButtonImg src={arrow} alt='arrow' />
		</>
	);

	const ButtonInner2 = (
		<>
			<B.ButtonText>{"Large Primary Button"}</B.ButtonText>
			<B.ButtonImg src={alarm} alt='alarm' />
		</>
	);

	return (
		<B.ButtonPartContainerStyle>
			<h1>Button</h1>
			<B.GreenButtonContainerStyle>
				<G.ButtonLargeStyle bordercolor={color.green} onClick={FirstAlertButton}>
					<B.ButtonInnerStyle children={ButtonInner} />
				</G.ButtonLargeStyle>

				<G.ButtonMediumStyle backgroundcolor={color.green} children={"Medium"} />
				<G.ButtonSmallStyle backgroundcolor={color.green} children={"Small"} />
			</B.GreenButtonContainerStyle>

			<B.RedButtonContainerStyle>
				<G.ButtonLargeStyle bordercolor={color.pink} buttoncolor='red' onClick={promptButton}>
					<B.ButtonInnerStyle children={ButtonInner2} />
				</G.ButtonLargeStyle>
				<G.ButtonMediumStyle backgroundcolor={color.pink} buttoncolor='red' children={"Medium"} />
				<G.ButtonSmallStyle backgroundcolor={color.pink} buttoncolor='red' children={"Small"} />
			</B.RedButtonContainerStyle>
		</B.ButtonPartContainerStyle>
	);
}

export default Button;
