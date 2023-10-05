import React, { useState } from "react";

const SummaryPage = () => {
	const [checked, setChecked] = useState(false);

	return (
		<div>
			<from>
				<input
					type='checkbox'
					checked={checked}
					id='confirm-checkbox'
					onClick={(e) => setChecked(e.target.checked)}
				/>
				<label htmlFor='confirm-checkbox'>주문하려는 것을 확인하셨나요?</label>
				<br />
				<button type='submit' disabled={!checked}>
					주문확인
				</button>
			</from>
		</div>
	);
};

export default SummaryPage;
