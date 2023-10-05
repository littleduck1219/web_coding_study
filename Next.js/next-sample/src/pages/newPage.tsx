import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

type SSGprops = {
	message: string;
};

const SSG: NextPage<SSGprops> = (props) => {
	const { message } = props;
	return (
		<div>
			<Head>
				<title>Static Site</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<p>이 페이지는 정적 사이트 생성을 통해 빌드시 생성된 페이지 입니다.</p>
			</main>
		</div>
	);
};

export const getStaticProps: GetStaticProps<SSGprops> = async (context) => {
	const timestamp = new Date().toLocaleString();
	const message = `${timestamp}에 getStaticProps가 실행되었습니다`;
	console.log(message);
	return {
		props: {
			message,
		},
	};
};

export default SSG;
