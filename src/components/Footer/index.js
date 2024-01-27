"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<footer className="relative bg-blueGray-200 pt-8 pb-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap text-left lg:text-left">
					<div className="w-full lg:w-6/12 px-4">
						<h4 className="text-3xl fonat-semibold text-blueGray-700">
							Let&apos;s keep in touch!
						</h4>
						<h5 className="text-lg mt-0 mb-2 text-blueGray-600">
							Subscribe to our newsletter to get updates.
						</h5>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
				>
					<input
						{...register("email", { required: true, maxLength: 80 })}
						id="email"
						type="email"
						className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
						placeholder="Email Address"
					/>
					<input
						type="submit"
						className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
					/>
				</form>
				<div className="flex items-center mt-8">
					<a
						href={siteMetadata.linkedin}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Reach out to me via LinkedIn"
						target="_blank"
					>
						<LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
					</a>
					<a
						href={siteMetadata.twitter}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Reach out to me via Twitter"
						target="_blank"
					>
						<TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
					</a>
					<a
						href={siteMetadata.github}
						className="inline-block w-6 h-6 mr-4 fill-light"
						aria-label="Check my profile on Github"
						target="_blank"
					>
						<LuGithub
							className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200"
							size={21}
						/>
					</a>
					<a
						href={siteMetadata.dribbble}
						className="inline-block w-6 h-6 mr-4"
						aria-label="Check my profile on Dribbble"
						target="_blank"
					>
						<DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
					</a>
				</div>

				<hr className="my-6 border-gray-200 dark:border-gray-700" />

				<div className="flex items-center justify-between">
					<div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
						<span className="text-center">
							&copy;2023 | All Rights Reserved.
						</span>
						<div className="text-center">
							Made with &hearts; by{" "}
							<a href="" className="underline" target="_blank">
								a Developer
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
