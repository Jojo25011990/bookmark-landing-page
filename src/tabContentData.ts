import image1 from "./assets/illustration-features-tab-1.svg";
import image2 from "./assets/illustration-features-tab-2.svg";
import image3 from "./assets/illustration-features-tab-3.svg";

const tabContentData: {
	id: number;
	title: string;
	message: string;
	image: string;
}[] = [
	{
		id: 1,
		title: "Bookmark in one click",
		message:
			"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
		image: image1,
	},
	{
		id: 2,
		title: "Intelligent search",
		message:
			"Our powerful search feature will help you find saved sites in no time at all. No need to  trawl through all of your bookmarks.",
		image: image2,
	},
	{
		id: 3,
		title: "Share your bookmarks",
		message:
			"Easily share your bookmarks and collections with others. Create a shareable link that you can sned at the click of a button.",
		image: image3,
	},
];

export default tabContentData;
