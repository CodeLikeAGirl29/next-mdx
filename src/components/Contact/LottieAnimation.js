"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
	return (
		<DotLottiePlayer
			src="https://lottie.host/e1947c91-bf88-4f7e-abfe-245d55aea594/bGsE9umcwD.lottie"
			autoplay
			loop
		></DotLottiePlayer>
	);
};

export default LottieAnimation;
