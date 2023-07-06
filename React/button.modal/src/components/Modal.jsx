import React from "react";
import { useState } from "react";
import * as G from "../style/GlobalStyle";
import * as M from "../style/ModalStyle";
import * as B from "../style/ButtonStyle";
import { color } from "../style/Color";

function Modal() {
	const [fisrtModal, setFistModal] = useState(false);

	const openFirstModal = () => {
		setFistModal(true);
	};

	const closeFirstModal = () => {
		setFistModal(false);
	};

	const [secondModal, setSecondModal] = useState(false);

	const openSecondModal = () => {
		setSecondModal(true);
	};

	const closeSecondModal = () => {
		setSecondModal(false);
	};

	return (
		<M.ModalPartContainerStyle>
			<G.TitleStyle>{"Modal"}</G.TitleStyle>
			<M.AllTagStyle>
				<G.ButtonSmallStyle backgroundcolor={color.green} onClick={openFirstModal} children={"open modal"} />
				{fisrtModal && (
					<M.LargeModalStyle>
						<M.ModalFull opacity='0.8' />

						<M.ModalLargeBoxStyle type='ModalLarge'>
							<M.ModalNotificationStyle
								children={"닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요."}
							/>
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
					</M.LargeModalStyle>
				)}

				<G.ButtonLargeStyle
					bordercolor={color.pink}
					onClick={openSecondModal}
					buttoncolor='red'
					children={"open modal"}
				/>
				{secondModal && (
					<M.SmallModalStyle>
						<M.ModalFull opacity='0.8' />
						<M.ModalMediumBoxStyle type='ModalMedium'>
							<M.SmallModalInnerStyle>
								<M.ModalNotificationStyle
									children={
										<div>
											닫기 버튼 1개가 있고, <br />
											외부 영역을 누르면 모달이 닫혀요.
										</div>
									}
								/>
								<G.ButtonCircleStyle
									backgroundcolor={color.pink}
									buttoncolor='red'
									onClick={closeSecondModal}
									children={"x"}
								/>
							</M.SmallModalInnerStyle>
						</M.ModalMediumBoxStyle>
					</M.SmallModalStyle>
				)}
			</M.AllTagStyle>
		</M.ModalPartContainerStyle>
	);
}

export default Modal;
