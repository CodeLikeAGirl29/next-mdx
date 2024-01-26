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
		<footer className="bg-white dark:bg-gray-900">
			<div className="container px-6 py-12 mx-auto">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
					<div className="sm:col-span-2">
						<h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
							Subscribe to our newsletter to get updates.
						</h1>

						<div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"></div>
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
						<LuGithub className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
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

				<div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
					<span className="text-center">
						&copy;2023 CodeBucks. All rights reserved.
					</span>
					<Link
						href="/sitemap.xml"
						className="text-center underline my-4 md:my-0"
					>
						sitemap.xml
					</Link>
					<div className="text-center">
						Made with &hearts; by{" "}
						<a
							href="https://devdreaming.com"
							className="underline"
							target="_blank"
						>
							CodeBucks
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
