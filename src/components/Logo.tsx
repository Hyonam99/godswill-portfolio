const Logo = () => {
	return (
		<div className="flex items-center gap-4">
			<img
				src={"/static-images/geed-logo-transparent.svg"}
				className="w-16 h-16"
				alt="geed-logo"
			/>
			<div className="flex flex-col">
				<p className="font-bold text-lg">Product Manager</p>
				<p className="font-light text-sm">Godswill Udoh</p>
			</div>
		</div>
	);
};

export default Logo;
