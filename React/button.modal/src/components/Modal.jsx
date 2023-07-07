import React from "react";
import { useState } from "react";
import * as G from "../style/GlobalStyle";
import * as M from "../style/ModalStyle";
import * as B from "../style/ButtonStyle";
import { color } from "../style/Color";

function Modal() {
	const [firstModal, setFirstModal] = useState(false);

	const openFirstModal = () => {
		setFirstModal(true);
	};

	const closeFirstModal = () => {
		setFirstModal(false);
	};

	const [secondModal, setSecondModal] = useState(false);

	const openSecondModal = () => {
		setSecondModal(true);
	};

	const closeSecondModal = () => {
		setSecondModal(false);
	};

	return (
		<div>
			<h1>{"Modal"}</h1>
			<M.AllTagStyle>
				<G.ButtonSmallStyle backgroundcolor={color.green} onClick={openFirstModal} children={"open modal"} />
				{firstModal && (
					<div>
						<M.ModalFull opacity='0.8' />

						<M.ModalLargeBoxStyle type='ModalLarge'>
							<span>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</span>
							<M.LargeModalButtonContainerStyle>
								<G.ButtonSmallStyle
									backgroundcolor={color.pink}
									buttoncolor='red'
									onClick={closeFirstModal}
									children={"닫기"}
								/>
								<G.ButtonSmallStyle backgroundcolor={color.green} children={"확인"} />
							</M.LargeModalButtonContainerStyle>
						</M.ModalLargeBoxStyle>
					</div>
				)}

				<G.ButtonLargeStyle
					bordercolor={color.pink}
					onClick={openSecondModal}
					buttoncolor='red'
					children={"open modal"}
				/>
				{secondModal && (
					<div>
						<M.ModalFull opacity='0.8' onClick={closeSecondModal} />
						<M.ModalMediumBoxStyle type='ModalMedium'>
							<M.SmallModalInnerStyle>
								<span>
									닫기 버튼 1개가 있고, <br />
									외부 영역을 누르면 모달이 닫혀요.
								</span>
								<G.ButtonCircleStyle
									backgroundcolor={color.pink}
									buttoncolor='red'
									onClick={closeSecondModal}
									children={"x"}
								/>
							</M.SmallModalInnerStyle>
						</M.ModalMediumBoxStyle>
					</div>
				)}
			</M.AllTagStyle>
		</div>
	);
}

export default Modal;
